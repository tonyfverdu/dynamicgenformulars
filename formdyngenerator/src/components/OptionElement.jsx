import React from 'react';
import '../sass/components/OptionElement.scss';


function OptionElement({ valueElem, elementID }) {
  return (
    <option value={valueElem} id={elementID}>{valueElem}</option>
  )
}

export default OptionElement;