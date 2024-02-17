
import Adduser from './components/Adduser.jsx';
import Deluser from './components/Deluser.jsx';
import Editusers from './components/Editusers.jsx';
import Userlist from './components/Userlist.jsx';
import Mahsol from './components/Mahsol.jsx';
import {BrowserRouter, Route , Routes} from"react-router-dom";
import Index from './components/Index.jsx';
import Menutop from './components/Menutop.jsx';
import Chat from './components/Chat.jsx';


function App() {
  return (
  
    
<BrowserRouter>
<Routes >
<Route path='/site' element={<Mahsol></Mahsol>}></Route>
<Route path='/chat' element={<Chat></Chat>}></Route>
<Route path='/menu' element={<Menutop></Menutop>}></Route>
<Route path='/index' element={<Index></Index>}></Route>
<Route path='/' element={<Userlist></Userlist>}></Route>
<Route path='/add' element={<Adduser></Adduser>}></Route>
<Route path='/del/:id' element={<Deluser></Deluser>}></Route>
<Route path='/edit/:id' element={<Editusers></Editusers>}></Route>
</Routes>

</BrowserRouter>
    
  );
}

export default App;
