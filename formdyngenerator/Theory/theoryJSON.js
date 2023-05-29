//  Javascript JSON - JavaScript Object Notation

//  "JSON" (objeto o script JSON) es un formato para almacenar y transportar datos, para poder comunicar-transmitir informacion.

//  JSON se usa a menudo cuando los datos se envían -reciben desde un servidor Web a una página web.

/*  1.-  ¿Qué es JSON?
                  JSON significa: "Java Script Object Notation"
                  JSON es un "formato - sintaxis ligero", una sintaxis, para el intercambio de datos. 
                  JSON es "autodescriptivo" y fácil de entender
                  JSON es independiente del idioma de codigo que se utilice (la "sintaxis JSON" se deriva de la notación de objetos 
                  de JavaScript, pero el formato JSON es solo texto. El código para leer y generar JSON existe en muchos lenguajes 
                  de programación.)
                  JSON es "autodescriptivo" y fácil de entender

      La "sintaxis JSON" se deriva de la sintaxis de "notación de objetos de JavaScript", pero el formato JSON es solo texto.
      De un formato JSON "texto", que sigue la sintzaxis JSON se denomina:  "string JSON"
      El código para leer y generar datos JSON se puede escribir en cualquier lenguaje de programación.

      Objeto JSON <==>  string JSON:  a partir de una definicion de la informacion de un JSON en texto, un string JSON, se puede 
                                      "obtener" un "objeto Javascript representativo (objeto JSON)"", con el metodo estatico:  
                                                         JSON.parse(string json) = >  dara un Object JSON

                                      Y al reves, a partir de un Object JSON, que sigue el formato JSON, se puede obtener el texto, 
                                      el string, que lo define, su string JSON

*/

//  El "objeto JSON" contiene "métodos" para analizar un: "JavaScript Object Notation (JSON)", y convertir valores a JSON. 
//  No puede ser llamado o construído, y aparte de estas dos propiedades, no tiene funcionalidad interesante por sí mismo.

/*
Descripción:  JSON - "JavaScript Object Notation"
JSON es una "sintaxis - formato" para "serializar": objetos, arreglos, números, cadenas, booleanos y nulos. Está basado sobre sintaxis 
JavaScript pero es diferente a ella: algo JavaScript no es JSON, y algo JSON no es JavaScript.

Los datos que conforman una cadena JSON están en pares de: "nombre": valor, al igual que las propiedades de objeto de JavaScript.
Un par de "nombre/valor" consta de un "nombre de campo" (entre comillas dobles), seguido de dos puntos, seguido de un valor:

                                                  "firstName":"John"


Los datos están separados por comas (,)
Las llaves sostienen objetos:  {}
Los corchetes contienen matrices: []

Objetos JSON:  Los "objetos JSON" (objeto que representa la transformacion de un string JSON que sigue la sintaxis JSON) se escriben 
entre llaves. Al igual que en JavaScript, los objetos pueden contener varios pares de: "nombre":valor

                                                {"firstName":"John", "lastName":"Doe"}

Matrices JSON:  las "matrices JSON" se escriben entre corchetes. Al igual que en JavaScript, una matriz puede contener objetos:

                                                "employees":[
                                                  {"firstName":"John", "lastName":"Doe"},
                                                  {"firstName":"Anna", "lastName":"Smith"},
                                                  {"firstName":"Peter", "lastName":"Jones"}
                                                ]

En el ejemplo anterior, el objeto "employees" es una matriz. Contiene tres objetos. Cada objeto es un registro de una persona 
(con un nombre y un apellido).
Si analiza la "Object JSON" con un programa JavaScript, puede acceder a los datos como un objeto:

                                              let personName0 = employees[0].firstName + " " + employees[0].lastName ;

2.-  Sintaxis JSON.

      La "sintaxis JSON" es un subconjunto de la sintaxis JavaScript, deriva de la sintaxis de notación de objetos de JavaScript.

      2.1.-  Datos JSON: los "datos JSON" son siempre un par de: "nombre" y un valor   
                         Los "datos JSON" se escriben como pares de nombre/valor (también conocidos como pares: clave/valor).

                         Un par de "nombre/valor" consta de un nombre de campo (entre comillas dobles), seguido de dos puntos, 
                         seguido de un valor:

                            "name":"John"  //  Los nombres JSON requieren comillas dobles.


      2.2.-  JSON - Evalúa a objetos de JavaScript: el "formato JSON" es "casi" idéntico a los objetos de JavaScript.

                                                    En JSON, las claves-nombres deben ser cadenas, escritas con comillas dobles:

                                                      JSON  => {"name":"John"}

                                                    En JavaScript, las claves pueden ser cadenas, números o nombres de identificadores:

                                                      JavaScript => {name:"John"}


              Los "valores" de un JSON: en JSON , los valores deben ser uno de los siguientes tipos de datos:

                          una string (valores de string deben escribirse con comillas dobles: {"name":"John"})
                          un número
                          un objeto
                          un array
                          un booleano
                          null

                                        En JavaScript, los valores pueden ser todos los anteriores, además de cualquier otra expresión 
                                        válida de JavaScript, que incluye:

                                                Una función
                                                un  date
                                                undefined

                                        En JavaScript, puede escribir valores de cadena con comillas simples o dobles: {name:'John'}

      2.3.-  Objetos JSON - objetos JavaScript:  debido a que la "sintaxis - formato de JSON" se deriva de la notación de objetos de JavaScript, 
                                                 se necesita muy poco software adicional para trabajar con JSON dentro de JavaScript.

              Con JavaScript puedes crear un objeto y asignarle datos, así:

                  let person = {name:"John", age:31, city:"New York"};

              Puede acceder a un objeto JavaScript como este: person.name;  // // returns John, tambien con:  person["name"]

              Los datos se pueden modificar así:  person.name = "Gilbert"; o tambien:  person["name"] = "Gilbert";


      2.4.-  Matrices de JavaScript como JSON: de la misma manera que los "objetos de JavaScript" se pueden escribir como JSON, las matrices 
                                               de JavaScript también se pueden escribir como JSON.


      2.5.-  Archivos JSON:  el tipo de archivo para "archivos JSON" es ".json"
                             El tipo MIME para el texto JSON es "aplicación/json"


Tipo JavaScript	                    Diferencia JSON
Objetos y arreglos	                Los nombres de las propiedades deben tener doble comilla (""); las comas finales están prohibidas.
Números	                            Los ceros a la izquierda están prohibidos; un punto decimal debe ser seguido al menos por un dígito.
Cadenas	                            Solo un limitado conjunto de caracteres pueden ser de escape (\); ciertos caracteres de control 
                                    estan prohibidos; los caracteres de separador de linea Unicode (U+2028) y el separador de parrafo 
                                    (U+2029) son permitidos; las cadenas deben estar entre comillas dobles (""). 
                                    
                                    Mira el siguiente ejemplo donde JSON.parse funciona bien y unSyntaxError es generado cuando se evalua 
                                    el codigo como JavaScript:

                                        let code = '"\u2028\u2029"';
                                        JSON.parse(code); // works fine
                                        eval(code); // fails

                                    {
                                      "employees":[
                                          {"firstName":"John", "lastName":"Doe"},
                                          {"firstName":"Anna", "lastName":"Smith"},
                                          {"firstName":"Peter", "lastName":"Jones"}
                                      ]
                                    }

La "sintaxis JSON" completa es la siguiente:

    JSON = null
    or true or false
    or JSONNumber
    or JSONString
    or JSONObject
    or JSONArray

    JSONNumber = - PositiveNumber or PositiveNumber
    PositiveNumber = DecimalNumberor DecimalNumber.Digits or DecimalNumber.Digits ExponentPart or DecimalNumber ExponentPart
    DecimalNumber = 0 or OneToNine Digits
    ExponentPart = e Exponent or E Exponent
    Exponent = Digits or + Digits or - Digits
    Digits = Digit or Digits Digit
    Digit = 0 through 9
    OneToNine = 1 through 9

    JONString = "" or "StringCharacters"
    StringCharacters = StringCharacter or StringCharacters StringCharacter
    StringCharacter = any character except " or \ or U+0000 through U+001F or EscapeSequence
    EscapeSequence = \" or \/ or \\ or \b or \f or \n or \r or \t or \u HexDigit HexDigit HexDigit HexDigit
    HexDigit = 0 through 9 or A through F or a through f

    JSONObject = {} or { Members }
    Members = JSONString : JSON or Members , JSONString : JSON

    JSONArray = [] or [ ArrayElements ]
    ArrayElements = JSON or ArrayElements , JSON

    Espacios en blanco insignificantes pueden estar presentes en cualquier lugar excepto en un _JSONNumber_ (los números no deben 
    contener ningún espacio) o en una _JSONString_ (donde es interpretado como el caracter correspondiente en la cadena, o podría 
    causar un error). Los caracteres de Tabulación (U+0009), de retorno de carro (U+000D), de nueva línea (U+000A), y de espacio 
    (U+0020) son los únicos caracteres de espacios en blanco válidos.



3.-  ¿Por qué usar JSON?
El "formato-sintaxis JSON" es sintácticamente similar al código para crear objetos JavaScript. Debido a esto, un programa JavaScript 
puede convertir fácilmente datos JSON en "objetos JavaScript".

Dado que el formato original de un "string JSON" es solo texto, los datos JSON se pueden enviar fácilmente entre computadoras y ser utilizados 
por cualquier lenguaje de programación.

JavaScript tiene una función integrada para convertir cadenas - "string JSON" en "objetos JavaScript":  JSON.parse(stringJSON)

JavaScript también tiene una función integrada para convertir un "objeto JSON" en un "string JSON":  JSON.stringify()

Puede recibir "texto puro" (string JSON) de un servidor y usarlo como un "objeto de JavaScript", o puede enviar un "objeto JavaScript" a un 
servidor y este transformarlo en formato de texto puro (string JSON).



Almacenamiento de datos:  al almacenar datos, los datos deben tener un "formato determinado" e independientemente de dónde elija almacenarlos, 
                          el texto siempre es uno de los formatos legales.

                          JSON hace posible almacenar objetos de JavaScript como texto.


4.- Métodos estaticos de un objeto JSON


4.1.- JSON.parse(): Analiza una "cadena de texto JSON (string JSON)", opcionalmente transformando el valor producido y sus propiedades, 
                    retornando un objeto JSON, el valor que representa como objeto la sintaxis del string JSON

                    El "formato- sintaxis JSON" se evalúa en objetos JavaScript, que representan la definicion del string JSON.  
                    El "formato - sintaxis JSON" es sintácticamente idéntica al código para crear "objetos JavaScript". Debido a esta similitud, 
                    un programa JavaScript puede convertir fácilmente datos JSON en objetos JavaScript nativos.

                    Sintaxis:  JSON.parse(text[, reviver]);

                    Parámetros:
                                textJSON => el texto (en formato-sintaxis JSON) que se convertirá a objeto JSON.

                                reviver (opcional) => es una funcion, define cómo se transforma el valor producido originalmente por el parsing, 
                                                      antes de retornar el objeto JSON.

                    Returns:  retorna el "objeto JSON" que se corresponde con el texto-sintaxis del "string JSON" entregado.

                    Exceptions: lanza una "excepción SyntaxError", si la cadena a transformar no es un JSON válido.

      Ejemplo:

      JSON de ejemplo: string JSON
                        {
                          "browsers": {
                            "firefox": {
                              "name": "Firefox",
                              "pref_url": "about:config",
                              "releases": {
                                "1": {
                                  "release_date": "2004-11-09",
                                  "status": "retired",
                                  "engine": "Gecko",
                                  "engine_version": "1.7"
                                }
                              }
                            }
                          }
                        }

      Puede usar el metodo estatico: JSON.parse(), para convertir el "string JSON" anterior en un "objeto JavaScript":

                        const jsonText = `{
                          "browsers": {
                            "firefox": {
                              "name": "Firefox",
                              "pref_url": "about:config",
                              "releases": {
                                "1": {
                                  "release_date": "2004-11-09",
                                  "status": "retired",
                                  "engine": "Gecko",
                                  "engine_version": "1.7"
                                }
                              }
                            }
                          }
                        }`;

                        console.log(JSON.parse(jsonText));

      Un uso común de utilizacion del estandar JSON es intercambiar datos (informacion) hacia/desde un servidor web - browser

      Al recibir datos de un servidor web, los datos siempre son una cadena de texto, a partir de esta cadena un programa Javascript puede 
      transforma en un "objeto" que represente la informacion del string JSON recibido.

      pare ello se utiliza el metodo estatico de la clase JSON:  JSON.parse(stringJSON):  los datos en formato texto (stringJSON) se convierten 
      en un "objeto" de JavaScript, que contiene la misma informacion ue el script JSON, y que se puede manipular con JavaScript mas facilmente.


      Ejemplo: análisis de JSON.  Imagina que recibimos este texto de un servidor web:

                  '{"name":"John", "age":30, "city":"New York"}'

               Queremos que cuando llege al browser, poder manipular esta informacion con logica JavaScript.

               Lo primero es obtener el "objeto JSON" que representa el script de texto recibido, esto se hace con el metodo:
               
                        const objJSON = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
              
               Nota.-  Hay que Asegúrarse primero de que el texto esté en formato JSON, de lo contrario obtendrá un error de sintaxis.

               A partir de esta transformacion de la informacion en texto a un objeto JavaScript, podemos facilmente manipular esta 
               informacion (objeto JSON)

                    <p id="demo"></p>

                    <script>
                      document.getElementById("demo").textContent = obj.name;
                  </script>


      A.-  Matriz como JSON:  cuando se usa el metodo: JSON.parse() en un JSON derivado de una matriz, el método devolverá una matriz de JavaScript, 
                              en lugar de un objeto de JavaScript.

                              Ejemplo:   const text = '["Ford", "BMW", "Audi", "Fiat"]';
                                         const myArr = JSON.parse(text);  //  Array.isArray(myArr) => true


      Excepciones:
                    1.-  Análisis de fechas Los objetos de fecha (date) no están permitidos en JSON. Si necesita incluir una fecha, escríbala 
                         como una cadena. Puede volver a convertirlo en un objeto de fecha más tarde:

                         Ejemplo:  convierte una cadena en una fecha:  
                         
                                   const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
                                   const obj = JSON.parse(text);
                                   obj.birth = new Date(obj.birth);

                                   document.getElementById("demo").textContent = obj.name + ", " + obj.birth;

                         O bien, puede usar el segundo parámetro, de lafuncion: JSON.parse(), llamado "reviver".

                         El parámetro "reviver" es una función que comprueba cada propiedad antes de devolver el valor.

                         Ejemplo:  convierta una cadena en una fecha, usando la función "reviver" de JSON.parse():

                                   const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
                                   const obj = JSON.parse(text, function (key, value) {
                                      if (key == "birth") {
                                        return new Date(value);
                                      } else {
                                        return value;
                                      }
                                   });

                                   document.getElementById("demo").textContent = obj.name + ", " + obj.birth;

      B.-  Funciones de análisis:  las funciones no están permitidas en JSON. Si necesita incluir una función, escríbala como una cadena. Puede 
                                   volver a convertirlo en una función más tarde:

                                   Ejemplo: convierte una cadena en una función:

                                            const text = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
                                            const obj = JSON.parse(text);
                                            obj.age = eval("(" + obj.age + ")");

                                            document.getElementById("demo").textContent = obj.name + ", " + obj.age();

                                  Nota.-  Debe evitar usar funciones en JSON, las funciones perderán su alcance y tendrá que usarlas eval() 
                                  para volver a convertirlas en funciones.



4.2.-   JSON.stringify(): Devuelve un "string JSON", correspondiente al valor especificado en el argumento (object Javascript JSON), incluyendo 
                          opcionalmente ciertas propiedades o reemplazando valores de propiedades de la manera definida por el usuario.

        Un uso común de JSON es intercambiar datos hacia/desde un servidor web. Al enviar datos a un servidor web, los datos deben ser una cadena 
        de texto. Por ello, debemos tener una manera de poder transformar un objeto JSON, en una cadena de texto, string JSON, que represente 
        la informacion contenida en el objeto

        El método estatico: JSON.stringify(), convierte un objeto o valor de JavaScript (objeto JSON) en una cadena de texto JSON (string JSON), 
        opcionalmente reemplaza valores si se indica una función de reemplazo (reviver), o si se especifican las propiedades mediante un array de 
        reemplazo.

        4.2.1.- "Stringificar" un objeto de JavaScript:  imagina que tenemos este objeto en JavaScript:

                    const obj = {name: "John", age: 30, city: "New York"};

                Utilizaremos la función de JavaScript: "JSON.stringify()" para convertirlo en una cadena de texto (un string representativo del 
                objeto JSON).

                    const myJSON = JSON.stringify(obj);  // es un string

                El resultado será una cadena siguiendo la notación JSON. "myJSON" ahora es una cadena y está lista para ser enviada a un servidor:


        4.2.2.-  "Stringificar" una matriz de JavaScript: también es posible encadenar arrays de JavaScript.

                Imagina que tenemos esta matriz en JavaScript:  const arr = ["John", "Peter", "Sally", "Jane"];

                Utilizamos la función de JavaScript: "JSON.stringify()", para convertir el array en un string:

                    const myJSON = JSON.stringify(arr);

                El resultado será una cadena siguiendo la notación JSON.


        4.2.3.-  Almacenamiento de datos: al almacenar datos, los datos deben tener un formato determinado e independientemente de dónde elija 
                                          almacenarlos, el texto siempre es uno de los formatos legales.

                                          JSON hace posible almacenar objetos de JavaScript como texto.

                                          Ejemplo: almacenamiento de datos en el "almacenamiento local" del browser

                                              // Storing data:
                                              const myObj = {name: "John", age: 31, city: "New York"};
                                              const myJSON = JSON.stringify(myObj);
                                              localStorage.setItem("testJSON", myJSON);

                                              // Retrieving data:
                                              let text = localStorage.getItem("testJSON");
                                              let obj = JSON.parse(text);
                                              document.getElementById("demo").textContent = obj.name;

        4.2.3.-  Excepciones:
                              1.-  Cadena de fechas (date): en JSON, los objetos de fecha (date) no están permitidos. 
                                   La funcion "JSON.stringify()"" convertirá cualquier fecha en cadenas.

                                      Ejemplo:   const obj = {name: "John", today: new Date(), city : "New York"};
                                                 const myJSON = JSON.stringify(obj);

                              Puede volver a convertir la cadena en un objeto de fecha en el receptor.

                              2.-  Funciones de cadena:  en JSON, las funciones no están permitidas como valores de objeto.

                                   La funcion "JSON.stringify()" eliminará cualquier función de un objeto de JavaScript, tanto la clave como 
                                   el valor:

                                   Ejemplo:  const obj = {name: "John", age: function () {return 30;}, city: "New York"};
                                             const myJSON = JSON.stringify(obj);

                                   Esto se puede omitir si convierte sus funciones en cadenas antes de ejecutar la funcion: JSON.stringify().

                                   Ejemplo: const obj = {name: "John", age: function () {return 30;}, city: "New York"};
                                            obj.age = obj.age.toString();
                                            const myJSON = JSON.stringify(obj);

                                   Si envía funciones usando JSON, las funciones perderán su alcance y el receptor tendrá que usar eval() para 
                                   volver a convertirlas en funciones.


        4.2.4.-  Sintaxis.

                            JSON.stringify(value[, replacer[, space]])

                            Parámetros:
                                        value: el valor (object JSON) que será convertido a una cadena JSON.

                                        replacer (opcional): una función que altera el comportamiento del proceso de conversión a cadena de texto, 
                                                             o un array de objetos String o Number que representan una lista de elementos válidos 
                                                             que se incluyen en la cadena JSON. Si este valor es null o no se define, todas las 
                                                             propiedades del objeto son incluidas en el string JSON resultante.

                                        space (opcional): un objeto de tipo String o Number que se utiliza para insertar un espacio en blanco dentro 
                                                          de la cadena de salida JSON para mejorar su legibilidad.
                                                          Si es de tipo Number, indica el número de espacios a usar como espacios en blanco; este 
                                                          número está limitado se limita a 10 (si es mayor, el valor es sólo 10). Los valores 
                                                          inferiores a 1 indican que no se deben utilizar espacios.
                                                          Si es de tipo String, la cadena de texto (o sus 10 primeros caracteres, si es mayor) se 
                                                          utiliza como espacios en blanco. Si este parámetro no se define o es null, no se utilizará
                                                          ningún espacio en blanco.

                            Valor devuelto (return):  una cadena de texto JSON (string JSON) que representa el valor dado.

                            Excepciones: lanza una excepción "TypeError" ("cyclic object value") cuando encuentra una referencia circular.

        4.2.5.-  Descripción de JSON.stringify(value[, replacer[, space]]) 
        
                 Convierte el "value" a notación JSON (string JSON) representándolo:

                 Si el valor tiene un método toJSON(), es responsable de definir qué será serializado.

                 Los objetos Boolean, Number, and String se convierten a sus valores primitivos, de acuerdo con la conversión semántica tradicional.
                 Si durante la conversión a string de value, se encuentra un "undefined", una Function, o un Symbol se omite (cuando se encuentra en 
                 un objeto) o se censura a null (cuando se encuentra en un array). 
                
                Nota.-  Devolucion de "undefined": JSON.stringify() puede devolver "undefined" cuando se pasan valores "puros" como: 
                                                   JSON.stringify(function(){}) o JSON.stringify(undefined).

                Todas las propiedades que utilicen Symbol en los nombres de la clave se ignoran por completo, incluso si utilizan una función 
                replacer.

                Las instancias de "Date" implementan la función: toJSON(), devolviendo un string (igual que date.toISOString()). Por lo que son 
                tratadas como strings.

                Los números Infinity y NaN, así como el valor null, se consideran null.

                El resto de instancias de Object (incluyendo Map (en-US), Set, WeakMap, y WeakSet) sólo tendrán serializadas sus propiedades 
                enumerables.
                              JSON.stringify({});                    // '{}'
                              JSON.stringify(true);                  // 'true'
                              JSON.stringify('foo');                 // '"foo"'
                              JSON.stringify([1, 'false', false]);   // '[1,"false",false]'
                              JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
                              JSON.stringify({ x: 5 });              // '{"x":5}'

                              JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)) // '"2006-01-02T15:04:05.000Z"'

                              JSON.stringify({ x: 5, y: 6 }); // '{"x":5,"y":6}'

                              JSON.stringify([new Number(3), new String('false'), new Boolean(false)]); // '[3,"false",false]'

                              // Elementos de array identificados por string no son enumerables y no tienen sentido en JSON
                              let a = ['foo', 'bar'];
                              a['baz'] = 'quux';      // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
                              JSON.stringify(a); // '["foo","bar"]'

                              JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }); // '{"x":[10,null,null,null]}'

                              // Estructuras de datos standard
                              JSON.stringify([new Set([1]), new Map([[1, 2]]), new WeakSet([{a: 1}]), new WeakMap([[{a: 1}, 2]])]);
                              // '[{},{},{},{}]'

                              // TypedArray
                              JSON.stringify([new Int8Array([1]), new Int16Array([1]), new Int32Array([1])]); // '[{"0":1},{"0":1},{"0":1}]'

                              JSON.stringify([new Uint8Array([1]), new Uint8ClampedArray([1]), new Uint16Array([1]), new Uint32Array([1])]);
                              // '[{"0":1},{"0":1},{"0":1},{"0":1}]'

                              JSON.stringify([new Float32Array([1]), new Float64Array([1])]); // '[{"0":1},{"0":1}]'

                              // toJSON()
                              JSON.stringify({ x: 5, y: 6, toJSON(){ return this.x + this.y; } }); // '11'

                              // Símbolos:
                              JSON.stringify({ x: undefined, y: Object, z: Symbol('') }); // '{}'
                              JSON.stringify({ [Symbol('foo')]: 'foo' }); // '{}'
                              JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')]); // '{}'
                              JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function(k, v) {
                                if (typeof k === 'symbol') {
                                  return 'a symbol';
                                }
                              });
                              // undefined

                              // Propiedades no enumerables:
                              JSON.stringify( Object.create(null, { x: { value: 'x', enumerable: false }, y: { value: 'y', enumerable: true } }) );
                              // '{"y":"y"}'

      1.-  El parámetro replacer: el parámetro "replacer" (de reemplazo) puede ser tanto una "función" como o un "array".

      replacer: una función que altera el comportamiento del proceso de conversión a cadena de texto, o un array de objetos String o Number que 
                representan una lista de elementos válidos que se incluyen en la cadena JSON. Si este valor es null o no se define, todas las 
                propiedades del objeto son incluidas en la cadena de texto JSON resultante.

          Como una función toma dos parámetros: el valor y la clave que van a ser procesados. El objeto al cual pertenece la clave representa el 
          parametro "this" del reemplazo.

          Inicialmente es llamado con una clave vacía y representa el objeto que se va a procesar, y solo después es llamado por cada propiedad en 
          el objeto o array que se va a procesar.

Devuelve el valor que se va a agregar a la cadena JSON, de la siguiente manera:

Si se devuelve un número, la cadena correspondiente es usada como el valor de la propiedad cuando se agrega a la cadena JSON.
Si se devuelve una cadena, esta es usuada cono el valor de la propiedad cuando se agrega a la cadena JSON.
Si se devuelve un Boolean, true o false son usados como el valor de la propiedad cuando se agrega a la cadena JSON.
Si se devuelve algún otro objeto, este es recursivamente procesado en una cadena JSON llamando a la función de reemplazo para cada propiedad, amenos que el objeto sea una función, en tal caso nada se agrega a la cadena JSON.
Si se devuelve undefined, la propiedad no se incluye en la salida de la cadena JSON.
Nota: No se puede usar la función de reemplazo para borrar los valores de un array. Si se devuelve undefined o una función, entonces se usara null en su lugar.

Ejemplo con una función
function replacer(key, value) {
  // Filtrando propiedades
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

var foo = {foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7};
var jsonString = JSON.stringify(foo, replacer);
// '{"week":45, "month":7}'
Copy to Clipboard
El resultado en una cadena JSON sería: {"week":45,"month":7}.

Ejemplo con un array

Si el reemplazo es un array, los valores indican los nombres de las propiedades del objeto que se va a incluir en la cadena JSON resultado.

JSON.stringify(foo, ['week', 'month']);
// '{"week":45,"month":7}', sólo mantiene las propiedades de "week" y de "month"
Copy to Clipboard
Argumento space
Este argumento puede ser empleado para controlar el espaciado en la cadena final. Si es un número, los niveles sucesivos del proceso serán identados cada uno por tantos espacios como se indique (hasta 10). Si es una cadena, serán identados con dicha cadena (o los primeros diez caracteres de la misma).

JSON.stringify({ a: 2 }, null, ' ');
// regresa la cadena de texto:
// '{
//  "a": 2
// }'
Copy to Clipboard
Usar el carácter tabulador simula la apariencia de impresión:

JSON.stringify({ uno: 1, dos : 2 }, null, '\t')
// devuelve el string:
// '{            \
//     "uno": 1, \
//     "dos": 2  \
// }'
Copy to Clipboard
Comportamiento toJSON()
Si un objeto que sera estringificado tiene una propiedad llamada toJSON donde su valor es una función, entonces el método toJSON modifica el comportamiento de la estringificación JSON: en lugar del objeto que esta siendo serializado, el valor retornado por el método toJSON será serializado cuando el mismo sea llamado. Por ejemplo:

var obj = {
  foo: 'foo',
  toJSON: function () {
    return 'bar';
  }
};
var json = JSON.stringify({x: obj}); // '{"x":"bar"}'.
Copy to Clipboard
Ejemplo de como usar JSON.stringify() con localStorage
En dado caso en el cual se requiera que un objeto creado por el usuario y al cual se le permita ser restaurado incluso cuando el navegador ha sido cerrado, el siguiente ejemplo es un modelo de la aplicabilidad del metodo JSON. stringify().

Advertencia: Las funciones no son un tipo de dato valido por lo cual estas no funcionaran. Algunos objetos como tipo DATE, se convertiran a cadenas de texto despues de ejecutar JSON.parse().

// Creando un ejemplo de JSON
var session = {
  'screens': [],
  'state': true
};
session.screens.push({ 'name': 'screenA', 'width': 450, 'height': 250 });
session.screens.push({ 'name': 'screenB', 'width': 650, 'height': 350 });
session.screens.push({ 'name': 'screenC', 'width': 750, 'height': 120 });
session.screens.push({ 'name': 'screenD', 'width': 250, 'height': 60 });
session.screens.push({ 'name': 'screenE', 'width': 390, 'height': 120 });
session.screens.push({ 'name': 'screenF', 'width': 1240, 'height': 650 });

// Convirte el JSON string con JSON.stringify()
// entonces guarda con localStorage con el nombre de la sesión
localStorage.setItem('session', JSON.stringify(session));

// Ejemplo de como transformar el String generado usando
// JSON.stringify() y guardándolo en localStorage como objeto JSON otra vez
var restoredSession = JSON.parse(localStorage.getItem('session'));

// Ahora la variable restoredSession contiene el objeto que fue guardado
// en localStorage
console.log(restoredSession);

  ## Polyfill:  El "objeto JSON" no es soportado por navegadores antiguos. Se puede solucionar esto insertando el siguiente código 
                al inicio del script, permitiendo usar el objeto JSON en navegadores que no soportan su implementación de forma nativa 
                (por ejemplo en Internet Explorer 6).

                El siguiente algoritmo es una imitación del objeto JSON nativo:

                  ```js
                  if (!window.JSON) {
                    window.JSON = {
                      parse: function (sJSON) { return eval("(" + sJSON + ")"); },
                      stringify: function (vContent) {
                        if (vContent instanceof Object) {
                          var sOutput = "";
                          if (vContent.constructor === Array) {
                            for (var nId = 0; nId < vContent.length; sOutput += this.stringify(vContent[nId]) + ",", nId++);
                              return "[" + sOutput.substr(0, sOutput.length - 1) + "]";
                          }
                          if (vContent.toString !== Object.prototype.toString) {
                            return "\"" + vContent.toString().replace(/"/g, "\\$&") + "\"";
                          }
                          for (var sProp in vContent) {
                            sOutput += "\"" + sProp.replace(/"/g, "\\$&") + "\":" + this.stringify(vContent[sProp]) + ",";
                          }
                          return "{" + sOutput.substr(0, sOutput.length - 1) + "}";
                      }
                      return typeof vContent === "string" ? "\"" + vContent.replace(/"/g, "\\$&") + "\"" : String(vContent);
                      }
                    };
                  }
*/