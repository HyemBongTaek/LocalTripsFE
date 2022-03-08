import React from "react";
import MainImage from "../common/image/trips.png";
import styles from "../pages/_MainLeft.module.scss";

const MainLeft:React.FC= () => {

    return(
        <>
            <div className={styles.main_left}>
                <img src={MainImage}/>
                <div>어디까지 가봤니?</div>
            </div>

        </>
    )
}

export default MainLeft;