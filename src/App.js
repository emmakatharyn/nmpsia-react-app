import React from "react";

import Root from "./Root";
import HappeningNow from "./components/HappeningNow/HappeningNow";
import About from "./pages/About";
import Hero from "./components/Hero";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const routes = createRoutesFromElements(
  <Route path='/' element={<Root />}>
    <Route index element={<Hero />} />
    <Route path='home' element={<Hero />} />
    <Route path='about' element={<About />} />
    <Route path='news' element={<HappeningNow />} />
    <Route path='contact' element={<h1>CONTACT PAGE</h1>} />
    <Route path='board-login' element={<h1>BOARD LOGIN FORM</h1>} />
    <Route
      path='the-authority'
      element={
        <>
          <h1 className='display-1'>NMPSIA - The Authority Page</h1>
          <p>needs to be incorporated with About pg...</p>
        </>
      }
    />
    <Route path='benefits-division' element={<h1>Benefits DivisionnN</h1>} />
    <Route
      path='risk-division'
      element={
        <div className='mockpage'>
          <h1>RiskY Bizniss$</h1>
        </div>
      }
    />
    <Route
      path='wellness-programs'
      element={
        <div className='mockpage'>
          <h1>"WelLNeSs pR0gRaMs" psh yeah right. just go 4 a walkie :3</h1>
          <div className='block'></div>
          <div className='block'></div>
          <div className='block'></div>
          <div className='block'></div>
          <div className='block'></div>
          <div className='block'></div>
          <div className='block'></div>
        </div>
      }
    />
    <Route
      path='employers/enrollment'
      element={
        <div className='mockpage'>
          <h1 className='display-1'>Employers</h1>
          <h3>enrollment stuff</h3>
        </div>
      }
    />
    <Route
      path='employers/carriers-info'
      element={
        <div className='mockpage'>
          <h1 className='display-1'>Employers</h1>
          <h3>carriers/benefits information</h3>
        </div>
      }
    />
    <Route
      path='wellness-programs'
      element={
        <div className='mockpage'>
          <h1>Wellness</h1>
          <h4>wellness programs</h4>
        </div>
      }
    />
    <Route
      path='employers/premiums'
      element={
        <div className='mockpage'>
          <h1>Premiums</h1>
          <h3>premiums stuff</h3>
        </div>
      }
    />
    <Route
      path='program-info'
      element={
        <div className='mockpage'>
          <h1 className='display-1'>Program info</h1>
          <h3>vital program information</h3>
        </div>
      }
    />
    <Route
      path='training'
      element={
        <div className='mockpage'>
          <h1 className='display-1'>Training Tutorials & Videos</h1>
          <h3>training programs information</h3>
        </div>
      }
    />
    <Route
      path='covid-19'
      element={
        <div className='mockpage'>
          <h1 className='display-1'>COVID-19 Information</h1>
          <h3>lorem ipsum it's a flu kinda</h3>
        </div>
      }
    />
    <Route
      path='employees/enrollment'
      element={
        <div className='mockpage'>
          <h1 className='display-1'>Employees</h1>
          <h3>enrollment stuff</h3>
        </div>
      }
    />
    <Route
      path='employees/carriers-info'
      element={
        <div className='mockpage'>
          <h1 className='display-1'>Employers</h1>
          <h3>carriers/benefits information</h3>
        </div>
      }
    />

    <Route
      path='employees/premiums'
      element={
        <div className='mockpage'>
          <h1>Premiums</h1>
          <h3>employee premiums stuff</h3>
        </div>
      }
    />

    <Route path='program-guide' element={<h1>The Program Guide 📃</h1>} />
    <Route path='plan-comparison' element={<h1>The Comparison Chart ⚖️</h1>} />
    <Route
      path='behavioral-health'
      element={
        <div className='mockpage'>
          <h1>Behavioral Health Programs and Resources &hearts; </h1>
          <p>lorem ipsum thank u captain</p>
        </div>
      }
    />
    <Route
      path='IPRA'
      element={
        <div className='mockpage'>
          <h1>IPRA Request Form</h1>
          <input type='text' />
          <button>submit</button>
        </div>
      }
    />

    <Route
      path='mobile-app'
      element={
        <div className='mockpage'>
          <h1>Mobile App Information</h1>
        </div>
      }
    />

    <Route
      path='employee-notifications'
      element={
        <div className='mockpage'>
          <h3>Annual Employee Notifications</h3>
        </div>
      }
    />
  </Route>
);

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
