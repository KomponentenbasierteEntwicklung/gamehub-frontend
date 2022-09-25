import { useKeycloak } from 'react-keycloak'
import { useState, useEffect } from 'react'

export default function KeycloakPage() {
    const [keycloak, initialized] = useKeycloak()
    const [name, setName] = useState('')

    useEffect(() => {
        keycloak.loadUserInfo().then((userInfo) => {
            setName(userInfo?.name)
            console.log(userInfo.name)
        })
    }, [keycloak])

    return (
        <div>
            <div>{`User is ${
                !keycloak.authenticated ? 'NOT ' : ''
            }authenticated`}</div>

            {!keycloak.authenticated && (
                <div>
                    <button type="button" onClick={() => keycloak.login()}>
                        Login
                    </button>
                    {name}
                </div>
            )}

            {!!keycloak.authenticated && (
                <button type="button" onClick={() => keycloak.logout()}>
                    Logout
                </button>
            )}
        </div>
    )
}
