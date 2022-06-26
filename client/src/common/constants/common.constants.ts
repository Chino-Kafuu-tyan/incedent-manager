import { Moment } from 'moment';

export const formatDate = (date: Moment): string => date.format('Do MMMM YYYY');

export const formItemAuthLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
    }
};
export const tailFormItemAuthLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0
        },
        sm: {
            span: 16,
            offset: 8
        }
    }
};

export const requiredRule = [{ required: true, message: 'Обязательное поле!' }];
