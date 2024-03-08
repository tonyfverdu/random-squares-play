//  Introduccion a los Hooks de React

/*
    Las funciones "Hooks" de React son una forma de extender la funcionalidad de React de forma simple.
    Los *Hooks* son una nueva característica introducida en la version React 16.8, con objeto de poder
    utilizar el estado de los componentes (su creacion y gestion) en los componentes funcionales de React.
    
    Los "Hooks" no son mas que funciones que permiten extender la funcionalidad de React. Permiten usar el(los)
    estado(s) de los componentes, y otras características de React, sin tener que escribir los componentes de
    clase.

    Los "Hooks" en React resuelven una amplia variedad de problemas aparentemente desconectados que se presentan
    en el desarrollo de caracteristicas de componentes en aplicaciones React. Es decir, son funciones propias de
    React (aunque se pueden crear Hooks personalizados) que ofrecen "soluciones" diferentes a diferentes problemas
    y requisitos de las aplicaciones de componentes de React.

    1.- Dificultad de reutilizar la lógica de estado entre componentes
        React no ofrece una forma de “acoplar” comportamientos re-utilizables a un componente (Por ejemplo, al
        conectarse a un store). Si llevas un tiempo trabajando con React, puedes estar familiarizado con "patrones"
        como render props y componentes de orden superior que tratan resolver esto. Pero estos patrones requieren que
        reestructures tus componentes al usarlos, lo cual puede ser complicado y hacen que tu código sea más difícil
        de seguir. 
        
        Si observas una aplicación típica de React usando React DevTools, Lo más probable es que encuentres un
        “wrapper hell” de componentes envueltos en capas de providers, consumers, componentes de orden superior,
        render props, y otras abstracciones. Aunque podemos filtrarlos usando las DevTools, esto apunta a un problema
        aún más profundo: React necesita una mejor primitiva para compartir lógica de estado.

        Con los Hooks, se puede extraer la lógica de estado de un componente de tal forma que este pueda ser probado
        y re-utilizado independientemente. Los Hooks te permiten reutilizar lógica de estado sin cambiar la jerarquía
        de componentes (arbol de componentes) de la aplicacion. Esto facilita el compartir Hooks entre muchos componentes
        o incluso con la comunidad.


    2.- Dificultad de entendimiento de los componentes complejos.
        Los componentes complejos se vuelven difíciles de entender. A menudo tenemos que mantener componentes que empiezan
        "simples" pero con el pasar del tiempo crecen y se convierten en un lío inmanejable de multiples lógicas de estado
        y efectos secundarios. Cada "método del ciclo de vida" del componente a menudo contiene una mezcla de lógica no
        relacionada entre sí. 
        
        Por ejemplo, los componentes pueden realizar alguna consulta de datos en el componentDidMount y componentDidUpdate.
        Sin embargo, el mismo método componentDidMount también puede contener lógica no relacionada que cree escuchadores
        de eventos, y los limpie en el componentWillUnmount. El código relacionado entre sí y que cambia a la vez es separado,
        pero el código que no tiene nada que ver termina combinado en un solo método. Esto hace que sea demasiado fácil
        introducir errores e inconsistencias.

        En muchos casos no es posible dividir estos componentes en otros más pequeños porque la lógica de estado está por
        todas partes. También es difícil probarlos. Esta es una de las razones por las que muchas personas prefieren
        combinar React con una biblioteca de administración de estado separada de React (Tipo Redux). Sin embargo, esto a
        menudo introduce demasiada abstracción, requiere que saltes entre diferentes archivos, y hace que la reutilización
        de componentes sea más difícil.

        Para resolver esto, Hooks te permite dividir un componente en funciones más pequeñas basadas en las piezas relacionadas
        (como la configuración de una suscripción o la consulta de datos), en lugar de forzar una división basada en los
        métodos del ciclo de vida. También puedes optar por administrar el estado local del componente con un "reducer" para
        hacerlo más predecible.

    3.- Las clases confunden tanto a las personas como a las máquinas.
        Además de dificultar la reutilización y organización del código, hemos descubierto que las "clases" pueden ser una
        gran barrera para el aprendizaje de React. Tienes que entender cómo funciona this en JavaScript, que es muy
        diferente a cómo funciona en la mayoría de los lenguajes. Tienes que recordar agregar el la funcion "bind" a tus
        manejadores de eventos. Sin los campos públicos de clase de ES2022, el código es muy verboso. Las personas pueden 
        entender props, el estado, y el flujo de datos de arriba hacia abajo perfectamente, pero todavía tiene dificultades
        con las clases.
        
        La distinción entre componentes de función y de clase en React, y cuándo usar cada uno de ellos, lleva a desacuerdos
        incluso entre los desarrolladores experimentados de React.

      
    Para resolver estos problemas (y otros), los Hooks permiten usar más de las funciones de React sin clases. Conceptualmente,
    los componentes de React siempre han estado más cerca de las funciones. Los Hooks abarcan funciones, pero sin sacrificar
    el espíritu práctico de React.
    
    Los Hooks proporcionan acceso a vías de escape imprescindibles y no requieren que aprendas técnicas complejas de programación
    funcional o reactiva.
*/

//  1.- Que son los Hooks (las funciones Hooks) de React.
/*
        Los React Hooks son funciones simples de JavaScript que podemos usar para aislar la parte reutilizable
        de un componente funcional. Los Hooks pueden tener estado y gestionar los efectos secundarios del componente.

        Los "Hooks" son funciones javascript que permiten “enganchar” el estado de React y el ciclo de vida de los
        componentes, con y desde los componentes de función (funcionales).

            Nota.- Antes de la versión 16.8 de React, los desarrolladores podían manejar el estado y otras
                   características de React SOLO usando componentes de clase. Pero con la versión 16.8, React
                   introdujo un nuevo patrón llamado "Hooks".

                   Con React Hooks, podemos usar el estado y otras características de React en un componente 
                   funcional. Permite a los desarrolladores realizar programación funcional en React, con las
                   mismas posibilidades que los componentes de clase, mas rapido, facil, intuitivo y reutilizable.
        

                   Los hooks no funcionan dentro de los componentes de clase — permiten usar React sin clases,
                   con componentes funcionales con las mismas caracteristicas que los de clase (creacion y gestion
                   de estados del componentes y su ciclo de vida) sin necesidad de desarrollar componentes de clase,
                   haciendo el codigo mas intuitivo, facil de desarrollar (y entender), y flexible.

        Hay que tener en cuenta que los "Hooks" no son mas que funciones simples de JavaScript, con todas las
        caracteristicas de las funciones de javascript, que podemos usar para aislar la parte reutilizable de
        un componente funcional.


        1.1.- Los componentes de React pueden tener estado o ser "sin estado" (unstate).

              Un "estado o variable de estado" de un componentes React es un valor de una variable del componente que
              puede cambiar con el tiempo, es decir durante la ejecución del componente y su "ciclo de vida". 
              
              1.- Un "componente con estado" declara y gestiona un "estado local" del componente en él.

              2.- Un "componente sin estado" es una función pura que no tiene un estado local ni efectos secundarios
                  (efectos que varian con el tiempo en el componente) que administrar.

              3.- Una "función pura" es una función "sin efectos secundarios". Esto significa que esa función siempre
                  devuelve el mismo resultado para la misma entrada.


              => Si eliminamos la "lógica con estado" y los "efectos secundarios" de un componente funcional,
                 tenemos siempre un componente sin estado. Además, la lógica de estado y de efectos secundarios
                 se puede reutilizar en otras partes de la aplicación.
              
                 Por eso tiene sentido "aislarlos" de un componente tanto como sea posible.
        

        1.2.- Aislar la lógica de estado y los efectos secundarios de un componente funcional.

              Los Hooks no son mas que funciones de JavaScript que administran el comportamiento del estado y 
              los efectos secundarios de un componente, encapsulando su funcionalidad en una función separada.

              Con los Hooks de React se puede aislar toda la lógica con estado en los Hooks y usarla (componerla,
              ya que los Hooks también son funciones) en los componentes.


              1.- Lógica con estado aislada en los Hooks: ¿qué es esta lógica con estado de un componente? Puede
                  ser cualquier cosa que necesite declarar y administrar una variable de estado localmente.

                  Por ejemplo, la lógica para recuperar datos y administrarlos en una variable local tiene estado.
                  Es posible que también queramos reutilizar la lógica de recuperación en varios componentes.
*/

// 2.-  Las tres Reglas sintaticas de los Hooks en React.
/*

        1.- El nombre de las funciones Hooks siempre debe empezar con el prefijo "use".
        
            Con el fin de que React pueda identificar las funciones como funciones Hooks, sobre todo con
            los Hooks personalizados que se pueden crear, los nombres de las funciones Hooks deben de
            comenzar con el prefijo "use".


        2.- Debe de ser llamado en el "nivel superior" de la aplicación o componente funcional React.

            Un hook nunca debe de llamarse dentro de ciclos, condicionales o funciones anidadas, ya que
            el orden de llamada de los hooks debe de ser siempre el mismo para asegurar que el resultado
            sea predecible durante la renderización. 
            
            Este uso únicamente en el nivel superior es lo que asegura que el estado interno de React se
            preserve correctamente entre diferentes llamadas del mismo hook.


        2.- Solo puede ser "invocado" o ser llamado en funciones o en otros hooks personalizados de React.

            Un hook nunca debe de ser llamado fuera de una función de React o de otro hook personalizado,
            de forma que la lógica de estado del componente sea cláramente visible desde el resto del código
            para el scope establecido por React.
*/


// 3.- Tipos de Hooks en React

/*
      Como la finalidad última de los Hooks es simplificar la lógica actual, React proporciona únicamente un
      set reducido de Hooks, con la flexibilidad para responder ante diversas situaciones del ciclo de vida
      de una aplicación y la posibilidad de construir también los nuestros propios Hooks.


      3.1.-  Hooks nativos de React: React proporciona una serie de Hooks "nativos", es decir incorporados
             estándar de React:

             Hooks básicos: React proporciona "tres" hooks básicos que responden a las necesidades habituales
                            para implementar los estados y gestionar el ciclo de vida en un componente de clase:

                1.- useState: Hook de estado useState. Para gestionar estados. Devuelve un valor con estado
                    y una "función de actualización" para actualizar el valor del estado.

                    Este Hook es quizas el mas importante. useState es un Hook de React que permite agregar
                    una variable de estado a el componente que la llama.

                    Devuelve dos elementos en un array, un valor con un estado mantenido (la variable de estado)
                    y una "función de actualización" (la función que es necesaria para actualizar la variable
                    de estado definida en React):

                            const [state, setState] = useState(value_ini)

                    El estado inicial (value_ini) es un parámetro pasado ael Hook useState, y será el estado
                    inicial de la variable de estado definida en el componente, del que dispondrá durante al
                    menos el render inicial del componente y hasta que sea llamada la función "setState" con
                    un nuevo valor, 
                    
                    Nota.- También es posible utilizar el valor del estado anterior dentro de la propia función de
                           establecimiento del estado, de forma que es posible también escribirlo como:
                           
                           setState(state => new_ state).


              2.- useEffect: Hook de efecto. Para "gestionar efectos secundarios" en el componente,  como llamadas
                  API, suscripciones, temporizadores, mutaciones y más.

                  Este hook nos permite "agregar efectos secundarios" a un componente  funcional dado, es decir,
                  nos permite realizar modificaciones en nuestra lógica una vez se haya realizado el renderizado, de
                  la misma forma que los métodos de ciclo de vida componentDidMount, componentDidUpdate y
                  componentWillUnmount en los componentes de clase.

                  Una de las grandes ventajas de este hook es que simplifica el ciclo de vida, de forma que los
                  tres métodos de clase disponibles pueden ser expresados utilizando únicamente este hook. 
                  
 

              3.- useContext: Hook de contexto. Si has usado el contexto de React en alguna ocasión, este es el
                  hook que necesitas. Un contexto en React es una forma de pasar datos entre diferentes componentes
                  sin necesidad de realizar una cascada manual de props. Algo útil, por ejemplo, cuando queremos
                  crear temas o localizaciones, que deben de ser globales para todo el árbol de componentes y puede
                  ser engorroso tener que propagarlos para cada componente añadido.


Hooks adicionales
Además de estos Hooks, existen una serie de hooks orientados a la optimización de nuestro flujo de renderizado, para evitar perder ciclos, como son useCallback y useMemo, cuya finalidad es memorizar funciones y componentes funcionales para no renderizarlos inútilmente si ninguna de sus dependencias ha cambiado (Al igual que cuando implementamos el ciclo de vida shouldComponentUpdate en componentes de clase).

Sin embargo, sobre estos hooks y otros veremos más información de su aplicación en la siguiente parte donde veremos un ejemplo práctico en el que aplicar todos estos conocimientos.

Y si aun así te has quedado con ganas de saber más sobre estos y otros hooks siempre puedes ampliar tus conocimientos con nuestro completo taller práctico sobre React Hooks.
useState: 
useEffect: .
useContext: para devolver el valor actual de un contexto.
useReducer: Una useStatealternativa para ayudar en la gestión estatal compleja.
useCallback: Devuelve una versión memorizada de una devolución de llamada para ayudar a que un componente secundario no se vuelva a renderizar innecesariamente.
useMemo: Devuelve un valor memorizado que ayuda a optimizar el rendimiento.
useRef: Devuelve un objeto de referencia con una .currentpropiedad. El objeto ref es mutable. Se utiliza principalmente para acceder a un componente secundario de forma imperativa.
useLayoutEffect: Se activa al final de todas las mutaciones DOM. Es mejor usar useEffecttanto como sea posible sobre este, ya que se useLayoutEffectactiva sincrónicamente.
useDebugValue: Ayuda a mostrar una etiqueta en React DevTools para enlaces personalizados.
Puede leer sobre estos ganchos con más detalle desde aquí . Tenga en cuenta que cada uno de estos nombres de gancho comienza con use. Sí, esta es una práctica estándar para identificar rápidamente un gancho en el código base de React.

También podemos crear enlaces personalizados para nuestros casos de uso únicos, como recuperación de datos, registro en disco, temporizadores y muchos más.

Entonces, la próxima vez, si encuentra React Hooks en una base de código o le piden que escriba uno, tómelo con calma. Es simplemente otra función de JavaScript para lidiar con el estado y los efectos secundarios fuera de los componentes funcionales.

Si está buscando una guía paso a paso para diseñar y crear un gancho personalizado, este artículo puede resultarle útil .

Antes de terminar...
Espero que la introducción a React Hooks te haya resultado útil. Después de pasar muchos años con React, comencé una serie de videos en YouTube que tiene como objetivo cubrir todos los aspectos de React de principio a fin. Suscríbete si lo encuentras útil.
        React proporciona una serie de Hooks integrados estándar: useState: para administrar estados.
         Devuelve un valor con estado y una función de actualización para actualizarlo.

    
    3.2.-  Hooks personalizados de React.

        Los Hooks personalizados son funciones que se escriben en el propio componente y que son llamadas desde la función de renderizado.
*/