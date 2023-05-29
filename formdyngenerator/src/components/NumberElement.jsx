import React, { useState, useEffect } from 'react';
import '../sass/components/NumberElement.scss';


function NumberElement({ name, labelElement, elementRequired, response, placeholder, size, elementID }) {
  const [valueOfNumber, setValueOfNumber] = useState();
  //const [responseSelect, setResponseSelect] = useState(response[0])

  useEffect(() => {
    setValueOfNumber(parseInt(placeholder, 10));
  }, []);

  function handleChange(ev) {
    setValueOfNumber(ev.target.value);
    console.log('valueOfNumber:  ', valueOfNumber)
  }

  return (
    <div className="contElementNumber">
      <label htmlFor={elementID} className="labelOfForm">{labelElement}</label>
      <input name={name} type="number" className="contInputNumber" id={elementID} placeholder={placeholder} onChange={(ev) => handleChange(ev)} value={valueOfNumber}
        min="0" max={Math.pow(10, size) - 1} size={size} required={elementRequired} />
    </div >
  )
}

export default NumberElement;