import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { KeycloakProvider } from 'react-keycloak'
import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
    url: 'http://localhost:8180/',
    realm: 'test',
    clientId: 'test',
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <KeycloakProvider keycloak={keycloak}>
        <App />
    </KeycloakProvider>
)
