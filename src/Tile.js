import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component {
    render() {
        return (
            <div className="Tile">
                <img className="Tile-img" src={this.props.src} alt={this.props.text}></img>
                <p>{this.props.text}</p>
                <span>
                    <a href={this.props.link} target="_blank" rel="noopener noreferrer"><i className="fa fa-link"> play online </i></a>
                    <span> | </span>
                    <a href={this.props.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                </span>
            </div>
        );
    }
}

export default Tile;