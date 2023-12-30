import { withStorageListener } from "./withStorageListener";
import './ChangeAlert.css';

function ChangeAlert({ storageChange, toggleShow }) {//Aca recibimos las props que inyectamos directamente al <WrappedComponent />

    if(storageChange){//si el estado "storageChange" es true, renderizamos todo el return del if, si el false null.
      return (
        <div className="ChangeAlert-bg">
          <div className="ChangeAlert-container">
            <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
            <p>¿Quieres sincronizar tus TODOs?</p>
            <button
              className="TodoForm-button TodoForm-button--add"
              onClick={toggleShow}
            >
              Yes!
            </button>
          </div>
        </div>
      );
    }else{
      return null;
    };

};//Este es el WrappedComponent...

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);//Aca recibo la Fn de retorno "WrappedComponentWithStorageListener(syncronize){return (<ChangeAlert... />)} y es guardada en "ChangeAlertWithStorageListener" y este es exportado como componente final.


export { ChangeAlertWithStorageListener };