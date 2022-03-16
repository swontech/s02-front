/** =====================================================
 *  @file_name      useModal.js
 *  @description    Modal Portal 커스텀 훅스
 *  
 *  @author         2022-03-15 MSH      
 *  @version        0.1
 *  @see            none
 *  
 *  @last_modify    2022-03-15 MSH
 *  
===================================================== */
import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
 
//* 스타일드 컴포넌트
const Container = styled.div`
    width               : 100%;
    height              : 100%;
    display             : flex;
    justify-content     : center;
    align-items         : center;
    position            : fixed;
    top                 : 0;
    left                : 0;
    z-index             : 11;

    .modal-background {
        position        : absolute;
        width           : 100%;
        height          : 100%;
        background-color: rgba(0, 0, 0, 0.75);
    }
`;


const useModal = () => {
    //* state상태 값
    const [modalOpened, setModalOpened] = React.useState(false);

    //* 모달 open
    const openModal = () => {
        setModalOpened(true);
    };

    //* 모달 close
    const closeModal = () => {
        setModalOpened(false);
    };

    //* 모달 포탈
    const ModalPortal = ({ children }) => {
        const ref = React.useRef();

        // 마운트 상태
        const [mounted, setMounted] = React.useState(false);

        React.useEffect(() => {
            setMounted(true);
            if(document) {
                // 전달받은 모달을 띄울 dom 
                const dom = document.querySelector("#root-modal");
                ref.current = dom;
            }
        }, []);

        if(ref.current && mounted && modalOpened) {
            return createPortal(
                <Container>
                    <div className="modal-background" role="presentation" onClick={closeModal} />
                    {children}
                </Container>,
                ref.current
            );
        }
        return null;
    };

    return {  
        openModal,  
        closeModal,
        ModalPortal
    };
};
export default useModal;