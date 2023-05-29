import React, { useState, useEffect } from 'react'
import SelectIni from './SelectIni.jsx';
import ButtonKlein from './ButtonKlein.jsx'
import SelectElement from './SelectElement.jsx';
import TextElement from './TextElement.jsx';
import NumberElement from './NumberElement.jsx'
import formDataJSON_7 from '../utils/formDataJSON_7.js'
import formDataJSON_8Special from '../utils/formDataJSON_8Special'
import formDataJSON_9 from '../utils/formDataJSON_9'
import formDataJSON_10 from '../utils/formDataJSON_10.js'
import formDataJSON_11 from '../utils/formDataJSON_11.js';

import formulars from '../utils/constat.js'
import '../sass/components/FormMain.scss'


function FormMain() {
  const [JSONAusgabeDaten, setJSONAusgabenDaten] = useState("")  // Ausgabe (String JSON) von JSON-Formulardaten
  const [JSONEingabenForm, setJSONEingabenForm] = useState("")   //  Eingaben (String JSON) von JSON-Formulardaten
  const [toggleJSONEingaben, setToggleJSONEingaben] = useState(false)
  const [valueOfForm, setValueOfForm] = useState(formDataJSON_7.descripcion)
  const [form, setForm] = useState(formDataJSON_7)
  const [deleteForm, setDeleteForm] = useState(false)


  let arrayOfFuntionElements = []

  useEffect(() => {
    switch (valueOfForm) {
      case formulars.form1:
        setForm(formDataJSON_7);
        break;
      case formulars.form2:
        setForm(formDataJSON_8Special);
        break;
      case formulars.form3:
        setForm(formDataJSON_9);
        break;
      case formulars.form4:
        setForm(formDataJSON_10);
        break;
      case formulars.form5:
        setForm(formDataJSON_11);
        break;
      default:
        break;
    }
    setJSONAusgabenDaten("")
    setToggleJSONEingaben(!toggleJSONEingaben)
  }, [valueOfForm])

  useEffect(() => {
    if (deleteForm) {
      switch (valueOfForm) {
        case formulars.form1:
          setForm(formDataJSON_7);
          break;
        case formulars.form2:
          setForm(formDataJSON_8);
          break;
        case formulars.form3:
          setForm(formDataJSON_9);
          break;
        case formulars.form4:
          setForm(formDataJSON_10);
          break;
        default:
          break;
      }
    }

    form.preguntas.map(pregunta => {
      if (pregunta.tipo === "texto") pregunta.setValueOfText(pregunta.placeholder)

    })
  }, [deleteForm])

  function showForm() {
    arrayOfFuntionElements = []
    let cont = 0;
    form.preguntas.forEach(element => {
      if (element.tipo === 'Lista') {
        arrayOfFuntionElements.push(
          Select(`selectName_${cont + 1}`, element.texto, element.obligatorio, element.defecto, element.respuesta, `selectId_${cont + 1}`, element.valores)
        )
      } else if (element.tipo === 'Texto') {
        const [valueOfText, setValueInText] = useState(element.defecto)
        arrayOfFuntionElements.push(
          Text(`text_${cont + 1}`, element.texto, element.obligatorio, element.respuesta, element.defecto, element.tamanyo, `text_${cont + 1}`,
            valueOfText, setValueInText)
        )
      }
      else if (element.tipo === 'Numero') {
        arrayOfFuntionElements.push(
          Number(`number_${cont + 1}`, element.texto, element.obligatorio, element.respuesta, element.defecto, element.tamanyo, `number_${cont + 1}`)
        )
      }
      cont++;
    })

    return arrayOfFuntionElements;
  }

  //  Funktion, um alle Daten aus dem dynamischen Formular zu extrahieren und in eine JSON-String zu konvertieren.
  function kovertierenAllesZuJSON(ev) {
    setJSONAusgabenDaten("")
    //  1.-  Ein Objekt "FormData" instanziieren
    const dataVonFormular = new FormData(ev.target)

    //  2.-  Erstellen Sie ein "Objekt-JS", das alle Daten des zu übermittelnden Formulars enthält.
    const allesParKey_ValueVonFormular = Object.fromEntries(dataVonFormular.entries())

    //  3.- Das letzte Objekt in eine JSON-Zeichenfolge umwandeln
    const aufgabenJSONFormular = JSON.stringify(allesParKey_ValueVonFormular)

    //
    setJSONAusgabenDaten(aufgabenJSONFormular)

    return aufgabenJSONFormular
  }

  function handleFormDynSubmit(ev) {
    ev.preventDefault();
    kovertierenAllesZuJSON(ev)
  }

  function handleJSONView() {
    setJSONEingabenForm(JSON.stringify(form))
    setValueOfForm(form.descripcion)
    setToggleJSONEingaben(!toggleJSONEingaben)
  }

  function handleSubmitFormIni(ev) {
    ev.preventDefault();
  }

  function handleButtonSubmitFormDyn(ev) {
    console.log('Submitiendo el formulario dinamico:  ')
  }

  function handleButtonDeleteFormDyn(ev) {
    setDeleteForm(!deleteForm)
    console.log('deleteForm:  ', deleteForm)
  }

  function Select(parName, parNameElement, ParRequired, parDefaultValue, ParResponse, parId, parArrayValues) {
    return (
      <SelectElement
        name={parName}
        elementID={parId}
        textoLabel={parNameElement}
        defaultValue={parDefaultValue}  // defaultValue={parArrayValues[0]}
        disabled={ParRequired}
        response={ParResponse}
        arrayValues={parArrayValues}
      />
    )
  }

  function Text(parName, parNameElement, parRequired, ParResponse, ParPlaceholder, parSize, parID, valueOfText, setValueOfText) {
    return (
      <TextElement
        name={parName}
        labelElement={parNameElement}
        elementRequired={parRequired}
        response={ParResponse}
        placeholder={ParPlaceholder}
        size={parSize}
        elementID={parID}
        valueOfText={valueOfText}
        setValueOfText={setValueOfText}
      />
    )
  }

  function Number(parName, parNameElement, parRequired, parResponse, parDefaultValue, parSize, parID) {
    return (
      <NumberElement
        name={parName}
        labelElement={parNameElement}
        elementRequired={parRequired}
        response={parResponse}
        placeholder={parDefaultValue}
        size={parSize}
        elementID={parID}
      />
    )
  }


  return (
    <div className="contMain">
      <div className="contFormMain">
        <header className='headerFormMain'>
          <h4 className='titleFormMain'>Dynamic Forms Selection</h4>
        </header>
        <form className="contFormIni" onSubmit={(ev) => handleSubmitFormIni(ev)}>
          <div className="contSelectIni">
            <SelectIni
              setValueOfForm={setValueOfForm}
              numOptions={3}
              valueElement={valueOfForm}
              elementRequired={false}
              defaultValue={""}
              elementID={"idNumber1"}
              arrayValues={[`${formDataJSON_7.descripcion}`, `${formDataJSON_8Special.descripcion}`, `${formDataJSON_9.descripcion}`, 
              `${formDataJSON_10.descripcion}`, `${formDataJSON_11.descripcion}`]}
            />
          </div>
          <div className="contButtons">
            <ButtonKlein
              handleButton={handleJSONView}
              text={'View JSON'}
              parW={'5rem'}
              parH={'2rem'}
              parFS={'0.7rem'}
            />
          </div>
        </form>
        {toggleJSONEingaben &&
          <div className="contJSONOfInput" >
            <header className='headerJSONInput'>
              <h4 className='titleJSONInput'>JSON Eingaben von Formulardaten</h4>
            </header>
            <div className="contJSON">
              <p>{JSONEingabenForm}</p>
            </div>
          </div>
        }
      </div>

      <div className="contFormDynamic" >
        <header className='headerFormDynamic'>
          <h4 className='titleFormDynamic'>Dynamic Forms: <span>"{form.descripcion}"</span></h4>
        </header>
        <form id="formDynamic" className="formDynamic" onSubmit={ev => handleFormDynSubmit(ev)}>
          {showForm().map((elem, index) => {
            return <span key={index}>{elem}</span>
          })}
          <div className="contButtonsFormDynamic">
            <ButtonKlein
              handleButton={handleButtonDeleteFormDyn}
              text={'Delete'}
              parW={'4rem'}
              parH={'2rem'}
              parFS={'0.7rem'}
            />
            <ButtonKlein
              handleButton={(ev) => handleButtonSubmitFormDyn(ev)}
              text={'Submit'}
              parW={'4rem'}
              parH={'2rem'}
              parFS={'0.7rem'}
            />
          </div>
        </form>
      </div>
      <div className="contJSONOfExit" >
        <header className='headerJSONExit'>
          <h4 className='titleJSONExit'>JSON Ausgaben von Formulardaten</h4>
        </header>
        <div className="contJSON">
          <p>{JSONAusgabeDaten}</p>
        </div>
      </div>
    </div>
  )
}

export default FormMain;