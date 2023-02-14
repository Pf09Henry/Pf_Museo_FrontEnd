import React, { useState } from 'react';
import { Rate } from 'antd';
import { useAuth0 } from "@auth0/auth0-react";

const Stars = () => {
    const { isAuthenticated } = useAuth0();

    const [ratings, setRatings] = useState([3]);  //valor standar 3

    //manejador de estado cantidad de estrellas
    const handleChange = (index) => (value) => {
        setRatings((prevRatings) => {
            const newRatings = [...prevRatings];
            newRatings[index] = value;
            return newRatings;
        });
    };

    //guardo el promedio y lo redondeo (colocar en EventosList)
    const average = Math.round(ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length);

    return (
        isAuthenticated && (<>
            {/* <span className="ant-rate-text">Average: {average}</span> */}
            {ratings.map((rating, index) => (
                <Rate key={index} defaultValue={rating} onChange={handleChange(index)} />
            ))}
            <br />
        </>)
    );
};

export default Stars;