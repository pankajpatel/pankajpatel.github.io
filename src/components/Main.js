import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import Work from './Work';
import Skills from './Skills';
import Education from './Education';
import pic01 from '../images/pic01.jpg'

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
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
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
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
          style={{ display: 'none' }}
        >
          {close}
        </Work>

        <Education
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
          style={{ display: 'none' }}
        >
          {close}
        </Education>

        <Skills
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
          style={{ display: 'none' }}
        >
          {close}
        </Skills>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

export default Main
