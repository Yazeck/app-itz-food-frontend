import {Navigate, Route, Routes} from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import AuthCallBackPage from './pages/AuthCallBackPage';
import UserProfilePage from './pages/UserProfilePage';
import ProtectedRoute from './auth/ProtectedRoute';
import ManageRestaurantPage from './pages/ManageRestaurantPage';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
        <Layout showHero={true}>
        <HomePage />
      </Layout>} />
      <Route path="/auth/callback" element={<AuthCallBackPage />} />
      
      <Route element={<ProtectedRoute />}>
      <Route path="/User-profile" element={
        <Layout>
          <UserProfilePage />
        </Layout>
      } />
      <Route path="/manage-restaurant" element={
        <Layout>
          <ManageRestaurantPage />
        </Layout>
      } />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    //cargar auth0ProviderWithNavigate
  );
}
export default AppRoutes;