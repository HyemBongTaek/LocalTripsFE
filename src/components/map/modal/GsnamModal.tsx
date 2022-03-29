import React, { useState } from "react";
import styles from "./styles/_Gyeongsang_do.module.scss";
import { useAppDispatch, useAppSelect } from "../../../redux/store.hook";
import { choiceMap } from "../../../redux/map/mapSlice";
import { MapTypes } from "../../../Types/Types";

const GsnamModal: React.FC<MapTypes> = () => {
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
                진주성
              </label>
            </div>
            <div className={styles.imsil}>
              <label>
                <input type="checkbox" checked={true} />
                합천해인사
              </label>
            </div>
            <div className={styles.byeonsan}>
              <label>
                <input type="checkbox" checked={true} />
               통영 소매물도
              </label>
            </div>
            <div className={styles.yeosu_night}>
              <label>
                <input type="checkbox" checked={true} />
                통영 동피랑마을
              </label>
            </div>
            <svg width={700} height={1000}>
              <g>
                <path id={styles.color_gsnam} />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.overlay} onClick={outSideHandler} />
    </>
  );
};

export default GsnamModal;
