import React from 'react';
import { violate, red } from '../../Utilities/Colors';
import { font } from '../../Utilities/Fonts/Fonts';


const Versitilead = () => {
      return (
            <div style={{ fontFamily: font, marginTop: '20px', backgroundColor: 'whitesmoke' }}>
                  <h1 style={{ color: violate }}>VERSATILE AD FORMATS</h1>


                  <div style={{ display: 'flex', justifyContent: 'space-around', padding: '60px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                              <button style={{ backgroundColor: red, color: 'white', border: '1px solid white', padding: '10px', width: '250px', borderRadius: '50px' }}>POP-UNDER</button>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                              <button style={{ backgroundColor: 'white', border: '1px solid white', color: 'black', padding: '10px', width: '250px', borderRadius: '50px' }}>BANNER AD</button>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                              <button style={{ backgroundColor: 'white', border: '1px solid white', color: 'black', padding: '10px', width: '250px', borderRadius: '50px' }}>NATIVE</button>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                              <button style={{ backgroundColor: 'white', border: '1px solid white', color: 'black', padding: '10px', width: '250px', borderRadius: '50px' }}>SKIM</button>
                        </div>
                  </div>
            </div>
      );
};

export default Versitilead;