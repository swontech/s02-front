import React from "react";
import styled from "styled-components";
import { retrieveAPI } from "../api/s022/s022200010";
import palette from "../styles/palette";

const Container = styled.form`
    
`;

const S022200010 = () => {
    const onSubmitRetrieve = async(event) => {
        event.preventDefault();

        try {
            const retrieveBody = {
                
            };
            const res = await retrieveAPI(retrieveBody);
            alert(res);
        } catch(e) {
            console.log(e);
        }
    }


    return (
        <Container onSubmit={onSubmitRetrieve}>
            <button type="submit">검색</button> 
        </Container>
    );
};

export default S022200010;