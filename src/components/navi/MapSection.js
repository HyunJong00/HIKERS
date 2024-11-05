import React from "react";

function MapSection() {
  return (
    <div className="map-section">
      <div className="badge"><span>완등인증</span></div>
      <div className="route">
        <div>START</div>
        <div>FINISH</div>
      </div>
      <div className="map-buttons">
        <div className="map-button">
          <div id="icon1"> </div>
          <span>촬영</span>
        </div>
        <div className="map-button">
            <div id="icon2"> </div>
          <span>날씨</span>
        </div>
        <div className="map-button">
            <div id="icon3"> </div>
          <span>위치</span>
        </div>
      </div>
      <div className="mapView-toggle">
        <button className="mapView-button active">2D 지도</button>
        <button className="mapView-button">3D 지도</button>
      </div>
    </div>
  );
}


export default MapSection;
