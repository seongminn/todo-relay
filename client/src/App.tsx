import './styles/global.css';
import '@stackflow/plugin-basic-ui/index.css';

import { Suspense, useState } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';

import { createEnvironment } from './graphql';
import { Stack } from './libs/stackflow';

function App() {
  const [environment] = useState(createEnvironment());

  return (
    <RelayEnvironmentProvider environment={environment}>
      <div className="relative w-full flex justify-center bg-slate-100">
        <main className="max-w-[360px] w-full h-dvh relative overflow-hidden shadow-[0 .25rem 1rem 0 rgba(0, 0, 0, .1)] transform-[translate3d(0,0,0)]">
          <Suspense fallback={<div>로딩 중...</div>}>
            <Stack />
          </Suspense>
        </main>
      </div>
    </RelayEnvironmentProvider>
  );
}

export default App;
