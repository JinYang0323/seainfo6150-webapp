import React from 'react';
import PropTypes from 'prop-types';

const Author = ({ authorName }) => (
    <div>{authorName}</div>
);

Author.propTypes = {
    authorName: PropTypes.string.isRequired
};

export default Author;
