import React from "react";

import styles from "../pages/_Main.module.scss";
import MainLeft from "./MainLeft";
import Map from "../components/map/Map";
import {useSelector} from "react-redux";
import {useAppSelect} from "../redux/store.hook";

const Main: React.FC = () => {
  const a = useAppSelect(state=>state.map);

  console.log(a);
  return (
    <>
      <div className={styles.main}>
        <div>
          <MainLeft />
        </div>
        <div>
          <Map />
        </div>
      </div>
    </>
  );
};

export default Main;
