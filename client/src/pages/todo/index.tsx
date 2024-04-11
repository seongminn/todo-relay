import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';

const Detail: ActivityComponentType = () => {
  return (
    <AppScreen
      appBar={{
        title: '디테일',
      }}
    >
      디테일입니다.
    </AppScreen>
  );
};

export default Detail;
