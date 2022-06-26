import React, { FC, memo } from 'react';
import { Button, DatePicker, Form, Input } from 'antd';
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';
import {
    formItemAuthLayout,
    requiredRule,
    tailFormItemAuthLayout
} from '../../../common/constants/common.constants';
import { config } from './registration.constants';
import { RegistrationFormProps } from './registration.types';

const RegistrationForm: FC<RegistrationFormProps> = ({ form, onFinish }) => (
    <Form
        {...formItemAuthLayout}
        form={form}
        name="register"
        className="auth-form"
        onFinish={onFinish}
        scrollToFirstError
    >
        <Form.Item
            name="fullName"
            label="Фамилия Имя Отвество"
            rules={[
                {
                    pattern: new RegExp('^[-а-яА-Яa-zA-ZЁё\\s]*$'),
                    message: 'ФИО не должно содержать цифр!'
                },
                ...requiredRule
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="login"
            label="Логин"
            rules={[
                {
                    min: 3,
                    message: 'Минимальная длинная логина 3 символа!'
                },
                ...requiredRule
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="password"
            label="Пароль"
            rules={[
                {
                    min: 4,
                    message: 'Минимальная длинна пароля 4 символа'
                },
                ...requiredRule
            ]}
            hasFeedback
        >
            <Input.Password autoComplete="on" />
        </Form.Item>

        <Form.Item name="dateOfBirth" label="Дата рождения" {...config}>
            <DatePicker locale={locale} />
        </Form.Item>

        <Form.Item
            name="position"
            label="Занимаемая должность"
            rules={[
                {
                    type: 'string',
                    message: 'Введите Вашу должность!'
                },
                ...requiredRule
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item {...tailFormItemAuthLayout}>
            <Button type="primary" htmlType="submit">
                Зарегистрироваться
            </Button>
        </Form.Item>
    </Form>
);

export default memo(RegistrationForm);
