import React, { useRef, useState } from "react";
import "./Reservationpage.css";
import { GiBeard } from "react-icons/gi";
import ReservationM from "../../components/ReservationMessage/ReservationM";

export default function ReservationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [reservationData, setReservationData] = useState(null);

  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const barberRef = useRef(null);
  const servicesRef = useRef([]);

  function handleReservation(event) {
    event.preventDefault();

    const data = {
      Date: dateRef.current.value,
      Time: timeRef.current.value,
      Barber: barberRef.current.value,
      Services: servicesRef.current
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value),
    };
    setReservationData(data);
      setIsModalOpen(true);
    console.log(reservationData);
    
  }

  const closeModal=()=>{
    setIsModalOpen(false)
    
  }

  return (
    <div className="reservation_wrapper">
      <div className={isModalOpen ? "reservation_logo_inactiv" : "reservation_logo"}>
        <GiBeard style={{ fontSize: "500px", color: "white" }} />
      </div>
      <div className="reservation_box">
        <div className="reservation_input_box">
          <form
            id="reservation_form"
            onSubmit={(event) => handleReservation(event)}
          >
            <h1>Reservation</h1>
            <input
              type="date"
              id="datePicker"
              name="Date"
              placeholder="Pick a date"
              ref={dateRef}
            ></input>
            <input
              list="myTime"
              id="timePicker"
              name="Time"
              placeholder="Select time"
              ref={timeRef}
              onFocus={(e) => (e.target.value = "")}
            ></input>
            <datalist id="myTime">
              <option value="8.00" />
              <option value="8.30" />
              <option value="9.30" />
              <option value="10.00" />
              <option value="10.30" />
              <option value="11.00" />
              <option value="11.30" />
              <option value="13.00" />
              <option value="13.30" />
              <option value="14.00" />
              <option value="14.30" />
            </datalist>
            <div className="service_checkbox">
              <label>
                Beard triming
                <input
                  type="checkbox"
                  name="service"
                  value="Beard triming"
                  ref={(el) => servicesRef.current.push(el)}
                />
              </label>
              <label>
                Hair cut
                <input
                  type="checkbox"
                  name="service"
                  value="Hair cut"
                  ref={(el) => servicesRef.current.push(el)}
                />
              </label>
              <label>
                Clean shave
                <input
                  type="checkbox"
                  name="service"
                  value="Clean shave"
                  ref={(el) => servicesRef.current.push(el)}
                />
              </label>
            </div>
            <input
              list="myBarber"
              id="servicePicker"
              name="Barber"
              placeholder="Select Barber"
              ref={barberRef}
              onFocus={(e) => (e.target.value = "")}
            />
            <datalist id="myBarber">
              <option value="Damon Blackwood" />
              <option value="Jaxon Steele" />
              <option value="Zane Cross" />
            </datalist>
            <button>Make reservation</button>
          </form>
        </div>
      </div>
      <div className={`reservation_message ${isModalOpen ? 'show' : ''}`}>
      {isModalOpen && <ReservationM message={reservationData} onClose={closeModal}/>}
      </div>
    </div>
  );
}
