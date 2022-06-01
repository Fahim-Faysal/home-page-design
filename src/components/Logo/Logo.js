import React from 'react';
import { violate, red } from '../../Utilities/Colors';
import { font } from '../../Utilities/Fonts/Fonts';

const Logo = () => {
      return (
            <div style={{ backgroundColor: 'whitesmoke', fontFamily: font }}>
                  <div style={{ backgroundColor: 'whitesmoke', display: 'flex', justifyContent: 'space-between', paddingLeft: '70px', paddingRight: '70px' }}>
                        <h1 style={{ fontFamily: font }}>LOGO</h1>
                        <p><span style={{ color: 'green' }}>BN</span>  / EN</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', color: violate }}>
                        <div style={{ width: '80%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                              <p>Home</p>
                              <p>ADVERTISES</p>
                              <p>PUBLISHERS</p>
                              <p>INFLUENCERS</p>
                              <p>AD FORMATS</p>
                              <p>BLOG</p>
                              <p>CONTACT US </p>
                        </div>
                        <div style={{ border: '1px solid gray', width: '150px', borderRadius: '50px', paddingLeft: '10px', paddingRight: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <p>LOGIN</p>
                              <p style={{ backgroundColor: red, color: 'white', borderRadius: '50px' }}><span style={{ padding: '15px' }}>SIGN UP</span> </p>
                        </div>
                  </div>
                  <div style={{ fontFamily: font, display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '15px' }}>
                        <div style={{ width: '50%' }}>
                              <h1>Here Will be the Title</h1>
                              <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nostrum perspiciatis, deserunt, error ratione vel odio maiores, voluptatem reprehenderit neque accusantium? Atque unde, quas quisquam dolorum tenetur adipisci assumenda cum.
                              </h3>
                        </div>
                        <div>
                              <h2 style={{ padding: '100px', color: violate, backgroundColor: 'white' }}>Artwork for title 1</h2>
                        </div>
                  </div>
            </div>
      );
};

export default Logo;