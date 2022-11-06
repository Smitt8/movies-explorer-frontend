import './InfoTooltip.css'
import React from "react";

import errImg from "../../images/popup__err.svg";
import okImg from  "../../images/popup__ok.svg"

function InfoTooltip({ isOpen, isOK, onClose, errMessage }){
  const style = isOpen ? "popup_opened" : "";
  const alt = isOK ? "Выполнено успешно" : "Выполнено с ошибкой";

  return (
    <div className={`popup popup_type_tooltip ${style}`} onClick={onClose}>
    <div className="popup__container popup__container_type_input">
      <button
        className="button popup__close-btn"
        type="button"
        aria-label="Закрыть"
        onClick={onClose}
      ></button>
      <div className="popup__auth">
        <img className="popup__status" src={isOK ? okImg : errImg } alt={alt} />
        <h2 className="popup__title">{errMessage || ""}</h2>
      </div>
    </div>
  </div>
  );
}

export default InfoTooltip;