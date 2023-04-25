import { Route } from 'react-router-dom';
import { Home, Landing, Create, Detail } from './views';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component = {Landing}/>
      <Route path='/home' component = {Home}/>
      <Route path='/detail/:id' component = {Detail}/>
      <Route path='/create' component = {Create}/>
    </div>
  );
}

export default App;