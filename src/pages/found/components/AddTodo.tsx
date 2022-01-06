import React, { useState } from "react";
import { ApolloCache } from "@apollo/react-hooks";
import { FetchResult } from "apollo-boost";

import { useTodoMutation } from "@/common/hooks/useRequest";
import { GQL_GET_TODOS, GQL_PUT_TODO } from "@/service/graphql";
import { ITodo, ITodoMutation, ITodos } from "@/api/types";

import { Form, Button, Input } from "antd-mobile";

function AddTodo() {
  //   const [formData, setFormData] = useState<ITodo | {}>();
  const [addTodo] = useTodoMutation(GQL_PUT_TODO);

  const onFinish = (todo: ITodo) => {
    const { title, description } = todo;
    addTodo({
      variables: { title, description },
      update: (
        cache: ApolloCache<ITodoMutation>,
        { data: { addTodo } }: FetchResult<ITodoMutation>
      ) => {
        const cacheData = cache.readQuery({ query: GQL_GET_TODOS }) as ITodos;
        cache.writeQuery({
          query: GQL_GET_TODOS,
          data: {
            getTodos: [...cacheData.getTodos, addTodo],
          },
        });
      },
    });
  };

  return (
    <Form
      onFinish={onFinish}
      footer={
        <Button block type="submit" color="primary">
          Add Todo
        </Button>
      }
    >
      <Form.Item
        name="title"
        label="title"
        rules={[{ required: true, message: "title不能为空" }]}
      >
        <Input placeholder="please input title" autoComplete="off" />
      </Form.Item>
      <Form.Item
        name="description"
        label="description"
        rules={[{ required: true, message: "description不能为空" }]}
      >
        <Input placeholder="please input description" autoComplete="off" />
      </Form.Item>
    </Form>
  );
}

export default AddTodo;
