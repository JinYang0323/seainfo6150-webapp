import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "./ArticleListItem";
import styles from "./ArticleList.module.css";
import ArticleImage from "./ArticleImage";

const ArticleList = ({ articles }) => (
  <div className={styles.container}>
    {// this iterates through the articles JSON and
    // calls your ArticleListItem component for each article
    Object.values(articles).map(article => {
      return (
        <div class={styles.articleInfo}>
          <ArticleImage url={article.image._url} title={article.title} />
          <div class={styles.articleList}>
            <ArticleListItem
              key={article.slug}
              title={article.title}
              date={article.pubDate}
              year={article.pubYear}
              author={article.author}
              shortText={article.shortText}
            />
          </div>
        </div>
      );
    })}
  </div>
);

ArticleList.propTypes = {
  articles: PropTypes.object.isRequired
};

export default ArticleList;
