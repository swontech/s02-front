import React from "react";
import styled from "styled-components";
import Input from "../../components/element/LoginInput";
import {ReactComponent as VisibleEyeIcon } from "../../lib/images/VisibleEyeIcon.svg";
import {ReactComponent as InvisibleEyeIcon} from "../../lib/images/InvisibleEyeIcon.svg";
import {ReactComponent as LoginBackground} from "../../lib/images/LoginBackground.svg"
import LoginButton from "../../components/element/LoginButton";
import { S021200010API } from "../../api/s021/s021200010API";

const Container = styled.div`

    h1 {
        font-size: 3vw;
        font-family: "Apple SD Gothic Neo","NotoSansKR", "NanumMyeongjo" ;
        font-weight: 200;
        color: rgb(255, 255, 255);
        text-align: center;
        z-index: 7;
        margin-top: 10px;
        margin-bottom: 30%;
    }

    .login-box-wrapper {
        position: fixed;
        left: 38%;
        top: 27%;
        width: 24%;
        height: 60%;
    }
    .find-pwd-btn-wrapper {
        color:white;
        font-size:12px;
        text-align:center;
        font-weight:100;
        cursor: pointer;
        margin-top : 50px;
        :hover{
            opacity:0.5;
        }
    }
    .background-wrapper {
       
        position: fixed;
        width:100%
    
    }
`;



const S021200010 = () => {
    const [hidePwd, setHidePwd] = React.useState(true);
    const [email, setEmail] = React.useState("");
    const [pwd, setPwd] = React.useState("");

    const onChangeEmail = (e) => { setEmail(e.target.value) };
    const onChangePwd = (e) => { setPwd(e.target.value) };

    const hidePwdHandler = () => {
        setHidePwd(!hidePwd);
    };

    const onClickLoginButton = async() => {
        const param = {
            email: email,
            pwd: pwd,
        }

        // TODO: 이후 로직 추가
        const result = await S021200010API.login(param);
        if(result === 200) {
            alert("로그인에 성공했습니다.")
        }
    };

    return (
        <Container>
            <div className="background-wrapper"> 
                <LoginBackground />
                
            </div>
            
            <div className="login-box-wrapper">
                <h1>
                    환영합니다
                </h1>
                <Input 
                    type="text"
                    value={email}
                    onChange={onChangeEmail}
                    placeholder="아이디를 입력해주세요."
                />
                <Input 
                    value={pwd}
                    onChange={onChangePwd}
                    placeholder="비밀번호를 입력해주세요."
                    type={hidePwd ? "password": "text"}
                    icon={hidePwd ? <VisibleEyeIcon onClick={hidePwdHandler}/> : <InvisibleEyeIcon onClick={hidePwdHandler}/>}
                />

                <div className="find-pwd-btn-wrapper" onClick={() => alert("test")}>
                    비밀번호를 잊으셨나요?
                </div>
                <LoginButton onClick={onClickLoginButton} />
            </div>
        </Container>
            
    );
};

export default S021200010;