//  Arrays - matrices en Javacsript

// Los arrays son estructuras de datos extremadamente útiles y versátiles. Están presentes en muchos lenguajes de programación
// y permiten almacenar múltiples valores en una sola variable.

/*
    En JavaScript, una matriz u array, es un "objeto" (tipo de dato objeto especial) constituido por un grupo de elementos que
    tienen un orden específico (se dice que un array es un tipo de dato collection indexado numericamente). Las matrices pueden
    contener valores de tipos de datos mixtos y su tamaño no es fijo.

    Un array extiende el concepto de objeto de javascript, proporcionando métodos especiales para trabajar con colecciones
    ordenadas de datos y también con la propiedad "length". Pero en el fondo sigue siendo un objeto.

    Una matriz u "objeto array" (o simplemente array) de JavaScript es una variable especial que puede contener más
    de un valor, es decir, se utiliza para almacenar múltiples valores en una sola variable. Es una estructura de
    datos especial utilizada para almacenar colecciones ordenadas (e indexadas con un indice interno) de datos de cualquier
    tipo, en una sola referencia de variable.

        const soy_un_array = ["soy", "un", "array"];
        console.log(soy_un_array);

    En JavaScript, las matrices no son "primitivas" (datos primitivos), sino objetos "Array" con las siguientes
    características principales:

      1.- Las matrices de JavaScript son redimensionables y pueden contener una combinación de diferentes tipos de datos.
         (Cuando esas características no sean deseables, utilice matrices escritas en su lugar).

      2.- Las matrices de JavaScript no son "matrices asociativas" y, por lo tanto, no se puede acceder a los elementos de
          la matriz utilizando cadenas arbitrarias (strings) como índices, pero se debe acceder a ellos utilizando números
          enteros no negativos (o su respectiva forma de cadena) como índices.

      3.- Las matrices de JavaScript estan "indexadas" numericamente, tienen un índice numerico interno que identifica el
          "orden de los elementos dentro del array, este indice empieza en "0": el primer elemento de una matriz está en
          index 0, el segundo está en index 1, y así sucesivamente, y el último elemento está en el valor de la propiedad
          "length" de la matriz menos 1 (index length - 1).

      4.- Las operaciones de copia de matrices de JavaScript crean siempre "copias superficiales". 
          (Todas las operaciones de copia estándar integradas con cualquier objeto JavaScript crean copias superficiales,
          en lugar de copias profundas)


      Recuerde, sólo hay "ocho tipos de datos básicos" (primitivos) en JavaScript. Un Array es un objeto y, por tanto, se
      comporta como un objeto (eso si, esta indexado numericamente).

      Por ejemplo, se copia por referencia:

            let fruits = ["Banana"]
            let arr = fruits; // copy by reference (two variables reference the same array)
            alert( arr === fruits ); // true

            arr.push("Pear"); // modify the array by reference
            alert( fruits ); // Banana, Pear - 2 items now


      …Pero lo que hace que los arreglos sean realmente especiales es su "representación interna". El motor runtime JS intenta
      almacenar sus elementos en el área de memoria contigua, uno tras otro, tal como se muestra en las ilustraciones de este
      capítulo, y también hay otras optimizaciones para hacer que los arreglos funcionen realmente rápido.

      Pero todos se rompen si dejamos de trabajar con una matriz como si fuera una “colección ordenada” y comenzamos a trabajar
      con ella como si fuera un objeto "normal".

      Por ejemplo, técnicamente podemos hacer esto:

            let fruits = [];    // make an array
            fruits[99999] = 5;  // assign a property with the index far greater than its length
            fruits.age = 25;    // create a property with an arbitrary name

      Eso es posible porque las matrices son "objetos" en su base. Podemos agregarles cualquier propiedad. Pero el motor verá
      que estamos trabajando con la matriz como con un objeto "normal". Las optimizaciones específicas de la matriz no son
      adecuadas para estos casos y, si se desactivan, sus ventajas desaparecen.

      Las formas de hacer mal uso de una matriz:

          1.- Agregue una propiedad no numérica como arr.test = 5.

          2.- Haga agujeros ("emptys"), como: agregue arr[0] y luego arr[1000] (y nada entre ellos).

          3.- Complete la matriz en orden inverso, como arr[1000], arr[999], etc.


      Piense en las matrices como estructuras especiales para trabajar con los "datos ordenados" en lugar de "objetos
      sin orden". Proporcionan "métodos especiales" para eso. Las matrices se ajustan cuidadosamente dentro de los
      motores runtime JavaScript para funcionar con "datos ordenados contiguos"; utilícelas de esta manera. Y si necesita
      claves arbitrarias, es muy probable que en realidad necesite un objeto normal {}.


    A.- ¿Por qué utilizar la estructura de datos de matrices - arrays?
    Si tiene una lista de elementos (una lista de nombres de automóviles, por ejemplo), almacenar los automóviles en variables
    individuales podría verse así:

        let car1 = "Saab";
        let car2 = "Volvo";
        let car3 = "BMW";

    Sin embargo, ¿qué pasa si quieres recorrer los coches y encontrar uno específico? ¿Y si no tuvieras 3 coches, sino 300?
    Se necesita una estructura de datos especial collection de datos, que puede contener más de un valor de cualquier tipo,
    y que puede ser indexada.  ¡La solución es una matriz!

    Asi, una matriz- array en JS puede contener muchos valores bajo un solo nombre y puede acceder a los valores haciendo
    referencia a un número de índice interno de la matriz.

    Una matriz puede almacenar elementos de cualquier tipo. Por ejemplo:

    // mix of values
    let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

    // get the object at index 1 and then show its name
    alert( arr[1].name ); // John

    // get the function at index 3 and run it
    arr[3](); // hello


    B.- Objeto array es javascript.
    Las matrices son "objetos" javascript, pero un tipo "especial" de objetos. Esto significa que pueden tener propiedades
    asimiladas a objetos. Por lo tanto, los miembros de una matriz se describen mejor.

    Debido a esto, se puede tener elementos de diferentes tipos en un mismo Array.

    Puedes tener objetos en un Array. Puedes tener funciones en un Array. Puedes tener arrays en un Array:

        myArray[0] = Date.now;
        myArray[1] = myFunction;
        myArray[2] = myCars;


    C.- El operador "typeof", "instanceof" y "Array.isArray" en objetos Arrays.
    El operador "typeof" en JavaScript devuelve "objeto" para matrices., pero no indica si el objeto es una matriz o no.
    Para resolver este problema, ECMAScript 5 (JavaScript 2009) definió un nuevo método: Array.isArray():

      const fruits = ["Banana", "Orange", "Apple", "Mango"];

      Array.isArray(fruits);  // returns true
      Array.isArray("not an array");  // returns false

    El operador "instanceof" devuelve true si un objeto es creado por un constructor determinado, asi podemos hacer tambien:

        fruits instanceof Array; // returns true if fruits instanceof Array;


  D.- La diferencia entre matrices y objetos
      En JavaScript, las matrices utilizan índices numerados, sin embargo los objetos utilizan índices con nombre .

      Los arrays son un tipo especial de objetos, con índices numerados.

      Asi, los arrays de JavaScript se describen mejor como matrices, gracias a que son un tipo de datos "collection" indexado,
      poseen un indice numerico interno, que se puede utilizar para acceder directamente a sus elementos.

        const person = ["John", "Doe", 46]; => console.log(person[1]); // "Doe"

      Los objetos usan nombres ("keys") para acceder a sus "miembros".

        const person = {firstName:"John", lastName:"Doe", age:46}; => console.log(person["firstName"]); // "John"

          Nota.- ADVERTENCIA !! Si utiliza índices con nombre, JavaScript redefinirá la matriz como un objeto.
                 Después de eso, algunos métodos y propiedades de matriz producirán resultados incorrectos .

          Nota.- Muchos lenguajes de programación admiten matrices con índices con nombre. Las matrices con índices con nombre 
                 se denominan matrices asociativas (o hashes). JavaScript no admite matrices con índices con nombre.

                 En JavaScript, las matrices siempre usan índices numerados . 


  E.- Cuándo utilizar matrices. Cuándo utilizar objetos.
      JavaScript no admite matrices "asociativas", es decir, no admite objetos de pares clave-valor. Debe utilizar objetos cuando
      desea que los nombres de elementos sean cadenas (texto), y se debe utilizar matrices cuando desee que los nombres de los
      elementos sean números .

*/

// 1.-  Creacion y gestion de un array
/*
        1.1.- Creacion de un array. Declaracion de un array
              Hay dos sintaxis para crear una matriz vacía:

                  let arr = new Array();    // Usar el constructor de la clase Array
                  let arr = [];             // Usar un literal de matriz vacía

              Casi todo el tiempo se utiliza la segunda sintaxis (literal de la matriz), con el operador "corchete", que es
              la mas comun. Si las matrices no tienen un tamano fijo, o no se conoce, se recomienda usar la primera sintaxis
              (con el constructor)

                  Nota.- Por simplicidad, legibilidad y velocidad de ejecución, utilice el método literal de matriz.

              Podemos suministrar elementos iniciales entre paréntesis:

                        const fruits = ["🍎", "🟠", "🥝", "🍈", "🍐", "🍑", "🌰", "🍒"];

              Una matriz esta "indexada", es decir, al crear una matriz se crea un "indice" interno a la matriz, que es utilizado
              para poder ordenar los elementos de la matriz. Asi, con este indice, los elementos de la matriz están numerados,
              comenzando siempre con el valor cero.

              Nota.-  La sintaxis del constructor para crear una nueva matriz.
              
                        const arr = new Array("Apple", "Pear", "etc");

                      Esta sintaxis de crear nuevas matrices con el constructor del objeto Array (new Array()) rara vez
                      se usa porque los corchetes [] son más cortos. Además, tiene una característica complicada.

                      Si new Array(num) se llama con un solo argumento que es un número, entonces crea una matriz "sin
                      elementos" (undefined), pero con la longitud dada.

                      Veamos cómo uno puede pegarse un tiro en el pie:

                      let arr = new Array(2);   // will it create an array of [2] ?
                      alert( arr[0] );          // undefined! no elements.
                      alert(arr.length);        // length 2

                      Para evitar este tipo de sorpresas, solemos utilizar corchetes, a menos que sepamos realmente
                      lo que estamos haciendo.


        1.2.- Acceder a un elemento del array.
              Se accede a un elemento de matriz haciendo referencia al número de índice.

              Gracias a este indice se puede acceder a un elemento concreto de la matriz. Podemos obtener un elemento por su número
              de indice en el array entre corchetes:


                        alert( fruits[0] ); // "🍎"
                        alert( fruits[1] ); // "🟠"
                        alert( fruits[2] ); // "🥝"

              Nota.- Cuando se intenta acceder a un valor de un elemento de un array fuera del rango del índice, se obtiene "undefine"
                     como del valor de retorno.

        1.3.- Modificar un elemento del array.
              Hay dos formas de modificar un elemento de la matriz.
              
              1.- Agregar y reemplazar elementos en un array.
                  Los arrays de JavaScript no tienen un tamaño fijo. Pueden crecer y encogerse según su contenido. 
        
                  Podemos reemplazar un elemento de un array asignando su elemento a un nuevo valor:

                    fruits[2] = "🍓"; // now fruits = ["🍎", "🟠", "🍓", "🍈", "🍐", "🍑", "🌰", "🍒"];

                  …O agregue uno nuevo a la matriz:

                    // fruits[8] = "🍋"; // now fruits = ["🍎", "🟠", "🥝", "🍈", "🍐", "🍑", "🌰", "🍒", "🍋"];

        2.- Eliminar elementos de un array.
            Hay dos formas de eliminar un elemento de la matriz:

            1.- Eliminar un elemento por su número de indice.

                delete fruits[6];  // delete element at index 6 => fruits = ["🍎", "🟠", "🥝", "🍈", "🍐", "🍑", "🍒"];

            2.- Eliminar un elemento por su nombre de indice.
                En este caso, los nombres de los elementos de la matriz no son numericos. Por lo tanto, no podemos eliminar un
                elemento por su nombre de indice. Para eliminar un elemento por su nombre de indice, basta con reemplazarlo
                por un elemento vacío:

                   delete fruits[6];  // now fruits = ["🍎", "🟠", "🥝", "🍈", "🍐", "🍑", "🍒"];


          3.- Obtener la longitud de un array, o el tamaño de una matriz.  Propiedad "length"
              La propiedad "length" de un objeto array, nos da el número de elementos de un array, o el tamaño de una matriz.
              La propiedad "length" de una matriz es siempre uno más que el índice de matriz más alto. Se puede a través de la
              notación de puntos utilizar la propiedad "length" en un array:

                            console.log(fruits.length); // 8

                  Nota.- La longitud de la matriz será el valor del índice del último elemento dentro de la matriz + 1,
                         ya que la indexación comienza en cero.

              La propiedad "length" de un array se actualiza automáticamente cuando modificamos la matriz. Para ser precisos,
              en realidad no es el recuento de valores en la matriz, sino el mayor índice numérico más uno.

              Por ejemplo, un único elemento con un índice grande da una longitud grande:

                            let fruits = [];
                            fruits[123] = "Apple";
                            console.log(fruits.length); // 124

              Tenga en cuenta que normalmente no utilizamos matrices como esa.

              Otra cosa interesante acerca de la propiedad "length" es que se puede escribir. Si lo aumentamos manualmente
              no pasa nada interesante. Pero si lo reducimos, la matriz se trunca. El proceso es irreversible, aquí está el
              ejemplo:

                            let arr = [1, 2, 3, 4, 5];
                            arr.length = 2; // truncate to 2 elements
                            alert(arr); // [1, 2]

                            arr.length = 5; // return length back
                            alert(arr[3]); // undefined: the values do not return

              Entonces, la forma más sencilla de borrar la matriz es: arr.length = 0;


          4.- Convertir una matriz en una cadena (string)
              El método JavaScript: toString(), convierte una matriz en una cadena de valores de matriz (separados por comas).

                  Ejemplo:
                              const fruits = ["Banana", "Orange", "Apple", "Mango"];
                              console.log( fruits.toString() ); // "Banana,Orange,Apple,Mango";
                              
                              Resultado: Banana,Orange,Apple,Mango


          5.- Elementos de matriz en bucle "for" o "forEach()"
              Una forma de "recorrer" los elementos de un array javascript es mediante un bucle "for":

                    Ejemplo:
                              const fruits = ["Banana", "Orange", "Apple", "Mango"];
                              let fLen = fruits.length;

                              let text = "<ul>";
                              for (let i = 0; i < fLen; i++) {
                                text += "<li>" + fruits[i] + "</li>";
                              }
                              text += "</ul>";


              También se puede utilizar la funcion: Array.forEach():

              Ejemplo
                              const fruits = ["Banana", "Orange", "Apple", "Mango"];

                              let text = "<ul>";
                              fruits.forEach(myFunction);
                              text += "</ul>";

                              function myFunction(value) {
                                text += "<li>" + value + "</li>";
                              }

              5.1.- El bucle "for...of"  y "for...in" en arrays .

              Una de las formas más antiguas de realizar ciclos de elementos de una matriz es el bucle "for" sobre
              índices:

                              let arr = ["Apple", "Orange", "Pear"];

                              for (let i = 0; i < arr.length; i++) {
                                console.log(arr[i]);
                              }

              Pero para las matrices existe otra forma de bucle: "for..of":

                              let fruits = ["Apple", "Orange", "Plum"];

                              // iterates over array elements
                              for (let fruit of fruits) {
                                alert(fruit);
                              }

              El bucle "for..of" no da acceso al número del elemento actual (a su indice), solo a su valor, pero en
              la mayoría de los casos es suficiente. Y es más corto.


              Técnicamente, debido a que las matrices son objetos, también es posible utilizar el bucle: "for..in":

                              let arr = ["Apple", "Orange", "Pear"];
                              for (let key in arr) {
                                alert(arr[key]); // Apple, Orange, Pear
                              }

              Pero en realidad esa es una mala idea. Hay problemas potenciales con esto:

              El bucle "for..in" itera sobre todas las propiedades del array, no solo las numéricas (y si hay propiedades
              no numericas en un array).

              En el navegador y en otros entornos existen los llamados objetos “parecidos a matrices”, que parecen matrices.
              Es decir, tienen la propiedad "length" y propiedades de índice y, pero también pueden tener otras propiedades
              y métodos no numéricos, que normalmente no necesitamos. Sin embargo, el bucle "for..in" los enumerará. Entonces,
              si necesitamos trabajar con objetos tipo matriz, entonces estas propiedades "adicionales" pueden convertirse
              en un problema.

              El bucle "for...in" está optimizado para objetos genéricos, no para matrices, y por lo tanto es entre 10 y 100
              veces más lento.

              Por supuesto, sigue siendo muy rápido. Es posible que la aceleración sólo importe en los cuellos de botella.
              Pero aun así debemos ser conscientes de la diferencia.

              Generalmente, no deberíamos usar lops bucles "for..in" para matrices.
*/


//  Comparacion de matrices con los operadores "==" y "===".
/*
    No compare matrices con "==".
    
    Las matrices en JavaScript, a diferencia de otros lenguajes de programación, no deben compararse con el
    operador "==". En lugar de eso, use el operador "===".

    El operador "==" no tiene un tratamiento especial para los arrays, trabaja con ellos como con cualquier objeto.

    Recordemos las reglas:

        1.- Dos objetos NO son iguales con el operador "==", sólo son referencias al mismo objeto.

        2.- Si uno de los argumentos del operador "==" es un objeto y el otro es un dato primitivo, entonces el objeto
            se convierte en primitivo, como se explica en el capítulo Conversión de objeto a primitivo.

        3.- …Con excepción de null y undefined que son iguales == entre sí y nada más.


    La comparación estricta "===" es aún más sencilla, ya que no convierte tipos.

    Entonces, si comparamos matrices con el operador "=="", nunca son iguales, a menos que comparemos dos variables
    que hacen referencia exactamente a la misma matriz.

        Por ejemplo:

                    alert( [] == [] ); // false
                    alert( [0] == [0] ); // false

    Estas matrices son objetos técnicamente diferentes. Entonces no son iguales. El operador "==" no realiza comparaciones
    artículo por artículo.


    La comparación con primitivas también puede dar resultados aparentemente extraños:

                    alert( 0 == [] ); // true
                    alert('0' == [] ); // false

    Aquí, en ambos casos, comparamos una primitiva con un objeto de matriz. Entonces, la matriz [] se convierte a primitiva
    con fines de comparación y se convierte en una cadena vacía ''.

    Luego continúa el proceso de comparación con las primitivas, como se describe en el capítulo Conversiones de tipos :

                    // after [] was converted to ''
                    alert( 0 == '' ); // true, as '' becomes converted to number 0
                    alert('0' == '' ); // false, no type conversion, different strings
    
    
    Entonces, ¿cómo comparar matrices? Eso es simple: no uses el operador "==". En su lugar, compárelos elemento por
    elemento en un bucle o utilizando los métodos de iteración.

    Ejemplo de funcion de comparacion de arrays:

                    const compareArr = (arr1, arr2) => {
                        if (arr1.length !== arr2.length) {
                            return false
                        } 
                        for (let i = 0; i < arr1.length; i++) {
                          if (arr1[i] !== arr2[i]) {
                                return false
                            }
                        }
                        return true
                    };
*/

//  2.- Arrays o Matrices multidimensionales en Javascript
/*
        Las matrices pueden tener elementos que también sean matrices.

        Las matrices de JavaScript pueden contener cualquier valor permitido, incluidas arrays. Una matriz dentro de otra
        matriz se llama "matriz anidada" o "matriz multidimensional". Esta situación crea la posibilidad de que muchos
        objetos de matriz estén anidados a diferentes profundidades. 
        
        A continuación se muestra un ejemplo de una matriz tridimensional:

                  const elements = [[['H', 'Li', 'Na'], ['Be', 'Mg']], [['B', 'Al'], ['C', 'Si']]];

        Se puede acceder a los diferentes elementos de un array multidimensional repitiendo la sintaxis de los corchetes con los
        índices correspondientes a los elementos que te interesan, para profundizar cada vez más.

                  console.log(elements[0]); // [['H', 'Li', 'Na'], ['Be', 'Mg']]

                  console.log(elements[0][0]); // ['H', 'Li', 'Na']

                  console.log(elements[0][0][0]); // 'H'


                  let matrix = [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]
                  ];

                  alert( matrix[1][1] ); // 5, the central element


    2.1.- Matrices "dispersas" o "mal formadas". Son matrices que tiene elementos con espacios vacías.
          Los arrays dispersos (o matrices dispersas) son arrays que contienen espacios vacíos. 
          
          Por ejemplo, si escribe mal dos comas consecutivas al crear una matriz, terminará con una "matriz dispersa":

                  let firstGroup = ['H', 'Li', 'Na',, 'K', 'Rb', 'Cs'];
                  console.log(firstGroup); // ['H', 'Li', 'Na', empty, 'K', 'Rb', 'Cs']
          
          
          Como puede ver, entre los elementos del array 'Na'y 'K' hay un valor "empty". Esto se puede mostrar de diferentes
          maneras, según el entorno de codificación. Pero no es lo mismo que tener un valor "undefined".

          También se pueden crear "matrices dispersas" cambiando directamente la propiedad "length" del array o asignando un
          valor a un elemento del array con un índice mayor que la longitud:

                  // Increasing the length property
                  firstGroup.length = 11;
                  console.log(firstGroup); // ['H', 'Li', 'Na', empty, 'K', 'Rb', 'Cs', empty × 4]

                  // Assigning an element to an index greater than the length
                  firstGroup[15] = 'Fr';
                  console.log(firstGroup); // ['H', 'Li', 'Na', empty, 'K', 'Rb', 'Cs', empty × 8, 'Fr']
          
          Dependiendo de la operación realizada en una "matriz dispersa", las ranuras vacías pueden actuar como tal undefined o
          pueden omitirse.

          Los métodos de matriz tienen comportamientos diferentes cuando encuentran espacios vacíos en matrices dispersas . En general,
          los métodos más antiguos (por ejemplo forEach) tratan las ranuras vacías de manera diferente a los índices que contienen
          undefined.

          Los métodos que tienen un tratamiento especial para espacios vacíos incluyen los siguientes: concat(), copyWithin(), every(),
          filter(), flat(), flatMap(), forEach(), indexOf(), lastIndexOf(), map(), reduce(), reduceRight(), reverse(), slice(), some(),
          sort()y splice(). Los métodos de iteración, como por ejemplo, "forEach" no visitan espacios vacíos en absoluto. Otros métodos,
          como concat, copyWithin, etc., conservan las ranuras vacías al realizar la copia, por lo que al final la matriz sigue siendo
          escasa.

          Los métodos más nuevos (p. ej. keys) no tratan especialmente las ranuras vacías y las tratan como si contuvieran undefined.
          Los métodos que combinan espacios vacíos con undefinedelementos "undefined" incluyen los siguientes: entries(), fill(), find(),
          findIndex(), findLast(), findLastIndex(), includes(), join(), keys(), toLocaleString(), toReversed(), toSorted(), toSpliced(),
          values() y with().
*/

//  Propiedaddes y metodos del objeto Array de javascript
/*
    1.- Metodo "at" del objeto Array:  El método Array.at(i) devuelve un elemento indexado "i" de una matriz, tanto si "i" es
        un número positivo como si es un índice negativo. Es lo mismo que la notacion con corchetes [], pero el indice que se
        le indica puede ser negativo.

            Nota.- Es una adición reciente al estandard javascript para arrays. Los navegadores antiguos pueden necesitar
                   polyfills.

        Sintaxis:  array.at(index)

                  Parameter	          Description
                  index	Optional.     The index (position) of the array element to be returned. Default is 0.
                                      -1 returns the last element.

                  Valor de retorno: El elemento de la posición dada (índice) en la matriz.

        Digamos que queremos el último elemento de un array. Algunos lenguajes de programación permiten el uso de índices
        negativos (como Python) para el mismo propósito, como fruits[-1].

        Aunque en JavaScript no funcionará. El resultado será "undefined", porque el índice entre corchetes se trata literalmente.

        Podemos calcular explícitamente el índice del último elemento y luego acceder a él: fruits[fruits.length - 1].

            let fruits = ["Apple", "Orange", "Plum"];
            alert( fruits[fruits.length-1] ); // Plum

        Un poco engorroso, ¿no? Necesitamos escribir el nombre de la variable dos veces. Afortunadamente, existe una sintaxis más
        corta: fruits.at(-1):

           let fruits = ["Apple", "Orange", "Plum"];  // same as fruits[fruits.length-1]
           alert( fruits.at(-1) ); // Plum

        En otras palabras, arr.at(i): es exactamente igual que: arr[i], si i >= 0, o arr[arr.length + i] para valores negativos de i,
        y retrocede desde el final de la matriz.


    2.- Metodos pop/push, shift/unshift:

        Una estructura de datos "cola" (queue) es uno de los usos más comunes de un array. En informática, esto significa una colección
        ordenada de elementos que admite dos operaciones:

              push    =>      añade un elemento al final.
              shift   =>      obtener un elemento desde el principio, avanzando en la cola, de modo que el segundo elemento se
                              convierta en el primero.

        Las matrices admiten ambas operaciones.

        En la práctica lo necesitamos muy a menudo. Por ejemplo, una "cola de mensajes" que deben mostrarse en pantalla.


        Hay otro caso de uso para las matrices: la estructura de datos denominada pila . Admite dos operaciones:

            push    =>      añade un elemento al final.
            pop     =>      toma un elemento del final.

        Así que los nuevos elementos se añaden o quitan siempre desde el “final”. Una pila generalmente se ilustra como una baraja de
        cartas: se agregan cartas nuevas en la parte superior o se toman desde arriba:

        Para las pilas, el último elemento enviado se recibe primero, lo que también se denomina principio LIFO (último en entrar, primero 
        en salir). Para las colas, tenemos FIFO (primero en entrar, primero en salir).

        Las matrices o arrays en JavaScript pueden funcionar tanto como estructura de datos "cola" como "pila". Permiten agregar/eliminar
        elementos, tanto al principio como al final de la estructura de datos correspondiente.


        2.1.- Métodos que funcionan con el final de la matriz: pop() y push()

              pop  =>     Extrae, elimina (hacer estallar) el último elemento de la matriz (array) y ademas lo devuelve:

                          let fruits = ["Apple", "Orange", "Pear"];
                          alert(fruits.pop()); // remove "Pear" and alert it
                          alert( fruits ); // Apple, Orange

                  Nota.- Ambos metodos: fruits.pop() y fruits.at(-1) devuelven el último elemento de la matriz,
                        pero fruits.pop() también modifican la matriz eliminándo el ultimo elemento del array.

              push  =>     Agrega un elemento al final de la matriz:

                          let fruits = ["Apple", "Orange"];
                          fruits.push("Pear");
                          alert(fruits); // Apple, Orange, Pear

                          Nota.- La llamada al metodo: fruits.push(...) es igual a: fruits[fruits.length] = ....

        2.2.- Métodos que funcionan con el comienzo de la matriz: shift() y unshift()

              shift =>     Extrae el primer elemento de la matriz y lo devuelve:

                            let fruits = ["Apple", "Orange", "Pear"];
                            alert(fruits.shift()); // remove Apple and alert it
                            alert(fruits); // Orange, Pear

              unshift =>   Agrega un elemento al comienzo de la matriz:

                            let fruits = ["Orange", "Pear"];
                            fruits.unshift('Apple');
                            alert( fruits ); // Apple, Orange, Pear


            Nota.- Los métodos push y unshift pueden agregar varios elementos a la vez:

                            let fruits = ["Apple"];
                            fruits.push("Orange", "Peach");
                            fruits.unshift("Pineapple", "Lemon");
        

        2.3.- Los métodos push/pop funcionan rápido, mientras que shift/unshiftson son lentos.

              ¿Por qué es más rápido trabajar con el final de un array que con su principio? Veamos qué sucede durante
              la ejecución:

                  fruits.shift(); // take 1 element from the start
            

              La operación "shift()" debe hacer 3 cosas sobre el array:

                  1.- Elimina el elemento con el índice 0.

                  2.- Mueve todos los elementos hacia la izquierda, renumérelos del índice 1 a 0, de 2 a 1 y así sucesivamente.

                  3.- Actualizar la propiedad "length" del array.
            
              No basta con tomar y eliminar el elemento con el índice 0. También es necesario volver a numerar otros elementos,
              es decir actualizar los indices de todos los elementos del array, y esto lleva tiempo.

              Cuantos más elementos haya en la matriz, más tiempo para moverlos y más operaciones en memoria.

              Lo mismo sucede con el metodo "unshift(element): para agregar un elemento al comienzo de la matriz, primero
              debemos mover los elementos existentes hacia la derecha, aumentando sus índices.


              ¿Y qué pasa push/pop? No necesitan mover nada. Para extraer un elemento del final, el método "pop()" limpia
              el índice y lo acorta length.

              Asi, las acciones para la operación "pop()" son:

                      fruits.pop(); // take 1 element from the end

              El popmétodo "pop()" no necesita mover nada, porque otros elementos mantienen sus índices. Por eso es increíblemente
              rápido. Lo mismo con el método "push(element)", para agregar un elemento al final.
    

    3.- Metodo join(): unión de matriz de JavaScript ().

        Sintaxis: array.join(separator)  => Un string separado por "separador".

        El método "join()" devuelve una matriz como una cadena de texto (string), une todos los elementos de la matriz en
        una cadena (string). Se comporta igual que el metodo toString(), pero además puedes especificar el separador:

            const fruits = ["Banana", "Orange", "Apple", "Mango"];
            document.getElementById("demo").innerHTML = fruits.join(" * ");
            Resultado:

            Banana * Orange * Apple * Mango

        El join()método "join() " no cambia la matriz original.
        Se puede especificar cualquier separador. El valor predeterminado es la coma (,).


    4.- Metodo delete(): Eliminar matrices - arrays de JavaScript.

        Advertencia ! => El uso del metodo "delete()" deja "undefined" agujeros en la matriz.

                        Utilice pop() o shift() en su lugar.

                        Ejemplo
                        const fruits = ["Banana", "Orange", "Apple", "Mango"];
                        delete fruits[0];  // [undefined, "Orange", "Apple", "Mango"]

    5.- Metodo concat(): Fusionar o concatenación de matrices de JavaScript.

        En los lenguajes de programación, la "concatenación" significa "unir cadenas (strings)" de un extremo a otro.
        Asi, La concatenación "nieve" y "bola" es: "bola de nieve".

        Concatenar matrices significa "unir" matrices de un extremo a otro.


        5.1.- Concatenación de matriz de JavaScript: concat()

              Sintaxis: array1.concat(array2, array3, ..., arrayX) => Devuelve una nueva matriz con los elementos
                                                                      de todas las matrices.

              El método del objeto Array"concat()" crea una "nueva" matriz fusionando (concatenando) matrices existentes:

                Ejemplo (fusión de dos matrices)
                            const myGirls = ["Cecilie", "Lone"];
                            const myBoys = ["Emil", "Tobias", "Linus"];

                            const myChildren = myGirls.concat(myBoys);

                  Nota.- El método "concat()" no cambia las matrices existentes. Siempre devuelve una nueva matriz.

              El método "concat()" puede tomar cualquier número de argumentos de matriz.

                Ejemplo (fusión de tres matrices)
                            const arr1 = ["Cecilie", "Lone"];
                            const arr2 = ["Emil", "Tobias", "Linus"];
                            const arr3 = ["Robin", "Morgan"];
                            const myChildren = arr1.concat(arr2, arr3);


              El método"concat() también puede tomar cadenas como argumentos:

                Ejemplo (Fusionar una matriz con valores)
                            const arr1 = ["Emil", "Tobias", "Linus"];
                            const myChildren = arr1.concat("Peter");


    6.- Empalmar y cortar matrices: Metodos splice() y slice()

        Los métodos "splice()" y "slice()"" son los más comunes de los lenguajes de programación.
        
        1.- El método "splice()" agrega nuevos elementos a una matriz - array.

            Sintaxis: array.splice(index, howmany, item1, ....., itemX) => Elimina elementos de la matriz.
                                                                           Devuelve los eliminados.

                  Parámetros:
                      index => Indice de inicio de la eliminación.
                      howmany => Cantidad de elementos a eliminar.
                      item1, ..., itemX => Elementos a agregar.


                  Ejemplo:
                      const fruits = ["Banana", "Orange", "Apple", "Mango"];
                      fruits.splice(2, 0, "Lemon", "Kiwi");
                      alert( fruits );

            El método "splice" se puede utilizar para agregar nuevos elementos a una matriz, devuelve una nueva matriz
            - array con los elementos eliminados:

                const fruits = ["Banana", "Orange", "Apple", "Mango"];
                fruits.splice(2, 0, "Lemon", "Kiwi");
                console.log(fruits); // Imprime: Banana, Orange, Lemon, Kiwi, Apple, Mango

            El primer parámetro (2) define la posición donde se deben agregar (empalmar) nuevos elementos. El segundo
            parámetro (0) define cuántos elementos se deben eliminar a partir de esa posicion. El resto de parámetros
            ("Lemon", "Kiwi") definen los nuevos elementos a añadir en la posicion indicada del array.

            1.1.- Usando splice() para eliminar elementos
                  Con una configuración de parámetros inteligente, puede utilizar el metodo splice() para eliminar elementos
                  sin dejar "agujeros" en la matriz:

                      const fruits = ["Banana", "Orange", "Apple", "Mango"];
                      fruits.splice(0, 1);
                      console.log(fruits); // Imprime: Orange, Apple, Mango
                      
                      El primer parámetro (0) define la posición donde se deben agregar (empalmar) nuevos elementos. El segundo
                      parámetro (1) define cuántos elementos se deben eliminar . El resto de parámetros se omiten. No se agregarán
                      nuevos elementos.

            1.2.- Matriz de JavaScript para toSpliced()
                  ES2023 agregó el método Array "toSpliced()", como una forma "segura" de empalmar una matriz sin alterar la
                  matriz original.

                  La diferencia entre el nuevo método toSpliced() y el antiguo método splice() es que el nuevo método crea una
                  nueva matriz, manteniendo la matriz original sin cambios, mientras que el método anterior altera la matriz original.

                    const months = ["Jan", "Feb", "Mar", "Apr"];
                    const spliced = months.toSpliced(0, 1);
                    console.log(months);  // Imprime: ["Jan", "Feb", "Mar", "Apr"]
                    console.log(spliced); // Imprime: ["Feb", "Mar", "Apr"]


        2.- El método "slice() " corta una parte de una matriz - array.

            La función slice() devuelve una nueva matriz con elementos de la matriz original.

               Syntax: array.slice(start, end) => Devuelve una nueva matriz.

               Ejemplo:
                        const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
                        const citrus = fruits.slice(2);

                        alert( citrus );  // Imprime: Lemon, Apple, Mango
                        alert( fruits );  // Imprime: Banana, Orange, Lemon, Apple, Mango

            El método "slice()" divide (corta) una parte de una matriz en una nueva matriz, devuelve una "nueva" matriz
            - array con los elementos cortados por el metodo. Este metodo no modifica el array original:

            El método "slice()" puede tomar dos argumentos, como slice(1, 3). El primer argumento del metodo indica
            la posición inicial y el segundo argumento indica la posición final. Si se omite este segundo parámetro, 
            slice() corta desde el primer parametro indicado hasta el final del array.

            Luego, el método selecciona elementos desde el argumento inicial y hasta (pero sin incluir) el argumento final.

                const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
                const citrus = fruits.slice(1, 3);
                console.log(citrus); // Imprime: Orange, Lemon

            Ejemplo: Corte una parte de una matriz a partir del elemento 1 de la matriz ("Orange"):

                const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
                const citrus = fruits.slice(1);

                console.log(citrus); // Imprime: Orange, Lemon, Apple, Mango


    7.- Copia de un array con el metodo: "copyWithin()".

    El método "copyWithin()" copia elementos de la matriz a otra posición en la misma matriz.

    El método "copyWithin()" en JavaScript se utiliza para copiar una secuencia de elementos de un array y
    pegarla en otra parte del mismo array, sobrescribiendo los elementos existentes y devolviendo el array
    modificado. Este método modifica el array en el lugar y no lo reemplaza.

    El método "copyWithin()" acepta hasta tres argumentos opcionales: target, start y end.

        1.- target: Índice (posicion en el array) en el que se pegarán los elementos copiados.

        2.- start (opcional): Índice que especifica el inicio de la secuencia de elementos del
                              array de origen a copiar.

        3.- end (opcional):   Índice que especifica el final de la secuencia de elementos del
                              array de origen a copiar. El elemento en este índice (ultimo elemento)
                              no se incluirá en la copia.

            const arr = [1, 2, 3, 4, 5];
            arr.copyWithin(0, 3, 4);
            console.log(arr); // Output: [4, 2, 3, 4, 5]

    En este ejemplo, el método "copyWithin()" copia la secuencia de elementos desde el índice 3
    hasta el índice 4 (no inclusivo), con lo cual es el elemento "4" del array origen, y lo pega
    desde el índice 0 en adelante (primera posicion del array), sobrescribiendo los elementos
    existentes (modifica el array origen) y devuelve el array modificado.

    Ejemplo: Copie al índice 2, todos los elementos del índice 0:

          const fruits = ["🍌", "🟠", "🍎", "🍑", "🍓", "🍉", "🍐", "🍒"];
          fruits.copyWithin(2, 0);
          console.log(fruits); // Imprime: ["🍌", "🟠", "🍎", "🍑", "🍓", "🍉", "🍐", "🍒", "🍑", "🍓", "🍉", "🍐", "🍒"]


    Ejemplo: Copiar al índice 2, los elementos del índice 0 al 2:

          const fruits = ["🍌", "🟠", "🍎", "🍑", "🍓", "🍉", "🍐", "🍒"];
          fruits.copyWithin(2, 0, 2);
          console.log(fruits); // Imprime: ["🍌", "🟠", "🍌", "🟠", "🍑", "🍓", "🍉", "🍐", "🍒"];


        Notas.- El método "copyWithin()" sobrescribe los valores existentes de la matriz (la modifica).


    8.- El metodo "flat()" (aplanar) de una matriz-array multidimensional.

        El método "flat()"" se utiliza en JavaScript para "aplanar" un array, es decir, para convertir un array
        multidimensional en un array de una sola dimensión. Este método devuelve un "nuevo array" con todos los
        elementos de los subarrays concatenados.

            const arr = [1, 2, [3, 4, [5, 6]]];
            const flattenedArr = arr.flat();
            console.log(flattenedArr); // Output: [1, 2, 3, 4, [5, 6]]

        El método flat() también acepta un argumento opcional que especifica la profundidad máxima de aplanamiento.
        Por ejemplo:

            const arr = [1, 2, [3, 4, [5, 6]]];
            const flattenedArr = arr.flat(2);
            console.log(flattenedArr); // Output: [1, 2, 3, 4, 5, 6]

        En este caso, el argumento "2" especifica que se debe aplanar hasta una profundidad máxima de 2 niveles.

        ES2019 Se introdujo el método Array.flat(). "Aplanar" una matriz-array es el proceso de reducir la
        dimensionalidad de una matriz.

        El aplanamiento es útil cuando desea convertir una matriz multidimensional en una matriz unidimensional.

        El método "flat()" crea una "nueva" matriz con elementos de submatriz concatenados a una profundidad
        especificada, concatena elementos de la matriz original a una submatriz de menor dimension.

        Sintaxis:  array.flat(depth), donde:

                    Parameter	                  Description
                    depth	Optional.             How deep a nested array should be flattened. Default is 1.

                    Valor de retorno:           La nueva matriz-array aplanada.

                    const myArr = [[1,2],[3,4],[5,6]];
                    const newArr = myArr.flat();
                    console.log(newArr); // Imprime: [1, 2, 3, 4, 5, 6]

*/

//  7.- Metodos de busqueda en una matriz (array). Busqueda de matrices.
/*
    7.1.- El método indexOf().

    El método "indexOf()" busca en una matriz el valor de un elemento y devuelve su posición (indice) en
    el array. Si el elemento a buscar en el array no existe, devuelve -1.

    Si el elemento está presente más de una vez, devuelve solamente la posición de la primera aparición.


    Syntax: array.indexOf(searchElement, fromIndex)

      Parameters:
         searchElement (Required):        The value to search for in the array.
         fromIndex (optional):            The index to start the search from. Default is 0.
                                          Negative values will start at the given position counting
                                          from the end, and search to the end.

    El método "indexOf()"" en JavaScript se utiliza para encontrar la "primera" ocurrencia de un valor
    especificado dentro de un array, y devolver el índice de esa ocurrencia. Si el valor no se encuentra
    en el array, el método devuelve -1.

    El método indexOf() acepta hasta dos argumentos:

        1.- searchElement: El valor (elemento) que se desea buscar en el array.

        2.- fromIndex (opcional): El índice a partir del cual se comenzará a buscar el valor. Si no se
                                  especifica, la búsqueda comienza desde el principio del array.


    Ejemplo: Busque en una matriz el elemento "Apple":

             const fruits = ["🍌", "🟠", "🍎", "🍑", "🍓", "🍉", "🍐", "🍒"];
             let position = fruits.indexOf("🍎") + 1;  // 3

             const arr = [2, 5, 9, 2];
             console.log(arr.indexOf(2));       // Output: 0
             console.log(arr.indexOf(7));       // Output: -1
             console.log(arr.indexOf(2, 2));    // Output: 3


    7.2.- El metodo lastIndexOf().

    El metodo "Array.lastIndexOf()" es igual que Array.indexOf(), pero devuelve la posición de la
    última aparición del elemento especificado.

    El método "lastIndexOf()" en JavaScript es similar al método indexOf(), pero en lugar de encontrar
    la primera ocurrencia de un valor en un array, encuentra la última ocurrencia de ese valor y devuelve
    su índice (posicion en el array). Si el valor no se encuentra en el array, el método devuelve -1.

    Syntax: array.lastIndexOf(searchElement, fromIndex)

      Parameters:
         searchElement (Required):        The value to search for in the array.
         fromIndex (optional):            The index to start the search from. Default is 0.
                                          Negative values will start at the given position counting
                                          from the end, and search to the end.

    El método lastIndexOf() acepta hasta dos argumentos:

        1.- searchElement (obligatorio): El valor (elemento) que se desea buscar en el array.

        2.- fromIndex (opcional): El índice a partir del cual se comenzará a buscar el valor,
                                  pero en este caso la búsqueda comienza desde el final del array.

        const arr = [2, 5, 9, 2];
        console.log(arr.lastIndexOf(2));      // Output: 3
        console.log(arr.lastIndexOf(7));      // Output: -1
        console.log(arr.lastIndexOf(2, 2));   // Output: 0

        Ejemplo: Busque en una matriz el elemento "🍌":

                  const fruits = ["🍌", "🟠", "🍎", "🍌", "🍓", "🍉", "🍐", "🍒"];
                  let position = fruits.lastIndexOf("🍌") + 1;  // 4


    7.3.- El metodo includes().

    ECMAScript 2016 introducio el metodo "Array.includes()" a las matrices. Esto nos permite verificar
    si un elemento está presente en un array (incluido NaN, a diferencia de indexOf).

    El método "includes()" en JavaScript se utiliza para determinar si un array incluye un determinado
    valor (elemento), y devuelve true o false según el resultado.


    Syntax: array.includes(searchElement, fromIndex)

       Parameters:

       searchElement (Required):        The value to search for in the array. Permite comprobar los valores
                                        de NaN. A diferencia de Array.indexOf().
       fromIndex (optional):            The index to start the search from. Default is 0.
                                        Negative values will start at the given position counting
                                        from the end, and search to the end.


    El método includes() acepta hasta dos argumentos:

        1.- searchElement (requerido):    El valor que se desea buscar en el array.

        2.- fromIndex (opcional):         El índice a partir del cual se comenzará a buscar el valor.

                const arr = [1, 2, 3];
                console.log(arr.includes(2));     // Output: true
                console.log(arr.includes(4));     // Output: false
                console.log(arr.includes(1, 1));  // Output: false

                const fruits = ["🍌", "🟠", "🍎", "🍑", "🍓", "🍉", "🍐", "🍒"];

                fruits.includes("🍑");    // is true
                fruits.includes("🥝");  // is false


    7.4.- El metodo "find()" de matriz de JavaScript().

    El método "find()" devuelve el valor (elemento) del primer elemento de la matriz que pasa una
    "función de prueba" proporcionada. Si no hay ningún elemento en la matriz, el método devuelve 
    "undefined".
    
    El método "find()" en JavaScript se utiliza para encontrar el primer elemento que cumpla con una
    "condición" - expresada como un callback-"funcion de prueba".

    La función de prueba es llamada con tres argumentos: el valor actual, su índice y el array.
    Syntax: array.find(callback[Element, index, thisArg])

      callback is invoked with three arguments:
          - Element (the current element being processed)
          - Index (the index of the current element being processed)
          - Array (the array find was called on)

      Return Value:
          The value of the first element that passes the test. If no elements pass the test, undefined
          is returned.

    El método "find()" en JavaScript se utiliza para buscar un elemento en un array que cumple con una
    condición especificada (de una funcion de prueba). Toma una función de devolución de llamada como
    argumento, que se ejecuta para cada elemento del array. Si la función de devolución de llamada devuelve
    true para algún elemento, find() devuelve ese elemento. Si ninguno de los elementos cumple con la condición,
    devuelve "undefined".


        Syntax: array.find(callback(element, index, array))

          Parameters:

              callback – Function that is called (executed) for each element of the array. 
                        The function receives three arguments:

              value – The value of the element
              index – The index of the element
              array – The array itself.


    Ejemplo: encuentra (devuelve el valor de) el primer elemento mayor que 18:

          const numbers = [4, 9, 16, 25, 29];
          const first = numbers.find(myFunction);

          function myFunction(value, index, array) {
            return value > 18;
          }

          console.log(first); // Output: 25

          const numbers = [1, 2, 3, 4, 5];
          const evenNumber = numbers.find((number) => number % 2 === 0);

          console.log(evenNumber); // Output: 2


    7.5.- Metodo findIndex() de arrays de javascript.

    El método "findIndex()" en JavaScript es similar al método "find()"", pero en lugar de devolver el
    primer elemento que cumple con la condición de prueba, devuelve el índice de ese elemento en el array.
    Al igual que find(), findIndex() toma una función de devolución de llamada como argumento y la ejecuta
    para cada elemento del array. Si la función de devolución de llamada devuelve "true" para algún elemento,
    findIndex() devuelve el índice de ese elemento. Si ninguno de los elementos cumple con la condición,
    devuelve -1.

    El método "findIndex()" devuelve el "índice" (posicion en el array) del primer elemento de la matriz
    que pasa una función de prueba (condicion). Es similar al metodo "find()", solo que devuelve el índice
    y no el valor (elemento) del mismo. Si ningun elemento del array pasa la funcion de prueba, devuelve -1.

        Syntax: array.findIndex(callback(element, index, array))

          callback is invoked with three arguments:
              - Element (the current element being processed)
              - Index (the index of the current element being processed)
              - Array (the array findIndex was called on)

        Returns:
            The "index" of the first element that passes the test. If no elements pass the test, -1 is returned.


        Ejemplo: encuentra el índice del primer elemento mayor que 18:

                    const numbers = [4, 9, 16, 25, 29];
                    const first = numbers.findIndex(myFunction);

                    function myFunction(value, index, array) {
                      return value > 18;
                    }
                    console.log(first); // Output: 3

                    const numbers = [1, 2, 3, 4, 5];
                    const evenNumberIndex = numbers.findIndex((number) => number % 2 === 0);
                    console.log(evenNumberIndex); // Output: 1


    7.6.- Método JavaScript Array "findLast()".
    
    El metodo "findLast()" es una característica de ES2023. ES2023 agregó el método "findLast()",
    que comenzará desde el final de una matriz y devolverá el valor (elemento), del primer elemento
    del array, que satisface una condición dada (callback funcion de prueba).

        Syntax: array.findLast(callback(Element, index, array))

            The callback is invoked with three arguments:
                - Element (the current element being processed)
                - Index (the index of the current element being processed)
                - Array (the array findLast was called on)

            Returns:
                The value of the first element that passes the test. If no elements pass the test,
                undefined is returned.

            const temp = [27, 28, 30, 40, 42, 35, 30];
            const high = temp.findLast(x => x > 40);
            console.log(high); // Output: 42


    7.7.- Método JavaScript Array "findLastIndex()".

    El método "findLastIndex()" es una característica de ES2023. ES2023 agrego este metodo que
    encuentra el índice del último elemento que satisface una condición. Comienza la busqueda del
    elemento al final de la matriz y devuelve el índice del primer elemento que satisface la condición.


        Syntax: array.findLastIndex(callback(Element, index, array))

            The callback is invoked with three arguments:
                - Element (the current element being processed)
                - Index (the index of the current element being processed)
                - Array (the array findLastIndex was called on)

            Returns:
                The index of the first element that passes the test. If no elements pass the test,
                -1 is returned.

            
            const fruits = ['apple', 'banana', 'orange', 'kiwi'];
            const index = fruits.findLastIndex(fruit => fruit.length > 5);
            console.log(index); // Output: 2 (index of 'orange')

            const temp = [27, 28, 30, 40, 42, 35, 30];
            const pos = temp.findLastIndex(x => x > 40);
            console.log(pos); // Output: 4
*/

// 8.- Metodos de clasificacion en una matriz (array).
/*

El sort()método ordena una matriz alfabéticamente:

Ejemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
Invertir una matriz
El reverse()método invierte los elementos de una matriz:

Ejemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
Combinando sort()y reverse(), puedes ordenar una matriz en orden descendente:

Ejemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
Método JavaScript Array toSorted()
ES2023 agregó el toSorted()método como una forma segura de ordenar una matriz sin alterar la matriz original.

La diferencia entre toSorted()y sort() es que el primer método crea una nueva matriz, manteniendo la matriz original sin cambios, mientras que el último método altera la matriz original.

Ejemplo
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
Método JavaScript Array toReversed()
ES2023 agregó el toReversed()método como una forma segura de invertir una matriz sin alterar la matriz original.

La diferencia entre toReversed()y reverse()es que el primer método crea una nueva matriz, manteniendo la matriz original sin cambios, mientras que el último método altera la matriz original.

Ejemplo
const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
Orden numérico
De forma predeterminada, la sort()función ordena los valores como cadenas .

Esto funciona bien para cadenas ("Apple" viene antes de "Banana").

Si los números se ordenan como cadenas, "25" es mayor que "100", porque "2" es mayor que "1".

Debido a esto, el sort()método producirá resultados incorrectos al ordenar números.

Puedes solucionar este problema proporcionando una función de comparación :

Ejemplo
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
Utilice el mismo truco para ordenar una matriz de forma descendente:

Ejemplo
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
ANUNCIO

ANUNCIO

La función de comparación
El propósito de la función de comparación es definir un orden de clasificación alternativo.

La función de comparación debe devolver un valor negativo, cero o positivo, según los argumentos:

function(a, b){return a - b}
Cuando la sort()función compara dos valores, envía los valores a la función de comparación y ordena los valores según el valor devuelto (negativo, cero, positivo).

Si el resultado es negativo, ase ordena antes b.

Si el resultado es positivo, bse ordena antes a.

Si el resultado es 0, no se realizan cambios en el orden de clasificación de los dos valores.

Ejemplo:

La función de comparación compara todos los valores de la matriz, dos valores a la vez (a, b).

Al comparar 40 y 100, el sort()método llama a la función de comparación (40, 100).

La función calcula 40 - 100 (a - b)y, dado que el resultado es negativo (-60), la función de clasificación clasificará 40 como un valor inferior a 100.

Puede utilizar este fragmento de código para experimentar con la clasificación numérica y alfabética:

<button onclick="myFunction1()">Sort Alphabetically</button>
<button onclick="myFunction2()">Sort Numerically</button>

<p id="demo"></p>

<script>
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction1() {
  points.sort();
  document.getElementById("demo").innerHTML = points;
}

function myFunction2() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = points;
}
</script>
Ordenar una matriz en orden aleatorio
Usando una función de clasificación, como se explicó anteriormente, puede ordenar una matriz numérica en orden aleatorio

Ejemplo
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});

El método Fisher Yates
El método points.sort() del ejemplo anterior no es exacto. Favorecerá a algunos números sobre otros.

El método correcto más popular se llama barajado de Fisher Yates y se introdujo en la ciencia de datos ya en 1938.

En JavaScript el método se puede traducir a esto:

Ejemplo
const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}

Encuentre el valor de matriz más bajo (o más alto)
No hay funciones integradas para encontrar el valor máximo o mínimo en una matriz.

Para encontrar el valor más bajo o más alto tienes 3 opciones:

Ordena la matriz y lee el primer o último elemento.
Utilice Math.min() o Math.max()
Escribe una función casera.
Encuentra Min o Max con sort()
Después de haber ordenado una matriz, puede usar el índice para obtener los valores más altos y más bajos.

Orden ascendente:
Ejemplo
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value
Orden descendiente:
Ejemplo
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
// now points[0] contains the highest value
// and points[points.length-1] contains the lowest value
Nota
Ordenar una matriz completa es un método muy ineficiente si solo desea encontrar el valor más alto (o más bajo).

Usando Math.min() en una matriz
Puedes usar Math.min.applypara encontrar el número más bajo en una matriz:

Ejemplo
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

Math.min.apply(null, [1, 2, 3])es equivalente a Math.min(1, 2, 3).

Usando Math.max() en una matriz
Puedes usar Math.max.applypara encontrar el número más alto en una matriz:

Ejemplo
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

Math.max.apply(null, [1, 2, 3])es equivalente a Math.max(1, 2, 3).

Método mínimo de matriz de JavaScript
No existe una función incorporada para encontrar el valor más bajo en una matriz de JavaScript.

El código más rápido para encontrar el número más bajo es utilizar un método casero .

Esta función recorre una matriz comparando cada valor con el valor más bajo encontrado:

Ejemplo (buscar mínimo)
function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

Método máximo de matriz de JavaScript
No existe una función incorporada para encontrar el valor más alto en una matriz de JavaScript.

El código más rápido para encontrar el número más alto es utilizar un método casero .

Esta función recorre una matriz comparando cada valor con el valor más alto encontrado:

Ejemplo (buscar máx.)
function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

Ordenar matrices de objetos
Las matrices de JavaScript suelen contener objetos:

Ejemplo
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
Incluso si los objetos tienen propiedades de diferentes tipos de datos, el sort()método se puede utilizar para ordenar la matriz.

La solución es escribir una función de comparación para comparar los valores de las propiedades:

Ejemplo
cars.sort(function(a, b){return a.year - b.year});
Comparar propiedades de cadenas es un poco más complejo:

Ejemplo
cars.sort(function(a, b){
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});
Ordenación de matriz estable ()
ES2019 revisó el método Array sort().

Antes de 2019, la especificación permitía algoritmos de clasificación inestables como QuickSort.

Después de ES2019, los navegadores deben utilizar un algoritmo de clasificación estable:

Al ordenar elementos según un valor, los elementos deben mantener su posición relativa con respecto a otros elementos con el mismo valor.

Ejemplo
const myArr = [
  {name:"X00",price:100 },
  {name:"X01",price:100 },
  {name:"X02",price:100 },
  {name:"X03",price:100 },
  {name:"X04",price:110 },
  {name:"X05",price:110 },
  {name:"X06",price:110 },
  {name:"X07",price:110 }
];
En el ejemplo anterior, al ordenar por precio, no se permite que el resultado salga con los nombres en otra posición relativa como esta:

X01 100
X03 100
X00 100
X03 100
X05 110
X04 110
X06 110
X07 110
*/

// 9.- metodos de iteracion en arrays de javascript.
/*
Iteración de matriz de JavaScript
Métodos de iteración de matrices
Los métodos de iteración de matrices operan en cada elemento de la matriz:

Matriz para cada
mapa de matriz()
Matriz flatMap()
Filtro de matriz()
Matriz reducir()
Matriz reducirRight()
Ver también:
Métodos básicos de matriz
Métodos de búsqueda de matriz
Métodos de clasificación de matriz	Array cada()
Array algunos()
Array desde()
Array claves()
Array entradas()
Array con()
Array Spread (...)
Matriz de JavaScript para cada()
El forEach()método llama a una función (una función de devolución de llamada) una vez para cada elemento de la matriz.

Ejemplo
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}
Tenga en cuenta que la función toma 3 argumentos:

El valor del artículo
El índice de artículos
La matriz en sí
El ejemplo anterior utiliza sólo el parámetro de valor. El ejemplo se puede reescribir como:

Ejemplo
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value + "<br>";
}
Mapa de matriz de JavaScript()
El map()método crea una nueva matriz realizando una función en cada elemento de la matriz.

El map()método no ejecuta la función para elementos de matriz sin valores.

El map()método no cambia la matriz original.

Este ejemplo multiplica cada valor de matriz por 2:

Ejemplo
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
Tenga en cuenta que la función toma 3 argumentos:

El valor del artículo
El índice de artículos
La matriz en sí
Cuando una función de devolución de llamada usa solo el parámetro de valor, se pueden omitir los parámetros de índice y matriz:

Ejemplo
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
Matriz JavaScript flatMap()
ES2019 agregó el método Array flatMap()a JavaScript.

El flatMap()método primero asigna todos los elementos de una matriz y luego crea una nueva matriz aplanándola.

Ejemplo
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
Soporte del navegador
JavaScript Array flatMap()es compatible con todos los navegadores modernos desde enero de 2020:

Chrome 69	Edge 79	Firefox 62	Safari 12	Opera 56
Sep 2018	Jan 2020	Sep 2018	Sep 2018	Sep 2018
ANUNCIO

ANUNCIO

Filtro de matriz de JavaScript()
El filter()método crea una nueva matriz con elementos de la matriz que pasan una prueba.

Este ejemplo crea una nueva matriz a partir de elementos con un valor mayor que 18:

Ejemplo
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Tenga en cuenta que la función toma 3 argumentos:

El valor del artículo
El índice de artículos
La matriz en sí
En el ejemplo anterior, la función de devolución de llamada no utiliza los parámetros de índice y matriz, por lo que se pueden omitir:

Ejemplo
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}
Reducción de matriz de JavaScript()
El reduce()método ejecuta una función en cada elemento de la matriz para producir (reducirlo a) un valor único.

El reduce()método funciona de izquierda a derecha en la matriz. Ver también reduceRight().

El reduce()método no reduce la matriz original.

Este ejemplo encuentra la suma de todos los números en una matriz:

Ejemplo
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
Tenga en cuenta que la función toma 4 argumentos:

El total (el valor inicial/valor devuelto previamente)
El valor del artículo
El índice de artículos
La matriz en sí
El ejemplo anterior no utiliza los parámetros de índice y matriz. Se puede reescribir como:

Ejemplo
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
El reduce()método puede aceptar un valor inicial:

Ejemplo
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}
Matriz de JavaScript reducirDerecha()
El reduceRight()método ejecuta una función en cada elemento de la matriz para producir (reducirlo a) un valor único.

Funciona reduceRight()de derecha a izquierda en la matriz. Ver también reduce().

El reduceRight()método no reduce la matriz original.

Este ejemplo encuentra la suma de todos los números en una matriz:

Ejemplo
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
Tenga en cuenta que la función toma 4 argumentos:

El total (el valor inicial/valor devuelto previamente)
El valor del artículo
El índice de artículos
La matriz en sí
El ejemplo anterior no utiliza los parámetros de índice y matriz. Se puede reescribir como:

Ejemplo
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
}
Matriz de JavaScript cada()
El every()método comprueba si todos los valores de la matriz pasan una prueba.

Este ejemplo comprueba si todos los valores de la matriz son mayores que 18:

Ejemplo
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Tenga en cuenta que la función toma 3 argumentos:

El valor del artículo
El índice de artículos
La matriz en sí
Cuando una función de devolución de llamada usa solo el primer parámetro (valor), los demás parámetros se pueden omitir:

Ejemplo
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}
Matriz de JavaScript algunos()
El some()método comprueba si algunos valores de la matriz pasan una prueba.

Este ejemplo comprueba si algunos valores de matriz son mayores que 18:

Ejemplo
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Tenga en cuenta que la función toma 3 argumentos:

El valor del artículo
El índice de artículos
La matriz en sí
JavaScript Array.de()
El Array.from()método devuelve un objeto Array de cualquier objeto con una propiedad de longitud o cualquier objeto iterable.

Ejemplo
Cree una matriz a partir de una cadena:

Array.from("ABCDEFG");
Soporte del navegador
from()es una característica de ES6 (JavaScript 2015).

ES6 es totalmente compatible con todos los navegadores modernos desde junio de 2017:

Chrome 51	Edge 15	Firefox 54	Safari 10	Opera 38
May 2016	Apr 2017	Jun 2017	Sep 2016	Jun 2016
from()no es compatible con Internet Explorer.

Claves de matriz de JavaScript()
El Array.keys()método devuelve un objeto Array Iterator con las claves de una matriz.

Ejemplo
Cree un objeto Array Iterator, que contenga las claves de la matriz:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  text += x + "<br>";
}
Soporte del navegador
keys()es una característica de ES6 (JavaScript 2015).

ES6 es totalmente compatible con todos los navegadores modernos desde junio de 2017:

Chrome 51	Edge 15	Firefox 54	Safari 10	Opera 38
May 2016	Apr 2017	Jun 2017	Sep 2016	Jun 2016
keys()no es compatible con Internet Explorer.

Entradas de matriz de JavaScript()
Ejemplo
Cree un iterador de matriz y luego repita los pares clave/valor:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}
El entries()método devuelve un objeto Array Iterator con pares clave/valor:

[0, "Plátano"]
[1, "Naranja"]
[2, "Manzana"]
[3, "Mango"]

El entries()método no cambia la matriz original.

Soporte del navegador
entries()es una característica de ES6 (JavaScript 2015).

ES6 es totalmente compatible con todos los navegadores modernos desde junio de 2017:

Chrome 51	Edge 15	Firefox 54	Safari 10	Opera 38
May 2016	Apr 2017	Jun 2017	Sep 2016	Jun 2016
entries()no es compatible con Internet Explorer.

Matriz JavaScript con método()
ES2023 agregó el método Array with() como una forma segura de actualizar elementos en una matriz sin alterar la matriz original.

Ejemplo
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
Extensión de matriz de JavaScript (...)
El operador ... expande un iterable (como una matriz) en más elementos:

Ejemplo
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
*/


// 10.- 
/*

*/

