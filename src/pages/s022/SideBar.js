import React from 'react'
import subLogo from './img/sub-logo.svg';
import styles from './S022200010.module.scss';

const SideBar = () => {
    return (
        <div className={styles.side_bar}> 
            <div className={styles.logo}><img src={subLogo} alt="로고" /></div>
            <ul className={styles.menu_wrap}>
                <li className={styles.menu}><a href=""><i className="fa-solid fa-house-chimney"></i> &nbsp; menu</a>
                    <ul className={styles.submenu}>
                        <li><a href="">submenu</a></li>
                        <li><a href="">submenu</a></li>
                        <li><a href="">submenu</a></li>
                        <li><a href="">submenu</a></li>
                    </ul>
                </li>
                <li className={styles.menu}><a href=""><i className="fa-solid fa-book"></i> &nbsp; menu</a>
                    <ul className={styles.submenu}>
                        <li><a href="">submenu</a></li>
                        <li><a href="">submenu</a></li>
                        <li><a href="">submenu</a></li>
                        <li><a href="">submenu</a></li>
                    </ul>
                </li>
                <li className={styles.menu}><a href=""><i className="fa-solid fa-book"></i> &nbsp; menu</a>
                    <ul className={styles.submenu}>
                        <li><a href="">submenu</a></li>
                        <li><a href="">submenu</a></li>
                        <li><a href="">submenu</a></li>
                        <li><a href="">submenu</a></li>
                    </ul>
                </li>
                <li className={styles.menu}><a href=""><i className="fa-solid fa-book"></i> &nbsp; menu</a>
                    <ul className={styles.submenu}>
                        <li><a href="">submenu</a></li>
                        <li><a href="">submenu</a></li>
                        <li><a href="">submenu</a></li>
                        <li><a href="">submenu</a></li>
                    </ul>

                </li>
                <li className={styles.menu}><a href=""><i className="fa-solid fa-book"></i> &nbsp; menu</a>
                    <ul className={styles.submenu}>
                        <li><a href="">submenu</a></li>
                        <li><a href="">submenu</a></li>
                        <li><a href="">submenu</a></li>
                        <li><a href="">submenu</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default SideBar