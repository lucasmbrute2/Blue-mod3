import './App.scss';
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import { Switch,Route} from "react-router-dom";
import Home from "./pages/Home/Home"
import MovieAdd from './pages/MovieAdd/MovieAdd';


function App() {
  return (
    <div className="App">
     <Header/>
      <Switch>
        <Route path="/" exact = {true} component = { Home }/>
        <Route path="/add" component = { MovieAdd }/>
      </Switch>
     <Footer/> 
    </div>
  );
}

export default App;
