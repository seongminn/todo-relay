import { graphql, useLazyLoadQuery } from 'react-relay';

import type { TodoListQuery as TodoListQueryType } from './__generated__/TodoListQuery.graphql';
import TodoItem from './TodoItem';

const TodoList = () => {
  const data = useLazyLoadQuery<TodoListQueryType>(TodosQuery, {});
  const todos = data.todos?.data;

  return <ul>{todos?.map(todo => <TodoItem key={todo.id} todo={todo} />)}</ul>;
};

export default TodoList;

const TodosQuery = graphql`
  query TodoListQuery {
    todos {
      data {
        id
        ...TodoItem_todo
      }
    }
  }
`;
