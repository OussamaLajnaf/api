
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './componentes/UserList';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Info from './componentes/Info';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path ="/" component={UserList}/>
      <Route exact path ="/Love/:id" render={(props)=><Info {...props}/>}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
