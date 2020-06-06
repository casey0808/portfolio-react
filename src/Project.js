import React, { Component } from 'react';
import Tile from './Tile';
import Images from './Images';

import './Project.css';

class Project extends Component {
  render() {
    return (
      <div>
        <div className='project-tile'>
          <Tile
            src={Images[0]}
            text='Color Game'
            link='http://casey0808.github.io/web_development/color_game/colorGame.html'
            github='https://github.com/casey0808/web_development'
          />
          <Tile
            src={Images[1]}
            text='Todo List App'
            link='https://casey0808.github.io/todo-list/'
            github='https://github.com/casey0808/todo-list'
          />
          <Tile
            src={Images[2]}
            text='Markdown Previewer'
            link='https://casey0808.github.io/markdown-previewer/'
            github='https://github.com/casey0808/markdown-previewer'
          />
          <Tile
            src={Images[3]}
            text='Pomodoro Clock'
            link='http://casey0808.github.io/pomodoro-clock/'
            github='https://github.com/casey0808/pomodoro-clock'
          />
          <Tile
            src={Images[4]}
            text='Data Visualization with D3'
            link='https://casey0808.github.io/fcc-data-visualization/'
            github='https://github.com/casey0808/fcc-data-visualization'
          />
          <Tile
            src={Images[5]}
            text='Geospatial Data Visualization'
            link='https://cancui.work/real_estate_study/'
            github='https://github.com/casey0808/real_estate_study'
          />
          <Tile
            src={Images[6]}
            text='Wes Anderson Palette'
            link='http://casey0808.github.io/wes-anderson-palette'
            github='https://github.com/casey0808/wes-anderson-palette'
          />
          <Tile
            src={Images[7]}
            text='Data Science Projects'
            link='https://cancui.work/datacamp_projects/'
            github='https://github.com/casey0808/datacamp_projects'
          />
        </div>
        <a
          className='button'
          href='https://casey0808.github.io/project.html'
          target='_blank'
          rel='noopener noreferrer'
        >
          See More >>
        </a>
      </div>
    );
  }
}

export default Project;
