
const formDataJSON_9 = {
    "formulario": 9,  //  Numero del formulario seleccionado por el usuario para crear dinamicamente
    "descripcion": "FORMULARIO PRUEBA 3",  //  Titulo-Nombre del Formulario
    "solo lectura": true,  // Boolean, el usuario puede interactuar o no con el?
  
    "preguntas": [
      {
        "texto": "Pregunta 1 del 9",
        "tipo": "Lista",
        "obligatorio": true,
        "respuesta": ["Wert 3 von Frage 3 des Formulars 9"],
        "defecto": "Wert 1 von Frage 1 des Formulars 9",
        "valores": ["Wert 1 von Frage 1 des Formulars 9", "Wert 2 von Frage 1 des Formulars 9", "Wert 3 von Frage 3 des Formulars 9", "Wert 4 von Frage 3 des Formulars 9"]
      },
      {
        "texto": "Pregunta 2 del 9",
        "tipo": "Lista",
        "obligatorio": true,
        "respuesta": ["Wert 4 von Frage 2 des Formulars 9"],
        "defecto": "Wert 1 von Frage 2 des Formulars 9",
        "valores": ["Wert 1 von Frage 2 des Formulars 9", "Wert 2 von Frage 2 des Formulars 9", "Wert 3 von Frage 2 des Formulars 9", "Wert 4 von Frage 2 des Formulars 9"]
      },
      {
        "texto": "Pregunta 3 del 9 (numero entre 0 y 99)",
        "tipo": "Numero",
        "obligatorio": false,
        "defecto": 99,
        "tamanyo": 2
      },
      {
        "texto": "Pregunta 4 del 9",
        "tipo": "Texto",
        "obligatorio": false,
        "respuesta": ["Hola que tal"],
        "defecto": "Ich bin: texto: Pregunta 3 del 8",
        "tamanyo": 50
      },
      {
        "texto": "Pregunta 5 del 9",
        "tipo": "Texto",
        "obligatorio": true,
        "respuesta": ["Hola que tal"],
        "defecto": "Standardtext für Frage 4 - 8",
        "tamanyo": 100
      },
      {
        "texto": "Pregunta 6 del 9 (numero entre 0 y 9)",
        "tipo": "Numero",
        "obligatorio": false,
        "defecto": 9,
        "tamanyo": 1
      }
    ]
  }
  
  export default formDataJSON_9;