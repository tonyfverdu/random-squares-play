//  Renderizado Condicional en React.

//  Recapitulación

//  1.- En React, se controla la lógica de ramificación con JavaScript.

//  2.- Puedes devolver una expresión JSX condicionalmente con una sentencia if.

//  3.- Puedes guardar condicionalmente algún JSX en una variable y luego incluirlo dentro de otro JSX usando
//      las llaves.

//  4.- En JSX, {cond ? <A /> : <B />} significa «si cond, renderiza <A />, si no <B />».

//  5.- En JSX, {cond && <A />} significa «si cond, renderiza <A />, si no, nada».

//  6.-  Los atajos son comunes, pero no tienes que usarlos si prefieres el simple if.


/*  Tus componentes a menudo necesitarán mostrar diferentes "cosas" (renderizados de elemento ReactNode) dependiendo de
    diferentes "condiciones". En React, puedes renderizar JSX de forma condicional utilizando la sintaxis de JavaScript
    como las declaraciones if, && y los operadores ?:

    En React, no hay una sintaxis especial para escribir condicionales (sentencias condicionales). Se utilizan las mismas
    "sintaxis lógica"  y técnicas que al escribir "código regular" de JavaScript.

    Nota.- No se permite escribir sentencias condicionales dentro de los parentesis del JSX, ya que solo admite codigo
           Javascript de expresiones, no sentencias.
    

    1.- Devolución condicional de JSX: if ... else, switch, ...
        Por ejemplo, puedes usar una sentencia if para incluir JSX condicionalmente:

                    let content;
                    if (isLoggedIn) {
                      content = <AdminPanel />;
                    } else {
                      content = <LoginForm />;
                    }
                    return (
                      <div>
                        {content}
                      </div>
                    );

        Ejemplo:  Supongamos que tienes un componente "PackingList" que muestra varios Items, que pueden ser marcados como
                  empaquetados o no:


                            function Item({ name, isPacked }) {
                              return <li className="item">{name}</li>;
                            }

                            export default function PackingList() {
                              return (
                                <section>
                                  <h1>Lista de equipaje de Sally Ride</h1>
                                  <ul>
                                    <Item 
                                      isPacked={true} 
                                      name="Traje de vuelo" 
                                    />
                                    <Item 
                                      isPacked={true} 
                                      name="Casco con dorado a la hoja" 
                                    />
                                    <Item 
                                      isPacked={false} 
                                      name="Fotografía de Tam" 
                                    />
                                  </ul>
                                </section>
                              );
                            }

                  Observa que algunos de los componentes "Item" tienen su prop "isPacked" asignada a "true" en lugar de "false".
                  Se desea añadir una marca de verificación (☑️) a los elementos empaquetados si: "isPacked={true}"".

                  Puedes escribir esto como una declaración if/else así:

                            if (isPacked) {
                              return <li className="item">{name} ☑️</li>;
                            }
                            return <li className="item">{name}</li>;
    
                            
                  Si la prop "isPacked" es "true", este código devuelve un árbol JSX diferente. Con este cambio, algunos de los
                  elementos obtienen una marca de verificación al final:

                            App.js

                            function Item({ name, isPacked }) {
                              if (isPacked) {
                                return <li className="item">{name} ☑️</li>;
                              }
                              return <li className="item">{name}</li>;
                            }

                            export default function PackingList() {
                              return (
                                <section>
                                  <h1>Lista de equipaje de Sally Ride</h1>
                                  <ul>
                                    <Item 
                                      isPacked={true} 
                                      name="Traje de vuelo" 
                                    />
                                    <Item 
                                      isPacked={true} 
                                      name="Casco con dorado a la hoja" 
                                    />
                                    <Item 
                                      isPacked={false} 
                                      name="Fotografía de Tam" 
                                    />
                                  </ul>
                                </section>
                              );
                            }

                  Observa cómo estás creando una "lógica de ramificación" con las sentencias "if" y "return" de JavaScript.
                  En React, el flujo de control (como las condiciones O SENTENCIAS CONDICIONALES) es manejado por JavaScript.


    2.- Devolución de nada con "null" 
        En algunas situaciones, no querrás mostrar "nada2 en absoluto, ES DECIR, QUE NO SE RENDERICE "NADA". Por ejemplo, digamos
        que no quieres mostrar elementos empaquetados en absoluto. 
        
        Este componente debe "devolver" obligatoriamente codigo jsx (es componente visual, por lo tanto debe crear ReactNodes)).
        En este caso, puedes devolver null, que es lo mismo que no crear ningun nodo en React desde JSX:

                            if (isPacked) {
                              return null;
                            }
                            return <li className="item">{name}</li>;

        Si isPacked es verdadero, el componente no devolverá nada, null. En caso contrario, devolverá JSX para ser renderizado.

                            App.js

                            function Item({ name, isPacked }) {
                              if (isPacked) {
                                return null;
                              }
                              return <li className="item">{name}</li>;
                            }

                            export default function PackingList() {
                              return (
                                <section>
                                  <h1>Lista de equipaje de Sally Ride</h1>
                                  <ul>
                                    <Item 
                                      isPacked={true} 
                                      name="Traje de vuelo" 
                                    />
                                    <Item 
                                      isPacked={true} 
                                      name="Casco con dorado a la hoja" 
                                    />
                                    <Item 
                                      isPacked={false} 
                                      name="Fotografía de Tam" 
                                    />
                                  </ul>
                                </section>
                              );
                            }


    3.- Exclusión condicional de JSX.

        Nota.- En la práctica, devolver "null" en un componente no es muy común porque podría sorprender a un desarrollador que intente
               renderizarlo. Lo más frecuente es incluir o excluir condicionalmente el componente en el JSX del componente padre. Aquí
               se explica cómo hacerlo.

        En el ejemplo anterior, controlabas qué árbol JSX (si es que había alguno) y el resultado era devuelto por el componente. Es
        posible que ya hayas notado alguna duplicación en la salida de la renderización:

                            <li className="item">{name} ☑️</li>
        
        es muy similar a:

                            <li className="item">{name}</li>

        Ambas ramas condicionales devuelven siempre: "<li className="item">...</li>"

                            if (isPacked) {
                              return <li className="item">{name} ☑️</li>;
                            }
                            return <li className="item">{name}</li>;

        Aunque esta duplicación no es perjudicial, podría hacer que tu código sea más difícil de mantener. ¿Qué pasa si quieres cambiar
        el className? ¡Tendrías que hacerlo en dos lugares en tu código! En tal situación, podrías incluir condicionalmente un poco de
        JSX para hacer tu código más DRY.


    2.-  Operador condicional (ternario) (? :) 
         JavaScript tiene una sintaxis compacta para escribir una expresión condicional — el operador condicional u «operador ternario».
         Si prefieres un código más compacto, y que pueda ser utilizado dentro de los parentesis de codigo JSX al ser una "expresion"
         condicional en lugar de una sentencia, se puede utilizar el operador ternario "? :" condicional. A diferencia de if, el operador
         ternario funciona dentro del codigo JSX:

                  <div>
                    {
                      isLoggedIn ? (
                        <AdminPanel />
                        ) : (
                        <LoginForm />
                      )
                    }
                  </div>

        En lugar de esto:

                  if (isPacked) {
                    return <li className="item">{name} ☑️</li>;
                  }
                  return <li className="item">{name}</li>;
                  
        Puedes escribir esto:

                  return (
                    <li className="item">
                      {isPacked ? name + ' ☑️' : name}
                    </li>
                  );


        Puedes leerlo como «si isPacked es verdadero, entonces (?) renderiza name + ' ☑️', de lo contrario (:) renderiza name»)


          Nota.- ¿Son estos dos ejemplos totalmente equivalentes?
                  Si vienes de un entorno de programación orientada a objetos, podrías asumir que los dos ejemplos anteriores son
                  sutilmente diferentes porque uno de ellos puede crear dos «instancias» diferentes de <li>. Pero los elementos JSX
                  no son «instancias» porque no contienen ningún estado interno y NO SON NODOS REALES del DOM. Son descripciones
                  ligeras, como los planos. Así que estos dos ejemplos, de hecho, son completamente equivalentes.


        Ahora digamos que quieres envolver el texto del elemento completado en otra etiqueta HTML, como <del> para tacharlo. Puedes
        añadir aún más líneas nuevas y paréntesis para que sea más fácil anidar más JSX en cada uno de los casos:

                  App.js

                  function Item({ name, isPacked }) {
                    return (
                      <li className="item">
                        {isPacked ? (
                          <del>
                            {name + ' ☑️'}
                          </del>
                        ) : (
                          name
                        )}
                      </li>
                    );
                  }

                  export default function PackingList() {
                    return (
                      <section>
                        <h1>Lista de equipaje de Sally Ride</h1>
                        <ul>
                          <Item 
                            isPacked={true} 
                            name="Traje de vuelo" 
                          />
                          <Item 
                            isPacked={true} 
                            name="Casco con dorado a la hoja" 
                          />
                          <Item 
                            isPacked={false} 
                            name="Fotografía de Tam" 
                          />
                        </ul>
                      </section>
                    );
                  }


        Este estilo funciona bien para "condiciones simples", pero utilízalo con moderación. Si tus componentes se desordenan
        con demasiado marcado condicional anidado, considera la posibilidad de extraer componentes hijos para limpiar las cosas.
        En React, el marcado es una parte de tu código, por lo que puedes utilizar herramientas como variables y funciones para
        ordenar las expresiones complejas.



    3.- El operador lógico AND (&&)     
        Otro "atajo" común que encontrarás es el operador lógico AND (&&) de JavaScript. Cuando no necesites la rama "else" en el
        operador condicional, puedes también usar la sintaxis lógica "&&"", más breve:

                <div>
                  {isLoggedIn && <AdminPanel />}
                </div>


        Todos estos enfoques también funcionan para especificar atributos condicionalmente. Si no estás familiarizado con toda
        esta sintaxis de JavaScript, puedes comenzar por usar siempre if...else.


        Dentro de los componentes de React, a menudo surge cuando quieres renderizar algún JSX cuando la condición es verdadera, o
        o renderizar nada en caso contrario. Con el operador AND "&&"", podrías renderizar condicionalmente la marca de verificación
        sólo si el atributo "isPacked" es "true":

            return (
                <li className="item">
                  {name} {isPacked && '☑️'}
                </li>
              );

        Puedes leer esto como «si isPacked, entonces (&&) renderiza la marca de verificación, si no, no renderiza nada.»

        Aquí está en acción:

              App.js

              function Item({ name, isPacked }) {
                return (
                  <li className="item">
                    {name} {isPacked && '☑️'}
                  </li>
                );
              }

              export default function PackingList() {
                return (
                  <section>
                    <h1>Lista de equipaje de Sally Ride</h1>
                    <ul>
                      <Item 
                        isPacked={true} 
                        name="Traje de vuelo" 
                      />
                      <Item 
                        isPacked={true} 
                        name="Casco con dorado a la hoja" 
                      />
                      <Item 
                        isPacked={false} 
                        name="Fotografía de Tam" 
                      />
                    </ul>
                  </section>
                );
              }


        Una expresión JavaScript AND "&&"" devuelve el valor de su lado derecho (en nuestro caso, la marca de verificación) si
        el lado izquierdo (nuestra condición) es "true". Pero si la condición es "false", toda la expresión se convierte en "false".
        React considera "false" como un «agujero» en el árbol JSX, al igual que null o undefined, y no renderiza nada en su lugar.

                Atención: No pongas números a la izquierda de &&.

                          Para comprobar la condición, JavaScript convierte el lado izquierdo en un booleano automáticamente.
                          Sin embargo, si el lado izquierdo es 0, entonces toda la expresión obtiene ese valor (0), y React
                          representará felizmente 0 en lugar de nada.

                          Por ejemplo, un error muy común es escribir código como messageCount && <p>New messages</p>. Es fácil
                          suponer que no renderiza nada cuando messageCount es 0, pero en realidad renderiza el propio 0.

                          Para arreglarlo, haz que el lado izquierdo sea un booleano: messageCount > 0 && <p>New messages</p>.


    4.- Asignación condicional de JSX a una variable.
        Cuando los atajos se interpongan en el camino de la escritura de código simple, prueba a utilizar una sentencia "if"
        y una variable. Puedes reasignar las variables definidas con let, así que empieza proporcionando el contenido por defecto
        que quieres mostrar, el nombre:

                let itemContent = name;

                //Utiliza una sentencia if para reasignar una expresión JSX a itemContent si isPacked es true:

                if (isPacked) {
                  itemContent = name + " ☑️";
                }

        Las llaves abren la «ventana a JavaScript». Inserta la variable con llaves en el árbol JSX devuelto, anidando la expresión
        previamente calculada dentro de JSX:

                <li className="item">
                  {itemContent}
                </li>

        Este estilo es el más verboso, pero también el más flexible. Aquí está en acción:

                App.js

                function Item({ name, isPacked }) {
                  let itemContent = name;
                  if (isPacked) {
                    itemContent = name + " ☑️";
                  }
                  return (
                    <li className="item">
                      {itemContent}
                    </li>
                  );
                }

                export default function PackingList() {
                  return (
                    <section>
                      <h1>Lista de equipaje de Sally Ride</h1>
                      <ul>
                        <Item 
                          isPacked={true} 
                          name="Traje de vuelo" 
                        />
                        <Item 
                          isPacked={true} 
                          name="Casco con dorado a la hoja" 
                        />
                        <Item 
                          isPacked={false} 
                          name="Fotografía de Tam" 
                        />
                      </ul>
                    </section>
                  );
                }


        Como antes, esto funciona no sólo para el texto, sino también para JSX arbitrario:

                App.js

                function Item({ name, isPacked }) {
                  let itemContent = name;
                  if (isPacked) {
                    itemContent = (
                      <del>
                        {name + " ☑️"}
                      </del>
                    );
                  }
                  return (
                    <li className="item">
                      {itemContent}
                    </li>
                  );
                }

                export default function PackingList() {
                  return (
                    <section>
                      <h1>Lista de equipaje de Sally Ride</h1>
                      <ul>
                        <Item 
                          isPacked={true} 
                          name="Traje de vuelo" 
                        />
                        <Item 
                          isPacked={true} 
                          name="Casco con dorado a la hoja" 
                        />
                        <Item 
                          isPacked={false} 
                          name="Fotografía de Tam" 
                        />
                      </ul>
                    </section>
                  );


        Si no estás familiarizado con JavaScript, esta variedad de estilos puede parecer abrumadora al principio. Sin embargo,
        aprenderlos te ayudará a leer y escribir cualquier código JavaScript — ¡y no sólo los componentes de React! Escoge el
        que prefieras para empezar, y luego vuelve a consultar esta referencia si olvidas cómo funcionan los demás.


    5.- Renderizado de listas.
        Dependerás de funcionalidades de JavaScript como los bucles for y la función map() de los arreglos para renderizar
        listas de componentes.

        Por ejemplo, digamos que tienes un arreglo de productos:

            const products = [
              { title: 'Col', id: 1 },
              { title: 'Ajo', id: 2 },
              { title: 'Manzana', id: 3 },
            ];

        Dentro de tu componente, utiliza la función "map()" para transformar el arreglo de productos en un arreglo de elementos <li>:

            const listItems = products.map(product =>
              <li key={product.id}>
                {product.title}
              </li>
            );

            return (
              <ul>{listItems}</ul>
            );


        IMPORTANTE.- Nota que <li> tiene un atributo "key" (llave). Para cada elemento en una lista, debes pasar una cadena o un número
                    que "identifique ese elemento de forma única" entre sus hermanos. Usualmente, una "key" debe provenir de tus datos,
                    como un ID de una base de datos. React dependerá de tus llaves para entender qué ha ocurrido si luego insertas,
                    eliminas o reordenas los elementos.

                      App.js

                        const products = [
                          { title: 'Col', isFruit: false, icon: '🌱', id: 1 },
                          { title: 'Ajo', isFruit: false, icon: '🧅', id: 2 },
                          { title: 'Manzana', isFruit: true, icon: '🍎', id: 3 },
                        ];

                        export default function ShoppingList() {
                          const listItems = products.map(product =>
                            <li
                              key={product.id}
                              style={{
                                color: product.isFruit ? 'magenta' : 'darkgreen'
                              }}
                            >
                              {product.title} {product.icon}
                            </li>
                          );

                          return (
                            <ul>{listItems}</ul>
                          );
                        }


    6.- Responder a eventos.
        Puedes responder a "eventos" en tu componente, declarando "funciones controladoras de eventos" (handlers) dentro de estos
        componentes:

                      function MyButton() {
                        function handleClick() {
                          alert('¡Me hiciste clic!');
                        }

                        return (
                          <button onClick={handleClick}>
                            Hazme clic
                          </button>
                        );
                      }

                      Nota.- ¡onClick={handleClick} no tiene paréntesis al final! No llames a la función controladora de evento:
                              solamente necesitas pasarla hacia abajo. React llamará a tu controlador de evento cuando el usuario
                              haga clic en el botón.


    7.- Actualizar la pantalla.
        A menudo, querrás que tu componente «recuerde» alguna información y la muestre. Por ejemplo, quizá quieras contar el número
        de veces que hiciste clic en un botón. Para lograrlo, añade estado a tu componente.

            Primero, importa useState de React:

                      import { useState } from 'react';
        
            Ahora puedes declarar una "variable de estado" dentro de tu componente:

                      function MyButton() {
                        const [count, setCount] = useState(0);
                        // ...
        
            Obtendrás dos cosas de useState: el estado actual (count), y la función que te permite actualizarlo (setCount).
            Puedes nombrarlos de cualquier forma, pero la convención es llamarlos algo como [something, setSomething].

            La primera vez que se muestra el botón, count será 0 porque  pasastes el valor inicial 0 a useState(). Cuando
            quieras cambiar el estado llama a setCount() y pásale el nuevo valor. Al hacer clic en este botón se incrementará
            el contador (el valor de la variable de estado contador):

                      function MyButton() {
                        const [count, setCount] = useState(0);

                        function handleClick() {
                          setCount(count + 1);
                        }

                        return (
                          <button onClick={handleClick}>
                            Hiciste clic {count} veces
                          </button>
                        );
                      }
        
            Luego de hacer clic, React llamará de nuevo a la función del componente. Esta vez, count será 1. Luego será 2. Y así
            sucesivamente.

            Si renderizas el mismo componente varias veces, cada uno obtendrá su propio estado. Intenta hacer clic independientemente
            en cada botón:

                      App.js

                      import { useState } from 'react';

                      export default function MyApp() {
                        return (
                          <div>
                            <h1>Contadores que se actualizan separadamente</h1>
                            <MyButton />
                            <MyButton />
                          </div>
                        );
                      }

                      function MyButton() {
                        const [count, setCount] = useState(0);

                        function handleClick() {
                          setCount(count + 1);
                        }

                        return (
                          <button onClick={handleClick}>
                            Hiciste clic {count} veces
                          </button>
                        );
                      }

                      Nota.- Cada componente "MyButton" (botón) «recuerda» su propio estado count y que no afecta a otros botones.


    8.- El uso de los Hooks 
        Las funciones que comienzan con "use" se llaman Hooks. "useState" es un "Hook nativo" dentro de React. Puedes encontrar otros
        "Hooks nativos" en la referencia de la API de React. También puedes escribir tus propios Hooks mediante la combinación de otros
        existentes.

            Nota.- Las funciones Hooks de React son más restrictivas que las funciones regulares. Solo se pueden llamar a los Hooks en
                   el primer nivel de tus componentes (u otros Hooks). Si quisieras utilizar el Hook nativo "useState" en una condicional
                   o en un bucle, extrae un nuevo componente y ponlo ahí.


    9.- Compartir datos entre componentes ("levantar estado").
        En el ejemplo anterior, cada componente "MyButton" (boton) tenía su propio estado "count" independiente, y cuando se hace clic en
        cada botón, solo el "count" del botón en hiciste clic cambiaba:

        Diagrama que muestra un árbol de tres componentes, un padre etiquetado como MyApp y dos hijos etiquetados como MyButton. Ambos
        componentes "MyButton" (botón) contienen una variable "count" independiente con valor inicializado a cero.

        || MyApp  || ====> || MyButton  count1 = 0 || + || MyButton count2 = 0 ||
        
        Inicialmente, cada estado count de MyButton es 0.

        El mismo diagrama anterior, con la variable count del primero hijo MyButton señalada indicando un clic con el valor de count
        incrementado a uno. El segundo componente MyButton aún contiene el valor cero.
        
        El primer MyButton actualiza su count a 1.


        Sin embargo, a menudo necesitas que los componentes "compartan datos" y se "actualicen juntos", siempre en conjunto.
        Para hacer que ambos componentes MyButton muestren el mismo count y se actualicen juntos, necesitas mover el estado de los botones
        individuales «hacia arriba» al componente más cercano que los contiene a todos.

        En este ejemplo, es el componente padre "MyApp", al cual le creamos una variable de estado "count" compartida por sus dos hijos
        "MyButton":

            => MyApp contiene una unica variable de estado "count" con valor inicial 0, que se pasa hacia abajo a los dos componentes
               "MyButton", junto con la función compartida para controlar el evento de clic. Si haces clic en cualquiera de los botones,
               el valor de count en cada uno de ellos se actualiza a uno, ya que ambos botones muestran el mismo valor de count.

                      const [count, setCount] = useState(0);

               Al hacer clic en cualquiera de los botones, count en MyApp cambiará, MyApp actualiza su estado count a 1 y se lo pasa
               hacia abajo a ambos hijos, lo que causará que cambien ambos counts en MyButton. 

                      export default function MyApp() {
                        const [count, setCount] = useState(0);

                        function handleClick() {
                          setCount(count + 1);
                        }

                        return (
                          <div>
                            <h1>Contadores que se actualizan separadamente</h1>
                            <MyButton count={count} onClick={handleClick} />
                            <MyButton count={count} onClick={handleClick} />/>
                          </div>
                        );
                      }

                      function MyButton() {
                        // ... estamos moviendo el código de aquí ...
                      }

        Puedes pasar la información a MyButton usando las llaves de JSX, de la misma forma como lo hiciste anteriormente con las etiquetas
        nativas <img>:

        La información que pasas hacia abajo se llaman"props". Ahora el componente MyApp contiene el estado "count" y el "controlador de evento
        handleClick", y pasa ambos hacia abajo como props a cada uno de los botones.

        Finalmente, cambia MyButton para que lea las props que le pasaste desde el componente padre:

                  function MyButton({ count, onClick }) {
                    return (
                      <button onClick={onClick}>
                        Hiciste clic {count} veces
                      </button>
                    );
                  }

        Cuando haces clic en el botón, el controlador onClick se dispara. A la prop "onClick" pasada a cada botón se le asignó la función
        "handleClick" dentro de MyApp, de forma que el código dentro de ella se ejecuta. Ese código llama a setCount(count + 1), que incremente
        la variable de estado "count". El nuevo valor de "count" se pasa como "prop" a cada botón, y así todos muestran el nuevo valor.

        Esto se llama «levantar el estado». Al mover el estado hacia arriba, lo compartimos entre componentes.
*/