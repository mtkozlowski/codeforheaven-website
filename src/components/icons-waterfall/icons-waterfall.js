import React from 'react';
import styled from 'styled-components';
import {TimelineMax, Linear} from "gsap/all";

import brightnessIcon from './icons/brightness_high-24px.js';

class IconsWaterfall extends React.Component {

    constructor(props){
        super(props);
        this.rect1 = null;
        this.rect2 = null;
        this.rect3 = null;
        this.myTween = new TimelineMax({repeat:-1});
        this.distances = {
            far: 1,
            medium: 2,
            close: 3
        };
        this.brightnessSvg = brightnessIcon;
      }

    componentDidMount(){
        this.myTween
            .to(this.rect1, 10, {attr:{y: `${100 * this.distances.far}%`}, ease:"Linear.easeNone"})
            .to(this.rect2, 10, {attr:{y: `${100 * this.distances.medium}%`}, ease:"Linear.easeNone"}, "-=10")
    }

    createGroup(paths, position) {
        return (
            <g transform="">
                {paths.map(path => {
                    return (
                        <path d={path.d} fill={path.fill}/>
                    )
                })}
            </g>
        );
    }

    render () {
        return (
            <svg class="icons-waterfall" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 200" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <pattern id="bg-pattern" width="100%" height="100%" x="0" y="0" ref={pattern => this.rect1 = pattern}>
                        {this.createGroup(this.brightnessSvg)}
                    </pattern>
                    <pattern id="bg-pattern2" width="100%" height="100%" x="0" y="0" ref={pattern => this.rect2 = pattern}>
                        <g  transform="translate(50 20) scale(2)">
                            <path d="M0 0h24v24H0z" fill="none"/><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
                        </g>
                        <g  transform="translate(50 120) scale(0.5)">
                            <path fill="none" d="M0 0h24v24H0V0z"/><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"/>
                        </g>
                    </pattern>
                </defs>
                <g>
                    <rect x="0" y="0" fill="url(#bg-pattern)" width="100%" height="100%" />
                    <rect x="0" y="0" fill="url(#bg-pattern2)" width="100%" height="100%" />
                </g>
            </svg>
        )
    }
}

export default IconsWaterfall;