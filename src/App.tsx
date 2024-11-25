import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useAdminAuth } from './hooks/useAdminAuth';
import { getAdminAuth } from './services/auth';
import Login from './components/Login';
import UserManagement from './components/UserManagement';
import LoadingSpinner from './components/LoadingSpinner';
import AccessDenied from './components/AccessDenied';

function App() {
  const adminAuth = getAdminAuth();
  const [user, loading] = useAuthState(adminAuth);
  const { isAdmin, loading: adminLoading } = useAdminAuth(user);

  if (loading || adminLoading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Login />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {isAdmin ? <UserManagement /> : <AccessDenied />}
    </div>
  );
}

export default App;