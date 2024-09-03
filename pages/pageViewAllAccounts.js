import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";
import { accountsData } from "../data/accountsData.js";
import { workingDaysCount } from "../lib/helpers.js";



export function pageViewAllAccounts() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;

    const previousYear = currentMonth === 1 ? currentYear - 1 : currentYear;
    const previousMonth = currentMonth - 1 || 12;

    const workingHoursPerDay = 8;
    const previousMonthWorkingDays = workingDaysCount(previousYear, previousMonth);
    const currentMonthWorkingDays = workingDaysCount(currentYear, currentMonth);

    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head('Visos paskyros', ['main', 'header', 'table'])}
        <body>
           ${header('/accounts')}
            <main>
                <div class="flex">
                <h1>Visos paskyros</h1>
                <a class="btn" href="/create-account">+ Nauja</a>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Vardas</td>
                            <td>Isidarbinimo data</td>
                            <td>Valandinis</td>
                            <td>Praeitas menuo</td>
                            <td>Einamasis menuo</td>
                        </tr>
                    </thead>
                    <tbody>
                    ${accountsData.map((item, index) => `
                    <tr>
                                <td>${index + 1}</td>
                                <td>${item.name}</td>
                                <td>${item.date}</td>
                                <td>${item.rate}</td>
                                <td>${previousMonthWorkingDays} d.d. (${item.rate * previousMonthWorkingDays * workingHoursPerDay} Eur)</td>
                                <td>${currentMonthWorkingDays} d.d. (${item.rate * currentMonthWorkingDays * workingHoursPerDay} Eur)</td>
                    </tr>`).join('')}
                    </tbody >
                </table >
            </main >
        ${footer()}
        </body >
        </html >
        `;
};