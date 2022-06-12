import React, { useState } from 'react';
import City from './City';

function Cityfun(props) {

    const [CityName ,setCityName] = useState ('surat');

    const changeCity = () => {
        setCityName('Ahmdabad');
    }

    return (
        <div>
            <div>
               <h4>function Base Component</h4> 
               <p>{CityName}</p>
               <button onClick = { () => changeCity()}>Change City</button>

               <City id="4880" />
               
            </div>
        </div>
    );
}

export default Cityfun;