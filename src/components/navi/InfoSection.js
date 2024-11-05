import React from "react";
import "./index.css";

function InfoSection() {
  return (
    <div className="info-section">
      <div className="location">
        <div> </div>
        <span>관악산 / 서울대 신공학관 코스</span>
      </div>
      <div className="time">
        <span className="gun-time">총 시간</span>
        <span className="main-time">01:30:56</span>
      </div>
      <div className="info-details">
        <div>
          <div className="details-name">이동거리</div>
          <div className="details-count">1.3km</div>
        </div>
        <div>
          <div className="details-name">산행속도</div>
          <div className="details-count">3.5km/h</div>
        </div>
        <div>
          <div className="details-name">누적고도</div>
          <div className="details-count">437m</div>
        </div>
        <div>
          <div className="details-name">현재고도</div>
          <div className="details-count">395m</div>
        </div>
      </div>
      <button className="start-button">
        <span className="icon">▶</span> 시작
      </button>
    </div>
  );
}

export default InfoSection;
