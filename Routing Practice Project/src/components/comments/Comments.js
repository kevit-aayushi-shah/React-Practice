import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentsList from './CommentsList'
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params=useParams();
  const {quoteId}=params
  const {sendRequest,status,data:loadedComments}=useHttp(getAllComments)

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const addedCommentHandler=useCallback(()=>{
   
  },[])

  
  useEffect(()=>{
    sendRequest(quoteId)
  },[quoteId,sendRequest])

  let comments;

  if(status==='pending'){
    comments= <div className='centered'>
      <LoadingSpinner/>
    </div>
  }
  if(status==='completed'&&loadedComments&&loadedComments.length>0){
    comments=<CommentsList comments={loadedComments}></CommentsList>
  }
  if(status==='completed'&& (loadedComments&&loadedComments.length===0)){
    comments=<p className='centered'>There are no comments</p>
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={params.quoteId} onAddedComment={addedCommentHandler}/>}
      {comments}
    </section>
  );
};

export default Comments;
