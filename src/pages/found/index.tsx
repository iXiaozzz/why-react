import React from "react";
import { GQL_GET_TODOS } from "@/service/graphql";
import { useTodoQuery } from "@/common/hooks/useRequest";
import { ITodo } from "@/api/types";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { List } from "antd-mobile";
function Found() {
  const { loading, error, data } = useTodoQuery(GQL_GET_TODOS);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong!</h1>;
  return (
    <div>
      <h1
        style={{
          fontSize: "1.5rem",
          textAlign: "center",
          fontWeight: "bold",
          padding: "0.6rem 0",
        }}
      >
        My Todos
      </h1>
      <AddTodo />
      <List>
        {data?.getTodos.map((todo: ITodo) => {
          return (
            <List.Item title={todo.title} clickable>
              {todo.description}
            </List.Item>
          );
        })}
      </List>
    </div>
  );
}

export default Found;
