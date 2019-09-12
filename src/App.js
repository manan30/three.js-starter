import React from 'react';
import Shape from './components/Shape';

import GlobalStyle, { Canvas } from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Canvas>
        <Shape />
      </Canvas>
    </>
  );
}

export default App;
