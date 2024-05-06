import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PublicLayout from './Components/PublicLayout/PublicLayout';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import PrivateLayout from './Components/PrivateLayout/PrivateLayout';
import Account from './Components/Account/Account';
import ResetPasswordEmail from './Components/ResetPassword/ResetPasswordEmail';
import Dashboard from './Components/Dashboard/Dashboard';
import { useContext, useEffect, useState } from 'react';
import { LoginContext } from './Components/ContextProvider/Context';
import axios from 'axios';
import Message from './Components/Dashboard/Message';
import ViewAllLeads from './Components/ViewAllLeads/ViewAllLeads';
import EditLeads from './Components/ViewAllLeads/EditLeads';
import AddNewLead from './Components/ViewAllLeads/AddNewLead';

function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const { setLoginData } = useContext(LoginContext);
  const navigate  = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("userdatatoken");
        const url = 'http://localhost:8080/api/validuser'
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          }
        });
        const responseData = response.data;
  
        if (responseData.status === 401 || !responseData.validUserOne) {
          console.log("User not valid");
          navigate('/');
        } else {
          console.log("User Verify");
          setLoginData(responseData);
          setDataLoaded(true);
        }
      } catch (error) {
        console.error("Error Validating user:", error);
        navigate('/');
      }
    };fetchData();
  }, [navigate, setLoginData]);
  return (
    <>
     <Routes>
        <Route path ="/" element ={<PublicLayout/>}>
          <Route exact path="" element={<SignIn />} />
          <Route exact path="signup" element={<SignUp />} />
          <Route exact path="reset-password-email" element={<ResetPasswordEmail />} />

        </Route>

        <Route path='/' element={<PrivateLayout/>}>
          <Route path='/account' element={<Account/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/message' element={<Message/>}/>
          <Route path='/view-leads' element={<ViewAllLeads/>}/>
          <Route path='/add-leads' element={<AddNewLead/>}/>
          <Route exact path='/edit-leads/:userId' element={<EditLeads/>}/>
        </Route>
     </Routes>

    
    </>
  );
}

export default App;
