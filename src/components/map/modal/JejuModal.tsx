import React from "react";
import styles from "./styles/_IslandModal.module.scss";
import { useAppDispatch } from "../../../redux/store.hook";
import { choiceMap } from "../../../redux/map/mapSlice";
import { MapTypes } from "../../../Types/Types";
import { haenyeo, hallasan } from "./icon/JejuIcon";

const JejuModal: React.FC<MapTypes> = () => {
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
            <div className={styles.halla_mountain}>
              <label>
                <img src={hallasan} alt="hallasan" />
                <input type="checkbox" checked={true} />
                한라산
              </label>
            </div>
            <div className={styles.sungsan}>
              <label>
                <input type="checkbox" checked={true}/>
                성산일출봉
              </label>
            </div>
            <div className={styles.olleh_avenue}>
              <label>
                <input type="checkbox" checked={true}/>
                올레길
              </label>
            </div>
            <svg width={500} height={1000}>
              <g>
                <path id={styles.color_jeju} />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.overlay} onClick={outSideHandler} />
    </>
  );
};

export default JejuModal;
