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
import PostCodeModal from '../common/PostCodeModal';
import useModal from '../../hooks/useModal';
import GroupView from './GroupView';
import BossView from './BossView';
import { useDispatch } from 'react-redux';
import { groupRegistAction } from '../../redux/reducers/groupRegistReducer';

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
    const { ModalPortal, closeModal } = useModal();

    /**redux */
    const dispatch = useDispatch()
    const { setInfoState } = groupRegistAction

    //* 모달로 띄워진 daum postcode의 검색 결과를 받는다.
    const postCodeHandler = (data) => {
        // 기본주소
        let address = data.address;

        // 건물명이 있는 경우 주소뒤에 괄호로 감싼 후 추가한다.
        if (data.buildingName !== "") {
            address += " (" + data.buildingName + ")";
        };
        dispatch(setInfoState({ target: 'zipcode', value: data.zonecode }))
        dispatch(setInfoState({ target: 'address', value: address }))
        dispatch(setInfoState({ target: 'extreAddress', value: "" }))
    };

    //* 저장 버튼 클릭
    const onSubmitHandler = async () => {
        alert("개발 중")
    };

    return (
        <Container>
            {/* 단체 정보 입력 영역 */}
            <GroupView />
            {/* 대표자 정보 입력 영역 */}
            <BossView />
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