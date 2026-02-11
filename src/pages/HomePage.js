import React, { useEffect } from 'react';
import { Row, Col, Card, Typography, Button, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  UserOutlined, 
  BankOutlined, 
  TranslationOutlined, 
  DatabaseOutlined, 
  DollarOutlined 
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

function HomePage() {
  const { t } = useTranslation();

  useEffect(() => {
    // 设置Intersection Observer来监听元素进入视口
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // 观察所有带有动画类的元素
    const animatedElements = document.querySelectorAll(
      '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in'
    );
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const features = [
    {
      title: t('home.talentTraining'),
      description: t('home.talentTrainingDesc'),
      icon: <UserOutlined className="feature-icon" />,
      link: '/talent-training'
    },
    {
      title: t('home.enterpriseServices'),
      description: t('home.enterpriseServicesDesc'),
      icon: <BankOutlined className="feature-icon" />,
      link: '/enterprise-services'
    },
    {
      title: t('home.languageServices'),
      description: t('home.languageServicesDesc'),
      icon: <TranslationOutlined className="feature-icon" />,
      link: '/language-services'
    },
    {
      title: t('home.digitalServices'),
      description: t('home.digitalServicesDesc'),
      icon: <DatabaseOutlined className="feature-icon" />,
      link: '/digital-services'
    },
    {
      title: t('home.financialServices'),
      description: t('home.financialServicesDesc'),
      icon: <DollarOutlined className="feature-icon" />,
      link: '/financial-services'
    }
  ];

  return (
    <div className="home-page">
      {/* Banner Section */}
      <div className="home-banner">
        <div className="container">
          <Row gutter={[48, 32]} align="middle" justify="space-between">
            <Col xs={24} md={16} lg={14} className="fade-in-left">
              <div className="banner-content">
                <div className="banner-subtitle" style={{ 
                  fontSize: '18px', 
                  fontWeight: '500', 
                  marginBottom: '16px', 
                  opacity: 0.95 
                }}>
                  连接中阿，共创未来
                </div>
                <Title level={1} style={{ 
                  color: '#fff', 
                  fontSize: '52px', 
                  marginBottom: '24px', 
                  fontWeight: '800', 
                  letterSpacing: '-0.5px' 
                }}>
                  {t('home.title')}
                </Title>
                <Paragraph style={{ 
                  fontSize: '20px', 
                  color: '#fff', 
                  opacity: 0.95, 
                  marginBottom: '32px', 
                  lineHeight: '1.8' 
                }}>
                  {t('home.description')}
                </Paragraph>
                <Space size="large" style={{ marginTop: '16px' }}>
                  <Button type="primary" size="large" style={{ 
                    padding: '14px 40px', 
                    fontSize: '18px', 
                    fontWeight: '600', 
                    borderRadius: 'var(--border-radius-md)' 
                  }}>
                    {t('common.register')}
                  </Button>
                  <Button size="large" style={{ 
                    padding: '14px 40px', 
                    fontSize: '18px', 
                    fontWeight: '600', 
                    color: '#fff', 
                    borderColor: '#fff', 
                    borderRadius: 'var(--border-radius-md)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    {t('common.contactUs')}
                  </Button>
                </Space>
              </div>
            </Col>
            <Col xs={24} md={8} lg={10} className="fade-in-right">
              {/* Banner Image Placeholder */}
              <div className="banner-image">
                <div style={{ 
                  width: '100%', 
                  height: '350px', 
                  backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                  borderRadius: 'var(--border-radius-lg)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: '#fff', 
                  fontSize: '20px', 
                  fontWeight: 'bold',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: 'var(--shadow-lg)'
                }}>
                  中阿跨境电商平台
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="container">
          <div className="section-header">
            <Title level={2}>{t('home.features')}</Title>
            <Paragraph style={{ 
              textAlign: 'center', 
              maxWidth: '700px', 
              margin: '0 auto 48px auto', 
              color: 'var(--text-color-tertiary)' 
            }}>
              {t('home.featuresDescription') || '我们提供全方位的中阿跨境电商服务，助力企业拓展国际市场'}
            </Paragraph>
          </div>
          <Row gutter={[32, 32]} justify="center">
            {features.map((feature, index) => (
              <Col xs={24} sm={12} md={12} lg={8} xl={6} key={index} className="fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                <Link to={feature.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                  <Card className="feature-card">
                    <div className="feature-icon-container" style={{ 
                      marginBottom: '24px', 
                      textAlign: 'center' 
                    }}>
                      {feature.icon}
                    </div>
                    <Card.Meta 
                      title={<h3 style={{ 
                        fontSize: '20px', 
                        marginBottom: '12px', 
                        fontWeight: '600' 
                      }}>{feature.title}</h3>} 
                      description={<p style={{ 
                        color: 'var(--text-color-tertiary)', 
                        lineHeight: '1.7' 
                      }}>{feature.description}</p>} 
                    />
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="news-section">
        <div className="container">
          <div className="section-header">
            <Title level={2}>{t('home.latestNews')}</Title>
          </div>
          <Row gutter={[32, 32]} justify="center">
            <Col xs={24} md={12} lg={8} className="fade-in-up" style={{ animationDelay: '0.1s' }}>
              <Card className="news-card" style={{ 
                borderRadius: 'var(--border-radius-md)', 
                overflow: 'hidden',
                height: '100%'
              }}>
                <div className="news-date" style={{ 
                  padding: '8px 16px', 
                  backgroundColor: 'var(--bg-color-secondary)', 
                  borderBottom: '1px solid var(--border-color)',
                  fontSize: '14px',
                  color: 'var(--text-color-tertiary)'
                }}>
                  2025-12-20
                </div>
                <Card.Meta 
                  title={<h3 style={{ 
                    fontSize: '18px', 
                    marginBottom: '12px', 
                    fontWeight: '600' 
                  }}>中阿贸易额突破历史新高</h3>} 
                  description={<p style={{ 
                    color: 'var(--text-color-tertiary)', 
                    lineHeight: '1.7',
                    marginBottom: '16px' 
                  }}>据最新统计数据显示，中阿贸易额在过去一年中突破历史新高，同比增长超过25%。</p>} 
                />
                <Button type="link" size="small" style={{ color: 'var(--primary-color)' }}>
                  阅读更多 <span style={{ marginLeft: '4px' }}>→</span>
                </Button>
              </Card>
            </Col>
            <Col xs={24} md={12} lg={8} className="fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Card className="news-card" style={{ 
                borderRadius: 'var(--border-radius-md)', 
                overflow: 'hidden',
                height: '100%'
              }}>
                <div className="news-date" style={{ 
                  padding: '8px 16px', 
                  backgroundColor: 'var(--bg-color-secondary)', 
                  borderBottom: '1px solid var(--border-color)',
                  fontSize: '14px',
                  color: 'var(--text-color-tertiary)'
                }}>
                  2025-12-15
                </div>
                <Card.Meta 
                  title={<h3 style={{ 
                    fontSize: '18px', 
                    marginBottom: '12px', 
                    fontWeight: '600' 
                  }}>中阿跨境电商峰会在西安举行</h3>} 
                  description={<p style={{ 
                    color: 'var(--text-color-tertiary)', 
                    lineHeight: '1.7',
                    marginBottom: '16px' 
                  }}>中阿跨境电商峰会在西安外国语大学隆重举行，来自中阿两国的专家学者和企业代表齐聚一堂。</p>} 
                />
                <Button type="link" size="small" style={{ color: 'var(--primary-color)' }}>
                  阅读更多 <span style={{ marginLeft: '4px' }}>→</span>
                </Button>
              </Card>
            </Col>
            <Col xs={24} md={12} lg={8} className="fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Card className="news-card" style={{ 
                borderRadius: 'var(--border-radius-md)', 
                overflow: 'hidden',
                height: '100%'
              }}>
                <div className="news-date" style={{ 
                  padding: '8px 16px', 
                  backgroundColor: 'var(--bg-color-secondary)', 
                  borderBottom: '1px solid var(--border-color)',
                  fontSize: '14px',
                  color: 'var(--text-color-tertiary)'
                }}>
                  2025-12-10
                </div>
                <Card.Meta 
                  title={<h3 style={{ 
                    fontSize: '18px', 
                    marginBottom: '12px', 
                    fontWeight: '600' 
                  }}>平台新增阿拉伯语人才认证服务</h3>} 
                  description={<p style={{ 
                    color: 'var(--text-color-tertiary)', 
                    lineHeight: '1.7',
                    marginBottom: '16px' 
                  }}>平台最新推出阿拉伯语人才认证服务，为中阿跨境电商企业提供专业的语言人才评估。</p>} 
                />
                <Button type="link" size="small" style={{ color: 'var(--primary-color)' }}>
                  阅读更多 <span style={{ marginLeft: '4px' }}>→</span>
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Success Cases Section */}
      <div className="cases-section">
        <div className="container">
          <div className="section-header">
            <Title level={2}>{t('home.successCases')}</Title>
            <Paragraph style={{ 
              textAlign: 'center', 
              maxWidth: '700px', 
              margin: '0 auto 48px auto', 
              color: 'var(--text-color-tertiary)' 
            }}>
              查看我们的成功案例，了解我们如何帮助企业拓展中阿跨境电商市场
            </Paragraph>
          </div>
          <Row gutter={[32, 32]} justify="center">
            <Col xs={24} md={12} lg={10} className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Card 
                hoverable 
                className="case-card"
                style={{ borderRadius: 'var(--border-radius-md)', overflow: 'hidden' }}
                cover={
                  <div style={{ 
                    width: '100%', 
                    height: '220px', 
                    backgroundColor: 'linear-gradient(135deg, #e6f7ff 0%, #f0f5ff 100%)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'var(--primary-color)', 
                    fontSize: '18px', 
                    fontWeight: 'bold'
                  }}>
                    中阿跨境电商案例
                  </div>
                }
              >
                <div style={{ padding: '24px' }}>
                  <div className="case-tag" style={{ 
                    display: 'inline-block', 
                    padding: '4px 12px', 
                    backgroundColor: 'var(--bg-color-secondary)', 
                    color: 'var(--primary-color)', 
                    borderRadius: 'var(--border-radius-sm)', 
                    fontSize: '14px', 
                    marginBottom: '12px', 
                    fontWeight: '500'
                  }}>
                    电商平台
                  </div>
                  <Card.Meta 
                    title={<h3 style={{ 
                      fontSize: '20px', 
                      marginBottom: '12px', 
                      fontWeight: '600' 
                    }}>某中国电商企业成功开拓阿拉伯市场</h3>} 
                    description={<p style={{ 
                      color: 'var(--text-color-tertiary)', 
                      lineHeight: '1.7' 
                    }}>通过平台的语言服务和市场分析，成功将产品销往沙特、阿联酋等多个阿拉伯国家，销售额增长300%。</p>} 
                  />
                </div>
              </Card>
            </Col>
            <Col xs={24} md={12} lg={10} className="fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Card 
                hoverable 
                className="case-card"
                style={{ borderRadius: 'var(--border-radius-md)', overflow: 'hidden' }}
                cover={
                  <div style={{ 
                    width: '100%', 
                    height: '220px', 
                    backgroundColor: 'linear-gradient(135deg, #fff7e6 0%, #fff1d0 100%)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'var(--warning-color)', 
                    fontSize: '18px', 
                    fontWeight: 'bold'
                  }}>
                    跨境财务合规案例
                  </div>
                }
              >
                <div style={{ padding: '24px' }}>
                  <div className="case-tag" style={{ 
                    display: 'inline-block', 
                    padding: '4px 12px', 
                    backgroundColor: 'var(--bg-color-secondary)', 
                    color: 'var(--warning-color)', 
                    borderRadius: 'var(--border-radius-sm)', 
                    fontSize: '14px', 
                    marginBottom: '12px', 
                    fontWeight: '500'
                  }}>
                    财务管理
                  </div>
                  <Card.Meta 
                    title={<h3 style={{ 
                      fontSize: '20px', 
                      marginBottom: '12px', 
                      fontWeight: '600' 
                    }}>某阿拉伯企业实现财务合规化运营</h3>} 
                    description={<p style={{ 
                      color: 'var(--text-color-tertiary)', 
                      lineHeight: '1.7' 
                    }}>借助平台的财务服务，成功解决了跨境支付和税务合规问题，运营效率提升40%，成本降低20%。</p>} 
                  />
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default HomePage;