import React from "react";
import Slider from "../utils/Slider";
import ButtonMqtt from "../utils/Button_mqtt";

const Dashcard = (props) => {
  const {
    deleteWarning,
    navigateEdit,
    equipment,
    roomId,
    onSetButtonState,
    onSetIntensityState,
    mqtt,
    data,
  } = props;

  if (equipment) {
    return (
      <div className="dashcard">
        <div className="dashcard__heading">
          <h5 className="dashcard__name">{equipment.name}</h5>
          <button
            onClick={(e) => navigateEdit(e, equipment._id)}
            className="dashcard__button"
          >
            <svg className="user-nav__header-svg">
              <use
                className="svg__use-pencil-equip"
                xlinkHref={
                  window.location.origin + "/images/sprite.svg#icon-pencil"
                }
              ></use>
            </svg>
          </button>
          <button
            onClick={(e) => deleteWarning(e, equipment._id)}
            className="dashcard__button"
          >
            <svg className="user-nav__header-svg">
              <use
                className="svg__use-bin2-equip"
                xlinkHref={
                  window.location.origin + "/images/sprite.svg#icon-bin2"
                }
              ></use>
            </svg>
          </button>
        </div>
        <div className="dashcard__location">
          <p> Topic</p>
        </div>
        <div className="dashcard__rooms">
          <p>{equipment.topic}</p>
          <svg className="user-nav__topic-svg">
            <use
              className="svg__use-right"
              xlinkHref={
                window.location.origin + "/images/sprite.svg#icon-checkmark"
              }
            ></use>
          </svg>
        </div>
        <Slider
          roomId={roomId}
          equipmentId={equipment._id}
          onSetIntensityState={onSetIntensityState}
          mqtt={mqtt}
          equipment={equipment}
        />
        <ButtonMqtt
          roomId={roomId}
          equipmentId={equipment._id}
          onSetButtonState={onSetButtonState}
          mqtt={mqtt}
          data={data}
          equipment={equipment}
        />
      </div>
    );
  }
};

export default Dashcard;
