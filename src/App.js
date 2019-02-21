import React, { Component } from "react";
import articles from "./data/articles.json";
import ArticleList from "./ArticleList/ArticleList";
import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div class={styles.App}>
        <div class={styles.topPanel}>
          <p class={styles.textLeft}>The INFO6150 News</p>
          <p class={styles.textRight}>Wed, February 20, 2019</p>
        </div>
        <div class={styles.articlePanel}>
          <ArticleList articles={articles} />
        </div>
        <div class={styles.bottomPanel}>
          <p>ⓒ2019, Jin Yang</p>
        </div>
      </div>
    );
  }
}

export default App;
