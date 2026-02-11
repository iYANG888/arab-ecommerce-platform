# 中阿跨境电商服务平台 - CSS 文档

## CSS 文件

### src/index.css
```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
}

.app-layout .ant-layout-content {
  flex: 1;
  padding: 24px;
  background-color: transparent;
}

.app-content {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

/* Header样式 */
.header {
  padding: 0;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 24px;
}

.logo h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #667eea;
  cursor: pointer;
}

.nav-menu {
  flex: 1;
  justify-content: center;
  border-bottom: none;
  background-color: transparent;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Footer样式 */
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .app-content {
    max-width: 95%;
  }
  
  .header-content {
    padding: 0 16px;
  }
}

@media (max-width: 768px) {
  .app-layout .ant-layout-content {
    padding: 16px;
  }
  
  .app-content {
    padding: 0;
  }
  
  .header-content {
    height: auto;
    padding: 12px 16px;
    flex-direction: column;
    gap: 12px;
  }
  
  .nav-menu {
    width: 100%;
  }
  
  .logo h1 {
    font-size: 20px;
  }
}

@media (max-width: 576px) {
  .header-actions {
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }
  
  .header-actions Button {
    width: 100%;
  }
}
```

### src/App.css
```css
.app-layout .ant-layout-header {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.app-layout .ant-layout-footer {
  background: #f0f2f5;
  padding: 24px 0;
  text-align: center;
}

/* 颜色变量 */
:root {
  /* 主色调 - 紫色渐变系列 */
  --primary-color: #667eea;
  --primary-color-light: #7f93e8;
  --primary-color-dark: #5a6fd8;
  --primary-color-darker: #4a5cb8;
  
  /* 辅助色调 - 深紫色 */
  --secondary-color: #764ba2;
  --secondary-color-light: #8c61b3;
  --secondary-color-dark: #653d91;
  
  /* 强调色 - 渐变色 */
  --accent-color: #f093fb;
  --accent-color-2: #4facfe;
  --accent-color-3: #00f2fe;
  
  /* 功能色 */
  --success-color: #52c41a;
  --success-color-light: #73d13d;
  --warning-color: #fa8c16;
  --warning-color-light: #ffa940;
  --info-color: #1890ff;
  --info-color-light: #40a9ff;
  --error-color: #f5222d;
  --error-color-light: #ff4d4f;
  
  /* 文本色 */
  --text-color: #1a1a1a;
  --text-color-secondary: #4a4a4a;
  --text-color-tertiary: #666666;
  --text-color-light: #999999;
  --text-color-lighter: #cccccc;
  
  /* 背景色 */
  --bg-color: #f5f7fa;
  --bg-color-light: #ffffff;
  --bg-color-secondary: #fafafa;
  --bg-color-tertiary: #f0f2f5;
  
  /* 边框色 */
  --border-color: #e8e8e8;
  --border-color-light: #f0f0f0;
  --border-color-dark: #d9d9d9;
  
  /* 阴影 */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.16);
  --shadow-xl: 0 16px 64px rgba(0, 0, 0, 0.2);
  
  /* 圆角 */
  --border-radius-sm: 6px;
  --border-radius-md: 10px;
  --border-radius-lg: 16px;
  --border-radius-xl: 24px;
  
  /* 过渡 */
  --transition: all 0.3s ease;
  --transition-fast: all 0.2s ease;
  --transition-slow: all 0.4s ease;
}

.app-layout .ant-layout-header {
  background: var(--bg-color-light);
  box-shadow: var(--shadow-sm);
  z-index: 100;
  padding: 0 24px;
  height: 64px;
  line-height: 64px;
}

.app-layout .ant-layout-footer {
  background: var(--bg-color);
  padding: 24px 0;
  text-align: center;
  color: var(--text-color-secondary);
}

/* 语言切换按钮样式 */
.language-switcher {
  margin-left: 16px;
}

/* 导航栏样式优化 */
.header {
  background: var(--bg-color-light);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: var(--transition);
  padding: 0;
}

.header:hover {
  box-shadow: var(--shadow-md);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  display: flex;
  align-items: center;
  color: var(--primary-color);
  text-decoration: none;
  font-size: 24px;
  font-weight: 800;
  transition: var(--transition);
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo:hover {
  transform: scale(1.05);
}

.nav-menu {
  flex: 1;
  max-width: 600px;
  margin: 0 40px;
}

.nav-menu .ant-menu-item {
  font-weight: 600;
  font-size: 16px;
  color: var(--text-color-secondary);
  transition: var(--transition);
  position: relative;
}

.nav-menu .ant-menu-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  transition: width 0.3s ease;
}

.nav-menu .ant-menu-item:hover::after,
.nav-menu .ant-menu-item-selected::after {
  width: 100%;
}

.nav-menu .ant-menu-item:hover,
.nav-menu .ant-menu-item-selected {
  color: var(--primary-color);
  background: transparent;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.language-switcher .ant-btn {
  border-color: var(--primary-color);
  color: var(--primary-color);
  transition: var(--transition);
}

.language-switcher .ant-btn:hover {
  border-color: var(--secondary-color);
  color: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* 页脚样式优化 */
.footer {
  background: linear-gradient(135deg, var(--text-color) 0%, var(--text-color-secondary) 100%);
  color: var(--text-color-light);
  padding: 60px 0 30px;
  border-top: 4px solid var(--primary-color);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* 页脚响应式优化 */
@media (max-width: 768px) {
  .footer {
    padding: 40px 0 20px;
  }
  
  .footer-content {
    padding: 0 16px;
  }
  
  .footer .ant-typography h4 {
    font-size: 20px !important;
    margin-bottom: 16px !important;
  }
  
  .footer .ant-typography h5 {
    font-size: 16px !important;
    margin-bottom: 12px !important;
  }
  
  .footer-links li {
    margin-bottom: 8px !important;
  }
  
  .footer-links a {
    font-size: 14px !important;
  }
  
  .footer .ant-row {
    margin-bottom: 30px !important;
  }
  
  .footer .ant-row:last-child {
    padding-top: 16px !important;
  }
  
  .footer .ant-row:last-child .ant-col a {
    margin: 0 8px !important;
  }
  
  /* 移动端页脚列布局优化 */
  .footer .ant-col {
    display: flex;
    flex-direction: column;
  }
  
  /* 页脚文本间距优化 */
  .footer .ant-typography + .ant-typography {
    margin-top: 8px !important;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 30px 0 16px;
  }
  
  .footer .ant-typography h4 {
    font-size: 18px !important;
  }
  
  .footer .ant-typography h5 {
    font-size: 15px !important;
  }
  
  .footer-links a {
    font-size: 13px !important;
    line-height: 1.6 !important;
  }
  
  .footer .ant-row:last-child .ant-col a {
    margin: 0 6px !important;
  }
  
  /* 超小屏幕页脚文本优化 */
  .footer .ant-typography {
    font-size: 13px !important;
    line-height: 1.6 !important;
  }
  
  /* 页脚列间距优化 */
  .footer .ant-row:first-child .ant-col {
    margin-bottom: 24px !important;
  }
  
  /* 页脚链接样式优化 */
  .footer-links {
    padding-left: 16px !important;
  }
  
  /* 版权信息行布局优化 */
  .footer .ant-row:last-child {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
  }
  
  .footer .ant-row:last-child .ant-col {
    margin-bottom: 0 !important;
  }
}

.footer .ant-typography {
  margin: 0;
}

.footer .ant-typography h4 {
  color: #fff;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 22px;
  position: relative;
  padding-bottom: 12px;
}

.footer .ant-typography h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  border-radius: 2px;
}

.footer .ant-typography h5 {
  color: #fff;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 18px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: var(--text-color-light);
  text-decoration: none;
  transition: var(--transition);
  font-size: 15px;
  display: inline-block;
}

.footer-links a:hover {
  color: #fff;
  transform: translateX(8px);
  color: var(--primary-color-light);
}

.footer-links a::after {
  display: none;
}

.footer .ant-divider {
  background-color: rgba(255, 255, 255, 0.1);
  margin: 30px 0;
}

.footer .ant-row:last-child {
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer .ant-row:last-child .ant-col a {
  color: var(--text-color-light);
  text-decoration: none;
  transition: var(--transition);
  margin: 0 12px;
}

.footer .ant-row:last-child .ant-col a:hover {
  color: #fff;
  color: var(--primary-color-light);
}

/* 移动端菜单按钮默认隐藏 */
.mobile-menu-btn {
  display: none;
  padding: 4px;
  margin: 0;
  border: none;
  background: transparent;
}

/* 响应式导航 */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .header-content {
    padding: 0 16px;
    position: relative;
  }
  
  .logo {
    font-size: 20px;
  }
  
  .header-actions {
    gap: 8px;
  }
  
  .header-actions .ant-btn {
    padding: 4px 12px;
    font-size: 14px;
  }
  
  /* 移动端抽屉样式 */
  .mobile-drawer .ant-drawer-header {
    background: var(--bg-color-light);
    border-bottom: 1px solid var(--border-color);
  }
  
  .mobile-drawer .ant-menu-item {
    font-size: 16px;
    padding: 16px 12px;
  }
  
  .footer {
    padding: 40px 0 20px;
  }
  
  .footer-content {
    padding: 0 16px;
  }
  
  .footer .ant-row {
    margin-bottom: 30px;
  }
  
  .footer .ant-col:last-child {
    margin-bottom: 0;
  }
}

/* 中等屏幕优化 */
@media (min-width: 769px) and (max-width: 1024px) {
  .nav-menu {
    margin: 0 20px;
  }
  
  .nav-menu .ant-menu-item {
    font-size: 14px;
  }
  
  .header-actions {
    gap: 10px;
  }
}

/* 首页样式 */
.home-banner {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  padding: 100px 40px;
  margin-bottom: 80px;
  border-radius: var(--border-radius-lg);
  color: white;
  box-shadow: var(--shadow-lg);
  position: relative;
  overflow: hidden;
  transform: perspective(1000px) rotateX(0deg);
  transition: transform 0.3s ease;
}

/* Banner部分响应式优化 */
@media (max-width: 768px) {
  .home-banner {
    padding: 60px 20px;
    margin-bottom: 60px;
  }
  
  .home-banner h1 {
    font-size: 36px !important;
    margin-bottom: 16px !important;
  }
  
  .home-banner .banner-subtitle {
    font-size: 16px !important;
    margin-bottom: 12px !important;
  }
  
  .home-banner p {
    font-size: 16px !important;
    margin-bottom: 24px !important;
    line-height: 1.6 !important;
  }
  
  .home-banner .ant-space {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .home-banner .ant-space-item {
    width: 100%;
  }
  
  .home-banner .ant-btn {
    padding: 12px 32px !important;
    font-size: 16px !important;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .home-banner {
    padding: 40px 16px;
    margin-bottom: 40px;
  }
  
  .home-banner h1 {
    font-size: 28px !important;
  }
  
  .home-banner p {
    font-size: 15px !important;
    margin-bottom: 20px !important;
  }
  
  .home-banner .ant-btn {
    padding: 10px 24px !important;
    font-size: 15px !important;
  }
}

.home-banner::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 400px;
  height: 400px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.home-banner::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  animation: float 4s ease-in-out infinite reverse;
}

.home-banner > * {
  position: relative;
  z-index: 1;
}

.home-banner h1 {
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 1.2;
}

.home-banner p {
  font-size: 20px;
  margin-bottom: 32px;
  opacity: 0.95;
  line-height: 1.6;
}

.feature-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius-md);
  transition: var(--transition);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-color);
}

.feature-card .ant-card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 32px 28px;
  position: relative;
  z-index: 1;
}

.feature-card .ant-card-meta-title {
  margin-bottom: 16px;
  font-size: 22px;
  font-weight: 600;
  color: var(--text-color);
  transition: color 0.3s ease;
}

.feature-card:hover .ant-card-meta-title {
  color: var(--primary-color);
}

.feature-card .ant-card-meta-description {
  flex: 1;
  color: var(--text-color-secondary);
  line-height: 1.6;
  font-size: 15px;
}

.feature-icon {
  font-size: 48px;
  color: var(--primary-color);
  margin-bottom: 20px;
  transition: transform 0.3s ease, color 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
  color: var(--secondary-color);
}

/* 模块页面样式 */
.module-header {
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--border-color);
}

.module-header h2 {
  margin: 0;
  font-size: 32px;
  color: var(--text-color);
  font-weight: 700;
}

/* 按钮样式 */
.primary-btn, .ant-btn-primary {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  border: none;
  padding: 12px 32px;
  font-size: 18px;
  border-radius: var(--border-radius-md);
  color: white;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 600;
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
}

.primary-btn::before, .ant-btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s ease;
}

.primary-btn:hover::before, .ant-btn-primary:hover::before {
  left: 100%;
}

.primary-btn:hover, .ant-btn-primary:hover {
  opacity: 1;
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  color: white;
}

.primary-btn:active, .ant-btn-primary:active {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.ant-btn-default {
  border-color: var(--primary-color);
  color: var(--primary-color);
  background: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: var(--border-radius-md);
  font-weight: 600;
}

.ant-btn-default:hover {
  border-color: var(--secondary-color);
  color: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.ant-btn-default:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.ant-btn-link {
  color: var(--primary-color);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 600;
  padding: 4px 8px;
  border-radius: var(--border-radius-sm);
}

.ant-btn-link:hover {
  color: var(--secondary-color);
  background-color: var(--bg-color-secondary);
}

.ant-btn-link:active {
  transform: translateY(1px);
}

/* 排版样式增强 */
h1, h2, h3, h4, h5, h6 {
  margin: 0 0 16px 0;
  color: var(--text-color);
  font-weight: 700;
  line-height: 1.3;
}

h1 {
  font-size: 48px;
  letter-spacing: -0.5px;
}

h2 {
  font-size: 36px;
  letter-spacing: -0.3px;
}

h3 {
  font-size: 28px;
  letter-spacing: -0.2px;
}

h4 {
  font-size: 24px;
}

h5 {
  font-size: 20px;
}

h6 {
  font-size: 16px;
  color: var(--text-color-secondary);
}

p {
  margin: 0 0 16px 0;
  color: var(--text-color-secondary);
  line-height: 1.7;
  font-size: 16px;
}

/* 文本强调 */
.text-primary {
  color: var(--primary-color);
  transition: color 0.3s ease;
}

.text-secondary {
  color: var(--secondary-color);
  transition: color 0.3s ease;
}

.text-accent {
  color: var(--accent-color);
  transition: color 0.3s ease;
}

.text-success {
  color: var(--success-color);
  transition: color 0.3s ease;
}

.text-warning {
  color: var(--warning-color);
  transition: color 0.3s ease;
}

.text-info {
  color: var(--info-color);
  transition: color 0.3s ease;
}

.text-error {
  color: var(--error-color);
  transition: color 0.3s ease;
}

.text-light {
  color: var(--text-color-light);
  transition: color 0.3s ease;
}

/* 链接样式 */
a {
  color: var(--primary-color);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  transition: width 0.3s ease;
}

a:hover {
  color: var(--secondary-color);
}

a:hover::after {
  width: 100%;
}

/* 文本装饰 */
.text-bold {
  font-weight: 700;
}

.text-semibold {
  font-weight: 600;
}

.text-italic {
  font-style: italic;
}

.text-underline {
  text-decoration: underline;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

/* 特性、新闻和案例样式 */
.features-section,
.news-section,
.cases-section {
  margin-bottom: 80px;
  padding: 60px 40px;
  background-color: var(--bg-color-light);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  transform: translateY(0);
}

/* 特性部分响应式优化 */
@media (max-width: 768px) {
  .features-section,
  .news-section,
  .cases-section {
    padding: 40px 20px;
    margin-bottom: 60px;
  }
  
  .features-section h2,
  .news-section h2,
  .cases-section h2 {
    font-size: 28px !important;
  }
  
  .features-section .section-header p,
  .news-section .section-header p,
  .cases-section .section-header p {
    font-size: 16px !important;
    margin-bottom: 32px !important;
  }
  
  .features-section .ant-row,
  .news-section .ant-row,
  .cases-section .ant-row {
    margin-bottom: 0;
  }
  
  .features-section .ant-col,
  .news-section .ant-col,
  .cases-section .ant-col {
    margin-bottom: 24px;
  }
  
  .feature-card .ant-card-body {
    padding: 24px 20px;
  }
  
  .feature-card .ant-card-meta-title {
    font-size: 20px !important;
    margin-bottom: 12px !important;
  }
  
  .feature-card .ant-card-meta-description {
    font-size: 14px !important;
    line-height: 1.6 !important;
  }
  
  .feature-icon {
    font-size: 40px !important;
  }
}

@media (max-width: 480px) {
  .features-section,
  .news-section,
  .cases-section {
    padding: 30px 16px;
    margin-bottom: 40px;
  }
  
  .features-section h2,
  .news-section h2,
  .cases-section h2 {
    font-size: 24px !important;
  }
  
  .feature-card .ant-card-body {
    padding: 20px 16px;
  }
  
  .feature-card .ant-card-meta-title {
    font-size: 18px !important;
  }
  
  .feature-icon {
    font-size: 36px !important;
  }
}

.features-section::before,
.news-section::before,
.cases-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--accent-color));
}

.features-section:hover,
.news-section:hover,
.cases-section:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.features-section h2,
.news-section h2,
.cases-section h2 {
  font-size: 32px;
  margin-bottom: 32px;
  color: var(--text-color);
  font-weight: 700;
  text-align: center;
  padding-bottom: 16px;
  position: relative;
}

.features-section h2::after,
.news-section h2::after,
.cases-section h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  border-radius: 2px;
}

.news-section .ant-card,
.cases-section .ant-card {
  transition: var(--transition);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.news-section .ant-card-body,
.cases-section .ant-card-body {
  padding: 28px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.news-section .ant-card:hover,
.cases-section .ant-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-color);
}

/* 动画 */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* 动画类 */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.fade-in-up.animate {
  opacity: 1;
  transform: translateY(0);
}

.fade-in-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease;
}

.fade-in-left.animate {
  opacity: 1;
  transform: translateX(0);
}

.fade-in-right {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.6s ease;
}

.fade-in-right.animate {
  opacity: 1;
  transform: translateX(0);
}

.scale-in {
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.6s ease;
}

.scale-in.animate {
  opacity: 1;
  transform: scale(1);
}

/* 响应式卡片 */
@media (max-width: 768px) {
  .ant-col {
    margin-bottom: 16px;
  }
}

/* 页面容器 */
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

/* 服务卡片样式 */
.service-card {
  height: 100%;
  border-radius: var(--border-radius-md);
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.service-card .ant-card-body {
  padding: 32px;
}

/* 表单样式 */
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  background: var(--bg-color-light);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
}

.form-container h2 {
  text-align: center;
  margin-bottom: 32px;
}

.form-container .ant-form-item {
  margin-bottom: 24px;
}

.form-container .ant-btn {
  width: 100%;
  height: 48px;
  font-size: 16px;
  margin-top: 16px;
}

/* 列表样式 */
.ant-list-item {
  padding: 16px 0;
  border-bottom: 1px solid var(--border-color);
}

.ant-list-item:last-child {
  border-bottom: none;
}

/* 描述列表样式 */
.ant-descriptions-item-label {
  font-weight: 600;
  color: var(--text-color);
}

.ant-descriptions-item-content {
  color: var(--text-color-secondary);
}

/* 标签样式 */
.ant-tag {
  border-radius: var(--border-radius-sm);
  padding: 4px 12px;
  font-weight: 500;
}

/* 消息提示样式 */
.ant-message {
  z-index: 2000;
}

/* 模态框样式 */
.ant-modal {
  border-radius: var(--border-radius-lg);
}

.ant-modal-header {
  border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
}

.ant-modal-footer {
  border-radius: 0 0 var(--border-radius-lg) var(--border-radius-lg);
}

/* 抽屉样式 */
.ant-drawer-header {
  border-bottom: 1px solid var(--border-color);
}

.ant-drawer-body {
  padding: 24px;
}

/* 下拉菜单样式 */
.ant-dropdown-menu {
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
}

.ant-dropdown-menu-item {
  padding: 10px 16px;
}

/* 分页样式 */
.ant-pagination {
  margin-top: 24px;
  text-align: center;
}

/* 表格样式 */
.ant-table {
  border-radius: var(--border-radius-md);
  overflow: hidden;
}

.ant-table-thead > tr > th {
  background-color: var(--bg-color-secondary);
  font-weight: 600;
}

/* 进度条样式 */
.ant-progress-line {
  margin-bottom: 16px;
}

/* 徽章样式 */
.ant-badge {
  margin-left: 8px;
}

/* 警告样式 */
.ant-alert {
  border-radius: var(--border-radius-md);
  margin-bottom: 16px;
}

/* 面包屑样式 */
.ant-breadcrumb {
  margin-bottom: 16px;
}

/* 步骤条样式 */
.ant-steps {
  margin-bottom: 32px;
}

/* 时间轴样式 */
.ant-timeline {
  padding-left: 24px;
}

/* 折叠面板样式 */
.ant-collapse {
  border-radius: var(--border-radius-md);
}

/* 标签页样式 */
.ant-tabs {
  margin-bottom: 24px;
}

.ant-tabs-tab {
  font-weight: 600;
}

/* 统计数字样式 */
.ant-statistic-title {
  font-weight: 600;
  color: var(--text-color-secondary);
}

.ant-statistic-content {
  font-weight: 700;
  color: var(--text-color);
}

/* 评分样式 */
.ant-rate {
  font-size: 20px;
}

/* 滑块样式 */
.ant-slider {
  margin: 16px 0;
}

/* 开关样式 */
.ant-switch {
  margin-right: 8px;
}

/* 单选框样式 */
.ant-radio-group {
  display: flex;
  flex-direction: column;
}

.ant-radio-wrapper {
  margin-bottom: 8px;
}

/* 复选框样式 */
.ant-checkbox-group {
  display: flex;
  flex-direction: column;
}

.ant-checkbox-wrapper {
  margin-bottom: 8px;
}

/* 选择器样式 */
.ant-select {
  width: 100%;
}

/* 日期选择器样式 */
.ant-picker {
  width: 100%;
}

/* 时间选择器样式 */
.ant-time-picker {
  width: 100%;
}

/* 上传组件样式 */
.ant-upload {
  width: 100%;
}

/* 图片样式 */
.ant-image {
  border-radius: var(--border-radius-md);
  overflow: hidden;
}

/* 轮播图样式 */
.ant-carousel {
  margin-bottom: 24px;
}

/* 空状态样式 */
.ant-empty {
  padding: 40px 0;
}

/* 骨架屏样式 */
.ant-skeleton {
  padding: 16px;
}

/* 结果页面样式 */
.ant-result {
  padding: 48px 24px;
}

/* 头像样式 */
.ant-avatar {
  margin-right: 8px;
}

/* 徽标样式 */
.ant-badge-count {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}

/* 气泡确认框样式 */
.ant-popconfirm {
  border-radius: var(--border-radius-md);
}

/* 气泡卡片样式 */
.ant-popover {
  border-radius: var(--border-radius-md);
}

/* 工具提示样式 */
.ant-tooltip {
  border-radius: var(--border-radius-sm);
}

/* 加载中样式 */
.ant-spin {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* 全局滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-color-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--border-color-dark);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--text-color-light);
}
```

## CSS 样式说明

### 颜色变量
- **主色调**: 紫色渐变系列 (#667eea)
- **辅助色调**: 深紫色 (#764ba2)
- **功能色**: 成功、警告、信息、错误
- **文本色**: 从主文本到浅文本的层次
- **背景色**: 从浅白到深灰的层次
- **边框色**: 从浅到深的层次
- **阴影**: 从小到大的阴影效果
- **圆角**: 从小到大的圆角效果
- **过渡**: 快、标准、慢三种过渡速度

### 响应式设计
- **桌面端**: 1024px 以上
- **平板端**: 769px - 1024px
- **移动端**: 768px 以下
- **小屏移动端**: 480px 以下

### 动画效果
- **float**: 浮动动画
- **fadeInUp**: 从下淡入
- **fadeInLeft**: 从左淡入
- **fadeInRight**: 从右淡入
- **scaleIn**: 缩放淡入

### 组件样式
- 导航栏、页脚、按钮、卡片
- 表单、列表、表格、模态框
- 下拉菜单、分页、进度条等