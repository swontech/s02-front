import React from 'react'
import styles from './S022200010.module.scss';
import editlogo from './img/editIcon.svg';
import deletelogo from './img/deleteIcon.svg';

const Wrap = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.wrap}>
                <div className={styles.top}>
                    <h1>단체관리</h1><p className={styles.subTitle}>이곳에서 새로 단체를 등록하거나 관리할 수 있습니다. </p>
                    <div className={styles.user_wrap}>
                        <p className={styles.userName}>username-123</p>
                        <div className="userProfile"><img src="img/userProfile.svg" /></div>
                    </div>

                </div>
                <div className={styles.searchBox}>
                    <input className={styles.search} type="search" maxLength="20" placeholder="검색하기" />
                    <div className={styles.searchBtn}><i className={`fa-solid fa-magnifying-glass`}></i></div>
                </div>


                <div className={styles.iconWrap}>
                    <a href="#" onClick="window.open('registration.html', '_blank', 'width=700 height=700')">
                        <div className={`${styles.icons} ${styles.registIcon}`}><p>등록</p><img src="img/registIcon.svg" />
                        </div></a>
                    <div className={`${styles.icons} ${styles.editIcon}`}><p>수정</p><img src={editlogo} /></div>
                    <div className={`${styles.icons} ${styles.deleteIcon}`}><p>삭제</p><img src={deletelogo} /></div>
                    <div className={`${styles.icons} ${styles.downloadIcon}`}><p>다운로드</p><img src="img/downloadIcon.svg" /></div>
                </div>

                <table className={styles.table}>
                    <tbody className={styles.tbody}>
                        <tr className={styles.tr}>
                            <th className={styles.table_header}>선택</th>
                            <th className={styles.table_header}>번호</th>
                            <th className={styles.table_header}>단체명</th>
                            <th className={styles.table_header}>대표자</th>
                            <th className={styles.table_header}>연락처</th>
                            <th className={styles.table_header}>대표자 메일</th>
                            <th className={styles.table_header}>회원수</th>
                        </tr>
                        <tr className={styles.tr}>
                            <td className={styles.table_data}><input className="checkbox" type="radio" /></td>
                            <td className={styles.table_data}>1</td>
                            <td className={styles.table_data}>A교회</td>
                            <td className={styles.table_data}>대표자A</td>
                            <td className={styles.table_data}>010-0000-0000</td>
                            <td className={styles.table_data}>qwerty123@naver.com</td>
                            <td className={styles.table_data}>100명</td>
                        </tr>
                        <tr className={styles.tr}>
                            <td className={styles.table_data}><input className="checkbox" type="radio" /></td>
                            <td className={styles.table_data}>1</td>
                            <td className={styles.table_data}>A교회</td>
                            <td className={styles.table_data}>대표자A</td>
                            <td className={styles.table_data}>010-0000-0000</td>
                            <td className={styles.table_data}>qwerty123@naver.com</td>
                            <td className={styles.table_data}>100명</td>
                        </tr>
                        <tr className={styles.tr}>
                            <td className={styles.table_data}><input className="checkbox" type="radio" /></td>
                            <td className={styles.table_data}>1</td>
                            <td className={styles.table_data}>A교회</td>
                            <td className={styles.table_data}>대표자A</td>
                            <td className={styles.table_data}>010-0000-0000</td>
                            <td className={styles.table_data}>qwerty123@naver.com</td>
                            <td className={styles.table_data}>100명</td>
                        </tr>
                        <tr className={styles.tr}>
                            <td className={styles.table_data}><input className="checkbox" type="radio" /></td>
                            <td className={styles.table_data}>1</td>
                            <td className={styles.table_data}>A교회</td>
                            <td className={styles.table_data}>대표자A</td>
                            <td className={styles.table_data}>010-0000-0000</td>
                            <td className={styles.table_data}>qwerty123@naver.com</td>
                            <td className={styles.table_data}>100명</td>
                        </tr>
                    </tbody>
                </table>

                <div className={styles.pagination}>
                    <div><i className="fa-solid fa-angle-left"></i></div>
                    <div className="pgNumber"><a href="">1</a></div>
                    <div className="pgNumber"><a href="">2</a></div>
                    <div className="pgNumber"><a href="">3</a></div>
                    <div className="pgNumber"><a href="">4</a></div>
                    <div><i className="fa-solid fa-ellipsis"></i></div>
                    <div className="pgNumber"><a href="">10</a></div>
                    <div><i className="fa-solid fa-angle-right"></i></div>
                </div>
            </div>
        </div >
    )
}

export default Wrap