import Title from "../components/Title";
import Spacer from "../components/Spacer";
import {useState} from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import YellowButton from "../components/YellowButton";
import {useNavigate} from "react-router-dom";


export default function Reservation() {
    return (
        <div className="reservation-content">
            <Title
                subtitle="Moments deserve to be memorable"
                title="Dine in Style"
                description="Celebrate special occasions or just yourself \n with a reservation that defines elegance."
            />
            <Spacer size={64}/>
            <ReservationForm></ReservationForm>
            <Spacer size={64}/>

        </div>
    )

    function ReservationForm() {

        return (
            <div className="reservation-form">
                <div className="fields">
                    <Field type="text" placeholder="First Name:"/>
                    <Field type="text" placeholder="Last Name:"/>
                </div>
                <div className="fields">
                    <Field type="email" placeholder="Email: "/>
                    <Field type="tel" placeholder="Mobile Phone"/>
                </div>
                <div className="fields">
                    <DatePickerBox/>
                    <HourPicker/>
                </div>
                <YellowButton value="SUBMIT RESERVE ———" destination="/"/>
            </div>
        );
    }

    function DatePickerBox() {
        const [selectedDate, setSelectedDate] = useState(null);

        return (
            <div className="field">
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    placeholderText="Select a date"
                    dateFormat="MMMM d, yyyy"
                />
            </div>
        );
    }

    function HourPicker({onChange}) {
        const [selectedTime, setSelectedTime] = useState("");

        const timeSlots = [
            "12:00", "12:30",
            "13:00", "13:30",
            "14:00", "14:30",
            "15:00", "15:30",
            "20:00", "20:30",
            "21:00", "21:30",
            "22:00"
        ];

        const handleChange = (e) => {
            setSelectedTime(e.target.value);
            if (onChange) onChange(e.target.value);
        };

        return (
                <select className="field" value={selectedTime} onChange={handleChange}>
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
        );
    }

    function Field({type, placeholder}) {
        return (
            <input type={type} placeholder={placeholder} className="field"/>
        )
    }
}