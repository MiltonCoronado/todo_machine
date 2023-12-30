import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children }) {//El componente modal va a recibir un children el cual va a estar contenido dentro de "return ReactDom.createPortal()" 
  return ReactDOM.createPortal(//createPortal() recibe 2 argumentos, uno es el contenido a teletranportar (que es el "TodoForm") y el otro es el nodo HTML al cual se va a seleccionar.
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };