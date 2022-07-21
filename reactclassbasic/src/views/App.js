import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import TodosApp from './Todos/TodosApp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DetailUser from './Users/DetailUser';

import Nav from './Nav/Nav'
import Home from './Example/Home';
import React from "react";
import ListUser from './Users/ListUser';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

/* 2 types of components: class component, function component
 * JSX => return block 
 * React fragment */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
          
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/Todo">
              <TodosApp/>
            </Route>
            <Route path="/about">
              <MyComponent/>
            </Route>
            <Route path="/user" exact>
              <ListUser/>
            </Route>
            <Route path="/user/:id">
              <DetailUser/>
            </Route>
          </Switch>

        </header>


        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover/>
      </div>
    </BrowserRouter>
  );
}

export default App;
