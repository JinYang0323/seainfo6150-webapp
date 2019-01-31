import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Date from './Date';
import Author from './Author';

export default class Article extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Title title= {this.props.title} />
                <Date date= {this.props.date} />
                <Author authorName= {this.props.author} />
                <div>{this.props.children}</div>
            </div>
        );
    }
}

const Article2 = ({ props }) => (
    <div>
        <Title title= {props.title} />
        <Date date= {props.date} />
        <Author authorName= {props.author} />
        <div>{props.children}</div>
    </div>
);

Article2.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};
