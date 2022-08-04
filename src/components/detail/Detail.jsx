import React from "react";
import Todo from "../todo/Todo";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
// import {getTodo} from "../../redux/modules/todos";
import styled from "styled-components";
const Detail = () => {


  
   

      // const dispatch = useDispatch();
      const todos = useSelector((state) => state.todos.todos);
    
      const {id}  = useParams();
      const navigate = useNavigate();
      const new_todo = todos.filter((todo)=> todo.id == id)[0]
     
    
      
   //    useEffect(() => {
   //      dispatch(getTodo(id));
   //    }, [dispatch, id]);
   //   console.log([dispatch, id])
   //   console.log(getTodo(id))
      
      
 return(
   <Container>

      <Button onClick={()=>{
         navigate('/')
      }}>이전으로</Button>
      <Index>
         {new_todo.id}
      </Index>
      
      <Title>
         {new_todo.title}
      </Title>
      <Body>
         {new_todo.body}
      </Body>
      
      
   </Container>
 )
  
   




};

const Container = styled.div`
border: 2px solid #eee;
width: 70%;
height: 70vh;
display: flex;
align-items: center;
justify-content: center;
margin:auto;
margin-top:50px;
`;

const Button = styled.button`
height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

const Title = styled.div`
// width: 20%;
// height: 20vh;
// display: flex;
padding: 0 24px;
`;
const Index = styled.div`
padding: 0 24px;
`;

const Body = styled.div`
padding: 0 24px;
`;

export default Detail;

