import App from './App.svelte'

import './style/main.scss';
import './style/variable.scss';

const app = new App({
  target: document.getElementById('app'),
  hydrate: true,
})

export default app
