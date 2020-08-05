import React from "react";

export default ({ data }) => {
  const dataList = data.map((d) => <li>{d}</li>);
  return (
    <div>
      <h3>Messages</h3>
      <ul>{dataList}</ul>
    </div>
  );
};
