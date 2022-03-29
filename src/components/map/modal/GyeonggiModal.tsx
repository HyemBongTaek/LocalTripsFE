import React, { useState } from "react";
import styles from "./styles/_GyeonggiModal.module.scss";
import { useAppDispatch, useAppSelect } from "../../../redux/store.hook";
import { choiceMap } from "../../../redux/map/mapSlice";
import { MapTypes } from "../../../Types/Types";

const GyeonggiModal: React.FC<MapTypes> = () => {
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
                수원화성
              </label>
            </div>
            <div id={styles.junju}>
              <label>
                <input type="checkbox" checked={true} />
                한국민속촌
              </label>
            </div>
            <div className={styles.imsil}>
              <label>
                <input type="checkbox" checked={true} />
                에버랜드
              </label>
            </div>
            <div className={styles.byeonsan}>
              <label>
                <input type="checkbox" checked={true} />
                 가평 아침고요수목원
              </label>
            </div>
            <div className={styles.yeosu_night}>
              <label>
                <input type="checkbox" checked={true} />
                파주 헤이리예술마을
              </label>
            </div>
            <svg width={700} height={1000}>
              <g>
                <path id={styles.color_gyonggido} />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.overlay} onClick={outSideHandler} />
    </>
  );
};

export default GyeonggiModal;
