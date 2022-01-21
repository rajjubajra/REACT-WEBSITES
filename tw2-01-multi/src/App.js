import MenuBar from "./components/MainMenu/MenuBar";
import{BrowserRouter, Route, Switch} from 'react-router-dom'; 
import Home from './page/Home';


function App() {
  return (
    <div className="container md:px-10">
      <BrowserRouter>
        <MenuBar />
        <div className="relative">
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>  
      </BrowserRouter>
      
    </div>
  );
}

export default App;
