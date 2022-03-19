
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/element/Input';
import Selector from '../../components/element/Selector';
import { emailDomainList, hpNoList } from '../../lib/staticData/data';
import { groupRegistAction } from '../../redux/reducers/groupRegistReducer';

const BossView = () => {
    const dispatch = useDispatch()
    const { memberName, firstHpNo, middleHpNo, lastHpNo, emailAddress, emailDomain } = useSelector((state) => state.groupRegist)
    const { setInfoState } = groupRegistAction

    const onChangeMemberName = (e) => { dispatch(setInfoState({ target: 'memberName', value: e.target.value })) };
    const onChangeFirstHpNo = (e) => { dispatch(setInfoState({ target: 'firstHpNo', value: e.target.value })) };
    const onChangeMiddleHpNo = (e) => { dispatch(setInfoState({ target: 'middleHpNo', value: e.target.value })) };
    const onChangeLastHpNo = (e) => { dispatch(setInfoState({ target: 'lastHpNo', value: e.target.value })) };
    const onChangeEmailAddress = (e) => { dispatch(setInfoState({ target: 'emailAddress', value: e.target.value })) };
    const onChangeEmailDomain = (e) => { dispatch(setInfoState({ target: 'emailDomain', value: e.target.value })) };

    return (
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
    )
}

export default BossView
