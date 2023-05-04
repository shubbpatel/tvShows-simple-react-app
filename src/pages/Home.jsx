import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowCard from '../components/ShowCard';
import style from './styles/Home.css';


export default function Home() {
    const [shows, setShows] = useState([]);


    useEffect(()=> {
        fetchShows();
    },[])

    const fetchShows =  async ()=> {
try {

   const response = await axios.get('https://api.tvmaze.com/search/shows?q=all')  ;
   const data = (response.data);
   console.log(data);
   setShows(data);
} catch (error) {
    console.log("error fetching data" , error);
}
    }

  return (
    <div className='container d-flex f-d-c a-center'>
    <h1>TV Shows</h1>    
    <div className="cards">
        {shows.map(({show})=> (
            <div>
            <ShowCard key={show} show={show} />
            </div>
        ))}
        </div>    
    </div>
  )
}
