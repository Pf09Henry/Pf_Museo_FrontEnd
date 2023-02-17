import React from "react";
import {  useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import { getReview} from "../../Actions/AppActions/appActions";
import { Avatar, List, Rate, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import {  useParams } from "react-router-dom";

export default function Opiniones(){
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


    useEffect (()=>{
        dispatch(getReview());
        setInitLoading(false);
        setData(review);
        setListId(review);
        
          //eslint-disable-next-line 
    },[dispatch,id,review]) 


    function listbyid(id){
        const listEvento = listId.filter(e=> e.eventId === id)
       
        setList(listEvento)
    }


    useEffect (()=>{
        dispatch(getReview());
        listbyid(id)
        //eslint-disable-next-line 
    },[id,dispatch,review]) 


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
          actions={[<Rate defaultValue={item.score} disabled={componentDisabled}/>]}>
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.user.image} />}
                title={item.user.name}
                description={item.commentary}
              />
           
            </Skeleton>
          </List.Item>
        )}
      />
      </div>
    );
}
