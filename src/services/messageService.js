import { 
  collection, 
  addDoc, 
  getDocs, 
  getDoc,
  doc, 
  updateDoc, 
  deleteDoc,
  query,
  orderBy,
  where,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase/config';

const MESSAGES_COLLECTION = 'messages';

/**
 * Create new contact message
 */
export const createMessage = async (messageData) => {
  try {
    const messagesRef = collection(db, MESSAGES_COLLECTION);
    
    const messageToSave = {
      name: messageData.name,
      email: messageData.email,
      phone: messageData.phone || '',
      subject: messageData.subject,
      message: messageData.message,
      status: 'unread', // unread, read, replied
      createdAt: serverTimestamp(),
      readAt: null,
      repliedAt: null
    };

    const docRef = await addDoc(messagesRef, messageToSave);
    
    return {
      success: true,
      id: docRef.id,
      message: 'Pesan berhasil dikirim!'
    };
  } catch (error) {
    console.error('Error creating message:', error);
    return {
      success: false,
      error: error.message,
      message: 'Gagal mengirim pesan!'
    };
  }
};

/**
 * Get all messages
 */
export const getAllMessages = async () => {
  try {
    const messagesRef = collection(db, MESSAGES_COLLECTION);
    const q = query(messagesRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return {
      success: true,
      data: messages
    };
  } catch (error) {
    console.error('Error getting messages:', error);
    return {
      success: false,
      error: error.message,
      data: []
    };
  }
};

/**
 * Get unread messages count
 */
export const getUnreadCount = async () => {
  try {
    const messagesRef = collection(db, MESSAGES_COLLECTION);
    const q = query(messagesRef, where('status', '==', 'unread'));
    const querySnapshot = await getDocs(q);
    
    return {
      success: true,
      count: querySnapshot.size
    };
  } catch (error) {
    console.error('Error getting unread count:', error);
    return {
      success: false,
      count: 0
    };
  }
};

/**
 * Get message by ID
 */
export const getMessageById = async (id) => {
  try {
    const messageRef = doc(db, MESSAGES_COLLECTION, id);
    const messageDoc = await getDoc(messageRef);

    if (messageDoc.exists()) {
      return {
        success: true,
        data: {
          id: messageDoc.id,
          ...messageDoc.data()
        }
      };
    } else {
      return {
        success: false,
        error: 'Message not found',
        data: null
      };
    }
  } catch (error) {
    console.error('Error getting message:', error);
    return {
      success: false,
      error: error.message,
      data: null
    };
  }
};

/**
 * Mark message as read
 */
export const markAsRead = async (id) => {
  try {
    const messageRef = doc(db, MESSAGES_COLLECTION, id);
    await updateDoc(messageRef, {
      status: 'read',
      readAt: serverTimestamp()
    });

    return {
      success: true,
      message: 'Message marked as read'
    };
  } catch (error) {
    console.error('Error marking message as read:', error);
    return {
      success: false,
      error: error.message,
      message: 'Failed to mark as read'
    };
  }
};

/**
 * Mark message as replied
 */
export const markAsReplied = async (id) => {
  try {
    const messageRef = doc(db, MESSAGES_COLLECTION, id);
    await updateDoc(messageRef, {
      status: 'replied',
      repliedAt: serverTimestamp()
    });

    return {
      success: true,
      message: 'Message marked as replied'
    };
  } catch (error) {
    console.error('Error marking message as replied:', error);
    return {
      success: false,
      error: error.message,
      message: 'Failed to mark as replied'
    };
  }
};

/**
 * Delete message
 */
export const deleteMessage = async (id) => {
  try {
    const messageRef = doc(db, MESSAGES_COLLECTION, id);
    await deleteDoc(messageRef);

    return {
      success: true,
      message: 'Pesan berhasil dihapus!'
    };
  } catch (error) {
    console.error('Error deleting message:', error);
    return {
      success: false,
      error: error.message,
      message: 'Gagal menghapus pesan!'
    };
  }
};
