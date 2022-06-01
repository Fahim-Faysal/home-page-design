import React from 'react';
import { violate } from '../../Utilities/Colors';
import mickIcon from '../../Images/download.png';
import paperIcon from '../../Images/download (1).png';
import networkIcon from '../../Images//images.png';

const Available = () => {

      return (
            <div style={{ backgroundColor: 'whitesmoke' }}>
                  <div>
                        <h1 style={{ color: violate }}>Available for everyone</h1>
                        <p>Here will be a text</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <img style={{ border: '2px solid white', width: '200px', height: '200px', borderRadius: '50%', padding: '10px' }} src={mickIcon} alt="" />
                        <img style={{ border: '2px solid white', width: '200px', height: '200px', borderRadius: '50%', padding: '10px' }} src={paperIcon} alt="" />
                        <img style={{ border: '2px solid white', width: '200px', height: '200px', borderRadius: '50%', padding: '10px' }} src={networkIcon} alt="" />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <h4>Text 1</h4>
                        <h4>Text 2</h4>
                        <h4>Text 3</h4>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <h3 style={{ backgroundColor: violate, color: 'white', padding: '10px', width: '200px', borderRadius: '50px' }}>Hello 1</h3>
                        <h3 style={{ backgroundColor: violate, color: 'white', padding: '10px', width: '200px', borderRadius: '50px' }}>Hello 2</h3>
                        <h3 style={{ backgroundColor: violate, color: 'white', padding: '10px', width: '200px', borderRadius: '50px' }}>Hello 3</h3>
                  </div>
            </div>
      );
};

export default Available;