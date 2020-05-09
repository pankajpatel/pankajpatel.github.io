import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import Work from './Work';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';

class Main extends React.Component {
  static propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired,
  }

  render() {
    const close = (
      <div
        tabIndex="0"
        className="close"
        role="button"
        onClick={() => this.props.onCloseArticle()}
        onKeyDown={() => this.props.onCloseArticle()}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <Article
          name="intro"
          timeout={this.props.articleTimeout}
          active={this.props.article === 'intro'}
        >
          <h2 className="major">Intro</h2>
          <div>
            <p>
              I am a Developer by Job, Blogger by Hobby and a Geek by Nature.
            </p>
            <p>
              I blog at <a href="https://time2hack.com">Time to Hack</a>.
            </p>
            <p>
              I enjoy hanging out with friends, listening music and watching
              action &amp; sci-fi movies.
            </p>
            <p>
              I have interest in Information Security which helps him in
              building secure and efficient applications. He has also published
              an article on Web Application security on HAKIN9 magazine.
            </p>
          </div>
          {close}
        </Article>

        <Work
          active={this.props.article === 'work'}
          timeout={this.props.articleTimeout}
        >
          {close}
        </Work>

        <Education
          active={this.props.article === 'education'}
          timeout={this.props.articleTimeout}
        >
          {close}
        </Education>

        <Skills
          active={this.props.article === 'skills'}
          timeout={this.props.articleTimeout}
        >
          {close}
        </Skills>

        <Contact
          active={this.props.article === 'contact'}
          timeout={this.props.articleTimeout}
        >
          {close}
        </Contact>
      </div>
    )
  }
}

export default Main
