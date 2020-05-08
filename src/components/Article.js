import React from "react";

const Article = ({ name, children, active, timeout }) => (
  <article
    name={name}
    className={`${active ? 'active' : ''} ${timeout ? 'timeout' : ''}`}
    style={{ display: 'none' }}
  >
    {children}
  </article>
);

export default Article;
