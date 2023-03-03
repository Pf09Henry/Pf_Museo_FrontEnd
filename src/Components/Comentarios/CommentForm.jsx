import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import './CommentForm.css';
import { useAuth0 } from "@auth0/auth0-react";
import {  getUsers} from "../../Actions/AppActions/appActions";

export default function CommentForm({ commentInitial, buttonText, buttonSend }) {

    

    const { isAuthenticated ,user } = useAuth0();
    const usuarios = useSelector((state) => state.users);
    const dispatch = useDispatch();
    // Estado de la caja de comentarios
    const commentInitialStatus = {
        comment: '',
    };
    const [commentItem, setCommentItem] = useState(commentInitial ? { ...commentInitial } : commentInitialStatus);
    const [errorComment, setErrorComment] = useState('');

    function handleChange(event) {
        setCommentItem({ ...commentItem, [event.target.name]: event.target.value })
    }

    //No enviar form vacio
    function validateComment() {
        if (!commentItem.comment || commentItem.comment.length === 0) {
            setErrorComment('No Puedes enviar un comentario vacio');
            return true;
        } else {
            setErrorComment('');
            return false;
        }
    }

    useEffect (()=>{
        dispatch(getUsers());
        searchIdUser(user)
    },[dispatch]) 

    //si hay comentario se envia, sino error
    function handleSubmit(event) {
        //event.preventDefault();
        const error = validateComment();
        if (error) {
            return;
        }
        buttonSend({ ...commentItem });
        setCommentItem(commentInitialStatus);
    }


    function searchIdUser(user){
        
        let usuarioEncontrado = usuarios.filter(el => el.email === user.email)
        
        return usuarioEncontrado[0].isBanned

    }

    return (
        !searchIdUser(user) ? 
        isAuthenticated && (<div>
            <form className='answerFormContainer' onSubmit={e => handleSubmit(e)}>
                <div className='inputLabelField'>

                    <textarea placeholder='Dejanos tu Comentario'
                        className='answerTextarea'
                        onChange={(e) => handleChange(e)}

                        onBlur={() => validateComment()}
                        value={commentItem.comment}
                        name={'comment'}
                        rows={5}
                    />
                    <span className="errorMessage">{errorComment}</span>
                </div>
                <br />
                <div>
                    <button className="btn btn-outline-success btn-secundario" type='submit'>
                        {buttonText ? buttonText : 'Enviar'}
                    </button>
                </div>
            </form>
        </div>) : <p>Por motivos de seguridad se bloqueó la opción de que puedas comentar.</p>
    );
}
