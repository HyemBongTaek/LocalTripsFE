import React, { useState } from "react";
import styles from "./_Map.module.scss";

import { motion } from "framer-motion";

const Map: React.FC = () => {
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

  const ulsanClick = () => {
    setUlsan(ulsan => !ulsan);
  }

  const busanClick = () => {
    setBusan((busan) => !busan);
    console.log("부산", busan);
  };

  const jnClick = () => {
    setJn((jn) => !jn);
    console.log("전남", jn);
  };

  const gsnamClick = () => {
    setGsnam((gsnam) => !gsnam);
    console.log("경상남도", gsnam);
  };

  const chnamClick = () => {
    setChnam((chnam) => !chnam);
    console.log("충남", chnam);
  };

  const jbClick = () => {
    setJb((jb) => !jb);
    console.log("전북", jb);
  };

  const daeguClick = () => {
    setDaegu((daegu) => !daegu);
    console.log("대구", daegu);
  };

  const gsbukClick = () => {
    setGsbuk((gsbuk) => !gsbuk);
    console.log("경상북도", gsbuk);
  };

  const incheonClick = () => {
    setIncheon((incheon) => !incheon);
    console.log("인천", incheon);
  };

  const gangwonClick = () => {
    setGangwon((gangwon) => !gangwon);
    console.log("강원도", gangwon);
  };
  const gyeonggiClick = () => {
    setGyeonggi((gyeonggi) => !gyeonggi);
    console.log("경기", gyeonggi);
  };
  const seoulClick = () => {
    setSeoul((seoul) => !seoul);
    console.log("서울", seoul);
  };

  const chbukClick = () => {
    setChbuk((chbuk) => !chbuk);
    console.log("충북", chbuk);
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
              id={chnam ? styles.color_chnam : styles.chnum}
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
            <path id={ulsan? styles.color_ulsan :  styles.ulsan} onClick={ulsanClick}/>
          </g>
        </svg>
      </div>
    </>
  );
};

export default Map;
