import React, { FC, memo } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Incidents from './incidents/incidents.container';
import Login from './login/login.container';
import Registration from './registration/registration.container';
import { useTypedSelector } from '../../common/hooks/use-typed-selector.hook';
import { StyledContent } from './content.style';

const ContentApp: FC = () => {
    const { isAuth } = useTypedSelector((state) => state.auth);

    return (
        <StyledContent>
            {isAuth ? (
                <Switch>
                    <Route exact path="/" component={Incidents} />
                    <Redirect to="/" />
                </Switch>
            ) : (
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/registration" component={Registration} />
                    <Redirect to="/login" />
                </Switch>
            )}
        </StyledContent>
    );
};

export default memo(ContentApp);
