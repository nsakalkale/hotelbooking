import React from "react";
import Delux from "./room/Delux";
import Premier from "./room/Premier";
import Club from "./room/Club";

export default function RoomType() {
  return (
    <div className="bg-light-pink overflow-hidden p-xl-5 p-l-5">
      <div className="row">
        <div className="col-xl-4 col-sm-12">
          <Delux />
        </div>
        <div className="col-xl-4 col-sm-12">
          <Premier />
        </div>
        <div className="col-xl-4 col-sm-12">
          <Club />
        </div>
      </div>
    </div>
  );
}
