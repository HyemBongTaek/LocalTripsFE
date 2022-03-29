import React, { useState } from "react";
import styles from "./styles/_BusanModal.module.scss";
import { useAppDispatch, useAppSelect } from "../../../redux/store.hook";
import {addCheck, choiceMap} from "../../../redux/map/mapSlice";
import { MapTypes } from "../../../Types/Types";

const BusanModal: React.FC<MapTypes> = () => {
  const dispatch = useAppDispatch();
  const [checkedInputs, setCheckedInputs] = useState<any>([]);

  const outSideHandler = () => {
    dispatch(
      choiceMap({
        site: "",
        isModal: false,
      })
    );
    dispatch(
        addCheck({
          busan: checkedInputs,
        })
    );
  };
  const changeHandler = (checked: boolean | any[], id: string | string[]) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
    } else {
      // 체크 해제
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
    }
  };

  return (
    <>
      <div>
        <div className={styles.modal_container}>
          <div className={styles.todo_modal}>
            <div id={styles.junju}>
              <label>
                <input
                  id="해운대"
                  type="checkbox"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "해운대");
                  }}
                  checked={checkedInputs.includes("해운대")}
                />
                해운대
              </label>
            </div>
            <div className={styles.imsil}>
              <label>
                <input
                  id="해인사"
                  type="checkbox"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "해인사");
                  }}
                  checked={checkedInputs.includes("해인사")}
                />
                해인사
              </label>
            </div>
            <div className={styles.byeonsan}>
              <label>
                <input
                  id="용궁사"
                  type="checkbox"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "용궁사");
                  }}
                  checked={checkedInputs.includes("용궁사")}
                />
                용궁사
              </label>
            </div>
            <div className={styles.yeosu_night}>
              <label>
                <input
                  id="광안리"
                  type="checkbox"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "광안리");
                  }}
                  checked={checkedInputs.includes("광안리")}
                />
                광안리
              </label>
            </div>
            <div className={styles.yeosu_night}>
              <label>
                <input
                  id="흰여울문화마을"
                  type="checkbox"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "흰여울문화마을");
                  }}
                  checked={checkedInputs.includes("흰여울문화마을")}
                />
                흰여울문화마을
              </label>
            </div>
            <div className={styles.yeosu_night}>
              <label>
                <input
                  id="부산국제시장"
                  type="checkbox"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "부산국제시장");
                  }}
                  checked={checkedInputs.includes("부산국제시장")}
                />
                부산국제시장
              </label>
            </div>
            <svg width={700} height={1000}>
              <g>
                <path id={styles.color_busan} />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.overlay} onClick={outSideHandler} />
    </>
  );
};

export default BusanModal;
