const formDataJSON_8 = {
    "formulario": 8,
    "descripcion": "FORMULARIO PRUEBA 8 Special",
    "solo lectura": true,
  
    "preguntas": [
      {
        "texto": "Pregunta 1 del 8",
        "tipo": "Lista",
        "obligatorio": true,
        "respuesta": ["Wert 3 von Frage 3 des Formulars 8"],
        "defecto": "Wert 1 von Frage 1 des Formulars 8",
        "valores": ["Wert 1 von Frage 1 des Formulars 8", "Wert 2 von Frage 1 des Formulars 8", "Wert 3 von Frage 3 des Formulars 8", "Wert 4 von Frage 3 des Formulars 8"]
      },
      {
        "texto": "Pregunta 2 del 8 (numero entre 0 y 999)",
        "tipo": "Numero",
        "obligatorio": false,
        "defecto": 5,
        "tamanyo": 3 
      },
      {
        "texto": "Pregunta 3 del 8",
        "tipo": "Texto",
        "obligatorio": false,
        "respuesta": ["Probando ..."],
        "defecto": "Standardtext für Frage 3 - 8",
        "tamanyo": 50
      },
      {
        "texto": "Pregunta 4 del 8",
        "tipo": "Texto",
        "obligatorio": true,
        "respuesta": ["Hola que tal"],
        "defecto": "Standardtext für Frage 4 - 8",
        "tamanyo": 100
      }
    ]
  }
  
  export default formDataJSON_8;