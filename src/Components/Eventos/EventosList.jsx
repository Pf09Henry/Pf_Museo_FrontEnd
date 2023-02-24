import React from "react";
import { Button, Card } from 'antd';
import './../Eventos/EventoList.css'
import { Tag } from 'antd';
import Filtros from "../Filtros/Filtros";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getEvents } from "../../Actions/AppActions/appActions";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Pagination from "../Paginado/Paginado";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { MdShoppingCart } from 'react-icons/md'
import { CartContext } from "../../Context";
import Swal from 'sweetalert2';
const { Meta } = Card;


export default function EventoList() {
    const Eventos = useSelector((state) => state.eventos);
    const dispatch = useDispatch();
    const detalles = useSelector((state) => state.details);
    const [currentPage, setCurrent] = useState(1);
    const eventsPerPage = 4;
    const {products, saveProducts} = React.useContext(CartContext)
    const indexOfLastEvet = currentPage * eventsPerPage;
    const indexOfFirstEvet = indexOfLastEvet - eventsPerPage;
    const currentEvents = Eventos.slice(indexOfFirstEvet, indexOfLastEvet);
    const {isAuthenticated, user} = useAuth0();
    const pagination = currentPage => {
        setCurrent(currentPage)
    };

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch])


    const handleAddToCart = () =>{
        const productos = products.concat(detalles)
        saveProducts(productos)
    }

    function clickAuth(){
        Swal.fire({
            title: 'Upss',
            text: 'Inicia sesión para ver tu carrito!',
            icon: 'info',
            confirmButtonText: 'OK'
        })

    }


    return (<div className='evento'>
        <div >
            <h1 className="eventos-disponibles">Eventos</h1>
        </div>

        <div>
            <Filtros />
            <SearchBar />
        </div>
        <div className="list-card-eventos">
            {currentEvents?.length > 0 ? (
                currentEvents?.map((activity, index) =>
                    <Link to={`/event/${activity.id}`}>
                        <Card
                            className="carta-evento-list"
                            hoverable
                            style={{
                                width: 240,
                            }}
                            key={activity.id}

                            cover={<img className="img-list-card" alt="example" src={activity.img} />}
                        >
                            <Meta title={activity.name}

                                description={
                                    <div>
                                        <Tag color="green">{activity.startDay} - {activity.endDay}</Tag>
                                        <br></br>
                                         <Tag color="#015129">{activity.category[0].name}</Tag>
                                        <hr></hr> 
                                        <Tag color="#87d068">${activity.price}</Tag> 
                                        {isAuthenticated ? <Button  className="btn-carrito"  onClick={handleAddToCart}><MdShoppingCart /></Button> : <Button  className="btn-carrito"  onClick={clickAuth}><MdShoppingCart /></Button>}
                                        
                                        <br />

                                    </div>
                                }
                            />
                        </Card>
                    </Link>
                )) : (
                <h3 className="actividades-disponibles">No se encontraron eventos</h3>
            )}
            <Pagination
                eventsPerPage={eventsPerPage}
                eventos={Eventos.length}
                pagination={pagination}
                currentPage={currentPage}
            />
        </div>
    </div>)
}

