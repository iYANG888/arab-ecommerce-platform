import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TalentTrainingPage from './pages/TalentTrainingPage';
import EnterpriseServicesPage from './pages/EnterpriseServicesPage';
import LanguageServicesPage from './pages/LanguageServicesPage';
import DigitalServicesPage from './pages/DigitalServicesPage';
import FinancialServicesPage from './pages/FinancialServicesPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="app-layout">
        <Header />
        <Content className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/talent-training" element={<TalentTrainingPage />} />
            <Route path="/enterprise-services" element={<EnterpriseServicesPage />} />
            <Route path="/language-services" element={<LanguageServicesPage />} />
            <Route path="/digital-services" element={<DigitalServicesPage />} />
            <Route path="/financial-services" element={<FinancialServicesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;