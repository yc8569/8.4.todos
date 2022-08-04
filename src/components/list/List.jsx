import React from "react";

// import "./list.css";
// import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { NavLink } from "react-router-dom";
import {deleteTodo, updateTodo} from "../../redux/modules/todos";
import styled from "styled-components";


function List() {
  const todos =useSelector((state) => state.todos.todos);
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const onDeleteHanlder = (todoId) => {
    dispatch(deleteTodo(todoId));
      
    }
  //   // console.log(todoId)
  //   setTodos(newTodos);
  // };

  const onEditHandler = (todoId) => {
    dispatch(updateTodo(todoId))
    
  };

  return (
    <StListContainer>
      <h2>Working.. 🔥</h2>
      <StListWrapper>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <StTodoContainer key={todo.id}>
                <NavLink to={`/${todo.id}`} key={todo.id} >
                <div>상세페이지</div>
             </NavLink>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <StDialogFooter>
                  <StButton
                    borderColor="red"
                    onClick={() => onDeleteHanlder(todo.id)}
                  >
                    삭제하기
                  </StButton>
                  <StButton
                    borderColor="green"
                    onClick={() => onEditHandler(todo.id)}
                  >
                    {todo.isDone ? "취소!" : "완료!"}
                  </StButton>
                </StDialogFooter>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
      <h2 className="list-title">Done..! 🎉</h2>
      <StListWrapper>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <StTodoContainer key={todo.id}>
                <NavLink to={`/${todo.id}`} key={todo.id} >
                <div>상세페이지</div>
             </NavLink>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <StDialogFooter>
                  <StButton
                    borderColor="red"
                    onClick={() => onDeleteHanlder(todo.id)}
                  >
                    삭제하기
                  </StButton>
                  <StButton
                    borderColor="green"
                    onClick={() => onEditHandler(todo.id)}
                  >
                    {todo.isDone ? "취소!" : "완료!"}
                  </StButton>
                </StDialogFooter>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
    </StListContainer>
  );
};

export default List;

const StListContainer = styled.div`
  padding: 0 24px;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StTodoContainer = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;



const StDialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
