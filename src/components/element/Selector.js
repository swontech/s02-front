import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const Container = styled.div`
    width: 100%;
    height: 32px;
    position: relative;
    padding: 3px;


    select {
        width: 100%;
        height: 100%;
        font-size: 14px;
        outline: none;
        padding-left: 8px;
        border: 0.5px solid black;
        border-radius: 2px;
        -webkit-appearance: none;
        background-color: white;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Ctitle%3Edown-arrow%3C%2Ftitle%3E%3Cg%20fill%3D%22%23000000%22%3E%3Cpath%20d%3D%22M10.293%2C3.293%2C6%2C7.586%2C1.707%2C3.293A1%2C1%2C0%2C0%2C0%2C.293%2C4.707l5%2C5a1%2C1%2C0%2C0%2C0%2C1.414%2C0l5-5a1%2C1%2C0%2C1%2C0-1.414-1.414Z%22%20fill%3D%22%23000000%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");
        background-size: .6em;
        background-position: calc(100% - 0.5em) center;
        background-repeat: no-repeat;
    }
`;

const Selector = ({ options = [], disabledOptions = [], ...props }) => {
    return (
        <Container>
            <select {...props}>
                <option value="" defaultChecked disabled>
                    선택
                </option>
                {options.map((opt, idx) => (
                    typeof opt === Object ? (
                        <option key={idx} value={opt.code}>
                            {opt.desc}
                        </option>
                    ) : (
                        <option key={idx} value={opt.code}>
                            {opt.desc}
                        </option>
                    )
                ))}
            </select>
        </Container>
    )
};

export default Selector;
