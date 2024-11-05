import record from '../assets/images/frame/기록:리그/record.svg';
import leage from '../assets/images/frame/기록:리그/leage.svg';
import Footer from '../components/common/Footer.jsx';
import React from 'react';

function R00S() {
    const [boolean, setBoolean] = React.useState(false);

    return (
        <div>
            <div onClick={()=>
                setBoolean(!boolean)
            }>
            {boolean ? <img src={record} alt="record" /> : <img src={leage} alt="leage" />}
            </div>
            <Footer activeItem={'inquiry'} />
        </div>
    )
}
export default R00S;