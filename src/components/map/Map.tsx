import React, {useState} from "react";
import MapArea from "./MapArea";
import {useAppSelect} from "../../redux/store.hook";
import JejuModal from "./modal/JejuModal";
import {MapTypes} from "../../Types/Types";
import JnModal from "./modal/JnModal";
import JbModal from "./modal/JbModal";
import ChnamModal from "./modal/ChnamModal";
import ChbukModal from "./modal/ChbukModal";
import BusanModal from "./modal/BusanModal";
import DaeguModal from "./modal/DaeguModal";

const Map:React.FC<MapTypes> = () => {
    const area = useAppSelect(state=> state.map.area.area);
    const isModal = useAppSelect(state => state.map.isModal);
    const [mapList, setMapList] = useState<string[]>([]);

    console.log("홍", area);
    console.log("모달", isModal);

    return(
        <>
            {isModal&& area==="jeju" &&<JejuModal items={area}/> }
            {isModal&& area==="jn" &&<JnModal items={area}/> }
            {isModal&& area==="jb" &&<JbModal items={area}/> }
            {isModal&& area==="chnam" &&<ChnamModal items={area}/> }
            {isModal&& area==="chbuk" &&<ChbukModal items={area}/> }
            {isModal&& area==="busan" &&<BusanModal items={area}/> }
            {isModal&& area==="daegu" &&<DaeguModal items={area}/> }
            <MapArea mapList={mapList} setMapList={setMapList}/>
        </>
    )
}

export default Map;