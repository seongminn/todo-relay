import { ChangeEvent } from 'react';
import { graphql, useFragment, useMutation } from 'react-relay';

import { cn } from '~/libs/utils';

import {} from './__generated__/TodoItem_todo.graphql';
import type { TodoItemFragment$key } from './__generated__/TodoItemFragment.graphql';

interface TodoItemProps {
  todo: TodoItemFragment$key;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const data = useFragment(TodoItemFragment, todo);
  const [commitMutation, isMutationInFlight] = useMutation(
    TodoItemCheckMutation,
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    commitMutation({
      variables: {
        id: data.id,
        data: {
          completed: e.target.checked,
        },
      },
      optimisticResponse: {
        updateTodo: {
          data: {
            id: data.id,
            attributes: {
              ...data.attributes,
              completed: e.target.checked,
            },
          },
        },
      },
    });
  };

  return (
    <li className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={data.attributes?.completed || false}
        onChange={handleChange}
        disabled={isMutationInFlight}
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
  fragment TodoItemFragment on TodoEntity {
    id
    attributes {
      content
      completed
    }
  }
`;

const TodoItemCheckMutation = graphql`
  mutation TodoItemCheckMutation($id: ID!, $data: TodoInput!) {
    updateTodo(id: $id, data: $data) {
      data {
        ...TodoItemFragment
      }
    }
  }
`;

export default TodoItem;
