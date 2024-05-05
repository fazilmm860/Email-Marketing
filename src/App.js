import './App.css';
import { Route, Routes } from 'react-router-dom';
import PublicLayout from './Components/PublicLayout/PublicLayout';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import PrivateLayout from './Components/PrivateLayout/PrivateLayout';
import Account from './Components/Account/Account';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <>
     <Routes>
        <Route path ="/" element ={<PublicLayout/>}>
          <Route exact path="" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Route>

        <Route path='/' element={<PrivateLayout/>}>
          <Route path='/account' element={<Account/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
     </Routes>

    
    </>
  );
}

export default App;
