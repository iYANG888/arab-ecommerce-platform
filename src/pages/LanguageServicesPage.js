import React from 'react';
import { Row, Col, Card, Typography, List, Progress } from 'antd';
import { useTranslation } from 'react-i18next';
import { TranslationOutlined, BookOutlined, MessageOutlined, EditOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

function LanguageServicesPage() {
  const { t } = useTranslation();

  const services = [
    { title: t('languageServices.translation'), description: '专业的中阿双语翻译服务', icon: <TranslationOutlined /> },
    { title: t('languageServices.localization'), description: '网站、产品的本地化解决方案', icon: <EditOutlined /> },
    { title: t('languageServices.textTranslation'), description: '文档、合同等文本翻译服务', icon: <BookOutlined /> },
    { title: t('languageServices.simultaneousInterpretation'), description: '会议同声传译服务', icon: <MessageOutlined /> },
  ];

  const languages = [
    { name: '中文', proficiency: 100 },
    { name: '阿拉伯语', proficiency: 100 },
    { name: '英语', proficiency: 95 },
    { name: '法语', proficiency: 85 },
    { name: '西班牙语', proficiency: 80 },
  ];

  const serviceAreas = [
    '电商平台本地化',
    '产品说明书翻译',
    '市场营销材料',
    '法律合同文本',
    '财务报表翻译',
    '技术文档翻译',
    '网站内容翻译',
    '移动应用本地化',
  ];

  return (
    <div className="language-services-page">
      <div className="module-header">
        <Title level={2}>{t('languageServices.title')}</Title>
        <Paragraph>解决中阿贸易中的语言壁垒，提供专业的语言翻译与本地化服务</Paragraph>
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
        <Title level={3}>覆盖语言</Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            {languages.map((lang, index) => (
              <div key={index} style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span>{lang.name}</span>
                  <span>{lang.proficiency}%</span>
                </div>
                <Progress percent={lang.proficiency} strokeColor="#667eea" />
              </div>
            ))}
          </Col>
          <Col xs={24} md={12}>
            <Card title="服务优势">
              <List
                dataSource={[
                  '专业的中阿双语人才团队',
                  '严格的质量控制流程',
                  '快速响应的服务机制',
                  '丰富的行业经验积累',
                  '技术与人工结合的翻译方案',
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <div style={{ paddingLeft: 8 }}>{item}</div>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>

      <div style={{ margin: '40px 0' }}>
        <Title level={3}>服务领域</Title>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {serviceAreas.map((area, index) => (
            <div key={index} style={{ padding: '8px 16px', background: '#f0f2f5', borderRadius: '4px', color: '#333' }}>
              {area}
            </div>
          ))}
        </div>
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title="翻译流程">
            <List
              dataSource={[
                '接收需求与评估',
                '分配专业译员',
                '翻译与校对',
                '质量控制与审核',
                '交付与售后',
              ]}
              renderItem={(item, index) => (
                <List.Item>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#667eea', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 12 }}>
                      {index + 1}
                    </div>
                    <span>{item}</span>
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="本地化服务">
            <Paragraph>
              提供全面的本地化服务，包括网站本地化、应用本地化、品牌本地化等，
              确保企业产品和服务能够适应不同文化背景的市场需求，提升用户体验和市场竞争力。
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default LanguageServicesPage;