import "./ReservationM.css"

export default function ReservationM({message,onClose}){
    return(

    <div className="reservation_wrapper">
        <div className="reservation_box2">
            <h1>Reservation Successful</h1>
            <p>Date:{message.Date}</p>
            <p>Time:{message.Time}</p>
            <p>Barber:{message.Barber}</p>
            <p>Service:{message.Services.join(",")}</p>
            <button onClick={onClose}>Ok</button>
        </div>
    </div>

    );
}