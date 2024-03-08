//  Renderizado de "listas" (arrays)

//  Recapitulación:

//    1.- Como mover datos fuera de componentes y en estructuras de datos como arrays y objetos.
//    2.- Como genrerar "sets2 de componentes similares con el método map() de JavaScript.
//    3.- Como crear arrays de objetos filtrados con el método filter() de JavaScript.
//    4.- Por qué y cómo poner la key en cada componente en una colección para que React pueda
// seguir la pista de cada uno de ellos incluso si su posición o datos cambia.

/*
    A menudo querrás mostrar muchos componentes similares de una colección de datos. Puedes usar los métodos de
    array de JavaScript para manipular un array de datos (como filtrar, reordenar, mapear, etc). Estudiaremos los
    metodos de arrays de javascript: "filter()" y "map()" con React para filtrar y transformar tu array de datos
    en un array de componentes.


    Digamos que tienes una "lista de contenido"

            <ul>
              <li>Creola Katherine Johnson: matemática</li>
              <li>Mario José Molina-Pasquel Henríquez: químico</li>
              <li>Mohammad Abdus Salam: físico</li>
              <li>Percy Lavon Julian: químico</li>
              <li>Subrahmanyan Chandrasekhar: astrofísico</li>
            </ul>

    La única diferencia entre esos elementos de la lista es su contenido, sus datos, lo demas es igual. A menudo
    necesitarás mostrar muchas "instancias del mismo componente" usando diferentes datos cuando construyas interfaces:
    desde listas de comentarios a galerías de fotos de perfiles. En estas situaciones, puedes guardar estos datos en
    objetos de JavaScript y arrays, y usar métodos como: map() y filter() para renderizar listas de componentes desde
    ellos.


    Aquí hay un corto ejemplo de como generar una lista de elementos de un array:

        1.- Mueve los datos en un array:

                      const people = [
                        'Creola Katherine Johnson: matemática',
                        'Mario José Molina-Pasquel Henríquez: químico',
                        'Mohammad Abdus Salam: físico',
                        'Percy Lavon Julian: químico',
                        'Subrahmanyan Chandrasekhar: astrofísico'
                      ];

        2.- "Mapea" los miembros de people en un nuevo array de nodos JSX, listItems:

                      const listItems = people.map(person => <li>{person}</li>);

        3.- Devuelve listItems desde tu componente envuelto en un <ul>:

                      return <ul>{listItems}</ul>;

        Aquí está el resultado:

                      App.js

                      const people = [
                        'Creola Katherine Johnson: matemática',
                        'Mario José Molina-Pasquel Henríquez: químico',
                        'Mohammad Abdus Salam: físico',
                        'Percy Lavon Julian: químico',
                        'Subrahmanyan Chandrasekhar: astrofísico'
                      ];

                      export default function List() {
                        const listItems = people.map(person =>
                          <li>{person}</li>
                        );
                        return <ul>{listItems}</ul>;
                      }


                      Warning:  Each child in a list should have a unique "key" prop.
                                Date cuenta que el sandbox anterior muestra un error por consola:

                                Warning: Each child in a list should have a unique «key» prop.
                                (Traducción)
                                Advertencia: Cada hijo en una lista debe tener una única prop «key».


    1.- Filtrar arrays de objetos: metodo filter() de Arrays en JS.
        Estos datos pueden ser estructurados incluso más.

                      const people = [{
                        id: 0,
                        name: 'Creola Katherine Johnson',
                        profession: 'matemática',
                      }, {
                        id: 1,
                        name: 'Mario José Molina-Pasquel Henríquez',
                        profession: 'químico',
                      }, {
                        id: 2,
                        name: 'Mohammad Abdus Salam',
                        profession: 'físico',
                      }, {
                        name: 'Percy Lavon Julian',
                        profession: 'químico',  
                      }, {
                        name: 'Subrahmanyan Chandrasekhar',
                        profession: 'astrofísico',
                      }];


        Digamos que quieres una manera de mostrar solo las personas cuya profesión sea 'químico'.
        Puedes usar el método "filter()"" de JavaScript para devolver solo esas personas. Este
        método coge un array de objetos, los pasa por un «test» (una función que devuelve "true" o
        "false"), y devuelve un "nuevo array" con solo los elementos (objetos) que han pasado el
        test (que han devuelto "true").


        Tú solo quieres  los objetos donde profession es 'químico'. La función «test» para esto se
        ve como (person) => person.profession === 'químico'. Aquí está cómo juntarlo:

            1.- Crea un nuevo array solo de personas que sean «químicos», chemists, llamando al método
                filter() en people filtrando por person.profession === 'químico':

                      const chemists = people.filter(person =>
                        person.profession === 'químico'
                      );

            2.- Ahora mapea sobre chemists:

                      const listItems = chemists.map(person =>
                        <li>
                          <img
                            src={getImageUrl(person)}
                            alt={person.name}
                          />
                          <p>
                            <b>{person.name}:</b>
                            {' ' + person.profession + ' '}
                            conocido/a por {person.accomplishment}
                          </p>
                        </li>
                      );
            
            3.- Devuelve listItems:

                      return <ul>{listItems}</ul>;

                      App.js

                      import { people } from './data.js';
                      import { getImageUrl } from './utils.js';

                      export default function List() {
                        const chemists = people.filter(person =>
                          person.profession === 'químico'
                        );
                        const listItems = chemists.map(person =>
                          <li>
                            <img
                              src={getImageUrl(person)}
                              alt={person.name}
                            />
                            <p>
                              <b>{person.name}:</b>
                              {' ' + person.profession + ' '}
                              conocido/a por {person.accomplishment}
                            </p>
                          </li>
                        );
                        return <ul>{listItems}</ul>;
                      }


                      Warning: Each child in a list should have a unique "key" prop.


        Nota.- Las funciones de "flecha" implícitamente devuelven la expresión justo después del =>,
               así que no necesitas declarar un return:

                      const listItems = chemists.map(person => <li>...</li> );// Implicit return!
                      );

               Las funciones de flecha que tienen => {} se dice que tienen un «cuerpo de bloque».
               Te permiten escribir más de una sola línea de código, pero  tienes que declarar un "return"
               por ti mismo. Si lo olvidas, ¡Nada será devuelto!


    2.- Mantener los elementos de una lista en orden con key 
        Fíjate que todos los ejemplos anteriores mostraban un error en la consola:

                      Warning: Each child in a list should have a unique «key» prop.
                      (Traducción)
                      Advertencia: Cada hijo en una lista debe tener una única prop «key».

        Tienes que darle a cada elemento del array una "key" (una cadena de texto o un número) que lo identifique
        de manera única entre otros elementos del array:

                      <li key={person.id}>...</li>

                      Nota.- ¡Los elementos JSX directamente dentro de una llamada a un map() siempre necesitan keys!

        Las "keys" le indican a React que objeto del array corresponde a cada componente, para así poder emparejarlo más
        tarde. Esto se vuelve más importante si los objetos de tus arrays se pueden mover (p. ej. debido a un ordenamiento),
        insertar, o eliminar. Una "key" bien escogida ayuda a React a entender lo que ha sucedido exactamente, y hacer las
        correctas actualizaciones en el árbol del DOM.

        En vez de generar keys "sobre la marcha" (por ejemplo con un index del map), deberías incluirlas en tus datos:

                      App.js

                      export const people = [{
                        id: 0, // Usado en JSX como key
                        name: 'Creola Katherine Johnson',
                        profession: 'matemática',
                        accomplishment: 'los cálculos de vuelos espaciales',
                        imageId: 'MK3eW3A'
                      }, {
                        id: 1, // Usado en JSX como key
                        name: 'Mario José Molina-Pasquel Henríquez',
                        profession: 'químico',
                        accomplishment: 'el descubrimiento del agujero de ozono en el Ártico',
                        imageId: 'mynHUSa'
                      }, {
                        id: 2, // Usado en JSX como key
                        name: 'Mohammad Abdus Salam',
                        profession: 'físico',
                        accomplishment: 'la teoría del electromagnetismo',
                        imageId: 'bE7W1ji'
                      }, {
                        id: 3, // Usado en JSX como key
                        name: 'Percy Lavon Julian',
                        profession: 'químico',
                        accomplishment: 'ser pionero en el uso de cortisona, esteroides y píldoras anticonceptivas',
                        imageId: 'IOjWm71'
                      }, {
                        id: 4, // Usado en JSX como key
                        name: 'Subrahmanyan Chandrasekhar',
                        profession: 'astrofísico',
                        accomplishment: 'los cálculos de masa de estrellas enanas blancas',
                        imageId: 'lrWQx8l'
                      }];


    2.1.- Mostrar varios nodos DOM para cada elemento de una lista.

          ¿Qué haces cuándo cada objeto necesita renderizar no uno, sino varios nodos del DOM?

          El atajo de sintaxis del <>...</> "Fragment" no te dejará pasarle una key, así que necesitas agruparlos en un solo <div>,
          o usar una sintaxis algo más larga y más explícita del <Fragment>:

                      import { Fragment } from 'react';

                      // ...

                      const listItems = people.map(person =>
                        <Fragment key={person.id}>
                          <h1>{person.name}</h1>
                          <p>{person.bio}</p>
                        </Fragment>
                      );

          Los Fragments desaparecen del DOM, así que esto producirá una lista plana de <h1>, <p>, <h1>, <p>, y así.


    3.- Dónde conseguir las keys de un array de objetos.
        Distintas "fuentes de datos" dan diferentes "fuentes de keys":

            1.- Datos de una base de datos: Si tus datos vienen de una base de datos, puedes usar las keys/ID de la
                                            base de datos, que son únicas por naturaleza.

            2.- Datos generados localmente: Si tus datos son generados y persistidos localmente (p. ej. notas en una app
                                            de tomar notas), usa un contador incremental, crypto.randomUUID() o un paquete
                                            como uuid cuando este creando objetos.


    3.1.- Reglas de las keys. 
          Las "keys" tienen que ser "únicas" entre elementos hermanos. Sin embargo, está bien usar las mismas "keys" para nodos
          JSX en arrays diferentes.
    
           IMPORTANTE:  Las "keys" NO tienen que cambiar o ¡eso quitará su propósito! No las generes mientras renderizas.


    3.2.- ¿Por qué React necesita keys? 
          Imagina que los archivos de tu escritorio no tuvieran nombres. En vez de eso, tu te referirías a ellos por su orden
           — el primer archivo, el segundo, y así. Podrías acostumbrarte a ello, pero una vez borres un archivo, se volvería
          algo confuso. El segundo archivo se convertiría en el primero, el tercer archivo se convertiría en el segundo, y así.

          Los nombres de archivos en una carpeta y las keys JSX en un array tienen un propósito similar. Nos permiten identificar
          un objeto de manera única entre sus hermanos. Una "key" bien escogida da más información aparte de la posición en el array.
          Incluso si la posición cambia devido a un reordenamiento, la "key" permite a React identificar al elemento a lo largo de
          su ciclo de vida.


          Atención.- Podrías estar tentado a usar el "índice del elemento" en el array como su "key". De hecho, eso es lo que React
                     usará si tu no especifícas una "key" en absoluto. Pero el orden en el que renderizas elementos cambiará con el
                     tiempo si un elemento es insertado, borrado, o si se reordena su array. El índice como "key" lleva a menudo a
                     sutiles y confusos errores.

          Igualmente, no generes "keys" sobre la marcha, p. ej. con key={Math.random()}. Esto hará que las "keys" nunca coincidan
          entre renderizados, llevando a todos tus componentes y al DOM a recrearse cada vez. No solo es una manera lenta, si no
          que también pierde cualquier input del usuario dentro de los elementos listados. En vez de eso, usa unas IDs basadas en datos.

          Nota.- Date cuenta de que tus componentes no reciben la "key" como un prop. Solo es usado como "pista para React".
                 Si tus componentes necesitan un ID, se lo tienes que pasar como una prop separada: <Profile key={id} userId={id} />.

*/