import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ClientApp } from '@wsh-2024/app/src';

import { registerServiceWorker } from './utils/registerServiceWorker';

const main = async () => {
  await registerServiceWorker();

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <ClientApp />
    </BrowserRouter>,
  );
};

main().catch(console.error);
