import React from 'react';
import { Row, Col, Card, Typography, List, Tag } from 'antd';
import { useTranslation } from 'react-i18next';
import { BookOutlined, UserOutlined, TrophyOutlined, ShopOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

function TalentTrainingPage() {
  const { t } = useTranslation();

  const courses = [
    { title: t('talentTraining.languageCourses'), description: '阿拉伯语、英语等多语种专业课程', icon: <BookOutlined /> },
    { title: t('talentTraining.ecommerceCourses'), description: '跨境电商运营与管理课程', icon: <ShopOutlined /> },
    { title: t('talentTraining.financeCourses'), description: '跨境财务与税务合规课程', icon: <UserOutlined /> },
    { title: t('talentTraining.riskCourses'), description: '智能风控与数据分析课程', icon: <TrophyOutlined /> },
  ];

  const trainingPrograms = [
    { title: '中阿跨境电商精英班', duration: '3个月', level: '高级', tags: ['语言', '电商', '财务'] },
    { title: '阿拉伯语商务口语培训', duration: '1个月', level: '初级', tags: ['语言'] },
    { title: '跨境电商数据分析实战', duration: '2个月', level: '中级', tags: ['电商', '数据'] },
    { title: '中阿贸易合规与风控', duration: '1.5个月', level: '高级', tags: ['财务', '风控'] },
  ];

  return (
    <div className="talent-training-page">
      <div className="module-header">
        <Title level={2}>{t('talentTraining.title')}</Title>
        <Paragraph>{t('talentTraining.description')}</Paragraph>
      </div>

      <Row gutter={[16, 16]}>
        {courses.map((course, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card hoverable>
              <div style={{ fontSize: '32px', marginBottom: 16, color: '#667eea' }}>
                {course.icon}
              </div>
              <Card.Meta title={course.title} description={course.description} />
            </Card>
          </Col>
        ))}
      </Row>

      <div style={{ margin: '40px 0' }}>
        <Title level={3}>{t('talentTraining.trainings')}</Title>
        <List
          grid={{ gutter: 16, column: 1, md: 2, lg: 3 }}
          dataSource={trainingPrograms}
          renderItem={(program) => (
            <List.Item>
              <Card hoverable>
                <Card.Meta title={program.title} />
                <div style={{ marginTop: 12 }}>
                  <Tag color="blue">{program.duration}</Tag>
                  <Tag color="green">{program.level}</Tag>
                  <div style={{ marginTop: 8 }}>
                    {program.tags.map((tag, index) => (
                      <Tag key={index}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </Card>
            </List.Item>
          )}
        />
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title={t('talentTraining.learningManagement')}>
            <Paragraph>完善的学习管理系统，提供在线学习、考试认证、证书颁发等服务，帮助学习者系统化提升跨境电商专业能力。</Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title={t('talentTraining.internship')}>
            <Paragraph>与中阿知名企业合作，为优秀学员提供实习就业机会，搭建人才与企业之间的桥梁。</Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default TalentTrainingPage;