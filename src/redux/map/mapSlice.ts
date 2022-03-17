import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Site{
    area?: any,
    isModal?: boolean,
    mapList?: string[] |any,
    checkList?: string[]|undefined|any,
}

const initialState: Site = {
    area: "",
    isModal: false,
    mapList: [],
    checkList: [],

}


export const MapSlice = createSlice({
    name: "map",
    initialState,
    reducers: {
        choiceMap(state:Site, action:any) {
            state.area = action.payload;
            console.log(state.isModal)
            state.isModal = !state.isModal;
        },
        addCheck(state, action:any){
            const mapArray = action.payload.checkedInputs;
            state.mapList.push(mapArray);
            state.checkList.concat(action.payload.checkedInputs);
            //
            // void state.mapList.push(action.payload.checkedInputs);
            // if(state.mapList !== ""){
            //     state.checkList = state.mapList.concat(action.payload);
            // }

        },
    },

});

export const {choiceMap, addCheck} = MapSlice.actions;
export default MapSlice.reducer;