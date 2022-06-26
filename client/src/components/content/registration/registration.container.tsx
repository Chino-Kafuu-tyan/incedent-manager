import React, { FC, useCallback } from 'react';
import { Form } from 'antd';
import { connect } from 'react-redux';
import { Callbacks } from '../../../../node_modules/rc-field-form/lib/interface';
import { registration } from '../../../store/actions/user-saga.action';
import AlertMessage from '../../../common/components/alert/alert.component';
import { formatDate } from '../../../common/constants/common.constants';
import { RegistrationProps, RegistrationValues } from './registration.types';
import RegistrationForm from './registration.component';
import { RootState } from '../../../store/reducers/root.reducer';

const Registration: FC<RegistrationProps> = ({ alert, registrationAction }) => {
    const [form] = Form.useForm();

    const onFinish: Callbacks<RegistrationValues>['onFinish'] = useCallback(
        (values): void => {
            const { dateOfBirth, ...restParams } = values;
            const formatdateOfBirth = formatDate(dateOfBirth);
            registrationAction({
                ...restParams,
                dateOfBirth: formatdateOfBirth
            });
            form.resetFields();
        },
        // eslint-disable-next-line
        []
    );

    return (
        <>
            {alert && <AlertMessage message={alert?.message} />}
            <RegistrationForm form={form} onFinish={onFinish} />
        </>
    );
};
const mapStateToProps = (state: RootState) => ({
    alert: state.alertMessage.alert
});
export default connect(mapStateToProps, { registrationAction: registration })(
    Registration
);
