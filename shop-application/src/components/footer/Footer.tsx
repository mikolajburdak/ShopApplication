import "../../styles/Footer.css"

export const Footer = () => {
    return (
        <footer className="Footer">
            <p className={"FooterText"}>
                Projekt demo ·{" "} {new Date().getFullYear()}
                <a className={"FooterLink"} href="https://github.com/mikolajburdak/ShopApplication" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            </p>
        </footer>
    )
}