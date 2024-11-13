import './App.css';
import ClientsList from './components/ClientsList';
import EditClient from './components/EditClient';
import AddClient from './components/AddClient';
import DeleteClient from './components/DeleteClient';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Clients CRUD</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ClientsList />} exact></Route>
          <Route path='/addclient' element={<AddClient />} exact></Route>
          <Route path='/editclient' element={<EditClient />} exact></Route>
          <Route path='/deleteclient' element={<DeleteClient />} exact></Route>
        </Routes>
      </BrowserRouter>







    </div>
  );
}

export default App;
