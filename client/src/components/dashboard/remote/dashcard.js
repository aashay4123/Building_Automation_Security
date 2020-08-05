import React from "react";

const Dashcard = (props) => {
  const { deleteWarning, navigateEdit, remote } = props;
  if (remote) {
    return (
      <div className="dashcard">
        <div className="dashcard__heading">
          <h5 className="dashcard__name">{remote.name}</h5>
          <button
            onClick={(e) => navigateEdit(e, remote._id)}
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
            onClick={(e) => deleteWarning(e, remote._id)}
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
          <p>{remote.topic}</p>
          <svg className="user-nav__topic-svg">
            <use
              className="svg__use-right"
              xlinkHref={
                window.location.origin + "/images/sprite.svg#icon-checkmark"
              }
            ></use>
          </svg>
        </div>
        <div className="dashcard__area">
          <p>Company</p>
        </div>
        <div className="dashcard__price">
          <p>{remote.company}</p>
        </div>
        <button className="dashcard__btnh nav__btn nav__btn--blue  ">
          control
        </button>
      </div>
    );
  }
};
export default Dashcard;
