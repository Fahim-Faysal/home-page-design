import React from 'react';
import { red, violate } from '../../Utilities/Colors';
import { font } from '../../Utilities/Fonts/Fonts';


const Middlebanner = () => {

      return (
            <div style={{ backgroundColor: violate, fontFamily: font }}>
                  <h1 style={{ color: 'white', padding: '10px' }}>Title 1</h1>
                  <div style={{ display: 'flex', justifyContent: 'space-around', padding: '60px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '200px', height: '200px', color: 'white', border: '1px dotted white', padding: '50px', borderRadius: '50%' }}>
                              <h1>1 BN+</h1>
                              <h3>Daily Impressions</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '200px', height: '200px', backgroundColor: "white", color: violate, border: '1px dotted black', padding: '50px', borderRadius: '50%' }}>
                              <h1>$500k+</h1>
                              <h3>Paid</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '200px', height: '200px', backgroundColor: red, color: 'white', border: '1px dotted black', padding: '50px', borderRadius: '50%' }}>
                              <h1>8K+</h1>
                              <h3>Global Publishers</h3>
                        </div>
                  </div>
            </div>
      );
};

export default Middlebanner;