// this is the main file through our project works.

//-------------------- importing things -----------------------------
import "./App.css"; // app chaya css properties import kelya.
// MyComponents madhun components import kele ( this importing is required with out this our app didn't work.)
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from "react";
// react-router-dom install kel and tayatun we import this things for routing purpose.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []; // to do la initialize kel jr empty astil todos tr.
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos")); // jr empty nastil tr te ahe teshe fetch karayche.
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // here onDelete function create kel jeva apan yavr click karel teva konti action perform honar te ya madhe asnar.
  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    setTodos(todos.filter((e) => e !== todo));
  };

  // here we will add our to do notes that's why we creted an function.
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
    const myTodo = { sno, title, desc };
    setTodos([...todos, myTodo]);
  };

  // website varti ky display honar te return() function madhe inlude asnar.
  return (
    <Router>
      <Header title="Jk's To Do List" searchBar={true} />
      <Routes>
        {" "}
        <Route
          // ha path="/" jeva website open karnar teva ky disnar te ya madhe asnar.
          path="/"
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
