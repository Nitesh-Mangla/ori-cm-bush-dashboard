import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = ({
                    highValue, hotspotValue, normal = 0, warning = 0, alert = 0, setChangePopup = () => {}
                }) => {

    let [total, setTotal] = useState(0)
    let [offline, setOffline] = useState(0)

    useEffect(() => {
        total = 0;
        offline = 0;
        if (alert) {
            total++;
        } else {
            offline++
        }

        if (normal) {
            total++;
        } else {
            offline++
        }

        if (warning) {
            total++;
        } else {
            offline++
        }

        setOffline(offline)
        setTotal(total);
    }, [normal, warning, alert])
    return (
        <div className="overflow-hidden">
            <div className="row mb-3 justify-content-center text-white fw-bolder">
                <div className="col-sm-3 themed-grid-col py-3 px-1 blue">Temperature alarm settings (deg C)</div>
                <div className="col-sm-3 themed-grid-col py-3 px-1 red">Hotspot above {hotspotValue} deg C</div>
                <div className="col-sm-3 themed-grid-col py-3 px-1 yellow">High above {highValue} deg C</div>

                <div className="col-sm-3 themed-grid-col py-3 px-1 grey">
                    <a href="#" className="changeValue" onClick={() => {
                        setChangePopup(true)
                    }}>Change</a>
                </div>
            </div>

            <div className="row mb-3 justify-content-center text-white fw-bolder">
                <div className="col-sm-2 themed-grid-col py-3 px-1 blue">{total} Total</div>
                <div className="col-sm-2 themed-grid-col py-3 px-1 grey"> {offline} Offline</div>
                <div className="col-sm-2 themed-grid-col py-3 px-1 red">{alert} alert</div>
                <div className="col-sm-2 themed-grid-col py-3 px-1 yellow">{warning} warning</div>
                <div className="col-sm-2 themed-grid-col py-3 px-1 green">{normal} Normal</div>
            </div>
        </div>
    );
}

export default Header;
