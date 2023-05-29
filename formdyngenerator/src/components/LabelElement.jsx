import React, { useState, useEffect } from 'react';
import './sass/LabelElement.scss';


function LabelElement({ textOfLabel }) {
  const [textLabel, setTextLabel] = useState("");

  useEffect(() => {
    setTextLabel(textOfLabel)
  }, []);

  return (
    <label className="theLabel">{textLabel}</label>
  );
}

export default LabelElement;