import React from "react";
import styles from "./styles/_ChnamModal.module.scss";
import { useAppDispatch } from "../../../redux/store.hook";
import { choiceMap } from "../../../redux/map/mapSlice";
import { MapTypes } from "../../../Types/Types";

const ChnamModal: React.FC<MapTypes> = () => {
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
                태안 안면도
              </label>
            </div>
            <div className={styles.imsil}>
              <label>
                <input type="checkbox" checked={true} />
                공주 무령왕릉
              </label>
            </div>
            <div className={styles.byeonsan}>
              <label>
                <input type="checkbox" checked={true} />
                서산 해미읍성
              </label>
            </div>
            <svg width={700} height={1000}>
              <g>
                <path id={styles.color_chnam} />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.overlay} onClick={outSideHandler} />
    </>
  );
};

export default ChnamModal;
