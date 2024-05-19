import { TodoProvider } from '../TodoContext/TodoContext';
import { AppUI } from './AppUI';

const App = () => {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
};

export { App };
 


