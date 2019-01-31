import React from 'react';
import PropTypes from 'prop-types';

const Author = ({ authorName }) => (
    <div>
        <h4 align="center">{authorName}</h4>
    </div>
);

Author.propTypes = {
    authorName: PropTypes.string.isRequired
};

export default Author;
