import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    input {
        width: 313px;
        height:30px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 2px solid white;
        margin-bottom: 10px;
        background-color: transparent;
        color: #333;
        width: 100%;
        height: 30px;
        margin-bottom: 10%;
        outline: none;
        font-size: 18px;
        ::placeholder{
            color:white;
            opacity:0.5;
            font-size:18px
        }
    }
    .img-wrap {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 2%;
        top: 10%;
    }
`;

const LoginInput = ({ icon, ...props }) => {
    return (
        <Container>
            <input { ...props }/>
            <div className="img-wrap">{icon}</div>
        </Container>
    )
};

export default LoginInput;