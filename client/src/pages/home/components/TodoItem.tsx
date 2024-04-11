import { graphql, useFragment } from 'react-relay';

import { useFlow } from '~/libs/stackflow';

import { TodoItem_todo$key } from './__generated__/TodoItem_todo.graphql';

interface TodoItemProps {
  todo: TodoItem_todo$key;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const data = useFragment(TodoItemFragment, todo);
  const { push } = useFlow();

  return (
    <li>
      <button onClick={() => push('Todo', { id: data.id })}>
        {data.attributes?.content}
      </button>
    </li>
  );
};

const TodoItemFragment = graphql`
  fragment TodoItem_todo on TodoEntity {
    id
    attributes {
      content
      completed
    }
  }
`;

export default TodoItem;
