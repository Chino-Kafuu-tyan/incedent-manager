import Avatar from 'antd/lib/avatar/avatar';
import styled from 'styled-components';
import { StyledIconProps } from './priority-icon.types';

export const StyledIcon = styled(Avatar)`
    margin: 5px;
    background-color: ${(props: StyledIconProps) => props.color};
`;
