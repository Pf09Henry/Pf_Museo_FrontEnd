import React from "react";
import {  useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import { getReview , deleteReview} from "../../Actions/AppActions/appActions";
import { Avatar, Button, List, Rate, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import {  useParams } from "react-router-dom";
import img from './../../Imagenes/usersinimg.jpg'
import { RiDeleteBin6Line } from 'react-icons/ri';
import './CommentForm.css'
import Swal from 'sweetalert2'




export default function Opiniones({roleUser}){
    const review = useSelector((state) => state.review);
    const dispatch = useDispatch();
    let { id } = useParams();
    const count = 3;
  /*   const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`; */
    const fakeDataUrl = 'https://pfmuseobackend.up.railway.app/reviews'

    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [listId, setListId] =useState([])
    const [list, setList] = useState([]);
    const [componentDisabled, setComponentDisabled] = useState(true);

  
    function listbyid(id){
      const listEvento = listId.filter(e=> e.eventId === id)
     
      setList(listEvento)
  }
  useEffect(()=>{
    (() => {
      dispatch(getReview());
    })();
  },[dispatch]) 



    useEffect(() => {
      setInitLoading(false);
      setData(review);
      setListId(review);
      listbyid(id)
      
    }, [review,id]);

    function deleteComment(e){
   
      
      Swal.fire({
        title: 'Éxito',
        text: 'El comentario se elimino con éxito',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: "#035d03"
      }).then(function(){
        window.location.href = `/event/${id}`
    })
      dispatch(deleteReview(e));
     }

    const onLoadMore = () => {
      setLoading(true);
      setList(
        data.concat(
          [...new Array(count)].map(() => ({
            loading: true,
            name: {},
            picture: {},
          })),
        ),
      );
      fetch(fakeDataUrl)
        .then((res) => res.json())
        .then((res) => {
          const newData = data.concat(res.results);
          setData(newData);
          setListId(newData);
          setLoading(false);
      
        });
    };
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
         
        </div>
      ) : null;
    return (
        <div className="comentarios-todos">
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
       
          <List.Item
          actions={[<Rate defaultValue={item.score || 3} disabled={componentDisabled}/> , roleUser === "admin" ? <Button className="boton-borrar-comentario"  onClick={()=>deleteComment(item.id)}><RiDeleteBin6Line/></Button> : null ]} >
            <Skeleton avatar title={false} loading={item.loading} active>  
              <List.Item.Meta
                avatar={<Avatar src={item.user.image || img} />}
                title={item.user.name || "Usuario"}
                description={item.commentary || ""}
              />
            
            </Skeleton>
           
          </List.Item>
         
        
        )}
      />
      </div>
    );
}
