import React, { useState } from 'react';
import { Rate } from 'antd';

const Stars = () => {
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
        <>
            {/* <span className="ant-rate-text">Average: {average}</span> */}
            {ratings.map((rating, index) => (
                <Rate key={index} defaultValue={rating} onChange={handleChange(index)} />
            ))}
            <br />
        </>
    );
};

export default Stars;