import React from 'react';
import { Row, Col, Card, Typography, List, Statistic } from 'antd';
import { useTranslation } from 'react-i18next';
import { DatabaseOutlined, BarChartOutlined, SecurityScanOutlined, LineChartOutlined } from '@ant-design/icons';
import ReactECharts from 'echarts-for-react';

const { Title, Paragraph } = Typography;

function DigitalServicesPage() {
  const { t } = useTranslation();

  const services = [
    { title: t('digitalServices.dataAnalysis'), description: '基于大数据的市场分析与销售预测', icon: <BarChartOutlined /> },
    { title: t('digitalServices.riskControl'), description: '智能风控系统，防范交易风险', icon: <SecurityScanOutlined /> },
    { title: t('digitalServices.supplyChain'), description: '数字化供应链管理与优化', icon: <DatabaseOutlined /> },
    { title: t('digitalServices.marketAnalysis'), description: '市场趋势分析与竞争情报', icon: <LineChartOutlined /> },
  ];

  const chartOption = {
    title: {
      text: '中阿贸易趋势分析',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['进口额', '出口额'],
      bottom: 0
    },
    xAxis: {
      type: 'category',
      data: ['2019', '2020', '2021', '2022', '2023', '2024']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '进口额',
        data: [320, 332, 301, 334, 390, 430],
        type: 'line',
        smooth: true,
        itemStyle: { color: '#667eea' }
      },
      {
        name: '出口额',
        data: [280, 290, 270, 310, 360, 400],
        type: 'line',
        smooth: true,
        itemStyle: { color: '#764ba2' }
      }
    ]
  };

  return (
    <div className="digital-services-page">
      <div className="module-header">
        <Title level={2}>{t('digitalServices.title')}</Title>
        <Paragraph>利用大数据和人工智能技术，为中阿跨境电商提供智能决策支持</Paragraph>
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
        <Col xs={24} sm={8}>
          <Card>
            <Statistic title="数据分析模型" value={20} precision={0} suffix="+" />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic title="数据处理量" value={1000000000} precision={0} suffix="条" />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic title="风险预警准确率" value={98.5} precision={1} suffix="%" />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title="数据分析服务">
            <List
              dataSource={[
                t('digitalServices.marketAnalysis'),
                t('digitalServices.salesAnalysis'),
                '消费者行为分析',
                '竞品对比分析',
                '价格趋势监测',
                '流量来源分析',
              ]}
              renderItem={(item) => (
                <List.Item>
                  <div style={{ paddingLeft: 8 }}>{item}</div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="智能风控服务">
            <List
              dataSource={[
                t('digitalServices.riskAssessment'),
                t('digitalServices.fraudDetection'),
                '交易异常监测',
                '信用评分系统',
                '合规性检查',
                '风险预警机制',
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

      <div style={{ margin: '40px 0' }}>
        <Card>
          <ReactECharts option={chartOption} style={{ height: 400 }} />
        </Card>
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title="供应链数字化">
            <Paragraph>
              通过区块链技术和物联网设备，实现供应链全流程可视化管理，
              提升供应链的透明度和效率，降低运营成本和风险。
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="智能决策支持">
            <Paragraph>
              基于机器学习算法的智能决策系统，为企业提供精准的市场预测和
              运营建议，帮助企业在激烈的市场竞争中保持优势。
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default DigitalServicesPage;