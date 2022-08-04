import React, { useState ,useRef} from "react";
import styled from "styled-components";
import {createTodos} from "../../redux/modules/todos";
import {useDispatch} from "react-redux";



let number = 3;
function Form({ setTodos, todos }) {
  
  const dispatch = useDispatch();
  // const initialState = {
  //   id: 0,  // 1도될듯
  //   title: "",
  //   body: "",
  //   isDone: false,
    
  // };
  

  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  // const [todo, setTodo] = useState(initialState);
 
  const onChangeHandler = (event) => {
    const { name, value } = event.target; //속성
    
    
    setTodo({ ...todo, [name]: value}); 
    // 스프레드하면 id.title등으로 분리 

    
    
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();  //초기화
    if (todo.title.trim() === "" || todo.body.trim() === "") return; // trim 선행 후행 공백제거 굳이? 리턴은왜?
    
    dispatch(createTodos({ ...todo, id: number }));
    // setTodos([...todos, ]);
    // setTodo(initialState);
    
    
 
    setTodo({
      id: 0,
      title: "",
      body: "",
      isDone: false,
    });
  
    number = number + 1;
  };
  
  

  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StAddInput
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <StFormLabel>내용</StFormLabel>
        <StAddInput
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
      </StInputGroup>
      <StAddButton>추가하기</StAddButton>
    </StAddForm>
  );
};

export default Form;


const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
