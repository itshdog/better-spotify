import React from 'react'
import { Container } from 'react-bootstrap'

const authEndpoint = "https://accounts.spotify.com/authorize"
const clientId = "25f06efb0ad24c40bd02a2292c55d1c5"
const redirectUri = "https://itshdog-spotify.herokuapp.com/"
const scopes = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-library-read",
    "user-library-modify",
    "user-read-playback-state",
    "user-modify-playback-state"
]

export default function Login() {
    return (
    <Container
        className="d-flex justify-content-center align-items-center"
        style={{minHeight: "100vh"}}
    >
        <div className="position-absolute" style={{top: '42%'}} id="login-title">Better Spotify</div>
        <a className="btn btn-success btn-lg position-absolute" style={{top: '53%'}} href={
            `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=code&show_dialog=true`
        }>
            Login With Spotify
        </a>
    </Container>
    )
}