import React from 'react';
import { violate } from '../../Utilities/Colors';

const Footer = () => {
      return (
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                  <div>
                        <div>
                              <h3 style={{ color: violate }}>we are social</h3>
                        </div>
                        <div>
                              <h2>Follow Us</h2>
                              <h1>LOGO</h1>
                        </div>
                  </div>
                  <div>
                        <div>
                              <h3 style={{ color: violate }}>Links</h3>
                        </div>
                        <div>
                              <h3>ADVERTISERS</h3>
                              <h3>PUBLISHERS</h3>
                              <h3>INFLUENCERS</h3>
                              <h3>AD FORMATS</h3>
                        </div>

                  </div>
                  <div>
                        <div>
                              <h3 style={{ color: violate }}>Documentation</h3>
                        </div>
                        <div>
                              <h3>TERMS & CONDITIONS</h3>
                              <h3>PRIVACY POLICY</h3>
                              <h3>CANCELLATION POLICY</h3>
                              <h3>BLOG</h3>
                        </div>

                  </div>
                  <div>
                        <div>
                              <h3 style={{ color: violate }}>Support</h3>
                        </div>
                        <div>
                              <p>FAQ</p>
                              <p>MEDIA KIT</p>
                              <p>CONTACT US</p>
                        </div>

                  </div>
            </div>
      );
};

export default Footer;