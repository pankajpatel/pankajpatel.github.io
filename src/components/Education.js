import React from 'react';
import Article from './Article';
import education from '../images/education-image.png';

const educations = [
  {
    title: 'Acropolis Institute of Technology and Research, Indore',
    course: 'Computer Science',
    location: 'Indore, India',
    year: {
      from: '2008',
      to: '2012',
    },
  },
  {
    title: 'School For Excellence, No. 2, Dewas, (M.P.)',
    course: 'High School and Higher Secondary',
    location: 'Dewas, India',
    year: {
      from: '2003',
      to: '2007',
    },
  },
  {
    title: 'Madhya Pradesh Bhoj (Open) University',
    course: 'Computer/Information Technology Administration and Management',
    location: 'Dewas, India',
    year: {
      from: '2005',
      to: '2006',
    },
    description: 'This certificates deals with applications and uses of Computers and related technologies in various fields'
  },
]

export default ({ active, timeout, children }) => (
  <Article
    name="education"
    timeout={timeout}
    active={active}
  >
    <h2 className="major">Education</h2>
    <div className="wrapper">
      <div className="clearfix content one-col">
        {educations.map((edu, index) => (
          <div className="school clearfix" key={index}>
            <img src={education} alt="Education" />
            <h3>{edu.title}</h3>
            <h4>{edu.course}</h4>
            <small>{edu.year.from} - {edu.year.to}</small>
            {edu.description && (
              <span>{edu.description}</span>
            )}
          </div>
        ))}
      </div>
    </div>
    {children}

  </Article>
)
