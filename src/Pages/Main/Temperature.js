import React, {useEffect, useState} from "react";
import Header from "../../Components/Header/Header";
import Rightbar from "../../Components/Rightbar/Rightbar";
import Leftbar from "../../Components/Leftbar/Leftbar";
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from 'react-bootstrap';

const Temperature = () => {
    const [highValue, setHighValue] = useState(60);
    const [hotspotValue, setHotspotValue] = useState(80);
    const [range1, setRange1] = useState(0);
    const [range2, setRange2] = useState(0);
    const [range3, setRange3] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState("#99cb38");
    const [maxRange, setMaxRange] = useState(0)
    let [warning, setWarning] = useState(0)
    let [alert, setAlert] = useState(0)
    let [normal, setNormal] = useState(0)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (hotspotValue < range1 || hotspotValue < range2 || hotspotValue < range3) {
            setBackgroundColor('#ff0000')
            setAlert(++alert)
        } else if (highValue < range1 || highValue < range2 || highValue < range3) {
            setBackgroundColor('#ffc300');
            setWarning(++warning)
        } else if ((range1 > 0 || range3 > 0 || range2 > 0) && highValue > range1 && highValue > range2 && highValue > range3) {
            setBackgroundColor('#99cb38')
            setNormal(++normal)
        }

        if (maxRange < range1) {
            setMaxRange(range1)
        }

        if (maxRange < range2) {
            setMaxRange(range2)
        }

        if (maxRange < range3) {
            setMaxRange(range3)
        }
    }, [range1, range3, range2])

    return (
        <>
            {show ?
                <>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Change Range Alert Value</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="hotspotValue" className="form-label">
                                        Hotspot Threshold {hotspotValue} (deg C)
                                    </label>
                                    <input
                                        type="range"
                                        className="form-range"
                                        id="hotspotValue"
                                        value={hotspotValue}
                                        onChange={(e) => setHotspotValue(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="highValue" className="form-label">
                                        High Threshold {highValue} (deg C)
                                    </label>
                                    <input
                                        type="range"
                                        className="form-range"
                                        id="highValue"
                                        value={highValue}
                                        onChange={(e) => setHighValue(e.target.value)}
                                    />
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                Save changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
                :
                <div className="bg-white body">
                    <div className="col-md-12 col-lg-12">
                        <Header
                            highValue={highValue}
                            hotspotValue={hotspotValue}
                            setChangePopup={handleShow}
                            normal={normal}
                            alert={alert}
                            warning={warning}
                        />
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-3">
                                    <Leftbar
                                        range1={range1}
                                        range2={range2}
                                        range3={range3}
                                        setRange1={setRange1}
                                        setRange2={setRange2}
                                        setRange3={setRange3}
                                    />
                                </div>
                                <div className="col-sm-9 col-md-9">
                                    <Rightbar
                                        backgroundColor={backgroundColor}
                                        maxRange={maxRange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Temperature