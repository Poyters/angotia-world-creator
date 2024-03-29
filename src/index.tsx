import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./store/reducers/rootReducer";
import * as serviceWorker from "./serviceWorker";
import { App } from "./App";
import "./i18n";
// import { IStore } from './interfaces/store.interface';
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./api/angotiaResources/arApiInit";

export const store: any = createStore(rootReducer);

const runApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Suspense fallback={null}>
          <App />
        </Suspense>
      </ApolloProvider>
    </Provider>,
    document.getElementById("root")
  );
};

window.addEventListener("DOMContentLoaded", runApp, false);

serviceWorker.unregister();
