import React from "react";
import Slider from "../utils/Slider";
import ButtonMqtt from "../utils/Button_mqtt";
import { useSubscription } from "mqtt-react-hooks";

const Dashcard = (props) => {
  const {
    deleteWarning,
    navigateEdit,
    equipment,
    roomId,
    onSetButtonState,
    onSetIntensityState,
  } = props;
  const {
    msgs,
    status,
    mqtt,
    lastMessageOnTopic,
    lastMessage,
    topic,
  } = useSubscription(equipment.topic);
  console.log(msgs, status, mqtt, lastMessageOnTopic, lastMessage, topic);
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
            {status === "connected" ? (
              <use
                className="svg__use-right"
                xlinkHref={
                  window.location.origin + "/images/sprite.svg#icon-checkmark"
                }
              ></use>
            ) : (
              <use
                className="svg__use-wrong"
                xlinkHref={
                  window.location.origin +
                  "/images/sprite.svg#icon-cancel-circle"
                }
              ></use>
            )}
          </svg>
        </div>
        <div className="dashcard__area">
          <p> State</p>
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
          equipment={equipment}
        />
      </div>
    );
  }
};

export default Dashcard;
