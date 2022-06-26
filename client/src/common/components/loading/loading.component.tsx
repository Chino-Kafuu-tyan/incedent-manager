import React, { FC } from 'react';
import { SyncOutlined } from '@ant-design/icons';
import { StyledLoader } from './loading.style';

const Loading: FC = () => {
    const antIcon = <SyncOutlined spin />;
    return <StyledLoader size="large" indicator={antIcon} />;
};
export default Loading;
