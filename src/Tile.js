import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component {
    render() {
        return (
            <div className="Tile">
                <img className="Tile-img" src={this.props.src} alt={this.props.text}></img>
                <p>{this.props.text}</p>
                <a href={this.props.link} target="_blank" rel="noopener noreferrer"><i className="fa fa-link"> play online</i></a>
            </div>
        );
    }
}

export default Tile;