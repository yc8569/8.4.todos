// widgets.js

// Actions
// const LOAD = 'my-app/widgets/LOAD';


const CREATE = 'todo/CREATE';
const GET_TODO = 'todo/GET_TODO';
const DELETE_TODO = 'todo/DELETE_TODO';
const UPDATE_TODO = "todo/UPDATE_TODO";


const initialState = {
    todos: [
        {
            id: 1,
            title: "리액트 공부하기",
            body: "리액트 기초를 공부해봅시다.",
            isDone: false,
          },
          {
            id: 2,
            title: " 공부하기",
            body: " 공부해봅시다.",
            isDone: true,
          },
    ],
    // todo: {
    //     id: "",
    //     title: "",
    //     body: "",
    //     isDone: false,
    //   },
    
  };




  export function createTodos(payload) {
    
    return { type: CREATE, payload:payload };
    }

  export function getTodo(payload){
    return { type:GET_TODO, payload}
  };

  export function deleteTodo (payload){
    
    return { type:DELETE_TODO, payload}
  }
  
  export function updateTodo (payload){
    console.log("생성")
    return {type:UPDATE_TODO, payload}
  }


//state ={} 아무 데이터가 넘어오지않으면 빈값일꺼야
export default function reducer(state = initialState, action = {}) {
switch (action.type) {
    
    case "todo/CREATE":
      
        return{ 
             ...state,
            todos: [...state.todos, action.payload, ]
        }
        
   

        case "todo/DELETE_TODO":
          
          return {
            ...state,
            todos:state.todos.filter((todo) => todo.id !== action.payload) 

          }  
        case "todo/UPDATE_TODO":
          console.log(action.payload)
        return {
          ...state,
          todos: state.todos.map((todo)=>{
            if(todo.id === action.payload){
              return{
                ...todo,
                isDone: !todo.isDone
              };
            }else{
              return todo;
            };
          })

        }
   
default: return state;
}
};
