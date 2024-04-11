import { graphql, useLazyLoadQuery } from 'react-relay';

import type { TodoListQuery as TodoListQueryType } from './__generated__/TodoListQuery.graphql';
import TodoItem from './TodoItem';

const TodoList = () => {
  const data = useLazyLoadQuery<TodoListQueryType>(TodosQuery, {});
  const todos = data.todos?.data;

  return (
    <div className="px-4">
      <h2 className="mt-4 mb-2 text-lg font-bold">오늘 할 일</h2>
      <ul>{todos?.map(todo => <TodoItem key={todo.id} todo={todo} />)}</ul>
    </div>
  );
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
