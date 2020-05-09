import React from 'react';
import Article from './Article';

const skills = [
  'HTML/HTML5',
  'CSS/CSS3',
  'JavaScript',
  'jQuery',
  'ReactJS',
  'AngularJS 1',
  'Flux',
  'Git',
  'Webpack',
  'Grunt/Gulp',
  'TravisCI',
  'Node.js',
  'HapiJS',
  'Express',
  'Firebase',
  'Bootstrap',
  'JSON',
  'D3.js',
  'AJAX',
  'PHP',
  'MySQL',
  'CodeIgniter',
  'WordPress',
  'Blogging',
  'Linux'
];

export default ({ active, timeout, children }) => (
  <Article
    name="skills"
    active={active}
    timeout={timeout}
  >
    <h2 className="major">Skills</h2>
    <div className="wrapper">
      <div className="clearfix content">
        {skills.map(skill => (
          <div className="item" key={skill}>
            <h4>{skill}</h4>
          </div>
        ))}
      </div>
    </div>
    {children}
  </Article>
);
