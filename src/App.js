// import './App.css';
// import { Footer } from './components/Footer';
// import MenuCart from './components/MenuCart';
// import { Navbar } from './components/Navbar';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <h1 className="text-3xl font-bold underline">Hello Anshu</h1>
//       <MenuCart />
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React, {useState} from 'react'
//import "./Style.css";
import { Footer } from './components/Footer';
import MenuCart from './components/MenuCart';
import MenuApi from './components/MenuApi';
import { Navbar } from './components/Navbar';

// we use spread opertor when we want to see our data in pure array
const uniqueList = [...new Set(MenuApi.map((currEle) =>{  // these ... dost (three dost) are know as spread operator most imp.
  return currEle.category;
})), "All"] 

// console.log(uniqueList);


const App = () => {
    const[menuData, setMenuData] = useState(MenuApi);
    const[menuList, setMenuList] = useState(uniqueList);
    
    // this belew method is used for onclick method (or we can say it's a routing)
    const filterItem = (categ) =>{
      if(categ==="All"){
        
          setMenuData(MenuApi);
        return;
      }

      const updatedList = MenuApi.filter((currEle) => {
        return currEle.category === categ;
      });
      setMenuData(updatedList);
    }

  return (
    <>
        
      <Navbar />

      <MenuCart myData = {menuData}/> 

      <Footer /> 
    </>
  )
}

export default App;

