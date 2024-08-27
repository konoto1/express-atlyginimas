import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function pageAbout() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head('Apie projekta', ['main', 'header'])}
        <body>
            ${header('/about')}
            <main>
                <h1>Apie projekta</h1>
                <p>Projektas, kuriame galima:</p>
                <h2>Darbuotojo profilis:</h2>
                <ul>
                    <li>Susikurti</li>
                    <li>Pamatyti visus registruotus darbuotojus (sarasas)</li>
                    <li>Pasallinti</li>
                    <li>Redaguoti varda</li>
                    <li>Redaguoti pavarde</li>
                </ul>
            </main>
            ${footer()}
            </body>
        </html>
    `;
};