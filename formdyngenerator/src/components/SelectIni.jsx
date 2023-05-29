import React, { useState, useEffect } from 'react';
import '../sass/components/SelectIni.scss';


function SelectIni({ setValueOfForm, numOptions, valueElement, elementRequired, elementID, arrayValues }) {
  const [valueSelectIni, setValueSelectIni] = useState(arrayValues[0]);

  useEffect(() => {
    setValueOfForm(valueSelectIni);
  }, [valueSelectIni])

  function optionsOfSelet(arrayValues) {
    return (
      arrayValues.map((option, index) => {
        return <option key={index} value={option}>{option}</option>
      })
    )
  }

  return (
    <div className="contSelectIni">
      <label className="labelOfSelect" >Please, Select a Form</label>
      <select id={elementID} name={elementID} disabled={elementRequired} size={1} value={valueElement} autoFocus
        onChange={(ev) => setValueSelectIni(ev.target.value)} required>
        {
          optionsOfSelet(arrayValues)
        }
      </select>
    </div>
  );
}

export default SelectIni;