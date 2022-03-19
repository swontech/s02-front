
import React from 'react';
import Input from '../../components/element/Input';
import Selector from '../../components/element/Selector';
import useModal from '../../hooks/useModal';
import { ReactComponent as SearchIcon } from '../../lib/images/SearchIcon.svg';
import { emailDomainList, hpNoList } from '../../lib/staticData/data';
import { groupRegistAction } from '../../redux/reducers/groupRegistReducer';
import { useDispatch, useSelector } from 'react-redux';

const GroupView = (props) => {
    const { openModal } = useModal();
    const dispatch = useDispatch()
    const { setInfoState } = groupRegistAction
    const { orgName, zipCode, address, extraAddress, firstTelNo, middleTelNo, lastTelNo } = useSelector((state) => state.groupRegist)

    // 단체 정보 state
    const onChangeOrgName = (e) => { dispatch(setInfoState({ target: 'orgName', value: e.target.value })) };
    const onChangeZipCode = (e) => { dispatch(setInfoState({ target: 'zipCode', value: e.target.value })) };
    const onChangeAddress = (e) => { dispatch(setInfoState({ target: 'address', value: e.target.value })) };
    const onChangeExtraAddress = (e) => { dispatch(setInfoState({ target: 'extraAddress', value: e.target.value })) };
    const onChangeFirstTelNo = (e) => { dispatch(setInfoState({ target: 'firstTelNo', value: e.target.value })) };
    const onChangeMiddleTelNo = (e) => { dispatch(setInfoState({ target: 'middleTelNo', value: e.target.value })) };
    const onChangeLastTelNo = (e) => { dispatch(setInfoState({ target: 'lastTelNo', value: e.target.value })) };

    return (<div className='org-wrapper'>
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
    </div>)
}

export default GroupView
