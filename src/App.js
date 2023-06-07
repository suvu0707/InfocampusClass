import React from 'react';
import { HashRouter , Link, Routes, Route } from 'react-router-dom';

// import Aboutus from './about.js';
import PageFooter from './footer.js';
import MyHome from './home.js';
// import Contactus from './contact';
// import Register from './register';
// import Login from './login';
// import Service from './service.js';
// import Project from './project.js';
// import Customer from './customer.js';
import HookOne from './hook1.js';
import HookThree from './hook3.js';
import HookFour from './hook4.js';
import HookFive from './hook5.js';
import HookSix from './hook6.js';
import HookSeven from './hook7.js';
import Companylist from './hook8.js';
import ItemList from './hook10.js';
import Product from './hook12.js';
// import MyClass1 from './class1';
// import MyClass2 from './class2';
// import MyClass3 from './class3';
// import MyClass4 from './class4.js';
// import MyClass5 from './class5.js';
// import MyClass7 from './class7.js';
import HookSevenedit from './hook7edit.js';
import Loginn from './loginn.js';
import Signup from './signup.js';
import Practice1 from './practice1.js';
import Practice2 from './practice2.js';


function App() {
	return (
				<HashRouter>
					<ul>
						<li><Link to="/" className="menu"> Home </Link> </li>
						{/* <li><Link to="/about.html" className="menu"> About Us</Link> </li> */}
						{/* <li><Link to="/contact.html" className="menu"> Contact Us</Link> </li>
						<li><Link to="/register.html" className="menu"> Register</Link> </li>
						<li><Link to="/login.html" className="menu"> Login</Link> </li>
						<li><Link to="/service.html" className="menu"> Our Services</Link> </li>
						<li><Link to="/project.html" className="menu"> Project</Link> </li>
						<li><Link to="/customer.html" className="menu"> Customers</Link> </li> */}
						<li><Link to="/hook1.html" className="menu"> Hook1</Link> </li>
						<li><Link to="/hook3.html" className="menu"> Hook3</Link> </li>
						<li><Link to="/hook4.html" className="menu"> Hook4</Link> </li>
						<li><Link to="/hook5.html" className="menu"> Hook5</Link> </li>
						<li><Link to="/hook6.html" className="menu"> Itemlist</Link> </li>
						{/* <li><Link to="/hook7.html" className="menu"> Newitem</Link> </li> */}
						<li><Link to="/hook8.html" className="menu"> C-Re-Use</Link> </li>
						<li><Link to="/hook10.html" className="menu">Props</Link> </li>
						<li><Link to="/signup" className="menu">Sign Up</Link> </li>
						<li><Link to="/loginn" className="menu">Login</Link> </li>
						<li><Link to="/p1" className="menu">Practice1</Link> </li>
						<li><Link to="/p2" className="menu">Practice2</Link> </li>
						<li><Link to="/product/1/Mango/200/1.jpg" className="menu">Params</Link> </li>
						{/* <li><Link to="/class1.html" className="menu">Class1</Link> </li>
						<li><Link to="/class2.html" className="menu">Class2</Link> </li>
						<li><Link to="/class3.html" className="menu">Class3</Link> </li>
						<li><Link to="/class4.html" className="menu">Class4</Link> </li>
						<li><Link to="/class5.html" className="menu">Class5</Link> </li> */}
						{/* <li><Link to="/class7.html" className="menu">Class7</Link> </li> */}
					</ul>
					<Routes>
						<Route exact path="/" element={<MyHome/>}/>
						{/* <Route exact path="/about.html" element={<Aboutus/>}/> */}
						{/* <Route exact path="/contact.html" element={<Contactus/>}/>
						<Route exact path="/register.html" element={<Register/>}/>
						<Route exact path="/login.html" element={<Login/>}/>
						<Route exact path="/service.html" element={<Service/>}/>
						<Route exact path="/project.html" element={<Project/>}/>
						<Route exact path="/customer.html" element={<Customer/>}/> */}
						<Route exact path="/hook1.html" element={<HookOne/>}/>
						<Route exact path="/hook3.html" element={<HookThree/>}/>
						<Route exact path="/hook4.html" element={<HookFour/>}/>
						<Route exact path="/hook5.html" element={<HookFive/>}/>
						<Route exact path="/hook6.html" element={<HookSix/>}/>
						<Route exact path="/hook7.html" element={<HookSeven/>}/>
						<Route exact path="/hook7edit/:id" element={<HookSevenedit/>}/>
						<Route exact path="/hook8.html" element={<Companylist/>}/>
						<Route exact path="/hook10.html" element={<ItemList/>}/>
						<Route exact path="/loginn" element={<Loginn/>}/>
						<Route exact path="/signup" element={<Signup/>}/>
						<Route exact path="/p1" element={<Practice1/>}/>
						<Route exact path="/p2" element={<Practice2/>}/>
						<Route exact path="/product/:pid/:pname/:pprice/:pic" element={<Product/>}/>
						{/* <Route exact path="/class1.html" element={<MyClass1/>}/>
						<Route exact path="/class2.html" element={<MyClass2/>}/>
						<Route exact path="/class3.html" element={<MyClass3/>}/>
						<Route exact path="/class4.html" element={<MyClass4/>}/>
						<Route exact path="/class5.html" element={<MyClass5/>}/>
						<Route exact path="/class7.html" element={<MyClass7/>}/> */}

					</Routes>

					<PageFooter/>
				</HashRouter>


		   )
}
export default App;


//How to create the cpmonent/file(home.js) and call in the main file(app.js)
// import Contactus from './contact.js'; ::
  // <Contactus/> Call the Contactus component or file. Then it will load in browser.

//   <>
// <ul>
// 	<li> Home</li>
// 	<li>About Us </li>
// 	<li> Contact Us</li>
// 	<li>Register</li>
// 	<li> Login </li>
// 	<li> Our Services</li>
// 	<li>Project </li>
// 	<li> Customers </li>
// </ul>

// 	<MyHome/>
// 	<Aboutus/>
// 	<Contactus/>
// 	<Register/>
// 	<Login/>
// 	<Service/>
// 	<Project/>
// 	<Customer/>
//     <PageFooter/>
// </>