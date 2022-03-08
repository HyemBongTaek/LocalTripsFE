import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Site{
    area: any,
    isModal: boolean,
}

const initialState: Site = {
    area: "",
    isModal: false,
}


export const MapSlice = createSlice({
    name: "map",
    initialState,
    reducers: {
        choiceMap(state:Site, action:any) {
            state.area = action.payload;
            console.log(state.isModal)
            state.isModal = !state.isModal;


            console.log("헹",action.payload);
        }
    }

});

export const {choiceMap} = MapSlice.actions;
export default MapSlice.reducer;