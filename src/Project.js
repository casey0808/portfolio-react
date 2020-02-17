import React, { Component } from 'react';
import Tile from './Tile';
import Images from './Images';

import './Project.css';

class Project extends Component {
    render() {
        return (
            <div>
                <div className="project-tile">
                    <Tile src={Images[0]} text="Color Game" link="http://casey0808.github.io/web_development/color_game/colorGame.html" />
                    <Tile src={Images[1]} text="Todo List App" link="https://casey0808.github.io/todo-list/" />
                    <Tile src={Images[2]} text="Random Quote Machine" link="https://elated-wing-438675.netlify.com/" />
                    <Tile src={Images[3]} text="Interactive Graph of AQI" link="http://casey0808.github.io/aqi_shanghai/pm25_sh.html" />
                    <Tile src={Images[4]} text="Data Visualization with D3" link="https://casey0808.github.io/fcc-data-visualization/" />
                    <Tile src={Images[5]} text="Geospatial Data Visualization" link="https://github.com/casey0808/real_estate_study" />
                    <Tile src={Images[6]} text="Patatap Clone" link="http://casey0808.github.io/web_development/patatap_clone/circles.html" />
                    <Tile src={Images[7]} text="Data Science Projects" link="https://github.com/casey0808/datacamp_projects" />
                </div>
                <a className="button" href="https://casey0808.github.io/project.html" target="_blank" rel="noopener noreferrer">See More >></a>
            </div>
        );
    }
}

export default Project;