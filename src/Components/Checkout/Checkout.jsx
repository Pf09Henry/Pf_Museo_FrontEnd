import React from 'react'
//import { useSelector } from 'react-redux'
//import InformationCheckout from '../informationCheckout/InformationCheckout'
import { CartContext } from '../../Context';
import './Checkout.css'
import { TiShoppingCart } from 'react-icons/ti'
import { Avatar, Card, List } from 'antd';
import logo from '../../Imagenes/logo circular.png'
import VirtualList from 'rc-virtual-list';





export default function Checkout() {

    const { products, saveProducts } = React.useContext(CartContext)

    let sum = 0;
    if (products && products.length > 1) {
        products.forEach((item) => {
            sum += item.price * item.cantidad
        })
    }
    else if (products && products.length === 1) {
        sum = products[0].price * products[0].cantidad
    }

    // const handleRemoveCart = (e) => {
    //     const posicionCarrito = products.findIndex(pr => pr.id === e.target.value)
    //     const productos = [...products]
    //     productos.splice(posicionCarrito,1);

    //     saveProducts(productos)
    // }

    const handleAddTickets = (e) => {
        const posicionCarrito = products.findIndex(pr => pr.id === e.target.value)
        const productos = [...products]
        productos[posicionCarrito].cantidad++
        saveProducts(productos)
    }

    const handleRemoveTickets = (e) => {
        const posicionCarrito = products.findIndex(pr => pr.id === e.target.value)
        const productos = [...products]
        if (productos[posicionCarrito].cantidad <= 1) {
            productos.splice(posicionCarrito, 1);
            saveProducts(productos)
        } else {
            productos[posicionCarrito].cantidad--
            saveProducts(productos)
        }
    }
    const ContainerHeight = 250

    return (

        <div className='d-grid' >

            {products && products.length > 0 ?

                <div className="container my-4" >
                    <div className='row w-100' >
                        <h3 className="display-5 lh-1 mb-4">Carrito <TiShoppingCart /></h3>
                    </div>
                    <div className='row '>
                        <List
                            style={{
                                width: '100%',
                                display: 'block'

                            }}
                            size='large'
                            grid={{
                                gutter: 16,
                                responsive: {//column: products.length,
                                    xs: 1,
                                    sm: 2,
                                    md: 3,
                                    lg: 4,
                                    xl: 5,
                                    xxl: 6
                                }
                            }}
                            dataSource={products}
                            renderItem={(pr) => (
                                <List.Item>
                                    <Card
                                        key={pr.id}
                                        hoverable={true}
                                        style={{
                                            borderColor: 'green',
                                            width: 200,
                                            overflow: 'hidden'



                                        }}
                                        size='large'
                                        actions={[
                                            // <Button
                                            // onClick={testButton}
                                            // target='holiiii'
                                            // >+
                                            // </Button>,
                                            // <Button
                                            // danger
                                            // onClick={testButton}
                                            // >-
                                            // </Button>,
                                            <button value={pr.id}
                                                className='btn bg-light btnRm '
                                                onClick={handleRemoveTickets}>-</button>,
                                            <button value={pr.id}
                                                className='btn bg-light btnAdd '
                                                onClick={handleAddTickets}>+</button>,
                                            // <span className='cantidad fs-4'>{pr.cantidad}</span>,
                                            // <button value={pr.id} 
                                            // className='badge rounded-pill border border-danger bg-danger ' 
                                            // onClick={handleRemoveCart}>X</button>,
                                        ]}
                                        title={
                                            <div style={{
                                                objectFit: 'contain'
                                            }}>
                                                {pr.name}
                                            </div>
                                        }
                                        cover={
                                            // <div
                                            //     style={{
                                            //         height: 50,
                                            //         width: '100%',
                                            //         objectFit:'cover',
                                            //         opacity:0.2
                                            //     }}
                                            // >
                                            <img
                                                src={pr.img}
                                                alt="Imagenproducto"
                                                style={{
                                                    opacity: 1,
                                                    height: 50,
                                                    objectFit: 'cover',
                                                    borderRadius: 10,
                                                    overflow: 'hidden',
                                                    padding: 2
                                                }}
                                            />
                                            // </div>
                                        }
                                    >
                                        <Card.Meta
                                            style={{

                                            }}
                                            avatar={
                                                <Avatar
                                                    src={
                                                        logo
                                                    }
                                                    size={30}
                                                ></Avatar>}
                                            title={`tickets: ${pr.cantidad}`}
                                            description={pr.fecha ? `${pr.fecha}` : ''}
                                        >
                                        </Card.Meta>
                                    </Card>
                                </List.Item>
                            )}
                        />
                    </div>


                    <div className="container-fluid text-dark gap-3 ">
                        {/* <h3 className='fs-1' >Resumen</h3> */}
                        {products.length > 1 ?
                            <div className='resumen-carrito'>
                                <h3>Resumen de compra</h3>
                                <List
                                /* header={<h3>Resumen</h3>} */

                                >

                                    <VirtualList
                                        data={products}
                                        /* height={ContainerHeight} */
                                        itemHeight={10}
                                        itemKey="id"
                                    //onScroll={onScroll}
                                    >
                                        {(item) => (
                                            <List.Item key={item.email}>
                                                <List.Item.Meta
                                                    avatar={<Avatar src={item.img} />}
                                                    title={item.name}
                                                />
                                                <div>{`$ ${(item.price * item.cantidad).toLocaleString('en-US')}`}</div>
                                            </List.Item>

                                        )}

                                    </VirtualList>
                                </List>
                                <div className='row rounded-5 total-a-pagar'>
                                    {/* <div >
                                    <h3 className="card-text fs-2 col">Total a pagar:</h3>
                                </div> */}
                                    <div >
                                        <p className="card-text fs-4 col total-a-pagar">Total:  $ {sum.toLocaleString('en-US')}</p>
                                    </div>
                                </div>
                            </div>

                            // <div className='container-fluid d-grid gap-1'>
                            //     {products.map((p,i)=>(
                            //         <div key={i} className="card-body bg-light text-dark border row w-100 shadow ">
                            //             <div className='col'>
                            //                 <h5>{p.name}</h5>
                            //                 <h5>Tickets: {p.cantidad}</h5>
                            //             </div>
                            //             <div className='col'>
                            //                 <h5>Valor Unitario</h5>
                            //                 <h5>$ {(p.price).toLocaleString('en-US')}</h5>
                            //             </div>
                            //             <div className='col'>
                            //                 <h5>Valor</h5>
                            //                 <h5>$ {(p.price * p.cantidad).toLocaleString('en-US')}</h5>
                            //             </div>
                            //         </div>
                            //     ))}

                            //     <div className="container-fluid bg-dark d-grid mt-4 totalP ">
                            //         <div className='row'>
                            //             <div className='col-6'>
                            //                 <h3 className="card-text fs-2 col text-light">Total a pagar:</h3>
                            //             </div>
                            //             <div className='col-6'>
                            //                 <h3 className="card-text fs-2 col text-light">$ {sum.toLocaleString('en-US')}</h3>
                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>                                        
                            :
                            <div className='resumen-carrito'>
                                <h3>Resumen de compra</h3>
                                <List
                                /* header={<h3>Resumen</h3>} */

                                >

                                    <VirtualList
                                        data={products}
                                        /* height={ContainerHeight} */
                                        itemHeight={10}
                                        itemKey="id"
                                    //onScroll={onScroll}
                                    >
                                        {(item) => (
                                            <List.Item key={item.email}>
                                                <List.Item.Meta
                                                    avatar={<Avatar src={item.img} />}
                                                    title={item.name}
                                                />
                                                <div>{`$ ${(item.price * item.cantidad).toLocaleString('en-US')}`}</div>
                                            </List.Item>

                                        )}

                                    </VirtualList>
                                </List>
                                <div className='row rounded-5 total-a-pagar'>
                                    {/* <div >
                               <h3 className="card-text fs-2 col">Total a pagar:</h3>
                           </div> */}
                                    <div >
                                        <p className="card-text fs-4 col total-a-pagar">Total:  $ {sum.toLocaleString('en-US')}</p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div>
                        <a href='/payment' className='btn btn-success mt-3 btnCheck' >Pagar</a>
                    </div>
                </div>
                :
                <div className='card-body d-flex-column gap-3' >
                    <img className='img-fluid rounded-circle mx-auto' src="https://img.freepik.com/premium-vector/cute-baby-triceratops-cartoon-character-animal-dino-isolated_138676-3160.jpg" alt="sad" />
                    <h3 className='badge bg-dark text-wrap fw-bold fs-4 mt-4' >No hay productos agregados al carrito de compras</h3>
                    <div className="dropdown-menu dropdown-menu-dark d-block position-static border-0 pt-0 mx-0 rounded-3 shadow overflow-hidden">
                        <ul className="list-unstyled mb-0">
                            <li><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="/eventos">
                                <span className="d-inline-block bg-success rounded-circle p-1"></span>
                                Eventos
                            </a></li>
                            <li><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="/entradas">
                                <span className="d-inline-block bg-primary rounded-circle p-1"></span>
                                Entradas
                            </a></li>
                            <li><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="/socios">
                                <span className="d-inline-block bg-danger rounded-circle p-1"></span>
                                Membresias
                            </a></li>
                        </ul>
                    </div>

                </div>
            }
        </div>
    )
}
