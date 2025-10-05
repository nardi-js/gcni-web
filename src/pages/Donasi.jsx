import { Link } from 'react-router-dom';
import { useState } from 'react';
import donationData, {
  formatCurrency,
  formatNumber,
  validateDonationAmount,
  validateDonorInfo,
  getPaymentMethodById,
  getPaymentColorClasses,
  getImpactColorClasses,
  cleanInputNumber,
  formatInputCurrency,
  generateDonationReceipt
} from '../data/donationData';

const Donasi = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [receipt, setReceipt] = useState(null);

  // Handle amount button click
  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(formatNumber(amount));
  };

  // Handle custom amount input
  const handleCustomAmountChange = (e) => {
    const formatted = formatInputCurrency(e.target.value);
    setCustomAmount(formatted);
    const amount = cleanInputNumber(e.target.value);
    setSelectedAmount(amount);
  };

  // Handle payment method selection
  const handlePaymentMethodClick = (methodId) => {
    setSelectedPayment(methodId);
  };

  // Handle donor info change
  const handleDonorInfoChange = (e) => {
    const { name, value } = e.target;
    setDonorInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Navigate to next step
  const handleNextStep = () => {
    if (currentStep === 1) {
      const validation = validateDonationAmount(selectedAmount);
      if (!validation.valid) {
        alert(validation.message);
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      const validation = validateDonorInfo(donorInfo);
      if (!validation.valid) {
        const errorMessages = Object.values(validation.errors).join('\n');
        alert(errorMessages);
        return;
      }
      if (!selectedPayment) {
        alert('Mohon pilih metode pembayaran');
        return;
      }
      setCurrentStep(3);
    } else if (currentStep === 3) {
      // Generate receipt
      const newReceipt = generateDonationReceipt({
        ...donorInfo,
        amount: selectedAmount,
        paymentMethod: selectedPayment
      });
      setReceipt(newReceipt);
      setCurrentStep(4);
    }
  };

  // Navigate to previous step
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Get indicator class
  const getIndicatorClass = (step) => {
    if (step < currentStep) {
      return 'w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold';
    } else if (step === currentStep) {
      return 'w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-semibold';
    } else {
      return 'w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold';
    }
  };

  // Render payment instructions
  const renderPaymentInstructions = () => {
    const method = getPaymentMethodById(selectedPayment);
    if (!method) return null;

    if (method.id === 'bank') {
      return (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Transfer Bank</h3>
          <div className="space-y-4 md:space-y-6">
            {method.accounts.map((account, index) => (
              <div key={index} className="border rounded-xl p-4 md:p-6">
                <h4 className="font-semibold text-base md:text-lg mb-2 md:mb-3">{account.bank}</h4>
                <p className="text-sm md:text-base text-gray-600 mb-1">
                  No. Rekening: <span className="font-mono font-bold text-base md:text-lg break-all">{account.accountNumber}</span>
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  Atas Nama: <span className="font-bold">{account.accountName}</span>
                </p>
              </div>
            ))}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 md:p-4">
              <p className="text-yellow-800 text-center text-sm md:text-base">
                <i className="fas fa-info-circle mr-2"></i>
                Total Transfer: <span className="font-bold text-lg md:text-xl">{formatCurrency(selectedAmount)}</span>
              </p>
            </div>
          </div>
        </div>
      );
    } else if (method.id === 'ewallet') {
      return (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">E-Wallet</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
            {method.wallets.map((wallet, index) => {
              const colors = getPaymentColorClasses(wallet.color);
              return (
                <div key={index} className="border rounded-xl p-4 text-center">
                  <div className={`w-10 h-10 md:w-12 md:h-12 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-2`}>
                    <i className={`${wallet.icon} ${colors.icon} text-lg md:text-xl`}></i>
                  </div>
                  <h4 className="font-semibold text-sm md:text-base">{wallet.name}</h4>
                  <p className="text-xs md:text-sm text-gray-600 break-all">{wallet.number}</p>
                </div>
              );
            })}
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-3 md:p-4">
            <p className="text-green-800 text-center text-sm md:text-base">
              <i className="fas fa-info-circle mr-2"></i>
              Total Transfer: <span className="font-bold text-lg md:text-xl">{formatCurrency(selectedAmount)}</span>
            </p>
          </div>
        </div>
      );
    } else if (method.id === 'qris') {
      return (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">QRIS Payment</h3>
          <div className="text-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gray-200 rounded-xl mx-auto mb-4 md:mb-6 flex items-center justify-center">
              <i className="fas fa-qrcode text-4xl sm:text-5xl md:text-6xl text-gray-400"></i>
            </div>
            <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 px-4">Scan QR Code dengan aplikasi mobile banking atau e-wallet Anda</p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 md:p-4">
              <p className="text-blue-800 text-sm md:text-base">
                <i className="fas fa-info-circle mr-2"></i>
                Total Pembayaran: <span className="font-bold text-lg md:text-xl">{formatCurrency(selectedAmount)}</span>
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 lg:pb-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-heart text-5xl text-white"></i>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 gradient-text">
            Berdonasi
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-teal-100 max-w-3xl mx-auto px-4">
            Bantu kami mewujudkan pendidikan Islam berkualitas untuk generasi Qur'ani yang berakhlak mulia
          </p>
        </div>
      </section>

      {/* Progress Indicator */}
      <div className="bg-white shadow-md border-b sticky top-[79px] z-40 h-16">
        <div className="container mx-auto px-2 md:px-4 h-full flex items-center">
          <div className="flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-3 overflow-x-auto w-full">
            <div className="flex items-center flex-shrink-0">
              <div className={getIndicatorClass(1)}>1</div>
              <span className="ml-1 text-[10px] sm:text-xs font-medium text-gray-700">Nominal</span>
            </div>
            <div className="w-3 sm:w-4 md:w-8 h-0.5 bg-gray-300 flex-shrink-0"></div>
            <div className="flex items-center flex-shrink-0">
              <div className={getIndicatorClass(2)}>2</div>
              <span className="ml-1 text-[10px] sm:text-xs font-medium text-gray-700">Bayar</span>
            </div>
            <div className="w-3 sm:w-4 md:w-8 h-0.5 bg-gray-300 flex-shrink-0"></div>
            <div className="flex items-center flex-shrink-0">
              <div className={getIndicatorClass(3)}>3</div>
              <span className="ml-1 text-[10px] sm:text-xs font-medium text-gray-700">Info</span>
            </div>
            <div className="w-3 sm:w-4 md:w-8 h-0.5 bg-gray-300 flex-shrink-0"></div>
            <div className="flex items-center flex-shrink-0">
              <div className={getIndicatorClass(4)}>4</div>
              <span className="ml-1 text-[10px] sm:text-xs font-medium text-gray-700">Done</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step 1: Choose Amount */}
      {currentStep === 1 && (
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Berdonasi untuk Pendidikan Islam
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 px-4">
                Mari bersama membangun generasi Qur'ani yang berakhlak mulia dan cerdas
              </p>

              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Pilih Nominal Donasi</h3>
                
                {/* Predefined Amounts */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
                  {donationData.amounts.map((item) => (
                    <button
                      key={item.value}
                      onClick={() => handleAmountClick(item.value)}
                      className={`py-3 md:py-4 px-4 md:px-6 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 ${
                        selectedAmount === item.value
                          ? 'bg-teal-50 border-2 border-teal-600 text-teal-700'
                          : 'bg-white border-2 border-gray-200 hover:border-teal-600 text-gray-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-6 md:mb-8">
                  <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-2 text-left px-1">
                    Atau masukkan nominal lain:
                  </label>
                  <input
                    type="text"
                    id="custom-amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder={`Min. ${formatCurrency(donationData.minAmount)}`}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none text-center text-base md:text-lg font-semibold"
                  />
                </div>

                {/* Donation Purpose */}
                <div className="mb-6 md:mb-8 text-left">
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Donasi Anda akan digunakan untuk:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {donationData.purposes.map((purpose, index) => (
                      <div key={index} className="flex items-start">
                        <i className={`fas ${purpose.icon} text-teal-600 mt-1 mr-3 flex-shrink-0`}></i>
                        <span className="text-sm md:text-base text-gray-600">{purpose.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleNextStep}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 md:py-4 px-6 md:px-8 rounded-xl font-semibold text-sm md:text-base transition-all duration-300"
                >
                  Lanjutkan ke Metode Pembayaran
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 2: Payment Method */}
      {currentStep === 2 && (
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Pilih Metode Pembayaran</h3>
                
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {donationData.paymentMethods.map((method) => {
                    const colors = getPaymentColorClasses(method.color);
                    return (
                      <button
                        key={method.id}
                        onClick={() => handlePaymentMethodClick(method.id)}
                        className={`w-full p-4 md:p-6 border-2 rounded-xl transition-all duration-300 text-left ${
                          selectedPayment === method.id
                            ? 'border-teal-600 bg-teal-50'
                            : 'border-gray-200 hover:border-teal-600'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`w-10 h-10 md:w-12 md:h-12 ${colors.bg} rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0`}>
                            <i className={`fas ${method.icon} ${colors.icon} text-lg md:text-xl`}></i>
                          </div>
                          <div>
                            <h4 className="text-base md:text-lg font-semibold text-gray-900">{method.name}</h4>
                            <p className="text-sm md:text-base text-gray-600">{method.description}</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Donor Info Form */}
                <form className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={donorInfo.name}
                      onChange={handleDonorInfoChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={donorInfo.email}
                      onChange={handleDonorInfoChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      No. Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={donorInfo.phone}
                      onChange={handleDonorInfoChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan (Opsional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={donorInfo.message}
                      onChange={handleDonorInfoChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none text-sm md:text-base resize-none"
                    ></textarea>
                  </div>
                </form>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={handlePrevStep}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 md:py-4 px-6 md:px-8 rounded-xl font-semibold text-sm md:text-base transition-all duration-300"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={handleNextStep}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 md:py-4 px-6 md:px-8 rounded-xl font-semibold text-sm md:text-base transition-all duration-300"
                  >
                    Lanjutkan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 3: Payment Instructions */}
      {currentStep === 3 && (
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Instruksi Pembayaran</h2>
                <p className="text-sm md:text-base text-gray-600">Silakan lakukan pembayaran sesuai instruksi di bawah ini</p>
              </div>

              {renderPaymentInstructions()}

              <div className="mt-6 md:mt-8">
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={handlePrevStep}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 md:py-4 px-6 md:px-8 rounded-xl font-semibold text-sm md:text-base transition-all duration-300"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={handleNextStep}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 md:py-4 px-6 md:px-8 rounded-xl font-semibold text-sm md:text-base transition-all duration-300"
                  >
                    Sudah Transfer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 4: Success */}
      {currentStep === 4 && receipt && (
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <div className="text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <i className="fas fa-check text-3xl md:text-4xl text-green-600"></i>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Terima Kasih!</h2>
                  <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 px-2">
                    Donasi Anda sebesar <span className="font-bold text-teal-600">{formatCurrency(selectedAmount)}</span>
                    {' '}sangat berarti bagi pendidikan para santri GCNI.
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-4 md:p-6 mb-6 md:mb-8">
                    <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Detail Donasi</h3>
                    <div className="space-y-2 text-left text-sm md:text-base">
                      <p className="break-words"><span className="font-medium">Nama:</span> {receipt.donorName}</p>
                      <p className="break-all"><span className="font-medium">Email:</span> {receipt.donorEmail}</p>
                      <p><span className="font-medium">Nominal:</span> {formatCurrency(receipt.amount)}</p>
                      <p><span className="font-medium">Metode:</span> {receipt.paymentMethod}</p>
                      <p className="break-all"><span className="font-medium">No. Bukti:</span> <span className="font-mono text-xs md:text-sm">{receipt.receiptNumber}</span></p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                    <Link
                      to="/"
                      className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-6 md:px-8 py-3 rounded-xl font-semibold text-sm md:text-base transition-all"
                    >
                      <i className="fas fa-home mr-2"></i>
                      Kembali ke Beranda
                    </Link>
                    <Link
                      to="/program"
                      className="inline-flex items-center justify-center bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 md:px-8 py-3 rounded-xl font-semibold text-sm md:text-base transition-all"
                    >
                      <i className="fas fa-graduation-cap mr-2"></i>
                      Lihat Program Kami
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Impact Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-12 lg:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Kemana Donasi Anda Disalurkan?</h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 px-4">Donasi Anda akan digunakan untuk mendukung berbagai program dan pengembangan GCNI</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {donationData.impact.map((item, index) => {
                const colors = getImpactColorClasses(item.color);
                return (
                  <div
                    key={index}
                    className={`text-center ${colors.bg} rounded-2xl p-5 md:p-6`}
                   
                   
                  >
                    <div className={`w-14 h-14 md:w-16 md:h-16 ${colors.iconBg} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4`}>
                      <i className={`fas ${item.icon} text-xl md:text-2xl text-white`}></i>
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-bold ${colors.text} mb-2`}>{item.count}</h3>
                    <p className="text-sm md:text-base text-gray-600">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donasi;
