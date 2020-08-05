import React from "react";

const Button = (props) => {
  const { history, roomId, houseId } = props;
  const addroom = () => {
    history.push(`/dashboard/addroom`);
  };
  const addremote = () => {
    history.push(`/dashboard/addremote/${roomId}`);
  };
  const addequipment = () => {
    history.push(`/dashboard/addequipment/${roomId}`);
  };

  let render = null;
  if (houseId) {
    render = (
      <div className="dashheader">
        <div className="dashheader__buttonbox btnh  ">
          <button onClick={addroom} className="nav__btn btnh nav__btn--nav">
            Add Room
          </button>
        </div>
      </div>
    );
  } else if (roomId) {
    render = (
      <div className="dashheader">
        <div className="dashheader__buttonbox btnh  ">
          <button
            onClick={addequipment}
            className="nav__btn btnh nav__btn--nav"
          >
            Add equip
          </button>
          <button onClick={addremote} className="nav__btn btnh nav__btn--nav">
            Add remote
          </button>
        </div>
      </div>
    );
  }

  return render;
};
export default Button;
