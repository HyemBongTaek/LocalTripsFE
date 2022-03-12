import React, {useState} from "react";
import styles from "./styles/_IslandModal.module.scss";
import { useAppDispatch } from "../../../redux/store.hook";
import { choiceMap } from "../../../redux/map/mapSlice";
import { MapTypes } from "../../../Types/Types";
import { hallasan } from "./icon/JejuIcon";

const JejuModal: React.FC<MapTypes> = () => {
  const dispatch = useAppDispatch();
  const [checkedInputs, setCheckedInputs] = useState<any>([]);

  console.log(checkedInputs);

  const changeHandler = (checked:boolean|any[], id:string|string[]) => {
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
  };

  return (
    <>
      <div>
        <div className={styles.modal_container}>
          <div className={styles.todo_modal}>
            <div className={styles.halla_mountain}>
              <label>
                <img src={hallasan} alt="hallasan" />
                <input id="한라산" type="checkbox"
                       onChange={(e)=>{
                         changeHandler(e.currentTarget.checked, "한라산")
                       }}
                       checked={checkedInputs.includes("한라산")}
                />
                한라산
              </label>
            </div>
            <div className={styles.sungsan}>
              <label>
                <input id="성산일출봉" type="checkbox"
                       onChange={(e)=>{
                         changeHandler(e.currentTarget.checked, "성산일출봉")
                       }}
                       checked={checkedInputs.includes("성산일출봉")}
                />
                성산일출봉
              </label>
            </div>
            <div className={styles.olleh_avenue}>
              <label>
                <input id="올레길" type="checkbox"
                       onChange={(e)=>{
                         changeHandler(e.currentTarget.checked, "올레길")
                       }}
                       checked={checkedInputs.includes("올레길")}
                />
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
