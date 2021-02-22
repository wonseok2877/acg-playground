import { ApolloProvider } from "@apollo/client";
import ReactDom from "react-dom";
import { client } from "./ApolloProvider";
import App from "./App";

ReactDom.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector("#root")
);
