import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';

import TodoList from './components/TodoList';

const Home: ActivityComponentType = () => {
  // asdfasdf
  // asdfasd

  return (
    <AppScreen appBar={{ title: '홈' }}>
      <div>
        <TodoList />
      </div>
    </AppScreen>
  );
};

export default Home;
