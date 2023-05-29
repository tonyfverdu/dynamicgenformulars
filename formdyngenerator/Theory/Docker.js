
  //  1.-  Container:  ¿Qué son los Contenedores (containers)?

  //  Un contenedor-container es un "paquete ejecutable independiente" de una aplicacion, que incluye todo lo necesario para ejecutar una aplicación. 
  //  Esto incluye:  ficheros codigos y compilaciones, datos, tiempo de ejecución, bibliotecas - dependencias instaladas, variables de entorno 
  //  y archivos de configuración. 
  
  //  Lo mejor de los contenedores es que se pueden implementar en cualquier lugar (SO y maquina HW) y son de tamaño pequeño, rápidos y eficientes.



/*  1.1.-  Beneficios de usar Contenedores

    El uso de contenedores puede beneficiar enormemente a su negocio. Puede ayudar tanto a los desarrolladores como al equipo de operaciones de TI. 
    Algunos de los beneficios de usar Docker son:

      1.-  Portabilidad: ¡los contenedores se pueden implementar en cualquier lugar, en cualquier maquina hardware con cualquier SO!
      2.-  Aislamiento de aplicaciones: los contenedores aíslan la aplicación y sus dependencias del sistema host.
      3.-  Separación de responsabilidades: el trabajo se divide entre los desarrolladores y el equipo de operaciones de TI.
      4.-  Desarrollo de aplicaciones más rápido: no es necesario jugar con entornos de desarrollo locales, CI/CD.
      5.-  Fácil escalado: los contenedores se pueden escalar fácilmente en combinación con el software de orquestación (Kubernetes)
*/

/*  2.-  Que es Docker

    "Docker" es una herramienta de código abierto basada en Linux que permite a los desarrolladores crear, implementar y ejecutar aplicaciones 
    en contenedores (containers) livianos. ¡Le brinda todas las grandes ventajas de la tecnología de contenedores y le permite codificar, enviar 
    e implementar su software más rápido que nunca!

    Es una tecnología estable y probada, que se lanzó en el 2013. Desde entonces, muchas grandes empresas, incluidas Google, AWS y Microsoft, 
    la han adoptado. Está respaldado por una gran comunidad de desarrolladores, lo que significa que puede encontrar ayuda fácilmente si alguna vez 
    se queda atascado.

    "Docker" no es la única herramienta de creación de "contenedores" en el mercado, pero es la más popular. Algunas de las excelentes alternativas 
    incluyen Podman, LXD, containerd, y Buildah.

    .-  Maquinas Virtuales (VM) Vs Containers: Las máquinas virtuales (VM) son una "abstracción" del hardware físico, mientras que los contenedores 
                                               se virtualizan en el nivel del sistema operativo. Las máquinas virtuales ofrecen mayor aislamiento y 
                                               seguridad, mientras que los contenedores no ocupan mucho espacio y son más eficientes y escalables.

                                               Es posible combinar contenedores y máquinas virtuales para obtener lo mejor de ambos.
*/

/*  3.-  Generacion de "imagenes" Docker.  Dockerizacion ed una aplicacion.

    "Docker" es capaz de generar "imágenes" de manera automática a través de un fichero llamado "Dockerfile", que contiene las instrucciones 
     para la generación de dicha imagen. Es en definitiva como si estuviésemos leyendo una "receta de cocina" para elaborar un determinado plato.
     
     Nota.-  "Dockerfile": no es más que un documento de texto, un fihero de comandos, que contiene todos los comandos que nosotros, como usuarios, 
                           a través de la línea de comandos podríamos invocar para ensamblar una "imagen Docker".

     Algunas instrucciones que podemos incluir dentro de nuestros ficheros "Dockerfile" son:

     1.-  FROM:  Indica el nombre de la "imagen base" de la que partimos.

                    FROM node: 20-alpine 

     2.-  WORKDIR:  Creacion de una carpeta (folder) en el container Docker, donde se alojaran e instalaran todos los ficheros y dependencias 
                    requeridas en la aplicacion que queremos meter.

                    WORKDIR /app

      3.- COPY:     Para poder copiar "archivos - ficheros" de nuestra máquina a la imagen en docker.  Si copiamos los packages JSON copiara 
                    (y posteriormente instalara) todas las dependencias necesarias en la aplicacion que queremos hacer la "imagen Docker", y 
                    asi permitir a "vite" poder generar de manera automatica en la imagen la aplicacion React utilizando "vite"

                    COPY package.json .
                    COPY package-lock.json .

                    o bien jusntandolo todo:

                    COPY package*.json .

                    Con el punto final, ".", indicamos que todo se copiara en el directorio del workdir de la imagen Docker.

      4.-  RUN:  Son los comandos que quiero ejecutar en la imagen. Instalacion de "dependencias" en la imagen Docker, siguiendo el fichero 
                 de dependencias definido en los packages JSON.

                    RUN npm install

      5.-  Aqui copiamos todos los ficheros de nuestra aplicacion (con las carpetas y todos los ficheros y recursos que tiene la aplicacion) 
           en la carpeta del "workdir" de la imagen Docker.

                    COPY . . 

      6.-  Habria que crear un fichero:  ".dockerignore", para que el comando anterior de copia no "rempace" tods los ficheros de node_modules, y asi 
           no tener errores de perdidas de dependencias de nuestra aplicacion

                    //  En .dockerignore
                    node_modules

      7.-  Se crea la version de produccion de la aplicacion con "build"

                    RUN npm run vite build

      8.-  EXPOSE:  Para indicar los puertos que se quieren "exponer" (dejas abiertos) cuando se ejecute un contenedor con el parámetro -P es informativo. 
                    Se "abren" (exponen) los puertos de comunicaciones del contenedor en Docker,  indicando:
                    
                              EXPOSE Puerto de la aplicacion "React" a exponer: puerto del Docker a exponer

                              en nuestro caso:  EXPOSE 8080:8080

      9.-  CMD:  indicar que actividad - comando - proceso queremos que se ejecute para poder iniciar la aplicacion en el Docker.
                 Todo "container" Docker debe tener en cuenta siempre un "proceso principal", un "demonio" , y el objetivo del container es ejecutar
                 siempre ese proceso - demonio.

                 CMD ["npm", "run", "dev"]

      10.-  Convertir todas las "instrucciones" del fichero Dockerfile en una imagen Docker, Nos situamos en el "folder" donde esta la aplicacion, y 
            escribimos en un termoinal Linux:

                docker build -t tonyverdu1234/gendynforms .

            Donde "tonyverdu1234" es la cuenta de hubDocker, y el punto al final es para indicar que la inmagen se creara (construira) en el mismo 
            directorio donde este el Dockerfile

      11.-  Comprobamos que se ha creado la "image" de la aplicacion en el contenedor "Docker":  

                docker image ls

      12.-  Creacion de varios "dockers" de la misma aplicacion (construccion de varias imagenes en el docker de la aplicacion)

                docker run -d -p 8080:8080  tonyverdu1234/gendynforms

            Aqui se generara un "hash" de confirmacion de generacion de la imagen en el Docker.

      14.-  Comparticion de las imagenes de la aplicacion incluidas en los contenedores "dockers" creados, para que pueda ejecutarse 
            la "imagen de la aplicacion" en el contenedor docker en distintos entornos - maquinas:

                docker push tonyverdu1234/gendynforms  =>  subimos y guardamos la imagen creda en el docker en la herramienta de nube "hub Docker"

                docker pull tonyverdu1234/gendynforms  => bajada de la imagen del container en un container Docker de nuestro entorno local.


      Nota.-  Hay mas "comandos" para el fichero "Dockerfile" que se pueden utilizar:


              ARG: podemos recibir "argumentos" en el proceso de creación de la imagen.

              LABEL: nos permite incluir metainformación en la imagen, como el nombre del autor, versión, etc.

              VOLUME: indica el "volumen" donde vamos a guardar datos persistentes fuera del contenedor. Para que sigan estando disponibles 
                      cuando el contenedor no esté en ejecución.

              ENTRYPOINT: una vez que se crea la instancia del contenedor e instanciado, es lo primero que ejecuta.

                          El objetivo es dejar el contenedor (container Docker) en el estado inicial deseado, y asi cada vez que iniciamos un 
                          contenedor debe estar en este estado.

                          Lo que hagamos en el "entrypoint" se ejecuta en cada una de las instancias que se realicen.

              CMD: Puede tener los parámetros que le vamos a pasar al ENTRYPOINT para que se ejecuten después del ENTRYPOINT.
              Si no hay ENTRYPOINT, ejecuta los comandos que tengamos aquí.
              Si ENTRYPOINT y CMD están presentes en el Dockerfile, primero se ejecuta el ENTRYPOINT y el CMD se le pasa como parámetro.
              Si sólo está el ENTRYPOINT sólo se ejecuta éste.
              Si sólo está el CMD sólo se ejecuta este.
*/

/*  Dockerizacion de una aplicacion.

    Los siguientes pasos requerirán que tengas "Docker" instalado. La forma más fácil de instalar Docker es descargando "Docker Desktop".

      1.-  Instalas el Docker en tu maquina

      2.-  Verifique que tenga Docker ejecutándose:  $ docker --version

              Docker version 20.10.22, build 3a2c30b

      3.-  Configuracion del fichero "vite.config.js" o si es NextJS configurar:  next.config.js 
      
           Hay que establecer la salida en “independiente” así:

                // => En ReactJS con vite.config.js

                import { defineConfig } from 'vite'
                import react from '@vitejs/plugin-react'

                // https://vitejs.dev/config/
                export default defineConfig({
                  plugins: [react()],
                  server: {
                    host: true,
                    strictPort: true,
                    port: 8080
                  }
                }) 


                // => En NextJS con next.config.js

                /** @type {import('next').NextConfig} * /
                const nextConfig = {
                  reactStrictMode: true,
                  output: "standalone"
                };

                module.exports = nextConfig;

          Cambiar esta configuración creará una versión independiente de nuestra aplicación Next.js con la próxima compilación. 
          Se puede implementar una aplicación independiente sin instalar node_modules. La compilación independiente también viene con un 
          servidor web incorporado.

      4.-  Creacion y comandos del fichero de texto "Dockerfile".  Definicion ed la imagen de la aplicacion en Docker

           Para "dockerizar" nuestra aplicación usaremos un fichero de comandos: "Dockerfile". Un "Dockerfile" es un archivo de texto sin 
           formato que nos permite definir la "imagen base, el entorno, las variables ambientales, los comandos, la configuración de red, 
           los volúmenes, etc." de la aplicacion que queremos meter en el contenedor de Docker.

           Cree un "Dockerfile" en la raíz de su proyecto con los siguientes contenidos:

                  # Dockerfile

                  FROM node:18-alpine AS dependencies
                  RUN apk add --no-cache libc6-compat
                  WORKDIR /home/app

                  # install dependencies
                  COPY package.json ./
                  COPY package-lock.json ./
                  RUN npm i

                  FROM node:18-alpine AS builder
                  WORKDIR /home/app

                  COPY --from=dependencies /home/app/node_modules ./node_modules
                  COPY . .

                  ENV NODE_ENV="production"

                  # build the app
                  RUN npm run build

                  FROM node:18-alpine AS runner
                  WORKDIR /home/app

                  COPY --from=builder /home/app/.next/standalone ./standalone
                  COPY --from=builder /home/app/public /home/app/standalone/public
                  COPY --from=builder /home/app/.next/static /home/app/standalone/.next/static

                  EXPOSE 3000
                  ENV PORT 3000

                  # serve the app
                  CMD ["node", "./standalone/server.js"]
*/

/*  Claves
                uid:  Jose Antonio Fernandez Verdu <tony_verdu@hotmail.com>
                pub:  9E696E108006AD2348FE8E38FBD949D82D7BE897
                sub:  rsa3072 2023-05-29 [E] [expires: 2025-05-28]

*/