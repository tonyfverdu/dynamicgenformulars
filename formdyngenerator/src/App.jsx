import React, { useState } from 'react'
import { BsXSquareFill } from 'react-icons/bs'
import HeaderComponent from './components/HeaderComponent.jsx';
import FormMain from './components/FormMain.jsx'
import './sass/App.scss'


function App() {
  const title = 'MERN App Chat: React, MUI, NodeJS, Express and MongoDB';
  const titleMemoListHeader = 'Dynamic Forms from JSON';
  const subtitleMemoListHeader = 'MERN App (React-NodeJS-Express-MongoDB)';
  const titleSite = 'A Application in React';

  //Usestates variables: toggleHeader, 
  const [toggleHeader, setToggleHeader] = useState(true);

  //  Function for to exit of the header
  function handleonClickExit(ev) {
    setToggleHeader(!toggleHeader)
  }


  return (
    <div className="containerApp">
      <HeaderComponent
        title={titleMemoListHeader}
        subtitle={subtitleMemoListHeader}
      />
      <div className="contCentral">
        {toggleHeader &&
          <>
            <div className="containerLogos">
              <figure className="MERNFigure">
                <img className="imageLogo" src={`./src/assets/images/logos/React_logo.png`} alt='Logo React' />
              </figure>
              <figure className="MERNFigure">
                <img className="imageLogo" src={`./src/assets/images/logos/logoMUI.png`} alt='Logo MUI' />
              </figure>
              <figure className="MERNFigure">
                <img className="imageLogo" src={`./src/assets/images/logos/NodeJS.png`} alt='Logo NodeJS' />
              </figure>
              <figure className="MERNFigure">
                <img className="imageLogo" src={`./src/assets/images/logos/nodeJSExpress.png`} alt='Logo Express' />
              </figure>
              <figure className="MERNFigure">
                <img className="imageLogo" src={`./src/assets/images/logos/mongoDB.webp`} alt='Logo MongoDB' />
              </figure>
            </div>
            <div className="header-Principal">
              <h2>{title}</h2>
            </div>
          </>
        }

        <FormMain />

      </div>
      <div className="contIconExit" onClick={(ev) => handleonClickExit(ev)}>
        <BsXSquareFill />
      </div>
    </div>
  )
}

export default App
