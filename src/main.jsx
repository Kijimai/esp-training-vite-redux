import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "./redux/store"
import { UserProvider } from "./context/UserProvider"
import { Auth0Provider } from "@auth0/auth0-react"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH_DOMAIN}
    clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation={"localstorage"}
  >
    <UserProvider>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </UserProvider>
  </Auth0Provider>
)
