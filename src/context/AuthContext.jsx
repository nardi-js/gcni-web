import { createContext, useContext, useState, useEffect } from 'react';
import { subscribeToAuthChanges, checkAdminAccess } from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribe = subscribeToAuthChanges(async (authUser) => {
      if (authUser.isAuthenticated) {
        // Check if user is admin
        const adminCheck = await checkAdminAccess(authUser.email);
        
        if (adminCheck.isAdmin) {
          setUser({
            ...authUser,
            role: adminCheck.role
          });
        } else {
          // Bukan admin - set user ke null
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    isAuthenticated: user !== null
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
