import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Home/HomePage.js';
import { NewTodoPage } from './New/NewTodoPage.js';
import { EditTodoPage } from './Edit/EditTodo.js';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/new' element={<NewTodoPage />} />
        <Route path='/edit/:id' element={<EditTodoPage/>} />
        <Route path='*' element={ <h1>Not Found</h1> } />
      </Routes>
    </HashRouter>
  )
};


export { App };