import GQL from "graphql-tag";

export const GQL_GET_TODOS = GQL`
  {
    getTodos {
      id
      title
      description
      status
    }
  }
`;

export const GQL_PUT_TODO = GQL`
  mutation PutTodo($title: String!, $description: String!){
    addTodo(todoInput:{title: $title, description:$description}){
          id
          title
          description
          status
      }
  }
`;
