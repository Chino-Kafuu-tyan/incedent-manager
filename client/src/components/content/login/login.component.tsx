import React, { FC, memo } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Button, Input } from 'antd';
import {
    formItemAuthLayout,
    tailFormItemAuthLayout
} from '../../../common/constants/common.constants';
import { LoginFormProps } from './login.types';

const LoginForm: FC<LoginFormProps> = ({ onFinish }) => (
    <Form
        name="normal_login"
        className="auth-form"
        {...formItemAuthLayout}
        onFinish={onFinish}
    >
        <Form.Item
            name="login"
            label="Логин"
            rules={[
                {
                    required: true,
                    message: 'Пожалуйста, введите Ваш логин!'
                }
            ]}
        >
            <Input prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item
            name="password"
            label="Пароль"
            rules={[
                {
                    required: true,
                    message: 'Пожалуйста, введите Ваш пароль!'
                }
            ]}
        >
            <Input
                autoComplete="on"
                prefix={<LockOutlined />}
                type="password"
            />
        </Form.Item>

        <Form.Item {...tailFormItemAuthLayout}>
            <Button type="primary" htmlType="submit">
                Войти
            </Button>
        </Form.Item>
    </Form>
);

export default memo(LoginForm);
