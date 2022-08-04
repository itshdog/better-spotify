import React from 'react'
import { Container } from 'react-bootstrap'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=25f06efb0ad24c40bd02a2292c55d1c5&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
    return (
    <Container
        className="d-flex justify-content-center align-items-center"
        style={{minHeight: "100vh"}}
    >
        <div className="position-absolute" style={{top: '42%'}} id="login-title">Better Spotify</div>
        <a className="btn btn-success btn-lg position-absolute" style={{top: '53%'}} href={AUTH_URL}>
            Login With Spotify
        </a>
    </Container>
    )
}