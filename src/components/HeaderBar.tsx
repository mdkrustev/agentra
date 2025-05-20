import GoogleLoginButton from "./GoogleLoginButton";


export default function HeaderBar() {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" src={'/img/agentra-logo.png'} />
            </div>
            <GoogleLoginButton/>
        </div>
    )
}