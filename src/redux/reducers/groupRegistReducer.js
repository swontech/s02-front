import { createSlice } from '@reduxjs/toolkit';

export const groupRegistSlice = createSlice({
    name: 'groupRegist',
    initialState: {
        /**단체state */
        orgName: "",
        zipCode: "",
        address: "",
        extraAddress: "",
        firstTelNo: "",
        middleTelNo: "",
        lastTelNo: "",
        /**대표자state */
        memberName: "",
        firstHpNo: "",
        middleHpNo: "",
        lastHpNo: "",
        emailAddress: "",
        emailDomain: "",
    },
    reducers: {
        setInfoState: (state, action) => {
            const { target, value } = action.payload
            state[target] = value
        },
    }
})

export const groupRegistAction = groupRegistSlice.actions
export default groupRegistSlice.reducer