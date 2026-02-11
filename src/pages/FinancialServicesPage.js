import React from 'react';
import { Row, Col, Card, Typography, List, Statistic, Tag } from 'antd';
import { useTranslation } from 'react-i18next';
import { DollarOutlined, CreditCardOutlined, FileTextOutlined, BarChartOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

function FinancialServicesPage() {
  const { t } = useTranslation();

  const services = [
    { title: t('financialServices.crossBorderPayment'), description: '安全高效的多币种跨境支付解决方案', icon: <CreditCardOutlined /> },
    { title: t('financialServices.taxCompliance'), description: '专业的税务规划与合规服务', icon: <FileTextOutlined /> },
    { title: t('financialServices.financialAccounting'), description: '跨境财务核算与报表服务', icon: <BarChartOutlined /> },
    { title: t('financialServices.financing'), description: '为中阿跨境电商提供融资支持', icon: <DollarOutlined /> },
  ];

  const paymentMethods = [
    { name: '银行电汇', desc: '传统安全的大额支付方式' },
    { name: '第三方支付', desc: '便捷快速的小额支付解决方案' },
    { name: '数字货币', desc: '创新的跨境支付方式' },
    { name: '信用证', desc: '国际贸易中常用的支付方式' },
  ];

  const complianceAreas = [
    '中国税务合规',
    '阿拉伯国家税务合规',
    '国际税收协定应用',
    '跨境资金流动监管',
    '外汇管理规定',
    '反洗钱合规',
  ];

  return (
    <div className="financial-services-page">
      <div className="module-header">
        <Title level={2}>{t('financialServices.title')}</Title>
        <Paragraph>解决中阿跨境电商的财务合规与支付问题，提供全方位的金融服务</Paragraph>
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

      <Row gutter={[16, 16]} style={{ margin: '40px 0' }}>
        <Col xs={24} sm={6}>
          <Card>
            <Statistic title="支持币种" value={15} precision={0} />
          </Card>
        </Col>
        <Col xs={24} sm={6}>
          <Card>
            <Statistic title="支付通道" value={8} precision={0} suffix="个" />
          </Card>
        </Col>
        <Col xs={24} sm={6}>
          <Card>
            <Statistic title="费率优势" value={0.5} precision={1} suffix="%" />
          </Card>
        </Col>
        <Col xs={24} sm={6}>
          <Card>
            <Statistic title="结算时效" value={2} precision={0} suffix="天" />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title={t('financialServices.crossBorderPayment')}>
            <Title level={5}>{t('financialServices.multiCurrency')}</Title>
            <Paragraph>
              支持人民币、美元、欧元、阿拉伯里亚尔等多种货币，
              为企业提供灵活的支付选择，降低汇率风险。
            </Paragraph>
            
            <Title level={5}>{t('financialServices.exchangeRate')}</Title>
            <Paragraph>
              提供实时汇率查询和风险管理工具，
              帮助企业优化汇率成本，提高资金使用效率。
            </Paragraph>

            <div style={{ marginTop: 20 }}>
              <Title level={5}>支付方式</Title>
              {paymentMethods.map((method, index) => (
                <div key={index} style={{ marginBottom: 12, padding: 8, background: '#f9f9f9', borderRadius: 4 }}>
                  <strong>{method.name}</strong>：{method.desc}
                </div>
              ))}
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title={t('financialServices.taxCompliance')}>
            <Title level={5}>{t('financialServices.taxPlanning')}</Title>
            <Paragraph>
              根据中阿两国的税收政策，为企业制定合理的税收筹划方案，
              降低税务成本，提高企业竞争力。
            </Paragraph>
            
            <Title level={5}>{t('financialServices.financialReports')}</Title>
            <Paragraph>
              提供专业的跨境财务报表编制服务，
              确保符合两国的会计准则和监管要求。
            </Paragraph>

            <div style={{ marginTop: 20 }}>
              <Title level={5}>合规领域</Title>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {complianceAreas.map((area, index) => (
                  <Tag key={index} color="blue">{area}</Tag>
                ))}
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} md={12}>
          <Card title="财务分析与报告">
            <Paragraph>
              为企业提供全面的财务分析服务，包括盈利能力分析、偿债能力分析、运营能力分析等，
              帮助企业管理者做出科学的决策。
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="融资服务">
            <Paragraph>
              与多家金融机构合作，为中阿跨境电商企业提供各种融资产品，
              包括订单融资、库存融资、信用贷款等，解决企业资金周转问题。
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default FinancialServicesPage;