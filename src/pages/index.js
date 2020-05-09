import React, { useState, useEffect, useRef } from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const IndexPage = ({ location }) => {
  const timeoutId = useRef(null);
  const [wrapperRef, setWrapperRef] = useState(null);
  const [state, setState] = useState({
    isArticleVisible: false,
    timeout: false,
    articleTimeout: false,
    article: '',
    loading: 'is-loading'
  });

  const handleOpenArticle = (article) => {
    setState(state => ({
      ...state,
      article,
      isArticleVisible: !state.isArticleVisible,
    }))

    setTimeout(() => {
      setState(state => ({
        ...state,
        timeout: !state.timeout
      }))
    }, 325)
    setTimeout(() => {
      setState(state => ({
        ...state,
        articleTimeout: !state.articleTimeout
      }))
    }, 350)
  }

  const handleCloseArticle = () => {
    setState(state => ({ ...state,
      articleTimeout: !state.articleTimeout
    }));

    setTimeout(() => setState(state => ({
      ...state,
      timeout: !state.timeout
    })), 325);

    setTimeout(() => setState(state => ({
      ...state,
      isArticleVisible: !state.isArticleVisible,
      article: ''
    })), 350);
  }

  const handleClickOutside = (event) => {
    if (!wrapperRef) {
      return;
    }
    if (!wrapperRef.contains(event.target)) {
      if (state.isArticleVisible) {
        handleCloseArticle()
      }
    }
  }

  useEffect(() => {
    timeoutId.current = setTimeout(() => setState(state => ({
      ...state,
      loading: ''
    })), 100)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      timeoutId.current && clearTimeout(timeoutId.current);
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <Layout location={location}>
      <div
        className={`body ${state.loading} ${
          state.isArticleVisible ? 'is-article-visible' : ''
        }`}
      >
        <div id="wrapper">
          <Header
            onOpenArticle={handleOpenArticle}
            timeout={state.timeout}
          />
          {state.article && (
            <Main
              isArticleVisible={state.isArticleVisible}
              timeout={state.timeout}
              articleTimeout={state.articleTimeout}
              article={state.article}
              onCloseArticle={handleCloseArticle}
              setWrapperRef={setWrapperRef}
            />
          )}
          <Footer timeout={state.timeout} />
        </div>
        <div id="bg"></div>
      </div>
    </Layout>
  )
}

export default IndexPage;
