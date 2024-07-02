import React from "react";

const Selection = () => {
  return (
    <div className="m-4 p-4">
      <h1 className="text-6xl font-bold text-center">
        Select a render to view
      </h1>
      <div className="grid" id="render_card">
        <a href="">React Logo</a>
        <a href="">3D Text</a>
        <a href="">Coming Soon...</a>
      </div>
    </div>
  );
};

export default Selection;
