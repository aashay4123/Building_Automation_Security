import React, { useState } from "react";
import { toast } from "react-toastify";

const Button = (props) => {
  const [securityState, setsecurityState] = useState(true);
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
  const security = () => {
    let message = "Security mode ";
    setsecurityState(!securityState);
    if (securityState) {
      message += "activated";
      toast.success(message);
    } else {
      message += "deactivated";
      toast.error(message);
    }
  };

  let render = <div className="dashheader">&nbsp;</div>;
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
          <button onClick={security} className="nav__btn btnh nav__btn--nav">
            security
          </button>
        </div>
      </div>
    );
  }

  return render;
};
export default Button;
