import React from "react";
import MapArea from "./MapArea";
import {useAppSelect} from "../../redux/store.hook";
import JejuModal from "./modal/JejuModal";
import {MapTypes} from "../../Types/Types";

const Map:React.FC<MapTypes> = () => {
    const area = useAppSelect(state=> state.map.area.area);
    const isModal = useAppSelect(state => state.map.isModal);

    console.log("홍", area);
    console.log("모달", isModal);

    return(
        <>
            {isModal && <JejuModal items={area}/> }
            <MapArea/>
        </>
    )
}

export default Map;