import App from './route/App.svelte';
import err404 from './route/404.svelte';

switch (window.location.pathname) {
  case '/':
    new App({
      target: document.querySelector('#app'),
    });
    break;

  default:
    new err404({
      target: document.querySelector('#app'),
    });
    break;
}
