import React, { FC, useEffect } from 'react';
import './App.css';
import { Layout } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { HeaderApp, ContentApp } from './index';
import { useTypedSelector } from '../common/hooks/use-typed-selector.hook';
import Loading from '../common/components/loading/loading.component';
import { auth } from '../store/actions/user-saga.action';

const Container = styled(Layout)`
    min-height: 100vh;
    display: grid;
    grid-template: minmax(60px, auto) 1fr minmax(70px, auto) / 1fr;
    grid-template-areas: 'header' 'content';
`;

const App: FC = () => {
    const dispatch = useDispatch();
    const { isAuth } = useTypedSelector((state) => state.auth);

    useEffect(() => {
        dispatch(auth());
    }, [dispatch]);

    if (!isAuth && localStorage.getItem('token')) {
        return <Loading />;
    }

    return (
        <Container>
            <HeaderApp />
            <ContentApp />
        </Container>
    );
};

export default App;
