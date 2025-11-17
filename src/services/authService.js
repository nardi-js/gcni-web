import { 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, googleProvider, db } from '../firebase/config';

// Super Admin Whitelist (Email yang selalu bisa akses)
const SUPER_ADMINS = [
  'gcnigroup@gmail.com',  // 👈 GANTI DENGAN EMAIL KAMU
  // 'admin2@example.com',  // Bisa tambah lebih banyak
];

/**
 * Check apakah user adalah admin
 * Priority: 1. Super Admin (hardcoded) → 2. Firestore admins collection
 */
export const checkAdminAccess = async (email) => {
  try {
    // 1. Check Super Admin
    if (SUPER_ADMINS.includes(email.toLowerCase())) {
      return { 
        isAdmin: true, 
        role: 'super-admin',
        message: 'Super Admin Access' 
      };
    }
    
    // 2. Check Firestore admins collection
    const adminDocRef = doc(db, 'admins', email.toLowerCase());
    const adminDoc = await getDoc(adminDocRef);
    
    if (adminDoc.exists()) {
      const adminData = adminDoc.data();
      return { 
        isAdmin: true, 
        role: adminData.role || 'admin',
        message: 'Admin Access Granted' 
      };
    }
    
    // 3. Bukan admin
    return { 
      isAdmin: false, 
      role: null,
      message: 'Access Denied: Not an admin' 
    };
  } catch (error) {
    console.error('Error checking admin access:', error);
    return { 
      isAdmin: false, 
      role: null,
      message: 'Error checking admin status' 
    };
  }
};

/**
 * Login dengan Google
 */
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    console.log('Login successful:', {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    });
    
    // Check admin access
    const adminCheck = await checkAdminAccess(user.email);
    
    if (!adminCheck.isAdmin) {
      // Bukan admin - logout otomatis
      await signOut(auth);
      return {
        success: false,
        error: 'access-denied',
        message: 'Akses ditolak! Email Anda tidak terdaftar sebagai admin.'
      };
    }
    
    console.log('Admin access granted:', adminCheck);
    
    return {
      success: true,
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        role: adminCheck.role
      },
      message: 'Login berhasil!'
    };
  } catch (error) {
    console.error('Login error:', error);
    
    // Handle specific error codes
    let errorMessage = 'Terjadi kesalahan saat login.';
    
    if (error.code === 'auth/popup-closed-by-user') {
      errorMessage = 'Login dibatalkan oleh user.';
    } else if (error.code === 'auth/popup-blocked') {
      errorMessage = 'Popup diblokir oleh browser. Silakan aktifkan popup untuk domain ini.';
    } else if (error.code === 'auth/network-request-failed') {
      errorMessage = 'Koneksi internet bermasalah. Silakan cek koneksi Anda.';
    }
    
    return {
      success: false,
      error: error.code,
      message: errorMessage
    };
  }
};

/**
 * Logout
 */
export const logout = async () => {
  try {
    await signOut(auth);
    console.log('Logout successful');
    
    return {
      success: true,
      message: 'Logout berhasil!'
    };
  } catch (error) {
    console.error('Logout error:', error);
    
    return {
      success: false,
      error: error.code,
      message: 'Terjadi kesalahan saat logout.'
    };
  }
};

/**
 * Get current user
 */
export const getCurrentUser = () => {
  return auth.currentUser;
};

/**
 * Subscribe to auth state changes
 * @param {Function} callback - Function to call when auth state changes
 * @returns {Function} Unsubscribe function
 */
export const subscribeToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      callback({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        isAuthenticated: true
      });
    } else {
      callback({
        isAuthenticated: false
      });
    }
  });
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = () => {
  return auth.currentUser !== null;
};
