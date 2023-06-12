import React, { useState, useEffect } from "react";
import CaloriesBurnedCard from "./components/CaloriesBurnedCard";
import HeartRateCard from "./components/HeartRateCard";
import Login from "./components/Login";
import StepsCard from "./components/StepsCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppointmentForm from "./components/AppointmentForm";
import "./App.css";

// const App = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [appointment, setAppointment] = useState(null);

//   const handleLogin = () => {
//     setLoggedIn(true);
//   };

//   const handleBookAppointment = (selectedAppointment) => {
//     setAppointment(selectedAppointment);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="container">
//         {loggedIn ? (
//           <div className="row">
//             <StepsCard />
//             <HeartRateCard />
//             <CaloriesBurnedCard stepsCount={10000} heartRate={0} />
//             <AppointmentForm onBookAppointment={handleBookAppointment} />
//             {appointment && (
//               <p>
//                 Appointment booked for {appointment.date} at {appointment.time}
//               </p>
//             )}
//           </div>
//         ) : (
//           <Login onLogin={handleLogin} />
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default App;

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [appointment, setAppointment] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleBookAppointment = (selectedAppointment) => {
    setAppointment(selectedAppointment);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 5000);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        setShowModal(false);
      }, 5000);
    }
  }, [showModal]);

  return (
    <div>
      <Header loggedIn={loggedIn} />
      <div className="container">
        {loggedIn ? (
          <div>
            <div className="row">
              <StepsCard />
              <HeartRateCard />
              <CaloriesBurnedCard stepsCount={10000} heartRate={0} />
            </div>
            <AppointmentForm onBookAppointment={handleBookAppointment} />
          </div>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>

      {appointment && showModal && (
        <div className="modal-container">
          <div className="modal">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>
              Appointment booked for {appointment.date} at {appointment.time}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;
