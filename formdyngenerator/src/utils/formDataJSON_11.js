const formDataJSON_11 = {
    "formulario": 11,  //  Numero del formulario seleccionado por el usuario para crear dinamicamente
    "descripcion": "FORMULARIO PRUEBA 5",  //  Titulo-Nombre del Formulario
    "solo lectura": false,  // Boolean, el usuario puede interactuar o no con el?
  
    "preguntas": [
      {
        "texto": "Pregunta 1 del 11",  //  Label de la pregunta – campo - elemento
        "tipo": "Numero",  //  Tipo de pregunta => tipo de campo-elemento HTML del formulario
        "obligatorio": true,  //  Atributo de campo obligatorio 
        "respuesta": [223],  //  Valor seleccionado como defecto
        "defecto": 100,  //  Valor que tendra el campo si no se obtiene en el JSON respuesta
        "tamanyo": 4
      },
      {
        "texto": "Pregunta 2 del 11 (numero entre 0 y 99)",
        "tipo": "Numero",
        "obligatorio": false,  //  Atributo de campo obligatorio 
        "respuesta": [8],  //  Valor seleccionado como defecto
        "defecto": 0,  //  Valor que tendra el campo si no se obtiene en el JSON respuesta
        "tamanyo": 2
      },
      {
        "texto": "Pregunta 3 del 11",
        "tipo": "Texto",
        "obligatorio": true,
        "respuesta": ["Hepatitis B avanzada"],
        "defecto": "Enfermedad",
        "tamanyo": 100
      },
      {
        "texto": "Pregunta 4 del 11",  //  Label de la pregunta – campo - elemento
        "tipo": "Lista",  //  Tipo de pregunta => tipo de campo-elemento HTML del formulario
        "obligatorio": true,  //  Atributo de campo obligatorio 
        "respuesta": ["Diagnostico"],  //  Valor que tendra el campo si no se obtiene en el JSON respuesta
        "defecto": "Prueba 10",  // Valor seleccionado como defecto
        "valores": ["Prueba 10", "Revision 10", "Test 10", "Medicacion 10", "Tratamiento 10", "Diagnostico 10"],  //  Diferentes valores del campo – pregunta en un select
      },
      {
        "texto": "Pregunta 5 del 11",  //  Label de la pregunta – campo - elemento
        "tipo": "Lista",  //  Tipo de pregunta => tipo de campo-elemento HTML del formulario
        "obligatorio": true,  //  Atributo de campo obligatorio 
        "respuesta": ["Diagnostico"],  //  Valor que tendra el campo si no se obtiene en el JSON respuesta
        "defecto": "Operar",  //  Valor seleccionado como defecto. 
        "valores": ["Dado de alta", "Permanece hospitalizado", "Operar", "Tratamiento", "Diagnostico", "Gravedad"],  //  Diferentes valores del campo – pregunta en un select
      },
      {
        "texto": "Pregunta 6 del 11",
        "tipo": "Texto",
        "obligatorio": true,
        "respuesta": ["Defuncion"],
        "defecto": "Estado del paciente ...",
        "tamanyo": 100
      }
    ]
  }
  
  export default formDataJSON_11;