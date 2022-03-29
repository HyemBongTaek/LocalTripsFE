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

            console.log("이거",action.payload);
            state.mapList = [...state.mapList, action.payload];
            // state.checkList = [...state.mapList, ...action.payload];
            // const mapArray = action.payload.checkedInputs;
            // state.mapList.push(mapArray);
            // if(state.checkList === ""){
            //     state.checkList = action.payload.checkedInputs;
            // }else {
            //     state.checkList = [...state.checkList, action.payload.checkedInputs];
            //     state.mapList = state.checkList[0].concat(state.checkList[1]);
            // }

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