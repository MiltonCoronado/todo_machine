import { useState, useEffect } from 'react';

function withStorageListener(WrappedComponent) {//Este es el Higth Order Component "withStorageListener()", que al final exportamos al archivo ChangeAlert, para llamarlo desde hay y enviarle la funcion ChangeAlert como WrappedComponent. quedaria asi "withStorageListener(ChangeAlert)".

  return function WrappedComponentWithStorageListener(props) {//Esta es la ultima funcion que se retorna y esta tb retorna el componente y en el return del componente inyecta props directamente...

    const [storageChange, setStorageChange] = useState(false);

    useEffect(() => {
      const onEventChange = (event) => {

        if(event.key === 'TODOS_V1.0'){//preguntamos si hubo cambios en el item 'TODOS_V1.0'. con "event.key"
          setStorageChange(true)
        }
      }
  
      window.addEventListener('storage', onEventChange);//en el código original, la llamada a vincular el evento de Storage no está dentro de un efecto, por lo tanto se llamaría cada vez que el componente se actualizase. window.addEventListener() siempre se ejecuta en el contexto de la otra pagina que tenemos abierta.
  
      return () => {
        window.removeEventListener("storage", onEventChange);//los addEventListeners son globales. Siempre. Y es importante limpiarlos si ya no los necesitamos. Por eso no solo debemos desmontar el evento "storage", sino también limpiar el addEventListener. 
      }; 
    }, [])
    

    const toggleShow = () => {
      props.syncronize();//syncronize ejecuta "setLoading(true)" y "setsyncronizedItem(false)" y es una prop que la envia App y la intersectamos en el "WrappedComponentWithStorageListener({ syncronize })".
      setStorageChange(false);//esta Fn act. del estado va a setear el estado "storageChange" para validar en "ChangeAlert" si se renderiza o no la maquetacion del "ChangeAlert".
    };

    return (
      <WrappedComponent//Aca retornamos el componente final que es "<ChangeAlert /> con props inyectadas directamente aqui.
        storageChange={storageChange}
        toggleShow={toggleShow}
      />
    );
  };
};


export { withStorageListener };