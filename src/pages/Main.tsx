import React from "react";

import styles from "../pages/_Main.module.scss";
import MainLeft from "./MainLeft";
import Map from "../components/map/Map";



const Main:React.FC= () => {

    return(
        <>
            <div className={styles.main}>
                <MainLeft/>
                <Map/>
            </div>

        </>

    )
}

export default Main;