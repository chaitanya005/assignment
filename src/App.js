import './App.css';
import SearchComponent from './components/SearchComponent/SearchBar'
import ImageView from './components/ImageView/ImageGridView'
import axios from 'axios'

function App() {


  /* axios.get("https://api.unsplash.com/search/photos?client_id=&query=cars&per_page=20")
    .then(res => console.log(res)) */

  return (
      <div className="App">
        <h1>Heloo</h1>
        <SearchComponent /> 
        <ImageView />
      </div>
  );
}

export default App;
