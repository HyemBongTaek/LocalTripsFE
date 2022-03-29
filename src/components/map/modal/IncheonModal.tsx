import React, { useState } from "react";
import styles from "./styles/_JbModal.module.scss";
import { useAppDispatch, useAppSelect } from "../../../redux/store.hook";
import { choiceMap } from "../../../redux/map/mapSlice";
import { MapTypes } from "../../../Types/Types";

const IncheonModal: React.FC<MapTypes> = () => {
  const dispatch = useAppDispatch();

  const outSideHandler = () => {
    dispatch(
      choiceMap({
        site: "",
        isModal: false,
      })
    );
  };

  return (
    <>
      <div>
        <div className={styles.modal_container}>
          <div className={styles.todo_modal}>
            <div id={styles.junju}>
              <label>
                <input type="checkbox" checked={true} />
                인천 차이나타운
              </label>
            </div>
            <div className={styles.imsil}>
              <label>
                <input type="checkbox" checked={true} />
                송도 센트럴파크
              </label>
            </div>
            <div className={styles.byeonsan}>
              <label>
                <input type="checkbox" checked={true} />
                변산 반도
              </label>
            </div>
            <div className={styles.yeosu_night}>
              <label>
                <input type="checkbox" checked={true} />
                여수밤바다
              </label>
            </div>
            <svg width={700} height={1000}>
              <g>
                <path id={styles.color_incheon} />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.overlay} onClick={outSideHandler} />
    </>
  );
};

export default IncheonModal;
