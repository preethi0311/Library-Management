import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import Iconpage from './LibraryManagementFolder/Iconpage'
import Navigationbar from './LibraryManagementFolder/Navigationbar'
import Header from './LibraryManagementFolder/Header'
import About from './LibraryManagementFolder/About'
import Contactus from './LibraryManagementFolder/Contactus'
import Loginpage from './LibraryManagementFolder/Loginpage'
import Forgetpassword from './LibraryManagementFolder/Forgetpassword'
import Memberregistration from './LibraryManagementFolder/Memberregistration'
import Footer from './LibraryManagementFolder/Footer'
import Fantasy from './LibraryManagementFolder/Fantasy'
import Novel from './LibraryManagementFolder/Novel'
import Autobio from './LibraryManagementFolder/Autobio'
import Homebooks from './LibraryManagementFolder/Homebooks'
import Secondbook from './LibraryManagementFolder/Secondbook'
import Thirdbook from './LibraryManagementFolder/Thirdbook'
import Knightmare from './LibraryManagementFolder/Knightmare'
import Giants from './LibraryManagementFolder/Giants'
import Threebooks from './LibraryManagementFolder/Threebooks'
import Secondheaderbook from './LibraryManagementFolder/Secondheaderbook'
import Thirdheaderbook from './LibraryManagementFolder/Thirdheaderbook'
import Admin from './LibraryManagementFolder/Admin'
import Helppage from './LibraryManagementFolder/Helppage'
import Userfeedback from './LibraryManagementFolder/Userfeedback'
import Viewusers from './LibraryManagementFolder/Viewusers'
import Usersettings from './LibraryManagementFolder/Usersettings'
import Dashboard from './LibraryManagementFolder/Dashboard'
import Ebooks from './LibraryManagementFolder/Ebooks'
import Viewallbooks from './LibraryManagementFolder/Viewallbooks'
import Adminprofile from './LibraryManagementFolder/Adminprofile'
import HomePage from './LibraryManagementFolder/HomePage'
import Viewuserbookcomments from './LibraryManagementFolder/Viewuserbookcomments'
import Dragon from './LibraryManagementFolder/Dragon'
import Reignsethra from './LibraryManagementFolder/Reignsethra'
import Firstbind from './LibraryManagementFolder/Firstbind'
import Darkness from './LibraryManagementFolder/Darkness'
import Oneday from './LibraryManagementFolder/Oneday'
import Brightworld  from './LibraryManagementFolder/Brightworld'
import Strugglestory from './LibraryManagementFolder/Strugglestory'
import Snow from './LibraryManagementFolder/Snow'
import Autobiofirst from './LibraryManagementFolder/Autobiofirst'
import Autobiosecond from './LibraryManagementFolder/Autobiosecond'
import Autobiothird from './LibraryManagementFolder/Autobiothird'
import Autobiofour from './LibraryManagementFolder/Autobiofour'





import Portofolio from './PostmethodAPIFolder/Portofolio'








function App() {
  return (
    <BrowserRouter>

      <Routes>
       

       <Route path="/" element={<Iconpage />} />
        <Route path="/navbar" element={<Navigationbar />} />
         <Route path="/home" element={<HomePage />} />
        <Route path="/header" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/forgetpass" element={<Forgetpassword />} />
        <Route path="/member" element={<Memberregistration />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/fantasy" element={<Fantasy />} />
        <Route path="/novel" element={<Novel />} />
        <Route path="/autobio" element={<Autobio />} />
        <Route path="/homebook" element={<Homebooks />} />
        <Route path="/secondbook" element={<Secondbook />} />
        <Route path="/thirdbook" element={<Thirdbook />} />
        <Route path="/knightmare" element={<Knightmare />} />
        <Route path="/giants" element={<Giants />} />
        <Route path="/threebooks" element={<Threebooks />} />
        <Route path="/secondheader" element={<Secondheaderbook />} />
        <Route path="/thirdheader" element={<Thirdheaderbook />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/help" element={<Helppage />} />
        <Route path="/userfeedback" element={<Userfeedback />} />
        <Route path="/viewuser" element={<Viewusers />} />
        <Route path="/usersettings" element={<Usersettings />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/viewallbooks" element={<Viewallbooks />} />
        <Route path="/adminprofile" element={<Adminprofile />} />
        <Route path="/viewcomments" element={<Viewuserbookcomments />} />
        <Route path="/dragon" element={<Dragon />} />
        <Route path="/darkness" element={<Darkness />} />
        <Route path="/snow" element={<Snow />} />
        <Route path="/oneday" element={<Oneday />} />
        <Route path="/story" element={<Strugglestory/>} />
        <Route path="/brightworld" element={<Brightworld />} />
        <Route path="/firstbind" element={<Firstbind />} />
        <Route path="/reignsethra" element={<Reignsethra />} />
        <Route path="/autobio1" element={<Autobiofirst/>} />
        <Route path="/autobio2" element={<Autobiosecond />} />
        <Route path="/autobio3" element={<Autobiothird />} />
        <Route path="/autobio4" element={<Autobiofour/>} />









        <Route path="/n" element={<Portofolio />} />




      </Routes>

    </BrowserRouter>

  )
}

export default App






















































































































































{/*import BMIcalc from './PostmethodAPIFolder/BMIcalc'

import UseEffect from './component/UseEffect'

import State from './component/State'

import PracticePage from './component/PracticePage'

import Iconpage from './FlipkartFolder/Iconpage'
import LoginPage from './FlipkartFolder/LoginPage'

import Integrationap from './FlipkartFolder/Integrationap'
import Productview from './FlipkartFolder/Productview'
import About from './FlipkartFolder/About'

import Footer from './FlipkartFolder/Footer'
import Arrayofproducts from './FlipkartFolder/Arrayofproducts'

import FormHandling from './component/FormHandling'

import WeightCalculator from './PostmethodAPIFolder/WeightCalculator'

import Postintegration from './PostmethodAPIFolder/Postintegration'


import Budjetcalculator from './EvaluationFolder/Budjetcalculator'

import BudG from './EvaluationFolder/BudG'

import PracticePage2 from './component/PracticePage2'
 
import BMIcalc from './PostmethodAPIFolder/BMIcalc'
import BudjetCalc from './EvaluationFolder/BudjetCalc'

import NewFile from './EvaluationFolder/NewFile'

import Webdesignpage from './ProjectFolder/Webdesignpage'

import Header from './FlipkartFolder/Header'



import LoginAdmin from './LibraryManagementFolder/LoginAdmin'
import Events from './LibraryManagementFolder/Events'
import Finepayment from './LibraryManagementFolder/Finepayment'




import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import ThreeDforget from './pages/ThreeDforget';
import Contactpage from './pages/Contactpage';
import Registration from './pages/Registration';*/}









{/* <Route path="/h" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/contactpage" element={<Contactpage />} />
        <Route path="/threeD" element={<ThreeDforget />} />
        <Route path="/Registeruser" element={<Registration/>}/>*/}

{/* <Route path="/loginadmin" element={<LoginAdmin/>} />*/ }


{/* <Route path='/' element={<Header />} />

        <Route path='/web' element={<Webdesignpage />} />

        <Route path='/new' element={<NewFile />} />

        <Route path='budg' element={<BudG />} />

        <Route path='/bud' element={<BudjetCalc />} />


        <Route path='/roug2' element={<PracticePage2 />} />

        <Route path='/' element={<BMIcalc />} />

        <Route path='/budjet' element={<Budjetcalculator />} />

        <Route path='/post' element={<Postintegration />} />

        <Route path='/bmi' element={<BMIcalc />} />

        <Route path='/weight' element={<WeightCalculator />} />

        <Route path='/use' element={<UseEffect />} />

        <Route path='/state' element={<State />} />

        <Route path='/practice' element={<PracticePage />} />

        <Route path='/icon' element={<Iconpage />} />
        <Route path='/loign' element={<LoginPage />} />

        <Route path='/integrationap' element={<Integrationap />} />
        <Route path='/productview/:id' element={<Productview />} />
        <Route path='/about' element={<About />} />
        
        <Route path='/footer' element={<Footer />} />
        <Route path='/array' element={<Arrayofproducts />} />

        <Route path='/form' element={<FormHandling />} />


        <Route path='/post' element={<Postintegration />} />
        <Route path='/calc' element={<BMIcalc />} />


        <Route path="/event" element={<Events isAdmin={true} />} />

        <Route path="/finepay" element={<Finepayment />} />
        
        */}

