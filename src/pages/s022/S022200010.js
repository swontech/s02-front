import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { retrieveAPI } from "../../api/s022/s022200010";
import palette from "../../styles/palette";
import SideBar from "./SideBar";

const Container = styled.form`
    
`;

const S022200010 = () => {
    const onSubmitRetrieve = async (event) => {
        event.preventDefault();

        try {
            const retrieveBody = {

            };
            const res = await retrieveAPI(retrieveBody);
            alert(res);
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <>
            <SideBar />
            <div class="wrap">
                <div class="inner">

                    <div class="top">

                        <h1>단체관리</h1><p class="subTitle">이곳에서 새로 단체를 등록하거나 관리할 수 있습니다. </p>

                        <div class="user-wrap">

                            <p class="userName">username-123</p>
                            <div class="userProfile"><img src="img/userProfile.svg" /></div>
                        </div>

                    </div>


                    <div class="searchBox">
                        <input class="search" type="search" maxlength="20" placeholder="검색하기" />
                        <div class="searchBtn"><i class="fa-solid fa-magnifying-glass"></i></div>
                    </div>


                    <div class="iconWrap">
                        <a href="#" onclick="window.open('registration.html', '_blank', 'width=700 height=700')">
                            <div class="icons registIcon"><p>등록</p><img src="img/registIcon.svg" />
                            </div></a>
                        <div class="icons editIcon"><p>수정</p><img src="img/editIcon.svg" /></div>
                        <div class="icons deleteIcon"><p>삭제</p><img src="img/deleteIcon.svg" /></div>
                        <div class="icons downloadIcon"><p>다운로드</p><img src="img/downloadIcon.svg" /></div>
                    </div>

                    <table>
                        <th>선택</th>
                        <th>번호</th>
                        <th>단체명</th>
                        <th>대표자</th>
                        <th>연락처</th>
                        <th>대표자 메일</th>
                        <th>회원수</th>
                        <tr>
                            <td><input class="checkbox" type="radio" /></td>
                            <td>1</td>
                            <td>A교회</td>
                            <td>대표자A</td>
                            <td>010-0000-0000</td>
                            <td>qwerty123@naver.com</td>
                            <td>100명</td>
                        </tr>
                        <tr>
                            <td><input class="checkbox" type="radio" /></td>
                            <td>2</td>
                            <td>B교회</td>
                            <td>대표자B</td>
                            <td>010-0000-0000</td>
                            <td>qwerty123@naver.com</td>
                            <td>100명</td>
                        </tr>
                        <tr>
                            <td><input class="checkbox" type="radio" /></td>
                            <td>3</td>
                            <td>C교회</td>
                            <td>대표자C</td>
                            <td>010-0000-0000</td>
                            <td>qwerty123@naver.com</td>
                            <td>100명</td>
                        </tr>
                        <tr>
                            <td><input class="checkbox" type="radio" /></td>
                            <td>4</td>
                            <td>D교회</td>
                            <td>대표자D</td>
                            <td>010-0000-0000</td>
                            <td>qwerty123@naver.com</td>
                            <td>100명</td>
                        </tr>
                        <tr>
                            <td><input class="checkbox" type="radio" /></td>
                            <td>5</td>
                            <td>E교회</td>
                            <td>대표자E</td>
                            <td>010-0000-0000</td>
                            <td>qwerty123@naver.com</td>
                            <td>100명</td>
                        </tr>
                    </table>

                    <div class="pagination">
                        <div><i class="fa-solid fa-angle-left"></i></div>
                        <div class="pgNumber"><a href="">1</a></div>
                        <div class="pgNumber"><a href="">2</a></div>
                        <div class="pgNumber"><a href="">3</a></div>
                        <div class="pgNumber"><a href="">4</a></div>
                        <div><i class="fa-solid fa-ellipsis"></i></div>
                        <div class="pgNumber"><a href="">10</a></div>
                        <div><i class="fa-solid fa-angle-right"></i></div>
                    </div>
                </div>
            </div>
        </>
        // {/* // <Container onSubmit={onSubmitRetrieve}>
        // //     <Link to={"/test"} >테스트페이지로</Link>
        // //     <button type="submit">검색</button> 
        // // </Container> */}
    );
};

export default S022200010;