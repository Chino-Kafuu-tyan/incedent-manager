import React, { FC, memo } from 'react';
import MenuItem from 'antd/lib/menu/MenuItem';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../store/actions/auth.action';
import { StyledHeader, StyledMenu, Logo } from './header.style';
import { RootState } from '../../store/reducers/root.reducer';
import { HeaderProps } from './header.types';

const HeaderApp: FC<HeaderProps> = ({
    isAuth,
    logoutUserAction,
    currentUser,
    locationURL
}) => (
    <StyledHeader>
        <Logo>Управление инцидентами</Logo>
        <StyledMenu theme="dark" mode="horizontal">
            {isAuth ? (
                <>
                    <MenuItem key="0">{currentUser}</MenuItem>
                    <MenuItem key="1">
                        <NavLink onClick={logoutUserAction} to="/login">
                            Выйти
                        </NavLink>
                    </MenuItem>
                </>
            ) : (
                <>
                    <MenuItem key="2">
                        <NavLink to="/login">Войти</NavLink>
                    </MenuItem>
                    <MenuItem key="3">
                        <NavLink to="/registration">Регистрация</NavLink>
                    </MenuItem>
                </>
            )}
        </StyledMenu>
    </StyledHeader>
);

const mapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
    currentUser: state.auth.currentUser,
    locationURL: window.location.pathname
});
export default memo(
    connect(mapStateToProps, {
        logoutUserAction: logoutUser
    })(HeaderApp)
);
