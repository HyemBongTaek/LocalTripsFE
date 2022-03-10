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
import DaejeonModal from "./modal/DaejeonModal";
import DokdoModal from "./modal/DokdoModal";
import GangwonModal from "./modal/GangwonModal";
import GsbukModal from "./modal/GsbukModal";
import GsnamModal from "./modal/GsnamModal";
import GwangjuModal from "./modal/GwangjuModal";
import GyeonggiModal from "./modal/GyeonggiModal";
import IncheonModal from "./modal/IncheonModal";
import SejongModal from "./modal/SejongModal";
import SeoulModal from "./modal/SeoulModal";
import UllengdoModal from "./modal/UllengdoModal";
import UlsanModal from "./modal/UlsanModal.jsx";

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
            {isModal&& area==="daejeon" &&<DaejeonModal items={area}/> }
            {isModal&& area==="dokdo" &&<DokdoModal items={area}/> }
            {isModal&& area==="gangwon" &&<GangwonModal items={area}/> }
            {isModal&& area==="gsbuk" &&<GsbukModal items={area}/> }
            {isModal&& area==="gsnam" &&<GsnamModal items={area}/> }
            {isModal&& area==="gwangju" &&<GwangjuModal items={area}/> }
            {isModal&& area==="gyeonggi" &&<GyeonggiModal items={area}/> }
            {isModal&& area==="incheon" &&<IncheonModal items={area}/> }
            {isModal&& area==="sejong" &&<SejongModal items={area}/> }
            {isModal&& area==="seoul" &&<SeoulModal items={area}/> }
            {isModal&& area==="ullengdo" &&<UllengdoModal items={area}/> }
            {isModal&& area==="ulsan" &&<UlsanModal items={area}/> }
            <MapArea mapList={mapList} setMapList={setMapList}/>
        </>
    )
}

export default Map;