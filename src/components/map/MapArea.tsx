import React, { useState } from "react";
import styles from "./MapArea.module.scss";

import { motion } from "framer-motion";
import JejuModal from "./modal/JejuModal";
import {useAppDispatch} from "../../redux/store.hook";
import {choiceMap} from "../../redux/map/mapSlice";

export interface MapAreaTypes {
  mapList: string[],
  setMapList : string[]|any,
}


const MapArea: React.FC<MapAreaTypes> = () => {

  console.log()
  const dispatch = useAppDispatch();

  const [gwanju, setGwanju] = useState(false);
  const [gangwon, setGangwon] = useState<boolean>(false);
  const [gyeonggi, setGyeonggi] = useState(false);
  const [seoul, setSeoul] = useState(false);
  const [incheon, setIncheon] = useState(false);
  const [chbuk, setChbuk] = useState(false);
  const [chnam, setChnam] = useState(false);
  const [daegu, setDaegu] = useState(false);
  const [jb, setJb] = useState(false);
  const [jn, setJn] = useState(false);
  const [gsbuk, setGsbuk] = useState(false);
  const [gsnam, setGsnam] = useState(false);
  const [busan, setBusan] = useState(false);
  const [ulsan, setUlsan] = useState(false);
  const [sejong, setSejong] = useState(false);
  const [daejeon, setDaejeon] = useState(false);
  const [jeju, setJeju] = useState<boolean>(false);
  const [ullengdo, setUllengdo] = useState(false);
  const [dokdo, setDokdo] = useState(false);

  const dokdoClick = () => {
    setDokdo((dokdo) => !dokdo);
    dispatch(choiceMap({
      area: "dokdo",
    }));
  };

  const ullengdoClick = () => {
    setUllengdo((ullengdo) => !ullengdo);
    dispatch(choiceMap({
      area: "ullengdo",
    }));
  };

  const jejuClick = () => {
    setJeju((jeju) => !jeju);

    dispatch(choiceMap({
      area: "jeju",
    }));
  };

  const daejeonClick = () => {
    setDaejeon((daejeon) => !daejeon);
    dispatch(choiceMap({
      area: "daejeon",
    }));
  };

  const sejongClick = () => {
    setSejong((sejong) => !sejong);
    dispatch(choiceMap({
      area: "sejong",
    }));
  };

  const gwanjuClick = () => {
    setGwanju((gwanju) => !gwanju);
    dispatch(choiceMap({
      area: "gwanju",
    }));
  };

  const ulsanClick = () => {
    setUlsan((ulsan) => !ulsan);
    dispatch(choiceMap({
      area: "ulsan",
    }));
  };

  const busanClick = () => {
    setBusan((busan) => !busan);
    dispatch(choiceMap({
      area: "busan",
    }));  };

  const jnClick = () => {
    setJn((jn) => !jn);
    console.log("전남", jn);
    dispatch(choiceMap({
      area: "jn",
    }));
  };

  const gsnamClick = () => {
    setGsnam((gsnam) => !gsnam);
    dispatch(choiceMap({
      area: "gsnam",
    }));
  };

  const chnamClick = () => {
    setChnam((chnam) => !chnam);
    console.log("충남", chnam);
    dispatch(choiceMap({
      area: "chnam",
    }));
  };

  const jbClick = () => {
    setJb((jb) => !jb);
    console.log("전북", jb);
    dispatch(choiceMap({
      area: "jb",
    }));
  };

  const daeguClick = () => {
    setDaegu((daegu) => !daegu);
    dispatch(choiceMap({
      area: "daegu",
    }));
  };

  const gsbukClick = () => {
    setGsbuk((gsbuk) => !gsbuk);
    dispatch(choiceMap({
      area: "gsbuk",
    }));
  };

  const incheonClick = () => {
    setIncheon((incheon) => !incheon);
    dispatch(choiceMap({
      area: "incheon",
    }));
  };

  const gangwonClick = () => {
    setGangwon((gangwon) => !gangwon);
    dispatch(choiceMap({
      area: "gangwon",
    }));
  };
  const gyeonggiClick = () => {
    setGyeonggi((gyeonggi) => !gyeonggi);
    dispatch(choiceMap({
      area: "gyeonggi",
    }));  };
  const seoulClick = () => {
    setSeoul((seoul) => !seoul);
    dispatch(choiceMap({
      area: "seoul",
    }));
  };

  const chbukClick = () => {
    setChbuk((chbuk) => !chbuk);
    console.log("충북", chbuk);
    dispatch(choiceMap({
      area: "chbuk",
    }));
  };

  return (
    <>
      <div className={styles.map_layout}>
        <svg width={"50%"} height={"50%"}>
          <g>
            <motion.path
              id={gyeonggi ? styles.color_gyonggido : styles.gyonggido}
              className={styles.area}
              onClick={gyeonggiClick}
              whileHover={{ opacity: 1.0 }}
            />
            <motion.path
              id={seoul ? styles.color_seoul : styles.seoul}
              className={styles.area}
              onClick={seoulClick}
              whileHover={{ opacity: 1.0 }}
            />
            <path
              id={gangwon ? styles.color_gangwon : styles.gangwon}
              className={styles.area}
              onClick={gangwonClick}
            />
            <path
              id={incheon ? styles.color_incheon : styles.incheon}
              onClick={incheonClick}
            />
            <path
              id={chbuk ? styles.color_chbuk : styles.chbuk}
              onClick={chbukClick}
            />
            <path
              id={chnam ? styles.color_chnam : styles.chnam}
              onClick={chnamClick}
            />
            <path
              id={gsbuk ? styles.color_gsbuk : styles.gsbuk}
              onClick={gsbukClick}
            />
            <path
              id={daegu ? styles.color_daegu : styles.daegu}
              onClick={daeguClick}
            />
            <path id={jb ? styles.color_jb : styles.jb} onClick={jbClick} />
            <path
              id={gsnam ? styles.color_gsnam : styles.gsnam}
              onClick={gsnamClick}
            />
            <path id={jn ? styles.color_jn : styles.jn} onClick={jnClick} />
            <path
              id={busan ? styles.color_busan : styles.busan}
              onClick={busanClick}
            />
            <path
              id={ulsan ? styles.color_ulsan : styles.ulsan}
              onClick={ulsanClick}
            />
            <path
              id={gwanju ? styles.color_gwanju : styles.gwanju}
              onClick={gwanjuClick}
            />
            <path
              id={sejong ? styles.color_sejong : styles.sejong}
              onClick={sejongClick}
            />
            <path
              id={daejeon ? styles.color_daejeon : styles.daejeon}
              onClick={daejeonClick}
            />
            <path
              id={jeju ? styles.color_jeju : styles.jeju}
              onClick={jejuClick}
            />

            <path
              id={ullengdo ? styles.color_ullengdo : styles.ullengdo}
              onClick={ullengdoClick}
            />
            <path
              id={dokdo ? styles.color_dokdo : styles.dokdo}
              onClick={dokdoClick}
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default MapArea;
