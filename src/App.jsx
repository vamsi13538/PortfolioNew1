import React from 'react';
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import HomePage from './Pages/HomePage';
import ResumePage from './Pages/ResumePage';
import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/PortfolioNew1/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='resume' element={<ResumePage />} />
        <Route path='projects' element={<PortfolioPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
