//  Componentes puros en React.

// 1.- Funciones "puras" en Javascript
/*
       Las funciones "puras" en JavaScript son funciones que siempre producen el mismo resultado dado el
       mismo conjunto de entradas y no tienen efectos secundarios, como modificar variables globales o realizar
       operaciones de entrada/salida. Son predecibles y fáciles de probar.

       Ejemplo:

                  function square(x) {
                    return x * x;
                  }

                  La función square toma un número como entrada y devuelve el cuadrado de ese número.
                  Es una función "pura".


                  let y = 5;

                  function impureAdd(x) {
                    return x + y;
                  }

                   la función "impureAdd" depende de una variable externa y, lo que la hace "impura".


                   Otro ejemplo de funcion "impura":

                   function impureRandom() {
                      return Math.random();
                    }

                    Otro:

                    let globalCounter = 0;

                    function impureIncrement() {
                      globalCounter++;
                      return globalCounter;
                    }
       
       
       Las funciones "puras" en JavaScript tienen dos propiedades importantes:

          1.- Reproducibilidad: dado un conjunto de entradas, una función pura siempre devolverá el mismo
              resultado, lo que facilita la depuración y el razonamiento sobre el código.

          2.- Ausencia de efectos secundarios: Las funciones puras no modifican variables fuera de su alcance
              local, ni realizan operaciones de entrada/salida, como leer o escribir archivos o realizar
              solicitudes de red. Esto las hace más predecibles y fáciles de probar.

       Un ejemplo de una función "pura" en JavaScript es la función "square". Una función pura en JavaScript sería
       una función que toma un número como entrada y devuelve el cuadrado de ese número, sin modificar ninguna variable
       fuera de la función.
*/

//  2.- Los componentes funcionales "puros" en React
/*
        Los "componentes funcionales puros" en React son componentes que NO modifican su "estado interno" ni reciben propiedades
        (props)que cambian con el tiempo. Esto significa que su representación visual y su comportamiento son completamente
        predecibles lo que los hace más fáciles de razonar y probar.

        En React, los "componentes funcionales puros" se benefician del rendimiento ya que pueden evitar renderizaciones
        innecesarias al utilizar la optimización de renderizado condicional (shouldComponentUpdate o React.memo).

        Un ejemplo de un "componente puro" en React sería un componente funcional simple que solo muestra información estática y
        no depende de ningún estado interno o propiedades que cambian con el tiempo.

                      function Welcome(props) {
                          return <h1>Hello, {props.name}</h1>;
                      }

        En este ejemplo, el componente Welcome toma una rop "name" y muestra un saludo utilizando el valor de "name". Dado
        el mismo valor de "name", el componente siempre renderizará el mismo resultado.

        Los "componentes funcionales puros" en React se benefician del rendimiento ya que pueden evitar renderizaciones innecesarias
        al utilizar la optimización de renderizado condicional (shouldComponentUpdate o React.memo). Además, los "componentes puros"
        son más fáciles de probar y depurar, ya que no tienen efectos secundarios y siempre producen el mismo resultado dado el mismo
        conjunto de entradas (props).

        Por otro lado, un ejemplo de un "componente impuro" en React sería un componente que modifica su estado interno o depende
        de propiedades que cambian con el tiempo. Por ejemplo:

                      class Timer extends React.Component {
                        constructor(props) {
                          super(props);
                          this.state = { seconds: 0 };
                        }

                        tick() {
                          this.setState(state => ({
                            seconds: state.seconds + 1
                          }));
                        }

                        componentDidMount() {
                          this.interval = setInterval(() => this.tick(), 1000);
                        }

                        componentWillUnmount() {
                          clearInterval(this.interval);
                        }

                        render() {
                          return <div>Segundos: {this.state.seconds}</div>;
                        }
                      }

        En este ejemplo, el componente "Timer" modifica su estado interno cada segundo y por lo tanto no es puro. Si bien este
        componente es necesario para mostrar un temporizador de cuenta regresiva, es más difícil de probar y depurar que un
        componente puro.

        En realidad, "no es posible tener un componente funcional impuro en React", ya que los componentes funcionales se definen
        por el hecho de que "no tienen estado interno" y "no modifican las propiedades que reciben". Por lo tanto, los componentes
        funcionales en React son siempre "puros".

        Sin embargo, es posible crear un componente funcional que dependa de algún estado externo o que tenga efectos secundarios,
        lo que podría considerarse como un componente "impuro" en un sentido más amplio. Por ejemplo:

                    let counter = 0;

                    function Counter() {
                      counter++;
                      return <div>Contador: {counter}</div>;
                    }

        En este ejemplo, el componente "Counter" no tiene estado interno y no modifica las propiedades que recibe, pero depende
        de una variable externa "counter" que modifica en cada renderizado. Este componente no es puro, ya que su resultado no es
        completamente predecible y depende de variables externas.

        Es importante tener en cuenta que los "componentes funcionales puros" son preferibles en React, ya que son más fáciles de
        razonar y depurar. Si necesitas crear un componente con estado interno o que tenga efectos secundarios, es recomendable 
        utilizar un componente de clase en lugar de un componente funcional.
*/


//  1.- Mantener los componentes puros
/*
        Algunas funciones de JavaScript son "puras". Las "funciones puras" solo realizan un cálculo y nada más. Al escribir 
        estrictamente tus componentes como "funciones puras", puedes evitar una clase completa de errores desconcertantes y un
        comportamiento impredecible a medida que crece tu base de código. Sin embargo, para obtener estos beneficios, hay algunas
        reglas que debes seguir.
*/


//  2.- Pureza: componentes funcionales en React como "fórmulas".
/*      
        Recordemos: las funciones "puras" en JavaScript tienen dos propiedades importantes:

          1.- Reproducibilidad: dado un conjunto de entradas, una función pura siempre devolverá el mismo
              resultado, lo que facilita la depuración y el razonamiento sobre el código.

              Es decir: las mismas entradas, la misma salida. Dadas las mismas entradas, una función pura siempre debe
              devolver el mismo resultado.

          2.- Ausencia de efectos secundarios: Las funciones puras no modifican variables fuera de su alcance
              local, ni realizan operaciones de entrada/salida, como leer o escribir archivos o realizar
              solicitudes de red. Esto las hace más predecibles y fáciles de probar.

              Es decir: la funcion "pura" se ocupa de sus "propios asuntos". No cambia ningún objeto o variable que existiera
              antes de ser llamado.


        Es posible que ya estés familiarizado con un ejemplo de funciones puras: fórmulas en matemáticas.

        Considera esta fórmula matemática: y = 2x.

                Si x = 2 entonces y = 4. Siempre.

                Si x = 3 entonces y = 6. Siempre.

                Si x = 3, y a veces no será 9 o –1 o 2.5 dependiendo de la hora del día o del estado del mercado de valores.
                Siempre será 6.


        Si convirtiéramos esto en una función de JavaScript, se vería así:

                function double(number) {
                  return 2 * number;
                }

        En el ejemplo anterior, "double2 es una función "pura". Si le pasas 3, devolverá 6. Siempre.


        React está diseñado en torno a este concepto. React supone que cada componente que escribes es una función pura. Esto
        significa que los componentes que escribes en React "siempre deben devolver el mismo JSX dadas las mismas entradas", con
        lo cual crearan siempre los mismos ReactNode y la representacion visual sera siempre la misma:

                  App.js

                  function Recipe({ drinkers }) {
                    return (
                      <ol>    
                        <li>Hervir {drinkers} tazas de agua.</li>
                        <li>Añadir {drinkers} cucharadas de té y {0.5 * drinkers} cucharada de especias.</li>
                        <li>Añadir {0.5 * drinkers} tazas de leche hirviendo y azúcar a gusto.</li>
                      </ol>
                    );
                  }

                  export default function App() {
                    return (
                      <section>
                        <h1>Receta de té Chai especiado</h1>
                        <h2>Para dos</h2>
                        <Recipe drinkers={2} />
                        <h2>Para una reunión</h2>
                        <Recipe drinkers={4} />
                      </section>
                    );
                  }


        Cuando pasas drinkers={2} a Recipe, devolverá el JSX que contiene 2 cups of water. Siempre.

        Si pasas drinkers={4}, devolverá el JSX que contiene 4 cups of water. Siempre.

        Como una fórmula matemática.


          Nota.- Puedes pensar en tus componentes como recetas: si las sigues y no agregas nuevos ingredientes
                 durante el proceso de cocción, obtendrás el mismo plato siempre. Ese «plato» es el JSX que el
                 componente le pasa a React para renderizar.


        Una receta de té para x personas: toma x tazas de agua, añade x cucharadas de té y 0.5x cucharadas de especias
        y 0.5x tazas de leche
*/


//  2.- Los efectos secundarios: consecuencias (no)deseadas de componentes impuros.
/*      El proceso de renderizado de React siempre debe ser puro. Los componentes solo deben devolver su JSX, y no cambiar
        cualquier objeto o variable que existiera antes de renderizar: ¡Eso los haría impuros!

        Aquí hay un componente que rompe esta regla:

                    App.js

                    let guest = 0;

                    function Cup() {
                      // Mal: ¡Cambiar una variable preexistente!
                      guest = guest + 1;
                      return <h2>Taza de té para invitado #{guest}</h2>;
                    }

                    export default function TeaSet() {
                      return (
                        <>
                          <Cup />
                          <Cup />
                          <Cup />
                        </>
                      );
                    }

        Este componente está leyendo y escribiendo una variable "guest" declarada fuera del componente. Esto significa que llamar
        a este componente varias veces producirá diferente JSX! Y lo que es más, si otros componentes leen "guest", también
        producirán diferente JSX, ¡dependiendo de cuándo se procesaron! Eso no es predecible.


        Volviendo a nuestra fórmula y = 2x, ahora incluso si x = 2, no podemos confiar en que y = 4. Nuestras pruebas podrían fallar,
        nuestros usuarios estarían desconcertados, los aviones se caerían del cielo —¡puedes ver cómo esto conduciría a errores
        confusos!

        Solucion:  Puedes arreglar este componente pasando "guest" como prop en su lugar:

                      App.js

                      function Cup({ guest }) {
                        return <h2>Taza de té para invitado #{guest}</h2>;
                      }

                      export default function TeaSet() {
                        return (
                          <>
                            <Cup guest={1} />
                            <Cup guest={2} />
                            <Cup guest={3} />
                          </>
                        );
                      }


        Ahora tu componente ya es "puro", ya que el JSX que devuelve solo depende de la "prop guest".


        Nota.- Los renderizados de los componentes son independientes entre si: En general, no debes esperar que tus componentes
               se rendericen en ningún orden en particular. No importa si llamas y = 2x  antes o después y = 5x: ambas fórmulas
               se resolverán independientemente una de la otra. Del mismo modo, cada componente solo debe «pensar por sí mismo» y
               no intentar coordinarse o depender de otros durante el renderizado. El renderizado es como un examen escolar: ¡cada componente debe calcular su JSX por su cuenta!
*/


//  3.- Detección de cálculos impuros con Strict Mode.
/*
        Aunque es posible que aún no los hayas usado todos, en React hay tres tipos de entradas que puedes leer mientras se 
        renderiza: props, state, y context. Siempre debes tratar estas entradas como solo lectura (no se pueden cambiar)

        Cuando quieras cambiar algo en respuesta a la entrada del usuario, debes asignar el estado en lugar de reescribir la
        variable. Nunca debes cambiar variables u objetos preexistentes mientras tu componente está renderizando.

        React ofrece un «Modo estricto» en el que llama a la función de cada componente dos veces durante el desarrollo. Al
        llamar a las funciones del componente dos veces, el modo estricto ayuda a encontrar componentes que rompan estas reglas.

        Las funciones puras solo se calculan, por lo que llamarlas dos veces no cambiará nada —como llamar double(2) dos veces no
        cambia lo que se devuelve, y devuelve y = 2x dos veces, no cambia lo que y es. Las mismas entradas, las mismas salidas.

        El modo estricto no tiene ningún efecto en producción, por lo que no ralentizará la aplicación para tus usuarios. Para optar
        por el modo estricto, puedes envolver tu componente raíz en <React.StrictMode>. Algunos frameworks hacen esto por defecto.
*/


//  4.-  Mutación local: el pequeño secreto de tus componentes.
/*       En el ejemplo anterior, el problema era que el componente cambiaba una variable preexistente mientras renderizaba.

         Esto a menudo se llama «mutación» para que suene un poco más aterrador. ¡Las funciones puras no mutan las variables fuera
         del alcance de la función ni los objetos que se crearon antes de la llamada —¡Eso las hace impuras!

         Sin embargo, está completamente bien cambiar variables y objetos que acabas de crear mientras renderizas. En este ejemplo,
         creas un array [], lo asignas a la variable cups, y luego haces un push con una docena de tazas adentro:

                      App.js

                      function Cup({ guest }) {
                        return <h2>Taza de té para invitado #{guest}</h2>;
                      }

                      export default function TeaGathering() {
                        let cups = [];
                        for (let i = 1; i <= 12; i++) {
                          cups.push(<Cup key={i} guest={i} />);
                        }
                        return cups;
                      }


        ¡Si la variable cups o el array [] se crearon fuera de la función TeaGathering, este sería un gran problema! Estarías
        cambiando un objeto preexistente haciendo push a ese array.

        Sin embargo, está bien porque los has creado durante el mismo renderizado, dentro de TeaGathering. Ningún código fuera
        de TeaGathering sabrá nunca que esto ha ocurrido. Esto se llama «mutación local» — es como el pequeño secreto de tu
        componente.
*/


//  5.- ¿Dónde puedes causar efectos secundarios?
/*
        Si bien la programación funcional depende en gran medida de la "pureza", en algún momento, en algún lugar, algo tiene
        que cambiar. ¡Ese es el punto en programación! Estos cambios — actualizar la pantalla, iniciar una animación, cambiar
        los datos— se llaman "efectos secundarios". Son cosas que suceden «a un lado», no durante el renderizado.


        En React, los "efectos secundarios" (los cambios) generalmente deberían estar dentro de los "controladores de eventos".
        Los "handlers" (controladores de eventos) son funciones que React ejecuta cuando se produce un "evento", cuando se realiza
        alguna acción sobre el componente (por ejemplo, cuando haces clic en un botón). 
        
        ¡Aunque los controladores de eventos están definidos dentro de tu componente, no corren durante el renderizado! Por lo tanto,
        los controladores de eventos NO necesitan ser puros.


        Nota.- La ultima oportunidad para los efectos secundarios de un componente: Si has agotado todas las demás opciones y no
               puedes encontrar el controlador de evento adecuado para tu efecto secundario, aún puedes adjuntarlo en la devolución
               del JSX con un llamado a "useEffect" en tu componente. Esto le dice a React que lo ejecute más tarde, después del
               renderizado, cuando se permiten efectos secundarios. Sin embargo, este enfoque debería ser tu último recurso.

        Cuando sea posible, intenta expresar tu lógica con un solo renderizado.
*/
//  ¿Por qué a React le importa la pureza? 
/*  Pureza es una filosofía que implica que un componente siempre debe ser "puro".  Un componente se considera "puro" si:

          1.- No depende de variables externas.
          2.- No modifica las propiedades que reciben.

    Escribir componentes funcionales "puros" requiere cierto hábito y disciplina. Pero también desbloquea maravillosas oportunidades:

    1.-  Componente pueden ser escritos en el servidor: ¡Tus componentes podrían ejecutarse en un entorno diferente
         al del navegador! (por ejemplo, en el servidor)! Como devuelven el mismo resultado para las mismas entradas,
         un componente puede atender muchas solicitudes de los usuarios.

    2.- Mejora el rendimiento de los renderizados de los componentes: se puede mejorar el rendimiento omitiendo el renderizado
        de componentes cuyas entradas no han cambiado. Esto es seguro porque las funciones puras siempre devuelven los mismos
        resultados, por lo que son seguras para almacenar en caché.

        Si algunos datos cambian en medio del renderizado de un árbol de componentes profundos, React puede reiniciar el renderizado
        sin perder tiempo para terminar el renderizado desactualizado. La pureza hace que sea seguro dejar de calcular en cualquier
        momento.
    
        Cada nueva característica de React que estamos construyendo aprovecha la pureza. Desde la búsqueda de datos hasta
        las animaciones y el rendimiento, mantener los componentes puros desbloquea el poder del paradigma de React.
*/


//  Recapitulación.

/*  Lo que significa que un componente debe ser puro:

        1.- Se ocupa de sus propios asuntos. No debe cambiar ningún objeto o variable que existiera antes del renderizado.


        2.- Las mismas entradas, la misma salida. Dadas las mismas entradas, un componente siempre debe devolver el mismo JSX.

        3.- El renderizado puede ocurrir en cualquier momento, por lo que los componentes no deben depender de la secuencia
            de renderizado de los demás.

        4.- No debe mutar ninguna de las entradas que usan sus componentes para renderizar. Eso incluye props, estado y contexto.
            Para actualizar la pantalla, «asignar» el estado en lugar de mutar objetos preexistentes.

        5.- Esfuérzate por expresar la lógica de tu componente en el JSX. Cuando necesites «cambiar cosas» (estados), generalmente
            tienes que usar el controlador de eventos. Por ejemplo, puedes usar el controlador de eventos para cambiar el estado
            cuando el usuario hace clic en un botón. Sin embargo, si no puedes usar el controlador de eventos, puedes usar la 
            la callback de useEffect.

        6.- Escribir funciones puras requiere un poco de práctica, pero desbloquea el poder del paradigma de React.
*/



