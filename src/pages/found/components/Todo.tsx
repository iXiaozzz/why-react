import React from "react";
import { ITodo } from "@/api/types";

type TProps = {
  todo: ITodo;
};

function Todo(props: TProps) {
  const { title, description } = props.todo;
  return (
    <div className="Card">
      <h1>{title}</h1>
      <span>{description}</span>
    </div>
  );
}

export default Todo;
