import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import './../EventDetails/EventDetails.css'
import { getEventsById } from "../../Actions/AppActions/appActions";


export default function EventDetails() {

    const detalles = useSelector((state) => state.details);
    const dispatch = useDispatch();
    let { id } = useParams();


    useEffect(() => {
        dispatch(getEventsById(id));
    }, [id]);




    return (
        <div>
            <div>
                {console.log(id)}
                <h1 class="card-title">{detalles[0].name}</h1>
                <img className="img-detalle-evento" src={detalles[0].img} alt="banner_paleo" />

            </div>
            <br />
            <div class="card-body">
                <div>
                    {/*    <h3 class="card-text">Categoria: {detalles[0].category[0].name} </h3> */}
                </div>
                <div>
                    <p class="card-text"> {detalles[0].information} </p>
                </div>
                <div>
                </div>
                <div>
                    <p class="card-text">{detalles[0].startDay} - {detalles[0].endDay} </p>
                </div>
                <div>

                    <h3 class="card-text">Guia a cargo : {detalles[0].guide[0].name}</h3>
                </div>
                <div>
                    <img className="banner_paleo" src={detalles[0].guide[0].image} alt="banner_paleo" />
                </div>
            </div>

        </div >
    )
}



