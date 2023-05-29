const formDataJSON_7 = {
    "formulario": 7,  //  Numero del formulario seleccionado por el usuario para crear dinamicamente
    "descripcion": "FORMULARIO PRUEBA 1",  //  Titulo-Nombre del Formulario
    "solo lectura": true,  // Boolean, el usuario puede interactuar o no con el?
  
    "preguntas": [
      {
        "texto": "Pregunta 1 del 7",  //  Label de la pregunta – campo - elemento
        "tipo": "Lista",  //  Tipo de pregunta => tipo de campo-elemento HTML del formulario
        "obligatorio": true,  //  Atributo de campo obligatorio 
        "respuesta": ["Valor 2"],  //  Valor seleccionado como defecto
        "defecto": "Valor 1",  //  Valor que tendra el campo si no se obtiene en el JSON respuesta
        "valores": ["Valor 1", "Valor 2", "Valor 3"],  //  Diferentes valores del campo – pregunta en un select
      },
      {
        "texto": "Pregunta 2 del 7 (numero entre 0 y 999)",
        "tipo": "Numero",
        "obligatorio": false,
        "defecto": 100,
        "tamanyo": 3  //  Tamano del numero o texto en una pregunta de tipo “Numero” o “Texto”
      },
      {
        "texto": "Pregunta 3 del 7",
        "tipo": "Texto",
        "obligatorio": false,
        "respuesta": ["Probando ..."],
        "defecto": "Standardtext für Frage 3 - 7",
        "tamanyo": 50
      },
      {
        "texto": "Pregunta 4 del 7",
        "tipo": "Texto",
        "obligatorio": true,
        "respuesta": ["Funcional ..."],
        "defecto": "Standardtext für Frage 4 - 7",
        "tamanyo": 100
      }
    ]
  }
  
  export default formDataJSON_7;