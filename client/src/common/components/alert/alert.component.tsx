import React, { FC } from 'react';
import { Alert } from 'antd';
import styled from 'styled-components';

interface AlertMessageProps {
    message?: string;
}
const StyledAlert = styled(Alert)`
    text-align: center;
    z: 1;
`;
const AlertMessage: FC<AlertMessageProps> = ({ message }) => (
    <StyledAlert message={message} type="info" closeText="X" />
);

export default AlertMessage;
