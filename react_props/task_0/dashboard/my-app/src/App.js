import React, { Fragment } from 'react';
import '../App/App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
  return (
    <Fragment>
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
