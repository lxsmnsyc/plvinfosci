import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Content from './components/Content';


function App() {
  const [state, setState] = useState(false);
  return (
    <motion.div onTap={() => setState(!state)}>
      <Content initial="hide" animate={state ? 'show' : 'hide'} />
    </motion.div>
  );
}

export default App;
