import Keycloak from 'keycloak-js'
const keycloak = new Keycloak({
    url: 'http://localhost:8180/',
    realm: 'test',
    clientId: 'test',
    onLoad: 'login-required',
})

export default keycloak
