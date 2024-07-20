import React from "react";
import "./Leftbar.css";

const Leftbar = ({setRange1, setRange2, setRange3, range1, range2, range3}) => {

  return (
    <>
      <div className="shadow px-1 py-2 rounded mb-4 border border-dark-subtle LeftContainerOuter">
        <div className="row d-flex justify-content-center">
          <div className="col-12 py-1 d-flex justify-content-center align-items-center">
            <div className="col-2">20</div>
            <div className="col-6">ORI-CM-BUSH</div>
            <div className="col-4">ZONE-20</div>
          </div>

          <div className="col-12 py-1 d-flex justify-content-center align-items-center">
            <div className="LeftContainerInner">
              <div className="col-12 py-1 d-flex justify-content-center align-items-center">
                <div className="col-2">20</div>
                <div className="col-4">Temperature</div>
                <div className="col-4">
                  <input
                    type="range"
                    className="form-range"
                    id="customRange1"
                    
                    value={range1}
                    onChange={(e) =>{setRange1(e.target.value)}}
                  />
                </div>
                <div className="col-2">{range1}</div>
              </div>

              <div className="col-12 py-1 d-flex justify-content-center align-items-center">
                <div className="col-2">20</div>
                <div className="col-4">Temperature</div>
                <div className="col-4">
                <input
                    type="range"
                    className="form-range"
                    id="customRange2"
                    value={range2}
                    onChange={(e) =>{setRange2(e.target.value)}}
                  />
                </div>
                <div className="col-2">{range2}</div>
              </div>

              <div className="col-12 py-1 d-flex justify-content-center align-items-center">
                <div className="col-2">20</div>
                <div className="col-4">Temperature</div>
                <div className="col-4">
                <input
                    type="range"
                    className="form-range"
                    id="customRange3"
                    onChange={(e) =>{setRange3(e.target.value)}}
                    value={range3}
                  />
                </div>
                <div className="col-2">{range3}</div>
              </div>
            </div>
          </div>

          <div className="col-12 pt-1 d-flex justify-content-start align-items-center ms-4">
            <p>GURGAON: LOCATION...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leftbar;
