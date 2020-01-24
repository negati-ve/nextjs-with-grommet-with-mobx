import { useStaticRendering } from 'mobx-react';

import UserStore from './UserStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

export default function initializeStore(initialData = { postStore: {} }) {
  if (isServer) {
    return {
      userStore: new UserStore(),
    };
  }
  if (store === null) {
    store = {
        userStore: new UserStore(),
    };
  }

  return store;
}