import { useState } from 'react';
import styles from './Form.module.css';

function Form({ setGeometry }) {
  const [inputValues, setinputValues] = useState({
    radius: '',
    height: '',
    segments: '',
  });

  function handleInputChange(text, name) {
    setinputValues({ ...inputValues, [name]: event.target.value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    for (let val of Object.values(inputValues)) {
      if (!val) {
        return;
      } else {
        setGeometry(inputValues);
      }
    }

    setinputValues({ ...inputValues, height: '', radius: '', segments: '' });
  }

  return (
    <form onSubmit={handleFormSubmit} action="#" className={styles.formBody}>
      <label>
        <span>Cone height</span>
        <input
          value={inputValues.height}
          onChange={(e) => handleInputChange(e.target.value, 'height')}
          type="number"
          name="coneHeight"
          id="coneHeight"
        />
      </label>
      <label>
        <span>Cone radius</span>
        <input
          value={inputValues.radius}
          onChange={(e) => handleInputChange(e.target.value, 'radius')}
          type="number"
          name="coneRadius"
          id="coneRadius"
        />
      </label>
      <label>
        <span>Cone segments</span>
        <input
          value={inputValues.segments}
          onChange={(e) => handleInputChange(e.target.value, 'segments')}
          type="number"
          name="coneSegments"
          id="coneSegments"
        />
      </label>
      <button type="submit">Apply</button>
    </form>
  );
}

export default Form;
