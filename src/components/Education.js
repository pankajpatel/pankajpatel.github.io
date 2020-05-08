import React from 'react';
import pic03 from '../images/pic03.jpg';
import education from '../images/education-image.png';

export default ({ article, articleTimeout, style, children }) => (
  <article
    id="education"
    className={`${article === 'education' ? 'active' : ''} ${
      articleTimeout ? 'timeout' : ''
    }`}
    style={style}
  >
    <h2 className="major">Education</h2>
    <span className="image main">
      <img src={pic03} alt="" />
    </span>
    <div className="wrapper">
      <div className="clearfix content one-col">
      <div className="school clearfix">
      <img src={education} alt="Education" />
      <h3>Acropolis Institute of Technology and Research, Indore</h3>
      <h4>Computer Science</h4>
      <small>2008 - 2012</small>
      <span></span>
      </div>
      <div className="school clearfix">
      <img src={education} alt="Education" />
      <h3>School For Excellence, No. 2, Dewas, (M.P.)</h3>
      <h4>High School/Secondary Diplomas and Certificates</h4>
      <small>2003 - 2007</small>
      <span></span>
      </div>
      <div className="school clearfix">
      <img src={education} alt="Education" />
      <h3>Madhya Pradesh Bhoj (Open) University</h3>
      <h4>Computer/Information Technology Administration and Management</h4>
      <small>2005 - 2006</small>
      <span>This certificates deals with applications and uses of Computers and related
      technologies in various fields</span>
      </div>
      </div>
    </div>
    {children}
  </article>
)
