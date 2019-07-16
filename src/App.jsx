import React, { useState } from 'react';
import Content from './components/Content';

const ContentAnimation = {
  hide: {
    opacity: 0,
    scale: 0.75,
    x: '-50%',
    y: '-50%',
    transition: {
      duration: 0.4,
      when: 'afterChildren',
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: {
      duration: 0.4,
      when: 'beforeChildren',
    },
  },
};

function App() {
  const [state, setState] = useState(false);
  return (
    <Content variants={ContentAnimation} initial="hide" animate={state ? 'show' : 'hide'} onTap={() => setState(!state)} />
  );
}

export default App;
