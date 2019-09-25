import React from 'react';
import Shape from './components/Shape';

import Icon from './svg/ic_code.svg';
import { Canvas, CodeFAB } from './GlobalStyles';

function App() {
  return (
    <>
      <Canvas>
        <Shape />
      </Canvas>
      <a
        href='https://github.com/manan30/three.js-starter'
        target='_blank'
        rel='noopener noreferrer'>
        <CodeFAB src={Icon} />
      </a>
    </>
  );
}

export default App;
