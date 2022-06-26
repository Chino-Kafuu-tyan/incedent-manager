import React, { FC } from 'react';
import { PriorityIconProps } from './priority-icon.types';
import { StyledIcon } from './priority-icon.style';

const PriorityIcon: FC<PriorityIconProps> = ({ priority }) => {
    let color = '';
    switch (priority) {
        case 'Normal':
            color = 'green';
            break;
        case 'Minor':
            color = 'yellow';
            break;
        case 'Major':
            color = 'orange';
            break;
        case 'Critical':
            color = 'red';
            break;
        default:
            color = 'gray';
            break;
    }
    return <StyledIcon shape="circle" size="small" color={color} />;
};

export default PriorityIcon;
