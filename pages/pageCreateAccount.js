import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";


export function pageCreateAccount() {
    const date = new Date();
    const year = '' + date.getFullYear();
    const month = ('' + (date.getMonth() + 1)).padStart(2, 0);
    const day = ('' + (date.getDate())).padStart(2, 0);
    const maxDate = `${year}-${month}-${day}`;

    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head('', ['main', 'header', 'form'])}
        <body>
            ${header()}
            <main>
                <h1>Sukurti paskyra!</h1>
                <form class="form" action="" method="">
                    <div class="form-row">
                        <label for="name">Vardas</label>
                        <input id="name" type="text"/>
                    </div>
                    <div class="form-row">
                        <label for="date">Isidarbinimo data</label>
                        <input id="date" type="date" min="2020-01-01" max="${maxDate}" value="${maxDate}"/>
                    </div>
                    <div class="form-row">
                        <label for="money">Valandinis</label>
                        <input id="money" type="number" min="0" max="9999" value="5.00" step="0.01"/>
                    </div>
                    <div class="form-row">
                        <button type="submit">Registruoti</button>
                    </div>
                </form>
            </main>
            ${footer()}

            <script src="/js/create-account.js" type="module"></script>
        </body>
        </html>
    `;
};