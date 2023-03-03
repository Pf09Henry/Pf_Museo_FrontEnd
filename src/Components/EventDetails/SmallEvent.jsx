import { Avatar, Button, List, Skeleton } from 'antd';
import React , { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getEventsById, putEvent , getEventsName ,getEvents} from "../../Actions/AppActions/appActions";

import {
   Form,
  Input,

} from 'antd';

const count = 3;


const SmallEvent = () => {
  const dispatch = useDispatch();
  const eventos = useSelector((state) => state.eventos);
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [nameEvent, setName] = useState("")
 


  function buscarNombre(e){
    
    setName(e.target.value)
  }

  useEffect (()=>{
    dispatch(getEventsName(nameEvent));
  },[dispatch, nameEvent]) 

  useEffect (()=>{
    dispatch(getEvents());
  },[dispatch]) 

  useEffect(() => {
    setInitLoading(false);
        setData(eventos);
        setList(eventos);
  }, [eventos]);


  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          img: {},
        })),
      ),
    );
        const newData = data.concat(eventos);
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
     
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
        <Button onClick={onLoadMore}>Cargar mas</Button>
      </div>
    ) : null;
  return (
    <div>
      
    <Form.Item
      label="Buscar"
      name="username-buscado"
    >
      <Input placeholder={nameEvent} onChange={(e)=>buscarNombre(e)}/>
      {/* <div >
      
      <>
        <Dropdown
          overlay={(
            <Menu>
              <Menu.Item key="0">
                Menu Item One
              </Menu.Item>
              <Menu.Item key="1">
              Menu Item Two
              </Menu.Item>
              <Menu.Item key="1">
              Menu Item Three
              </Menu.Item>
            </Menu>
          )}
          trigger={['click']}>
          <a href=" "className="ant-dropdown-link" 
             onClick={e => e.preventDefault()}>
            Open Dropdown
          </a>
        </Dropdown>
      </>
    </div> */}
    </Form.Item>

    <List
      className="demo-loadmore-list "
      loading={initLoading}
     /*  itemLayout="horizontal"
      loadMore={loadMore} */
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[<Button>Datos</Button>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
            className='lista-eventos-small'
              avatar={<Avatar src={item.img} />}
              title={item.name}
          
            />
           
          </Skeleton>
        </List.Item>
      )}
    />
    </div>
  );
};
export default SmallEvent;