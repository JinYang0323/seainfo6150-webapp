import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Date from './Date';
import Author from './Author';
import Children from './Children';

const Article = ({ article }) => (
    <div>
        <Title title= {article.title} />
        <Date date= {article.date} />
        <Author authorName= {article.author} />
        <Children />
    </div>
);

Article.propTypes = {
    article: PropTypes.Article
};


/*
const Article = ({ title, date, author }) => (
    <div>
        <Title title={title} />
        <Date date={date} />
        <Author authorName={author} />
        <Children />
    </div>
);

Article.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};*/
export default Article;
