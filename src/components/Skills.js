import React from 'react';

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
]

export default ({ article, articleTimeout, style, children }) => (
  <article
    id="skills"
    className={`${article === 'skills' ? 'active' : ''} ${
      articleTimeout ? 'timeout' : ''
    }`}
    style={style}
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
  </article>
)
