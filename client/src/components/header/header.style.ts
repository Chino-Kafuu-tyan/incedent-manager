import { Menu, Layout } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;

export const StyledMenu = styled(Menu)`
    & li {
        background-color: #9eb5ce;
    }
`;

export const StyledHeader = styled(Header)`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    background-color: #9eb5ce;
    grid-area: header;
`;
export const Logo = styled.div`
    color: white;
    font-size: 20px;
    font-family: Roboto, sans-serif;
`;
