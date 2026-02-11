import React, { useState } from 'react';
import { Form, Input, Button, Typography, Card, Row, Col, Select } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, LockOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const { Title } = Typography;
const { Option } = Select;

function RegisterPage() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    
    // 模拟注册请求
    setTimeout(() => {
      setLoading(false);
      // 注册成功后跳转到登录页或首页
    }, 1500);
  };

  return (
    <div className="register-page" style={{ padding: '50px 0', background: '#f0f2f5' }}>
      <Row justify="center" align="middle">
        <Col xs={24} sm={24} md={20} lg={18} xl={16} style={{ maxWidth: '800px' }}>
          <Card style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <Title level={2}>{t('register.title')}</Title>
            </div>
            <Form
              name="register"
              initialValues={{ userType: 'individual' }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: t('register.username') + '不能为空!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder={t('register.username')} />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: t('register.email') + '不能为空!' },
                  { type: 'email', message: '请输入有效的邮箱地址!' }
                ]}
              >
                <Input prefix={<MailOutlined />} placeholder={t('register.email')} />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[{ required: true, message: t('register.phone') + '不能为空!' }]}
              >
                <Input prefix={<PhoneOutlined />} placeholder={t('register.phone')} />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: t('register.password') + '不能为空!' },
                  { min: 6, message: '密码长度不能少于6个字符!' }
                ]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder={t('register.password')} />
              </Form.Item>
              <Form.Item
                name="confirmPassword"
                dependencies={['password']}
                rules={[
                  { required: true, message: t('register.confirmPassword') + '不能为空!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('两次输入的密码不一致!'));
                    },
                  }),
                ]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder={t('register.confirmPassword')} />
              </Form.Item>
              <Form.Item
                name="userType"
                rules={[{ required: true, message: t('register.userType') + '不能为空!' }]}
              >
                <Select placeholder={t('register.userType')}>
                  <Option value="individual">{t('register.individual')}</Option>
                  <Option value="enterprise">{t('register.enterprise')}</Option>
                  <Option value="institution">{t('register.institution')}</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading} block size="large">
                  {t('register.registerButton')}
                </Button>
              </Form.Item>
              <div style={{ textAlign: 'center' }}>
                {t('register.haveAccount')} <Link to="/login">{t('common.login')}</Link>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default RegisterPage;