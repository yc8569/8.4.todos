// import React from "react";
// import "./style.css";
// import {useNavigate} from "react-router-dom";
// import {useSelector} from "react-redux";

// function Todo({ todo, onDeleteHanlder, onEditHandler }) {
//   const navigate = useNavigate();
// const todos =useSelector((state) => state.todos.todos);


//   return (
//     <div className="todo-container">
//       <button onClick={()=>{
//         // navigate('/detail');
//       }}>상세페이지</button>
//       <div>
//         <h2 className="todo-title">{todo.title}</h2>
//         <div>{todo.body}</div>
//       </div>
//       <div className="button-set">
//         <button
//           className="todo-delete-button button"
//           onClick={() => onDeleteHanlder(todo.id)}
//         >
//           삭제하기
//         </button>
//         <button
//           className="todo-complete-button button"
//           onClick={() => onEditHandler(todo.id)}
//         >
//           {todo.isDone ? "취소" : "완료"}  
//         </button>
//       </div>
//     </div>
//   );
// }  // 진실: 거짓

// export default Todo;
