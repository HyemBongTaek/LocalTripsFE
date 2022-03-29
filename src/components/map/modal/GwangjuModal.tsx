import React, { useState } from "react";
import styles from "./styles/_JnModal.module.scss";
import { useAppDispatch, useAppSelect } from "../../../redux/store.hook";
import {addCheck, choiceMap} from "../../../redux/map/mapSlice";
import { MapTypes } from "../../../Types/Types";

const GwangjuModal: React.FC<MapTypes> = () => {
  const dispatch = useAppDispatch();
  const [checkedInputs, setCheckedInputs] = useState<any>([]);

  console.log(checkedInputs);

  const changeHandler = (checked: boolean | any[], id: string | string[]) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
    } else {
      // 체크 해제
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
    }
  };

  const outSideHandler = () => {
    dispatch(
        choiceMap({
          site: "",
          isModal: false,
        })
    );
    dispatch(
        addCheck({
          gwangju: checkedInputs,
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
                <input
                    id=" 전주 한옥마을"
                    type="checkbox"
                    onChange={(e) => {
                      changeHandler(e.currentTarget.checked, " 전주 한옥마을");
                    }}
                    checked={checkedInputs.includes(" 전주 한옥마을")}
                />
                전주 한옥마을
              </label>
            </div>
            <div className={styles.imsil}>
              <label>
                <input
                    id="임실 치즈마을"
                    type="checkbox"
                    onChange={(e) => {
                      changeHandler(e.currentTarget.checked, "임실 치즈마을");
                    }}
                    checked={checkedInputs.includes("임실 치즈마을")}
                />
                임실 치즈마을
              </label>
            </div>
            <div className={styles.byeonsan}>
              <label>
                <input
                    id="변산반도"
                    type="checkbox"
                    onChange={(e) => {
                      changeHandler(e.currentTarget.checked, "변산반도");
                    }}
                    checked={checkedInputs.includes("변산반도")}
                />
                변산반도
              </label>
            </div>
            <div className={styles.yeosu_night}>
              <label>
                <input
                    id="여수밤바다"
                    type="checkbox"
                    onChange={(e) => {
                      changeHandler(e.currentTarget.checked, "여수밤바다");
                    }}
                    checked={checkedInputs.includes("여수밤바다")}
                />
                여수밤바다
              </label>
            </div>
            <svg width={700} height={1000}>
              <g>
                <path id={styles.color_gwangju} />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.overlay} onClick={outSideHandler} />
    </>
  );
};

export default GwangjuModal;
