import { graphql, useLazyLoadQuery } from 'react-relay';

import { useFlow } from '~/libs/stackflow';

import type { TodoListQuery as TodoListQueryType } from './__generated__/TodoListQuery.graphql';

const TodoList = () => {
  const data = useLazyLoadQuery<TodoListQueryType>(TodosQuery, {});
  const todos = data.todos?.data;

  const { push } = useFlow();

  return (
    <ul>
      {todos?.map(todo => (
        <li key={todo.id}>
          <button onClick={() => push('Todo', { id: todo.id })}>
            {todo.attributes?.content}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

const TodosQuery = graphql`
  query TodoListQuery {
    todos {
      data {
        id
        attributes {
          content
          completed
        }
      }
    }
  }
`;
