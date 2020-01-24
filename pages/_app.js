import React from 'react'
import App from 'next/app'
import { Grommet, grommet as grommetTheme } from 'grommet'
import { Provider } from 'mobx-react';
import initializeStore from '../stores/';

export default class MyApp extends App {
  static async getInitialProps(appContext) {
    const mobxStore = initializeStore();
    appContext.ctx.mobxStore = mobxStore;
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }
  constructor(props) {
    super(props);
    const isServer = typeof window === 'undefined';
    this.mobxStore = isServer ? props.initialMobxState : initializeStore(props.initialMobxState);
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={this.mobxStore}>
        <Grommet theme={grommetTheme}>
          <Component {...pageProps} />
        </Grommet>
      </Provider>
      
    )
  }
}
