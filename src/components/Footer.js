import React from 'react';
import { Layout, Typography, Row, Col, Divider } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const { Footer: AntFooter } = Layout;
const { Title, Text } = Typography;

function Footer() {
  const { t } = useTranslation();

  return (
    <AntFooter className="footer">
      <div className="footer-content">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={8}>
            <Title level={4}>中阿跨境电商服务平台</Title>
            <Text>
              {t('home.subtitle')}
            </Text>
            <br />
            <Text type="secondary">
              {t('home.description')}
            </Text>
          </Col>
          
          <Col xs={24} sm={12} md={8}>
            <Title level={5}>{t('common.aboutUs')}</Title>
            <ul className="footer-links">
              <li><Link to="/about">平台介绍</Link></li>
              <li><Link to="/team">团队介绍</Link></li>
              <li><Link to="/contact">联系方式</Link></li>
              <li><Link to="/partners">合作伙伴</Link></li>
            </ul>
          </Col>
          
          <Col xs={24} sm={12} md={8}>
            <Title level={5}>{t('common.contactUs')}</Title>
            <Text type="secondary">地址：陕西省西安市长安区郭杜教育科技产业开发区</Text>
            <br />
            <Text type="secondary">电话：029-85319300</Text>
            <br />
            <Text type="secondary">邮箱：info@zhonga-ec.com</Text>
          </Col>
        </Row>
        
        <Divider />
        
        <Row justify="space-between" align="middle">
          <Col>
            <Text type="secondary">
              © {new Date().getFullYear()} 中阿跨境电商服务平台 版权所有
            </Text>
          </Col>
          <Col>
            <Text type="secondary">
              <Link to="/privacy">隐私政策</Link> | 
              <Link to="/terms">服务条款</Link> | 
              <Link to="/sitemap">网站地图</Link>
            </Text>
          </Col>
        </Row>
      </div>
    </AntFooter>
  );
}

export default Footer;