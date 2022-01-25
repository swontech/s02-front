import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";
import HeaderAuths from "./HeaderAuths";

const Container = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
    z-index: 10;
    .header-logo-wrapper {
        display: flex;
        align-items: center;
        .header-logo {
            margin-right: 6px;
        }
    }
`;

const Header = () => {
    return (
        <Container>
            <div>
                로고
            </div>
            <HeaderAuths />
        </Container>
    );
};

export default Header;