import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 32px;
    position: relative;
    padding: 3px;

    input {
        width: 100%;
        height: 100%;
        outline: none;
        font-size: 14px;
        padding-left: 8px;
        border: 0.5px solid black;
        border-radius: 2px;
        
    };

    .input-icon-wrapper {
        display: inline-block;
        position: absolute;
        right: 6px;
        top: 6px;
        height: 20px;
        width: 20px;
        cursor: ${({ iconExist }) => (iconExist ? "pointer" : "")}
    };
`;

const Input = ({ icon, ...props }) => {
    return (
        <Container iconExist={!!icon}>
            <input {...props} />
            <div className="input-icon-wrapper">{icon}</div>
        </Container>
    )
};
export default Input;