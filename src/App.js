import React, {useState} from 'react';

import './App.css';
import { Sun, Planet } from './Components/Planet';

const SUN_DIAMETER = 63;
const NEPTUNE_ORBIT_RADIUS = 2795.2;

function App() {
  const [scalingFactor, setScalingFactor] = useState(1);
  const handleChange = (event) => {
    setScalingFactor(event.target.value);
    console.log(`current scale at ${scalingFactor}`);
  };

  console.log(`scaling from 1 to ${(NEPTUNE_ORBIT_RADIUS * 2) * SUN_DIAMETER / (window.innerWidth - 200)}`);
  return (
    <div className="App">
      <div id="legend-div">
        <span>Planets in animation, except the Sun, are scaled up 10x for better visibility - if you don't zoom out too much.</span>
      </div>
      <Sun diameter={SUN_DIAMETER} scaleDown={scalingFactor} />
      <Planet id="mercury" name="Mercury" diameter={2.184} period={0.241} sunDiameter={SUN_DIAMETER} orbitRadius={36.8} scaleDown={scalingFactor} inclination={7.01} />
      <Planet id="venus" name="Venus" diameter={5.4288} period={0.616} sunDiameter={SUN_DIAMETER} orbitRadius={67.2} scaleDown={scalingFactor} inclination={3.39} />
      <Planet id="earth" name="Earth" diameter={5.7408} period={1} sunDiameter={SUN_DIAMETER} orbitRadius={93} scaleDown={scalingFactor} inclination={0} />
      <Planet id="mars" name="Mars" diameter={2.9952} period={1.882} sunDiameter={SUN_DIAMETER} orbitRadius={141.6} scaleDown={scalingFactor} inclination={1.85} />
      <Planet id="jupiter" name="Jupiter" diameter={64.0848} period={11.87} sunDiameter={SUN_DIAMETER} orbitRadius={483.6} scaleDown={scalingFactor} inclination={1.31} />
      <Planet id="saturn" name="Saturn" diameter={53.976} period={29.4477} sunDiameter={SUN_DIAMETER} orbitRadius={886.5} scaleDown={scalingFactor} inclination={2.49} />
      <Planet id="uranus" name="Uranus" diameter={22.9} period={84.078} sunDiameter={SUN_DIAMETER} orbitRadius={1783.7} scaleDown={scalingFactor} inclination={0.77} />
      <Planet id="neptune" name="Neptune" diameter={22.2144} period={164.882} sunDiameter={SUN_DIAMETER} orbitRadius={NEPTUNE_ORBIT_RADIUS} scaleDown={scalingFactor} inclination={1.77} />
      <div id="control-panel">
        <input id="scale-slider" type="range" min="1" max={(NEPTUNE_ORBIT_RADIUS * 2) * SUN_DIAMETER / (window.innerWidth - 10)} value={scalingFactor} step={1} onChange={handleChange}></input>
      </div>
    </div>
  );
}

export default App;
