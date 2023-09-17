import { useState } from 'react';
import Form from './components/Form';
import FigureContainer from './components/FigureContainer';
import './App.css';

function App() {
  const [geometryArgs, setGeometryArgs] = useState([2, 10, 12]);

  function setGeometryHandler(inputValues) {
    const geometryArgsCopy = Object.assign([], geometryArgs);

    for (let i = 0; i < geometryArgsCopy.length; i++) {
      for (let val of Object.values(inputValues)) {
        geometryArgsCopy[i++] = val;
      }
    }

    setGeometryArgs(geometryArgsCopy);
  }

  return (
    <div className="App">
      <h1 className="appHeader">Test task (CSR)</h1>
      <Form setGeometry={setGeometryHandler} />
      <FigureContainer geometryArgs={geometryArgs} />
    </div>
  );
}

export default App;
