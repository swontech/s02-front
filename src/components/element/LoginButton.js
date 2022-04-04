import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.div`
    background-color: ${palette.mint2};
    border: none;
    border-radius: 50px;
    width: 100%;
    height: 70px;
    color: white;
    font-size: 2em;
    box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.5);
    margin-top: 8%;
    text-align: center;
    line-height: 70px;
    cursor: pointer;

    :active {
        background-color: ${palette.activeMint};
    }
`;


const LoginButton = ({ ...props }) => {
    return (
        <Container {...props}>
            시작하기
        </Container>
    );
};
export default LoginButton;
