import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function pageHome() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head('', ['main', 'header'])}
        <body>
            ${header('/')}
            <main>
                <h1>Sveiki atvyke i "Atlyginimas" platforma!</h1>
                <p>Pasirinkite savo sekacius zingsnius!</p>
                <a class="btn" href="/create-account">Susikurti paskyra</a>
                <a class="btn" href="/accounts">Perziureti visas paskyras</a>
            </main>
            ${footer()}
        </body>
        </html>
    `;
};