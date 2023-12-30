import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App/App';

// function App(props) {
//   return (
//     <h1>¡{props.nombre} {props.saludo}!</h1>
//   );
// };

// function withSaludo(saludo) {
//   return function WrappedComponentWithSaludo(WrappedComponent) {
//     return function ComponenteDeVerdad(props){
//       return (
//         <>
//           <WrappedComponent {...props} saludo={saludo}/>
//           <p>Estamos acompañamdo al WrappedComponent</p>
//         </>
//       )
//     }
//   };
// };

// const AppWithSaludo = withSaludo('wenitas')(App);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
