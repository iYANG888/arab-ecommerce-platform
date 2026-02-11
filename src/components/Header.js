import React, { useState } from 'react';
import { Layout, Menu, Dropdown, Button, Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../features/languageSlice';
import { logout } from '../features/userSlice';
import { UserOutlined, GlobalOutlined, MenuOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;

function Header() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { currentLanguage } = useSelector((state) => state.language);
  const { isAuthenticated, currentUser } = useSelector((state) => state.user);
  const [drawerVisible, setDrawerVisible] = useState(false);
  
  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    dispatch(setLanguage(lang));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const languageMenuItems = [
    { key: 'zh', label: '中文', onClick: () => changeLanguage('zh') },
    { key: 'ar', label: 'العربية', onClick: () => changeLanguage('ar') },
    { key: 'en', label: 'English', onClick: () => changeLanguage('en') }
  ];

  const userMenuItems = [
    { key: 'profile', label: '个人中心' },
    { key: 'settings', label: '设置' },
    { key: 'logout', label: '退出登录', onClick: handleLogout }
  ];

  const navMenuItems = [
    { key: 'home', label: <Link to="/">{t('common.home')}</Link> },
    { key: 'talentTraining', label: <Link to="/talent-training">{t('common.talentTraining')}</Link> },
    { key: 'enterpriseServices', label: <Link to="/enterprise-services">{t('common.enterpriseServices')}</Link> },
    { key: 'languageServices', label: <Link to="/language-services">{t('common.languageServices')}</Link> },
    { key: 'digitalServices', label: <Link to="/digital-services">{t('common.digitalServices')}</Link> },
    { key: 'financialServices', label: <Link to="/financial-services">{t('common.financialServices')}</Link> }
  ];

  return (
    <AntHeader className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <h1>中阿跨境电商平台</h1>
        </Link>
        
        {/* 桌面端导航菜单 */}
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['home']} className="nav-menu" items={navMenuItems} />
        
        {/* 移动端汉堡菜单按钮 */}
        <Button 
          type="text" 
          icon={<MenuOutlined style={{ fontSize: '24px', color: 'var(--primary-color)' }} />}
          className="mobile-menu-btn"
          onClick={toggleDrawer}
        />

        <div className="header-actions">
          <Dropdown menu={{ items: languageMenuItems }} trigger={['click']} className="language-switcher">
            <Button icon={<GlobalOutlined />}>{currentLanguage.toUpperCase()}</Button>
          </Dropdown>

          {isAuthenticated ? (
            <Dropdown menu={{ items: userMenuItems }} trigger={['click']}>
              <Button icon={<UserOutlined />}>
                {currentUser?.username || '用户'}
              </Button>
            </Dropdown>
          ) : (
            <>
              <Link to="/login">
                <Button>{t('common.login')}</Button>
              </Link>
              <Link to="/register">
                <Button type="primary">{t('common.register')}</Button>
              </Link>
            </>
          )}
        </div>
        
        {/* 移动端抽屉式导航 */}
        <Drawer
          title={<div className="logo" style={{ marginLeft: '-8px' }}>中阿跨境电商平台</div>}
          placement="right"
          onClose={toggleDrawer}
          open={drawerVisible}
          width={280}
          className="mobile-drawer"
        >
          <Menu 
            theme="light" 
            mode="vertical" 
            defaultSelectedKeys={['home']} 
            items={navMenuItems} 
            style={{ borderRight: 0, height: 'calc(100vh - 64px)' }}
          />
        </Drawer>
      </div>
    </AntHeader>
  );
}

export default Header;