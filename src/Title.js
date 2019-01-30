import React from 'react';
import PropTypes from 'prop-types';

const Title = ({title}) => (
    <div> {title} </div>
);

Title.propTypes = {
    title: PropTypes.string.isRequired
};

export default Title;
