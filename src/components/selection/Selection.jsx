import React from "react";
import { Link } from "react-router-dom";

const Selection = () => {
  return (
    <div className="m-4 p-4">
      <h1 className="text-6xl font-bold text-center">
        Select a render to view
      </h1>
      <div className="grid" id="render_card">
        <ul className="flex items-center gap-4">
          <li>
            <Link to="/renders/logo">React Logo</Link>
          </li>
          <li>
            <Link to="/renders/3dtext">3D Text</Link>
          </li>
          <li>
            <Link to="/renders/comingsoon">Coming Soon</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Selection;
