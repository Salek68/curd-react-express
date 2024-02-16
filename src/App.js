
import Adduser from './components/Adduser.jsx';
import Deluser from './components/Deluser.jsx';
import Editusers from './components/Editusers.jsx';
import Userlist from './components/Userlist.jsx';
import {BrowserRouter, Route , Routes} from"react-router-dom";

function App() {
  return (
    <div className="countainer pt-5">
    
<BrowserRouter>
<Routes >
<Route path='/' element={<Userlist></Userlist>}></Route>
<Route path='/add' element={<Adduser></Adduser>}></Route>
<Route path='/del/:id' element={<Deluser></Deluser>}></Route>
<Route path='/edit/:id' element={<Editusers></Editusers>}></Route>
</Routes>

</BrowserRouter>
    </div>
  );
}

export default App;
