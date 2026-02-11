import React from 'react';
import { Row, Col, Card, Typography, List, Button, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { BankOutlined, UserOutlined, BarChartOutlined, MessageOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

function EnterpriseServicesPage() {
  const { t } = useTranslation();

  const services = [
    { title: t('enterpriseServices.talentRecruitment'), description: '精准匹配中阿跨境电商专业人才', icon: <UserOutlined /> },
    { title: t('enterpriseServices.businessConsulting'), description: '提供市场分析、合规咨询等服务', icon: <BarChartOutlined /> },
    { title: t('enterpriseServices.projectMatching'), description: '中阿企业项目对接与合作服务', icon: <BankOutlined /> },
    { title: t('enterpriseServices.requirements'), description: '企业需求发布与解决方案定制', icon: <MessageOutlined /> },
  ];

  const serviceItems = [
    { name: '市场调研分析', desc: '深入了解中阿市场需求与趋势' },
    { name: '品牌本地化策略', desc: '帮助企业实现品牌的跨文化传播' },
    { name: '跨境物流解决方案', desc: '优化物流链，降低运营成本' },
    { name: '合规运营指导', desc: '确保企业在中阿贸易中的合规性' },
    { name: '数字营销服务', desc: '精准触达目标客户群体' },
    { name: '售后支持体系', desc: '提升客户满意度和品牌忠诚度' },
  ];

  return (
    <div className="enterprise-services-page">
      <div className="module-header">
        <Title level={2}>{t('enterpriseServices.title')}</Title>
        <Paragraph>为中阿跨境电商企业提供全方位的专业服务解决方案，助力企业拓展国际市场</Paragraph>
      </div>

      <Row gutter={[16, 16]}>
        {services.map((service, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card hoverable>
              <div style={{ fontSize: '32px', marginBottom: 16, color: '#667eea' }}>
                {service.icon}
              </div>
              <Card.Meta title={service.title} description={service.description} />
            </Card>
          </Col>
        ))}
      </Row>

      <div style={{ margin: '40px 0' }}>
        <Title level={3}>{t('enterpriseServices.services')}</Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <List
              dataSource={serviceItems.slice(0, 3)}
              renderItem={(item) => (
                <List.Item>
                  <Card variant="plain">
                    <Card.Meta title={item.name} description={item.desc} />
                  </Card>
                </List.Item>
              )}
            />
          </Col>
          <Col xs={24} md={12}>
            <List
              dataSource={serviceItems.slice(3)}
              renderItem={(item) => (
                <List.Item>
                  <Card variant="plain">
                    <Card.Meta title={item.name} description={item.desc} />
                  </Card>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </div>

      <div style={{ margin: '40px 0', background: '#f9f9f9', padding: '40px', borderRadius: '8px' }}>
        <Title level={3} style={{ textAlign: 'center' }}>企业合作流程</Title>
        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          <Col xs={24} sm={6}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: 8, color: '#667eea' }}>1</div>
              <div>需求提交</div>
            </div>
          </Col>
          <Col xs={24} sm={6}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: 8, color: '#667eea' }}>2</div>
              <div>方案定制</div>
            </div>
          </Col>
          <Col xs={24} sm={6}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: 8, color: '#667eea' }}>3</div>
              <div>服务实施</div>
            </div>
          </Col>
          <Col xs={24} sm={6}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: 8, color: '#667eea' }}>4</div>
              <div>效果评估</div>
            </div>
          </Col>
        </Row>
      </div>

      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <Space size="middle">
          <Button type="primary" size="large">
            发布需求
          </Button>
          <Button size="large">
            咨询详情
          </Button>
        </Space>
      </div>
    </div>
  );
}

export default EnterpriseServicesPage;