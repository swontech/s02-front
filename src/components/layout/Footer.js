import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    bottom: 0;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 80px;
    padding: 0 80px;
`;

const Footer = () => {
    const routingPath = window.location.pathname;

    if(routingPath === "/s021200010") {
        return null;
    } else {
        return (
            <Container>
                footer
            </Container>
        );
    }
};

export default Footer;