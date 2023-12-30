import React from 'react';

function TodoHeader({ children, loading }) {
  return (
    <header>
      {
        React.Children
        .toArray(children)
        .map(item => React.cloneElement(item, { loading }))
      }{/*con React.cloneElement clonamos solo un elemento a partir de otro y ese clon va a ser el "children" que encierra, mas no que contiene el "TodoHeader" pero React.cloneElement no puede clonar mas de un elemento y para eso usamos React.Children.toArray(children).map() y dentro del map colocamos el React.cloneElement con sus 2 argumentos (children y objeto). Asi todo lo que encierre el "TodoHeader" sera tratado como un array y asi ya podra ser clonado mas de un elemento que encierra (mas no que contiene) el TodoHeader*/}
    </header>
  );
};


export { TodoHeader }; 