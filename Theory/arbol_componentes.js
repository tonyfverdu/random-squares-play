//  Comprender la interfaz de usuario (GUI) como un árbol jerarquico de componentes

/*  Una aplicación React toma forma con muchos componentes anidados unos dentro de otros. 
    ¿Cómo realiza React un seguimiento de la estructura de componentes de su aplicación?

    React y muchas otras bibliotecas de UI modelan la UI como un "árbol". Pensar en su aplicación como un
    árbol jerarquico de componentes es útil para comprender la relación entre los componentes. Esta
    comprensión ayuda a depurar conceptos futuros como el rendimiento y la gestión del estado.
*/


//  1.- La interfaz de usuario como un árbol jerarquico de componentes.
/*
        Los árboles son un modelo de relación entre elementos del DOM y la interfaz de usuario. 
        
        A menudo una GUI se representa mediante "estructuras de árbol". Por ejemplo, los navegadores utilizan
        estructuras de árbol para modelar HTML (DOM) y CSS (CSSOM). Las plataformas móviles también utilizan
        árboles para representar su jerarquía de vistas.


        Al igual que los navegadores y las plataformas móviles, React también utiliza "estructuras de árbol"
        para gestionar y modelar la relación entre los componentes de una aplicación React. Estos árboles son
        herramientas útiles para comprender cómo fluyen los datos a través de una aplicación React y cómo
        optimizar la representación y el tamaño de la aplicación.


    1.1.- El árbol de renderizado de React.

          Una característica importante de los componentes es la capacidad de componer otros componentes
          mediante "anidamiento". Tenemos el concepto de componentes "padre" e "hijo", donde cada componente
          "padre" puede ser a su vez "hijo" de otro componente.

          Cuando renderizamos una aplicación React, podemos modelar esta relación entre componentes anidados 
          en un árbol jerarquico de componentes, conocido como "árbol de renderizado".

          Aquí hay una aplicación React que muestra citas inspiradoras.

                  App.js
                  FancyText.js
                  InspirationGenerator.js
                  Copyright.js
                  quotes.js

                  // import FancyText from './FancyText';
                  // import InspirationGenerator from './InspirationGenerator';
                  // import Copyright from './Copyright';

                  export default function App() {
                    return (
                      <>
                        <FancyText title text="Get Inspired App" />
                        <InspirationGenerator>
                          <Copyright year={2004} />
                        </InspirationGenerator>
                      </>
                    );
                  }

                  export function FancyText({title, text}) {
                    return title
                      ? <h1 className='fancy title'>{text}</h1>
                      : <h3 className='fancy cursive'>{text}</h3>
                  }

                  export function InspirationGenerator({children}) {
                    const [index, setIndex] = React.useState(0);
                    const quote = quotes[index];
                    const next = () => setIndex((index + 1) % quotes.length);

                    return (
                      <>
                        <p>Your inspirational quote is:</p>
                        <FancyText text={quote} />
                        <button onClick={next}>Inspire me again</button>
                        {children}
                      </>
                    );
                  }

                  export function Copyright({year}) {
                    return <p className='small'>©️ {year}</p>;
                  }

                  export default [
                    "Don’t let yesterday take up too much of today.” — Will Rogers",
                    "Ambition is putting a ladder against the sky.",
                    "A joy that's shared is a joy made double.",
                    ];


        React crea un árbol de renderizado, un árbol de interfaz de usuario, compuesto por los componentes
        renderizados.

        Desde la aplicación de ejemplo, podemos construir el árbol de renderizado anterior.

            1.- Nodos del arbol de renderizado: el árbol se compone de "nodos", cada uno de los cuales
                representa un componente. App, FancyText, Copyright, por nombrar algunos, son todos nodos
                de nuestro árbol.

            2.- El nodo raíz en un árbol de renderizado de React es el componente raíz de la aplicación. 
               En este caso, el componente raíz es Appel primer componente que React representa. Cada flecha 
               en el árbol apunta desde un componente principal a un componente secundario.
*/


//  2.- ¿Dónde están las etiquetas HTML en el árbol de renderizado?
/*
        El "árbol de renderizado" solo está compuesto por componentes de React.

        React, como marco de interfaz de usuario, es independiente de la plataforma. 
        
        Una aplicación React podría renderizarse en una plataforma móvil o de escritorio, que puede usar
        diferentes primitivas de UI como UIView o FrameworkElement .

        Estas primitivas de la interfaz de usuario de la plataforma no forman parte de React. Los árboles
        de renderizado de React pueden proporcionar información sobre nuestra aplicación React 
        independientemente de la plataforma en la que se renderice su aplicación.
*/


//  3.- Renderizado condicional.  Arbol de componentes condicional.
/*
    Un árbol de renderizado representa un único paso de renderizado de una aplicación React. Con la
    representación condicional, un componente principal puede representar diferentes elementos secundarios
    según los datos pasados.

    Podemos actualizar la aplicación para representar condicionalmente una cita inspiradora o un color.

              aplicación.js

              import FancyText from './FancyText';
              import InspirationGenerator from './InspirationGenerator';
              import Copyright from './Copyright';

              export default function App() {
                return (
                  <>
                    <FancyText title text="Get Inspired App" />
                    <InspirationGenerator>
                      <Copyright year={2004} />
                    </InspirationGenerator>
                  </>
                );
              }


    En este ejemplo, dependiendo de lo que inspiration.typesea, podemos renderizar <FancyText>o <Color>.
    El árbol de renderizado puede ser diferente para cada pasada de renderizado.


    Aunque los árboles de renderizado pueden diferir entre pases de renderizado, estos árboles generalmente
    son útiles para identificar cuáles son los componentes de nivel superior y de hoja en una aplicación React. Los componentes de nivel superior son los componentes más cercanos al componente raíz y afectan el rendimiento de renderizado de todos los componentes debajo de ellos y, a menudo, contienen la mayor complejidad. Los componentes de la hoja están cerca de la parte inferior del árbol y no tienen componentes secundarios y, a menudo, se vuelven a renderizar con frecuencia.

    Identificar estas categorías de componentes es útil para comprender el flujo de datos y el rendimiento
    de su aplicación.
*/

//  4.- El árbol de dependencia del módulo
/*
        Otra relación en una aplicación React que se puede modelar con un árbol son las dependencias de
        los módulos de una aplicación. A medida que dividimos nuestros componentes y lógica en archivos
         separados, creamos módulos JS donde podemos exportar componentes, funciones o constantes.

        Cada nodo en un árbol de dependencia de módulo es un módulo y cada rama representa una declaracion de
        import en ese módulo.

        Si tomamos la aplicación "Inspirations"anterior, podemos crear un árbol de dependencia de módulos
        o, para abreviar, un "árbol de dependencia".

        El nodo raíz del árbol es el módulo raíz, también conocido como archivo de punto de entrada. A menudo 
        es el módulo el que contiene el componente raíz.

        En comparación con el árbol de renderizado de la misma aplicación, existen estructuras similares
        pero algunas diferencias notables:

            1.- Los nodos que forman el árbol representan módulos, no componentes

            2.- Los módulos que no son componentes, como inspirations.js, también están representados en
                este árbol. El árbol de renderizado solo encapsula componentes. 

            3.- Los árboles de dependencia son útiles para determinar qué módulos son necesarios para
                ejecutar su aplicación React. Al crear una aplicación React para producción, normalmente
                hay un paso de compilación que agrupará todo el JavaScript necesario para enviarlo al 
                cliente. La herramienta responsable de esto se llama paquete, y los paquetes utilizarán 
                el árbol de dependencia para determinar qué módulos deben incluirse.

        A medida que su aplicación crece, a menudo el tamaño del paquete también lo hace. Los paquetes de
        gran tamaño son costosos de descargar y ejecutar para un cliente. Los paquetes de gran tamaño pueden
        retrasar el tiempo de elaboración de la interfaz de usuario. Tener una idea del árbol de dependencias
        de su aplicación puede ayudar a depurar estos problemas.
*/

//  Recapitulación.
/*
    1.- Los árboles son una forma común de representar la relación entre entidades. A menudo se utilizan
        para modelar la interfaz de usuario.

    2.- Los árboles de renderizado en React representan, la "relación anidada" entre los componentes
        de React en un único renderizado.

    3.- Con el "renderizado condicional", el árbol de renderizado puede cambiar entre diferentes
        renderizados. Con diferentes valores de accesorios, los componentes pueden generar diferentes
        componentes secundarios.

    4.- Los árboles de renderizado ayudan a identificar cuáles son los componentes de hoja y de nivel 
        superior. Los componentes de nivel superior afectan el rendimiento de renderizado de todos los
        componentes debajo de ellos y los componentes de hoja a menudo se vuelven a renderizar con
        frecuencia. Identificarlos es útil para comprender y depurar el rendimiento del renderizado.

    5.- Los "árboles de dependencia" representan las dependencias del módulo en una aplicación React.

    6.- Las herramientas de compilación utilizan árboles de dependencia para agrupar el código necesario
        para enviar una aplicación.

    7.- Los árboles de dependencia son útiles para depurar paquetes de gran tamaño que ralentizan el
        tiempo de pintura y exponen oportunidades para optimizar el código empaquetado.
*/