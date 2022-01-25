import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.div`
    .header-user-profile {
        display: flex;
        align-items: center;
        height: 42px;
        padding: 0 6px 0 16px;
        border: 0;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
        border-radius: 21px;
        background-color: white;
        cursor: pointer;
        outline: none;
        &:hover {
            box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
        }
        .header-user-profile-image {
            margin-left: 8px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
    }
    .header-auth-buttons {
        .header-sign-up-button {
            height: 42px;
            margin-right: 8px;
            padding: 0 16px;
            border: 0;
            border-radius: 21px;
            background-color: white;
            cursor: pointer;
            outline: none;
            &:hover {
                background-color: gray;
            }
        }
        .header-sign-in-button {
            height: 42px;
            padding: 0 16px;
            border: 0;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
            border-radius: 21px;
            background-color: white;
            cursor: pointer;
            outline: none;
            &:hover {
                box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
            }
        }
    }
`;

const HeaderAuths = () => {
    return (
        <Container>
            <div className="header-auth-buttons">
                <button className="header-sign-up-button"
                        type="button"
                >
                    회원가입
                </button>

                <button className="header-sign-in-button"
                        type="button"
                >
                    로그인
                </button>
            </div>
        </Container>
    )
};

export default HeaderAuths;