import NavBar from './components/Navbar';
import Area from './components/Area';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Profile from './components/Profile';
import { auth } from './firebase';
import { useEffect,useState } from 'react';
// import ItemPage from './components/ItemPage';
function App() {
  const [Userid,setUserid]=useState("")
  useEffect(()=>{ 
    auth.onAuthStateChanged((user)=>{
      console.log("user:",user)
      if(user){
        setUserid(user.uid)
      }
    });
  },[])
  

  function timeBasedFood(date) {
    var hours = date.getHours();
    if((hours>=6 && hours<11) || (hours>=16 && hours<18))
    return "Breakfast";
    else if(hours>=11 && hours<16)
    return "Lunch";
    else if(hours>=18 && hours<=23)
    return "Dinner";
  }

  return (
    <>
    <NavBar/>
    <Router>
        <Routes>
            <Route exact path="/" element={<Area value={timeBasedFood(new Date)} field="type" pagename="home"/>}/>
            <Route exact path="/Breakfast" element={<Area value="Breakfast" field="type"/>}/>
            <Route exact path="/Lunch" element={<Area value="Lunch" field="type"/>}/>
            <Route exact path="/Dinner" element={<Area value="Dinner" field="type"/>}/>

            <Route exact path="/Veg" element={<Area value="Veg" field="food_type"/>}/>
            <Route exact path="/Non_Veg" element={<Area value="Non-Veg" field="food_type"/>}/>

            <Route exact path="/htol" element={<Area value="htol" field="popularity"/>}/>
            <Route exact path="/ltoh" element={<Area value="ltoh" field="popularity"/>}/>

            {/* <Route exact path="/ItemPage" element={<ItemPage/>}/> */}
            
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/SignUp" element={<SignUp/>}/>
            <Route exact path="/Profile" element={<Profile uid={Userid}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;