// El estado: la memoria del componente.


// 3.1.- ¿Que es el estado en React? La memoria del componente
/*
        En React, el "estado" de un componente es un "objeto JavaScript", que almacena los datos dinámicos de un componente
        y determina su comportamiento. Se puede utilizar para almacenar información que puede cambiar con el tiempo, como la
        entrada del usuario, los datos de la red o la hora actual.

        El "estado" es local a un componente y no se puede acceder o modificar directamente por otros componentes. 
        Esta encapsulación ayuda a mantener la integridad y la predecibilidad del componente.

        Los componentes a menudo necesitan cambiar lo que se muestra en pantalla como resultado de una interacción. Escribir
        dentro de un formulario debería actualizar el campo de texto, hacer clic en «siguiente» en un carrusel de imágenes debería
        cambiar la imagen que es mostrada; hacer clic en un botón para comprar un producto debería actualizar el carrito de compras.
        En los ejemplos anteriores los componentes deben «recordar» cosas: el campo de texto, la imagen actual, el carrito de compras.
        En React, a este tipo de memoria de los componentes se le conoce como "estado".


        Aquí hay un componente que renderiza una imagen de una escultura. Al hacer clic en el botón «Siguiente», debería mostrarse
        la siguiente escultura cambiando el índice index a 1, luego a 2, y así sucesivamente. Sin embargo, esto no funcionará.

                  App.js

                  import { sculptureList } from './data.js';

                  export default function Gallery() {
                    let index = 0;

                    function handleClick() {
                      index = index + 1;
                    }

                    let sculpture = sculptureList[index];
                    return (
                      <>
                        <button onClick={handleClick}>
                          Siguiente
                        </button>
                        <h2>
                          <i>{sculpture.name} </i> 
                          por {sculpture.artist}
                        </h2>
                        <h3>  
                          ({index + 1} de {sculptureList.length})
                        </h3>
                        <img 
                          src={sculpture.url} 
                          alt={sculpture.alt}
                        />
                        <p>
                          {sculpture.description}
                        </p>
                      </>
                    );
                  }

      El "controlador de evento" <<handleClick>> está actualizando una variable local, index. Pero dos cosas impiden
      que ese cambio sea visible:

          1.- Las "variables locales" NO PERSISTEN entre renderizaciones. 
              Cuando React renderiza este componente por segunda vez, lo hace desde cero, no considera
              ningún cambio en las variables locales.

          2.- Los cambios en las variables locales NO ACTIVARAN renderizaciones. React no se da cuenta de
              que necesita renderizar el componente nuevamente con los nuevos datos.


      Para actualizar un componente con datos nuevos, deben pasar las siguientes dos cosas:

          1.- Conservar los datos entre renderizaciones.

          2.- Provocar que React renderice el componente con nuevos datos (re-renderizado).


      El Hook de "useState" de React ofrece dos cosas:

          1.- Una "variable de estado" para mantener los datos entre renderizados (persistencia en memoria)

          2.- Una función que actualiza (set) el "estado" para actualizar la variable y provocar que React
              renderice el componente nuevamente.
*/

// 3.2.- Agregar una variable de estado a un componente React.
/*
        Para agregar una "variable de estado" a un componente, debemos importar el "useState" de React al
        inicio del archivo:

              import { useState } from 'react';

        Luego, reemplazamos la variable local por la variable de estado:

              let index = 0;  => const [index, setIndex] = useState(0);

        "index" ahora es una "variable de estado" y "setIndex" es la función de actualizacion que setea el estado.


            Nota.- La sintaxis de [ y ] se le conoce cómo "desestructuración de un array", y permite leer
                   valores de un array. El array devuelto por useState siempre contará con exactamente dos
                   valores (la variable de estado y la funcion de actualizacion)


        Así es como funcionan juntos en el controlador de eventos handleClick:

                          function handleClick() {
                            setIndex(index + 1);
                          }
        
        Ahora al hacer clic en el botón «Siguiente» cambia la escultura actual:

                          App.js

                          import { useState } from 'react';
                          import { sculptureList } from './data.js';

                          export default function Gallery() {
                            const [index, setIndex] = useState(0);

                            function handleClick() {
                              setIndex(index + 1);
                            }

                            let sculpture = sculptureList[index];
                            return (
                              <>
                                <button onClick={handleClick}>
                                  Siguiente
                                </button>
                                <h2>
                                  <i>{sculpture.name} </i> 
                                  por {sculpture.artist}
                                </h2>
                                <h3>  
                                  ({index + 1} de {sculptureList.length})
                                </h3>
                                <img 
                                  src={sculpture.url} 
                                  alt={sculpture.alt}
                                />
                                <p>
                                  {sculpture.description}
                                </p>
                              </>
                            );
                          }
*/


//  3.3.- Conoce tu primer Hook: useState.
/*
          En React, la funcion "useState", así como cualquier otra función que empiece con "use", se le conoce como Hook.

          Los Hooks son "funciones especiales" de React que sólo están disponibles mientras React está renderizando (algo
          que veremos con más detalle en la página siguiente). Los Hooks permiten «engancharnos» a diferentes características
          de React.

              Nota.- El "estado" del componente es solo una de esas características, conoceremos los otros
                     Hooks más adelante.

              Atención.- Las funciones-Hook que empiecen con "use" deben ser solo llamadas en el nivel superior
                         de los componentes o en tus propios Hooks. No podemos usar Hooks dentro de condicionales,
                         bucles, u otras funciones anidadas. Los Hooks son funciones, pero es útil pensar en ellos
                         como declaraciones independientes de las necesidades de nuestro componente.
                         
                         Las funciones de React se «usan» en la parte superior del componente de manera similar a
                        cómo se «importan» módulos en la parte superior de un archivo.


    3.3.3.1.- Anatomía del useState.

              Cuando llamamos al Hook useState, le estamos diciendo a React que debe "recordar" algo:

                                    const [index, setIndex] = useState(0);
              
              En este caso, queremos que React recuerde el valor de "index" entre renderizados.

                  Nota.- La convención es nombrar estas dos variables como const [algo, setAlgo]. Podemos
                         nombrarlo como queramos, pero mantener las convenciones hacen que las cosas sean 
                         más fáciles de entender en todos los proyectos.


              El único argumento para useState es el valor inicial de su variable de estado. En este ejemplo,
              el valor inicial de index se establece en 0 con useState(0).

              Cada vez que el componente se renderiza, el useState devuelve un array que contiene dos valores:

                    1.- La variable de estado (index) con el valor que almacenaste.

                    2.- La función que establece el estado (setIndex) que puede actualizar la variable de
                        estado y alertar a React para que renderice el componente nuevamente.
          
              Así es como sucede en acción:

                    const [index, setIndex] = useState(0);

              Tu componente se renderiza por primera vez. Debido a que pasamos 0 a useState como valor inicial
              para index, esto devolverá [0, setIndex]. React recuerda que 0 es el último valor de estado.

              Actualizas el estado. Cuando un usuario hace clic en el botón, llama a setIndex(index + 1).
              index es 0, por lo tanto es setIndex(1). Esto le dice a React que recuerde que index es 1 ahora
              y ejecuta otro renderizado.

              El componente se renderiza por segunda vez. React todavía ve useState(0), pero debido a que React
              recuerda que estableció index en 1, devuelve [1, setIndex] en su lugar.

              ¡Y así sucesivamente!
*/


// 3.4.- Colocar múltiples variables de estado a un componente.
/*
         Podemos tener más de una variable de estado de diferentes tipos en un componente. 
         
         Este componente tiene dos variables de estado, un index numérico y un showMore booleano que se activa
        al hacer clic en «Mostrar detalles»:

                  App.js

                  import { useState } from 'react';
                  import { sculptureList } from './data.js';

                  export default function Gallery() {
                    const [index, setIndex] = useState(0);
                    const [showMore, setShowMore] = useState(false);

                    function handleNextClick() {
                      setIndex(index + 1);
                    }

                    function handleMoreClick() {
                      setShowMore(!showMore);
                    }

                    let sculpture = sculptureList[index];
                    return (
                      <>
                        <button onClick={handleNextClick}>
                          Siguiente
                        </button>
                        <h2>
                          <i>{sculpture.name} </i> 
                          por {sculpture.artist}
                        </h2>
                        <h3>  
                          ({index + 1} de {sculptureList.length})
                        </h3>
                        <button onClick={handleMoreClick}>
                          {showMore ? 'Ocultar' : 'Mostrar'} detalles
                        </button>
                        {showMore && <p>{sculpture.description}</p>}
                        <img 
                          src={sculpture.url} 
                          alt={sculpture.alt}
                        />

        Es una buena idea tener múltiples variables de estado si no se encuentran relacionadas entre sí,
        como index y showMore en este ejemplo. Pero si encontramos que a menudo cambiamos dos variables de
        estado juntas, podría ser mejor combinarlas en una sola. 
        
        Por ejemplo, si tenemos un formulario con muchos campos, es más conveniente tener una única variable
        de estado que contenga un objeto que una variable de estado por campo. Elegir la estructura del estado
        tiene más consejos sobre esto.


            Nota.- ¿Cómo sabe React qué estado devolver? 
*/


// 3.5.- El estado es aislado y privado.
/*
        El estado es local para una instancia de un componente en la pantalla. En otras palabras, si renderizas
        el mismo componente dos veces, ¡cada copia tendrá un estado completamente aislado! Cambiar uno de ellos
        no afectará al otro.

        En este ejemplo, el anterior componente de Galería se ha renderizado dos veces sin cambios en su
        lógica. Puedes intentar hacer clic en los botones dentro de cada una de las galerías. Observarás
        que su estado es independiente:

                App.js
                Gallery.js
                data.js
                Reiniciar
                import Gallery from './Gallery.js';

                export default function Page() {
                  return (
                    <div className="Page">
                      <Gallery />
                      <Gallery />
                    </div>
                  );
                }

        Esto es lo que hace que el estado sea diferente de las variables regulares que declaramos en la parte
        superior de un módulo. El estado no está vinculado a una llamada de función en particular o a un lugar
        en el código, pero es «local» al lugar específico en la pantalla. Se han renderizado dos componentes
        <Gallery />, por lo que su estado se almacena por separado.

        También observemos cómo el componente de la página Page no «sabe» nada sobre el estado del componente
        de la galería Galery, ni siquiera si es que posee algún estado. A diferencia de las props, el estado
        es "totalmente privado" para el componente que lo declara. El componente padre no puede cambiarlo. Esto permite agregar el estado a cualquier componente o eliminarlo sin afectar al resto de los componentes.

        ¿Qué pasaría si quisieramos que ambas galerías mantuvieran sus estados sincronizados? La forma correcta
        de hacerlo en React es eliminar el estado de los componentes secundarios y agregarlo a su padre más
        cercano. Las próximas páginas se centrarán en organizar el estado de un solo componente, pero volveremos a este tema en Compartir estado entre componentes.

Recapitulación
Debemos utilizar una variable de estado cuando necesitamos que un componente necesite «recordar» alguna información entre renderizaciones.
Las variables de estado se declaran llamando al Hook useState.
Los Hooks son funciones especiales que comienzan con use. Nos permiten «enlazarnos» a funciones de React como el estado.
Evita llamar a Hooks de manera anidada (por ejemplo, dentro de bucles o condicionales). Llamar a Hooks -incluyendo al useState- solo es válido en el nivel superior de un componente u otro Hook.
El Hook useState devuelve un array de dos valores: el estado actual y la función para actualizarlo.
Puede tener más de una variable de estado. Internamente, React los empareja por orden.
El estado es privado para un componente. Si los renderizamos en dos lugares, cada componente lo maneja individualmente.
*/