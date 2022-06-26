import React, { FC, useCallback } from 'react';
import { connect } from 'react-redux';
import { Callbacks } from '../../../../node_modules/rc-field-form/lib/interface';
import { loginAction } from '../../../store/actions/user-saga.action';
import AlertMessage from '../../../common/components/alert/alert.component';
import { LoginProps, LoginValues } from './login.types';
import { RootState } from '../../../store/reducers/root.reducer';
import LoginForm from './login.component';

const Login: FC<LoginProps> = ({ alert, loginActionProps }) => {
    const onFinish: Callbacks<LoginValues>['onFinish'] = useCallback(
        (values): void => {
            loginActionProps(values);
        },
        // eslint-disable-next-line
        []
    );

    return (
        <>
            {alert && <AlertMessage message={alert?.message} />}
            <LoginForm onFinish={onFinish} />
        </>
    );
};
const mapStateToProps = (state: RootState) => ({
    alert: state.alertMessage.alert
});
export default connect(mapStateToProps, { loginActionProps: loginAction })(
    Login
);
