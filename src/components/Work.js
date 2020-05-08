import React from 'react';
import hp from '../images/hp.png'
import olx from '../images/olx.png'
import codeware from '../images/codeware.png'
import tcs from '../images/tcs.png'
import pic02 from '../images/pic02.jpg'

export default ({ article, articleTimeout, style, children }) => (
  <article
    id="work"
    className={`${article === 'work' ? 'active' : ''} ${
      articleTimeout ? 'timeout' : ''
    }`}
    style={style}
  >
    <h2 className="major">Work</h2>
    <span className="image main">
      <img src={pic02} alt="" />
    </span>
    <div className="wrapper">
      <div className="clearfix content expandable">
        <div className="clearfix item collapsed">
          <div className="base">
            <div className="image">
              <img src={olx} alt="olx" height="80" />
            </div>
            <div className="info">
              <small>Nov, 2019 - Current</small>
              <h3>Frontend Engineer</h3>
              <h4>OLX Group, Berlin, Germany</h4>
            </div>
          </div>
          <span className="item-description">
            Working as a Frontend Engineer in Seller Reputation Team.
          </span>
        </div>
        <div className="clearfix item collapsed">
          <div className="base">
            <div className="image">
              <img src={hp} alt="hp" height="80" />
            </div>
            <div className="info">
              <small>Dec, 2016 - Oct, 2019</small>
              <h3>Front End Developer</h3>
              <h4>HolidayPirates Group, Berlin, Germany</h4>
            </div>
          </div>
          <span className="item-description">
            Working as a Front End Developer for Group's Websites and Web
            Applications.
          </span>
        </div>
        <div className="clearfix item collapsed">
          <div className="base">
            <div className="image">
              <img src={tcs} alt="tcs" height="80" />
            </div>
            <div className="info">
              <small>2013 - Nov, 2016</small>
              <h3>System Engineer</h3>
              <h4>Tata Consultancy Services</h4>
            </div>
          </div>
          <span className="item-description">
            I have worked as a Front End Developer across different projects for
            various Clients. Working closely with UX and Design team and
            provisioning the Front End Activities are majority of my tasks.
          </span>
        </div>
        <div className="clearfix item collapsed">
          <div className="base">
            <div className="image">
              <img src={codeware} alt="codeware" height="80" />
            </div>
            <div className="info">
              <small>2012 - 2013</small>
              <h3>Full Stack Developer</h3>
              <h4>Codeware Technologies Pvt. Ltd., Indore</h4>
            </div>
          </div>
          <span className="item-description">
            I had worked as a Full Stack Developer at Codeware Technologies.
            Working on PHP, MySQL, HTML/HTML5, CSS/CSS3, JavaScript, jQuery etc
            to build inventory and finance management application for various
            clients.
          </span>
        </div>
      </div>
    </div>
    {children}
  </article>
)
