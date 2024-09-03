/**
 * Funkcija kuri patikrina ar duotasis tekstas yra sudarytas tik is leistinu simboliu
 * @param {string} str Analizuojamas tekstas
 * @param {string} abc Leistinu simboliu abecele
 * @returns {boolean}
 */
export function textContainsOnlyAllowedSymbols(str, abc) {
    return str.split('').map(s => abc.includes(s)).every(x => x === true);
}

/**
 * Duotame tekste, pagal pateikta **leistiniu** simboliu abecele, randamas ir grazinamas _pirmasis_ neleistinas simbolis.
 * @param {string} str Analizuojamas tekstas
 * @param {string} abc leistinu simboliu abecele
 * @returns {string} Panaudotas neleistinas simbolis (pirmasis kuri pavyko rasti) arba tuscias stringas jei neleistinu naudoti simboliu nerasta.
 * @examples
 * ```js
 * firstNonAllowedSymbol('labas', 'abc'); // 'l'
 * firstNonAllowedSymbol('labas', 'abcl'); // 's'
 * ```
 */
export function firstNonAllowedSymbol(str, abc) {
    return str.split('').filter(s => !abc.includes(s))[0] ?? '';
}

export function workingDaysCount(year, month) {
    let daysCount = 0;

    for (let i = 1; i <= 31; i++) {
        const m = month < 10 ? '0' + month : month;
        const d = i < 10 ? '0' + i : i;
        const dateStr = `${year}-${m}-${d}`;
        const obj = new Date(dateStr);

        if (month === (obj.getMonth() + 1) && obj.getDay() >= 1 && obj.getDay() <= 5) {
            daysCount++;
        }
    }

    return daysCount;
}