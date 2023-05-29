import React, { useState, useEffect } from 'react';
import OptionElement from './OptionElement.jsx'
import '../sass/components/SelectElement.scss';


function SelectElement({ name, textoLabel, elementRequired, parDefaultValue, response, elementID, arrayValues }) {
  const [valueSelect, setValueSelect] = useState("")
  const [responseSelect, setResponseSelect] = useState(response[0])
  const numOptions = arrayValues.length

  useEffect(() => {
    setValueSelect(parDefaultValue);
  }, [])

  function showOptions(parNumOptions, value) {
    return (
      < OptionElement
        valueElem={value}
        elementID={parNumOptions}
      />
    )
  }

  function allOptions(parNumOptions, arrayValues) {
    const arrayOptions = arrayValues.map((value, index) => {
      return showOptions(index, value)
    })
    return (
      <>
        {arrayOptions}
      </>
    )
  }

  function handleOnChangeSelect(ev) {
    ev.preventDefault();
    setValueSelect(ev.target.value)
  }

  return (
    <div className="contSelect">
      <label className="labelOfSelect">{textoLabel}</label>
      <select name={name} id={elementID} disabled={elementRequired} size={1} value={valueSelect} onChange={(ev) => handleOnChangeSelect(ev)}>
        {allOptions(numOptions, arrayValues)}
      </select>
    </div>
  );
}

export default SelectElement;