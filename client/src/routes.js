import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./container/profile";
import Signup from "./components/auth/signup";
import Signin from "./components/auth/signin";
import activate from "./components/auth/activate";
import Forgot from "./components/auth/forgot";
import reset from "./components/auth/reset";
import equipment from "./components/dashboard/equipment/equipment";
import remote from "./components/dashboard/remote/remote";
import room from "./components/dashboard/room/room";
import edithouse from "./components/dashboard/house/edit_house";
import addhouse from "./components/dashboard/house/add_house";
import editEquipment from "./components/dashboard/equipment/edit_equipment";
import editRemote from "./components/dashboard/remote/edit_remote";
import addEquipment from "./components/dashboard/equipment/add_equipment";
import addRemote from "./components/dashboard/remote/add_remote";
import addRoom from "./components/dashboard/room/add_room";
import editRoom from "./components/dashboard/room/edit_room";
import Landing from "./landing/landing";

const Routes = () => {
  return (
    <Switch>
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Landing} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/signin" exact component={Signin} />
      <Route path="/auth/activate/:token" exact component={activate} />
      <Route path="/auth/password/forgot" exact component={Forgot} />
      <Route path="/auth/password/reset/:token" exact component={reset} />
      <Route path="/house" exact component={edithouse} />
      <Route path="/addhouse" exact component={addhouse} />
      <Route path="/edithouse" exact component={edithouse} />
      <Route path="/roomname" exact component={room} />
      <Route path="/dashboard/addroom" exact component={addRoom} />
      <Route path="/dashboard/room/:id" exact component={editRoom} />
      <Route path="/dashboard/equipment/:roomId" exact component={equipment} />
      <Route
        path="/dashboard/addequipment/:roomId"
        exact
        component={addEquipment}
      />
      <Route
        path="/dashboard/editequipment/:roomId/:equipmentId"
        exact
        component={editEquipment}
      />
      <Route path="/dashboard/remote/:roomId" exact component={remote} />
      <Route path="/dashboard/addremote/:roomId" exact component={addRemote} />
      <Route
        path="/dashboard/editremote/:roomId/:remoteId"
        exact
        component={editRemote}
      />
    </Switch>
  );
};

export default Routes;
