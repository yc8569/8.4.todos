import React, { useState } from "react";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";
import Detail from "../components/detail/Detail";
import { Route, Routes } from "react-router-dom";


const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ]);

  return (


    // <Layout>
    //   <Header/>
    //   <Form/>
    //   <List/>
    // </Layout>
    <Routes>
      <Route path="/" element={
          <Layout>
          <Header />
          <Form setTodos={setTodos} todos={todos} />
          <List todos={todos} setTodos={setTodos} />
        </Layout>
      }/>
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
};

export default TodoList;