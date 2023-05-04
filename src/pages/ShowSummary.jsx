import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ShowDetails from "../components/ShowDetails";
import BookingForm from "../components/BookingForm";
import style from './styles/ShowSummary.css';


export default function ShowSummary() {
  const [show, setShow] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = async () => {
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${id}`
      );
      const data = response.data;
      setShow(data);
    } catch (error) {
      console.log("error fetching show", error);
    }
  };
  const bookingForm = () => {
    setShowBookingForm(!showBookingForm);
  };

  return (
    <div className="summary-container">
        <div className="booking">
<div>

      {show && <ShowDetails show={console.log(show)} />}
</div>
<div>

      <button className="btn btn-primary" onClick={bookingForm}>
        {showBookingForm ? "Close Booking form" : "Book ticket"}
      </button>
</div>
      <div>

      {showBookingForm && <BookingForm show={show} />}
      </div>
        </div>
    </div>
  );
}
