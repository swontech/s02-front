/** =====================================================
 *  @file_name      PostCodeModal.js
 *  @description    Daum PostCode 모달 컴포넌트
 *  
 *  @author         2022-03-15 MSH      
 *  @version        0.1
 *  @see            none
 *  
 *  @last_modify    2022-03-15 MSH
 *  
 ===================================================== */ 

import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';
import useModal from '../../hooks/useModal';

//* 스타일드 컴포넌트
const Container = styled.div`
    width: 600px;
    height: 500px;
`;

//* Daum PostCode 디자인 스타일 
const style = {
    //display: "block",
    //position: "absolute",
    width: "600px",
    height: "500px",
    padding: "32px",
};

const PostCodeModal = ({ submitPostCode, closeModal }) => {
    const onCompleteHandler = (data) => {
        submitPostCode(data);
        closeModal();
    };

    return (
        <Container>
            <DaumPostcode style={style} onComplete={onCompleteHandler} />
        </Container>
    )
};

export default PostCodeModal;