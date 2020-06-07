import React from 'react';
import styled, { keyframes } from 'styled-components';

import "./Planet.css";
import Tooltip from './Tooltip';

const EARTH_ORBIT_TIME = 100;

function Sun(props) {
  const Sun = styled.div`
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 1px;
    width: 1px;
    background-color: #ffffa0;
    background: radial-gradient(#ffffa0, #ffffcb);
    box-shadow: 0 0 ${51 / props.scaleDown}px ${props.diameter / props.scaleDown}px #ffffed,
                0 0 ${42 / props.scaleDown}px ${49 / props.scaleDown}px #ffffdc,
                0 0 ${31 / props.scaleDown}px ${37 / props.scaleDown}px #ffffcb;
    z-index: 0;
  `
  return (
    <Sun />
  )
}

function Planet(props) {
  const orbitKeyframes = keyframes`
    0% {
      left: calc(50% - ${props.diameter / 2 / props.scaleDown}px);
      top: calc(50% - ${props.diameter / 2 / props.scaleDown}px);
    }
    25% {
      left: calc(50% - ${props.diameter / 2 / props.scaleDown}px + ${Math.cos(props.inclination * Math.PI / 180) * props.orbitRadius / 0.696 * props.sunDiameter / props.scaleDown }px);
      top: calc(50% - ${props.diameter / 2 / props.scaleDown}px + ${Math.sin(props.inclination * Math.PI / 180) * props.orbitRadius / 0.696 * props.sunDiameter / props.scaleDown }px);
    }
    75% {
      left: calc(50% - ${props.diameter / 2 / props.scaleDown}px - ${Math.cos(props.inclination * Math.PI / 180) * props.orbitRadius / 0.696 * props.sunDiameter / props.scaleDown}px);
      top: calc(50% - ${props.diameter / 2 / props.scaleDown}px - ${Math.sin(props.inclination * Math.PI / 180) * props.orbitRadius / 0.696 * props.sunDiameter / props.scaleDown }px);
    }
    100% {
      left: calc(50% - ${props.diameter / 2 / props.scaleDown}px);
      top: calc(50% - ${props.diameter / 2 / props.scaleDown}px);
    }
  `

  const Planet = styled.div`
    border-radius: 50%;
    position: absolute;
    top: 50%;
    width: ${props.diameter / props.scaleDown}px;
    height: ${props.diameter / props.scaleDown}px;
    animation: ${orbitKeyframes} ${EARTH_ORBIT_TIME * props.period / props.scaleDown}s infinite;
    animation-timing-function: linear;

    &:hover > div {
      display: block;
    }
  `

  return (
    <Planet id={props.id}>
      <Tooltip name={props.name} offset={props.diameter / props.scaleDown} scaleDown={props.scaleDown} />
    </Planet>
  );
}

export { Sun, Planet };
