import './App.css';
import PetForm from './components/PetForm';
import DisplayAll from './components/DisplayAll';
import EditPet from '../src/components/EditPet'
import OnePet from './components/OnePet';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <h1 className='app-js'>Pet Shelter</h1>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<DisplayAll/>}></Route>
        <Route path ="/pets/new" element={<PetForm/>}></Route>
        <Route path ="/pets/:id/" element={<OnePet/>}></Route>
        <Route path ="/edit/:id/edit" element={<EditPet/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

