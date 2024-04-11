import { graphql, useFragment } from 'react-relay';

import { cn } from '~/libs/utils';

import { TodoItem_todo$key } from './__generated__/TodoItem_todo.graphql';

interface TodoItemProps {
  todo: TodoItem_todo$key;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const data = useFragment(TodoItemFragment, todo);

  return (
    <li className="flex items-center gap-2">
      <input
        type="checkbox"
        defaultChecked={data.attributes?.completed || false}
      />
      <span
        className={cn(
          'flex-1',
          data.attributes?.completed && 'line-through text-gray-400',
        )}
      >
        {data.attributes?.content}
      </span>
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
