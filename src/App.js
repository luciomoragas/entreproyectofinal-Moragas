import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
   return (
    <div className="contenedor">
      <NavBar />
      <ItemListContainer greeting={'Los mejores gines del mundo los encontras acá'} />
    </div>
  );
}

export default App;