import logo from './logo.svg';
import './App.css';
import AddProduct from './Components/AddProduct';
import SearchProduct from './Components/SearchProduct';
import DeleteProduct from './Components/DeleteProduct';
import ViewAll from './Components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>

    <Routes>

      <Route path="/" element= { <AddProduct/> } />
      <Route path="/search" element= { <SearchProduct/> } />
      <Route path="/delete" element= { <DeleteProduct/> } />
      <Route path="/view" element= { <ViewAll/> } />
      <Route path="/product" element= { <ViewAll/> } />

    </Routes>
    
    
    </BrowserRouter>

  );
}


export default App;
