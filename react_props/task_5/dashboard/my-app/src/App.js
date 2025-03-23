import React from 'react';
import './App.css';
import Notifications from './Notifications/Notifications';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import CourseList from './CourseList/CourseList';

function App() {
  const isLoggedIn = false;

  const notifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: '<strong>Urgent requirement</strong> - complete by EOD' }
  ];

  const coursesList = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  return (
    <>
      <div className="root-notifications">
        <Notifications displayDrawer={true} notifications={notifications} />
      </div>

      <div className="App">
        <Header />
        <div className="App-body">
          {!isLoggedIn ? <Login /> : <CourseList courses={coursesList} />}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
