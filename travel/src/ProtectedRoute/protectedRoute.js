import {Navigate,Route} from 'react-router-dom'
import Cookie from 'js-cookie'

const ProtectedRoute = ({ element, isAuthenticated, ...rest }) => {
  
    return isAuthenticated ? (
     element
    ) : (
      <Navigate to="/login" replace />
    );
  };

export default ProtectedRoute