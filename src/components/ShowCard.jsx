import React from "react";
import { Link } from "react-router-dom";
import style from './styles/ShowCard.css';


export default function ShowCard({ show }) {
    const { id, name} = show;

    return (
      <div className="card-container">
        <div className="card">
          <img src={show.image?.medium} className="card-img-top" style={{height:'auto', width:'300px', margin:'auto'}} alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              Genres: {show.genres.join(', ')} <br />
              Rating: <span style={{color:'red'}}> <b> {show.rating.average || 'N/A'} </b></span><br />
              Language: {show.language || 'N/A'  }
            </p>
            <Link to={`/summary/${id}`} className="btn btn-primary">
              View Summary
            </Link>
          </div>
        </div>
      </div>
    );
}
