import React, { useState } from 'react';
import { Form, Input, Button, Typography, Card, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../features/userSlice';

const { Title } = Typography;

function LoginPage() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    dispatch(loginStart());
    
    // 模拟登录请求
    setTimeout(() => {
      try {
        // 这里应该是实际的API请求
        const user = {
          id: '1',
          username: values.username,
          email: `${values.username}@example.com`,
          role: 'user'
        };
        
        dispatch(loginSuccess(user));
        setLoading(false);
        // 登录成功后跳转到首页或之前的页面
      } catch (error) {
        dispatch(loginFailure(error.message));
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="login-page" style={{ padding: '50px 0', background: '#f0f2f5' }}>
      <Row justify="center" align="middle">
        <Col xs={24} sm={24} md={20} lg={18} xl={16} style={{ maxWidth: '800px' }}>
          <Card style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <Title level={2}>{t('login.title')}</Title>
            </div>
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: t('login.username') + '不能为空!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder={t('login.username')} />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: t('login.password') + '不能为空!' }]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder={t('login.password')} />
              </Form.Item>
              <Form.Item name="remember" valuePropName="checked">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{t('login.rememberMe')}</span>
                  <Link to="#">{t('login.forgotPassword')}</Link>
                </div>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading} block size="large">
                  {t('login.loginButton')}
                </Button>
              </Form.Item>
              <div style={{ textAlign: 'center' }}>
                {t('login.noAccount')} <Link to="/register">{t('common.register')}</Link>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default LoginPage;