import './styles.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




function App() {
  return (
    
        <>
        
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/items/:idProducto" element={<ItemDetailContainer />} />
              <Route path="/category/:idCategory" element={<ItemListContainer />} />
            </Routes>
        </BrowserRouter>
        </>

  );
}



export default App;
