const formDataJSON_10 = {
    "formulario": 10,  //  Numero del formulario seleccionado por el usuario para crear dinamicamente
    "descripcion": "FORMULARIO PRUEBA 4",  //  Titulo-Nombre del Formulario
    "solo lectura": true,  // Boolean, el usuario puede interactuar o no con el?
  
    "preguntas": [
      {
        "texto": "Pregunta 1 del 10",  //  Label de la pregunta – campo - elemento
        "tipo": "Lista",  //  Tipo de pregunta => tipo de campo-elemento HTML del formulario
        "obligatorio": true,  //  Atributo de campo obligatorio 
        "respuesta": ["Seleccion 2"],  //  Valor seleccionado como defecto
        "defecto": "Seleccion 1",  //  Valor que tendra el campo si no se obtiene en el JSON respuesta
        "valores": ["Seleccion 1", "Seleccion 2", "Seleccion 3", "Seleccion 4"],  //  Diferentes valores del campo – pregunta en un select
      },
      {
        "texto": "Pregunta 2 del 10 (numero entre 0 y 999)",
        "tipo": "Numero",
        "obligatorio": false,
        "defecto": 200,
        "tamanyo": 3
      },
      {
        "texto": "Pregunta 3 del 10",
        "tipo": "Texto",
        "obligatorio": false,
        "respuesta": ["Probando"],
        "defecto": "Standardtext für Frage 3 - 10",
        "tamanyo": 50
      },
      {
        "texto": "Pregunta 4 del 10",
        "tipo": "Lista",
        "obligatorio": true,
        "respuesta": ["Medicamento 4"],
        "defecto": "Medicamento 1",
        "valores": ["Medicamento 1", "Medicamento 2", "Medicamento 3", "Medicamento 4"]
      },
      {
        "texto": "Pregunta 5 del 10",
        "tipo": "Texto",
        "obligatorio": true,
        "respuesta": ["Microservices"],
        "defecto": "Escribe una arquitectura",
        "tamanyo": 100
      }
    ]
  }
  
  export default formDataJSON_10;