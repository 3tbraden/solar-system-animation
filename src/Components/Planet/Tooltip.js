import React from 'react';
import styled from 'styled-components';

function Tooltip(props) {
  const Lead = styled.div`
    &:after {
      content: "";
      position: absolute;
      border-top: 1px solid white;
      width: 16px;
      transform: rotate(-45deg);
      transform-origin: 0% 0%;
    }
  `

  const Text= styled.div`
    position: absolute;
    color: white;
    text-decoration: underline;
    left: ${10 + props.offset / 2}px;
    bottom: 0.5rem;
  `

  return (
    <div className="tooltip"
      style={{
        position: "relative",
        left: `${props.offset / 2}px`,
      }}>
      <Lead />
      <Text>&nbsp;{`${props.name}`}</Text>
    </div>
  )
}

export default Tooltip;
