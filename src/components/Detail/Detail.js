import React from 'react';
import { violate, red } from '../../Utilities/Colors';
import { font } from '../../Utilities/Fonts/Fonts';

const Detail = () => {
      return (
            <div style={{ backgroundColor: 'whitesmoke', display: 'flex', justifyContent: 'center', fontFamily: font }}>
                  <div style={{ width: '70%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <div style={{ backgroundColor: violate, color: 'white', width: '50%', height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                              <h3>Ad Format</h3>
                              <h4>Explanation graphics of ad format <br /> (Image will be changed)</h4>
                        </div>
                        <div style={{ marginLeft: '50px', width: '50%', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', textAlign: 'start', padding: '10px' }}>
                              <h3 style={{ color: red }}>POP_UNDER</h3>
                              <h5>This is one of the most popular ads. After user’s click, this ad opens landing page in behind. So, the user experience is not hampered much.</h5>
                              <br />
                              <p>Learn More</p>
                        </div>
                  </div>
            </div>
      );
};

export default Detail;