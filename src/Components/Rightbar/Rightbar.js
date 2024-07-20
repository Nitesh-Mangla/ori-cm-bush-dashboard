import React from 'react';


const Rightbar = ({backgroundColor, maxRange = 0}) => {
    return (
        <>
            <div className="shadow p-5 mb-2 rounded border border-dark-subtle text-dark-emphasis fw-medium justify-content-center align-content-center" style={{ backgroundColor: backgroundColor ,minHeight:"35vh"}}>
                <p className='text-white fs-2'>{maxRange}</p>
            </div>
        </>
    );
}

export default Rightbar;
