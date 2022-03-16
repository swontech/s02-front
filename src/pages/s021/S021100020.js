/** =====================================================
 *  @file_name      단체등록/수정 화면(S021100020.js)
 *  @description    출입관리 시스템을 사용하는 단체의 최초 가입시 사용하는 웹화면
 * 
 *  @author         2022-03-15 MSH      
 *  @version        0.1
 *  @see            none
 *  
 *  @last_modify    2022-03-15 MSH
 *  
 ===================================================== */ 

import React from 'react';
import styled from 'styled-components';
import Input from '../../components/element/Input';
import Selector from '../../components/element/Selector';
import PostCodeModal from '../common/PostCodeModal';
import useModal from '../../hooks/useModal';
import {ReactComponent as SearchIcon} from '../../lib/images/SearchIcon.svg';
import { emailDomainList, hpNoList } from '../../lib/staticData/data';

//* 스타일드 컴포넌트
const Container = styled.div`

    width: 800px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    padding: 8px;

    border: 1px solid red;

    // 개별 input 영역
    .input-wrapper {
         
    }

    // 가로 정렬 inputbox combo
    .horizon-align-input-wrapper {
        display: flex;
        justify-content: space-between;
    }

    // 단체 정보 입력 영역
    .org-container {

    };

    // 대표자 정보 입력 영역
    .rep-container {

    };

    // 하단 버튼 영역
    .button-wrapper {

    }
`;

const S021100020 = () => {
    //* Modal 커스텀 훅
    const { openModal, ModalPortal, closeModal } = useModal();

    //* state 상태 값
    // 단체 정보 state
    const [orgName, setOrgName] = React.useState("");
    const [zipCode, setZipCode] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [extraAddress, setExtraAddress] = React.useState("");
    const [firstTelNo, setFirstTelNo] = React.useState("");
    const [middleTelNo, setMiddleTelNo] = React.useState("");
    const [lastTelNo, setLastTelNo] = React.useState("");
    // 대표자 정보 state
    const [memberName, setMemberName] = React.useState("");
    const [firstHpNo, setFirstHpNo] = React.useState("");
    const [middleHpNo, setMiddleHpNo] = React.useState("");
    const [lastHpNo, setLastHpNo] = React.useState("");
    const [emailAddress, setEmailAddress] = React.useState("");
    const [emailDomain, setEmailDomain] = React.useState("");


    //* 인풋 값 변경 감지
    // 단체 정보
    const onChangeOrgName = (e) => {setOrgName(e.target.value)};
    const onChangeZipCode = (e) => {setZipCode(e.target.value)};
    const onChangeAddress = (e) => {setAddress(e.target.value)};
    const onChangeExtraAddress = (e) => {setExtraAddress(e.target.value)};
    const onChangeFirstTelNo = (e) => {setFirstTelNo(e.target.value)};
    const onChangeMiddleTelNo = (e) => {setMiddleTelNo(e.target.value)};
    const onChangeLastTelNo = (e) => {setLastTelNo(e.target.value)};
    // 대표자 정보
    const onChangeMemberName = (e) => {setMemberName(e.target.value)};
    const onChangeFirstHpNo = (e) => {setFirstHpNo(e.target.value)};
    const onChangeMiddleHpNo = (e) => {setMiddleHpNo(e.target.value)};
    const onChangeLastHpNo = (e) => {setLastHpNo(e.target.value)};
    const onChangeEmailAddress = (e) => {setEmailAddress(e.target.value)};
    const onChangeEmailDomain = (e) => {setEmailDomain(e.target.value)};


    //* 모달로 띄워진 daum postcode의 검색 결과를 받는다.
    const postCodeHandler = (data) => {
        // 기본주소
        let address = data.address;

        // 건물명이 있는 경우 주소뒤에 괄호로 감싼 후 추가한다.
        if(data.buildingName !== "") {
            address += " (" + data.buildingName + ")";
        };
        setZipCode(data.zonecode);
        setAddress(address);
        setExtraAddress("");
    };

    //* 저장 버튼 클릭
    const onSubmitHandler = async() => {
        alert("개발 중")
    };
        
    return (
        <Container>
            {/* 단체 정보 입력 영역 */}
            <div className='org-wrapper'>
                <div className='input-wrapper'>
                    <p>단체명</p>
                    <Input 
                        type="text"
                        placeholder="단체명"
                        value={orgName}
                        onChange={onChangeOrgName}
                    />
                </div>
                
                <div className='horizon-align-input-wrapper'>
                    <Input 
                        type="text" 
                        placeholder="우편번호" 
                        value={zipCode}
                        onChange={onChangeZipCode}

                        icon={<SearchIcon 
                                height="100%"
                                width="100%"
                                onClick={openModal}
                            />}
                    />
                    <Input
                        type="text"
                        placeholder='주소'
                        value={address}
                        onChange={onChangeAddress}
                    />
                    <Input
                        type="text"
                        placeholder='상세주소'
                        value={extraAddress}
                        onChange={onChangeExtraAddress}
                    />
                </div>
                <div className='horizon-align-input-wrapper'>
                    <Selector
                        value={firstTelNo}
                        onChange={onChangeFirstTelNo}
                        options={hpNoList}
                    />
                    <Input
                        type="text"
                        value={middleTelNo}
                        onChange={onChangeMiddleTelNo}
                    />
                    <Input
                        type="text"
                        value={lastTelNo}
                        onChange={onChangeLastTelNo}
                    />
                </div>
            </div>

            {/* 대표자 정보 입력 영역 */}
            <div className='rep-wrapper'>
                <Input
                    type="text"
                    placeholder="대표자성명"
                    value={memberName}
                    onChange={onChangeMemberName}
                />
                <div className='horizon-align-input-wrapper'>
                    <Selector
                        value={firstHpNo}
                        onChange={onChangeFirstHpNo}
                        options={hpNoList}
                    />
                    <Input
                        type="text"
                        value={middleHpNo}
                        onChange={onChangeMiddleHpNo}
                    />
                    <Input
                        type="text"
                        value={lastHpNo}
                        onChange={onChangeLastHpNo}
                    />
                </div>
                <div className='horizon-align-input-wrapper'>
                    <Input
                        type="text"
                        value={emailAddress}
                        onChange={onChangeEmailAddress}
                    />
                    <Selector
                        value={emailDomain}
                        onChange={onChangeEmailDomain}
                        options={emailDomainList}
                    />
                </div>
            </div>

            {/* 하단 버튼 영역 */}
            <div className='button-wrapper'>
                <button type="button" onClick={onSubmitHandler}>저장</button>
            </div>


            {/* 모달 팝업 portal */}
            <ModalPortal>
                <PostCodeModal 
                    submitPostCode={postCodeHandler}
                    closeModal={closeModal}
                />
            </ModalPortal>
        </Container>
     
    )
};
export default S021100020;