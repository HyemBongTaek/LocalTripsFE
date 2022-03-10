import React from "react";
import styles from "./styles/_JnModal.module.scss";
import { useAppDispatch } from "../../../redux/store.hook";
import { choiceMap } from "../../../redux/map/mapSlice";
import { MapTypes } from "../../../Types/Types";

const JnModal: React.FC<MapTypes> = () => {
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
            <div id={styles.damyang_juknokwon}>
              <label>
                <input type="checkbox" checked={true} />
                담양 죽녹원
              </label>
            </div>
            <div className={styles.bosung_greentea}>
              <label>
                <input type="checkbox" checked={true} />
                보성 녹차밭
              </label>
            </div>
            <div className={styles.scbay}>
              <label>
                <input type="checkbox" checked={true} />
                순천만습지
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
                <path id={styles.color_jn} />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.overlay} onClick={outSideHandler} />
    </>
  );
};

export default JnModal;
