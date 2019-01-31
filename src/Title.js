import React from 'react';
import PropTypes from 'prop-types';

const Title = ({title}) => (
    <div>
        <h1 align="center"> {title} </h1>
    </div>
);

Title.propTypes = {
    title: PropTypes.string.isRequired
};

export default Title;
