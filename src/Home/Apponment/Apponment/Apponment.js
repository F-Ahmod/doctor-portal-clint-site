import React from 'react';
import Navigation from '../../../Sharied/Navigation/Navigation';
import ApponmentHeader from '../../AponmentBanner/ApponmentHeader/ApponmentHeader';
import AvailableApponment from './../../AponmentBanner/AvailableApponment/AvailableApponment';

const Apponment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <ApponmentHeader date={date } setDate={setDate}></ApponmentHeader>
            <AvailableApponment date={date }></AvailableApponment>

            
        </div>
    );
};

export default Apponment;