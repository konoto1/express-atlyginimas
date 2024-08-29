export function header(currentPageHref) {

    return `
    <header>
        <img src="./img/logo.png" alt="Logo" />
        <nav>
            <a class="${currentPageHref === '/' ? 'active' : ''}" href="/">Pagrindinis</a>
            <a class="${currentPageHref === '/about' ? 'active' : ''}" href="/about">Apie projekta</a>
            <a class="${currentPageHref === '/accounts' ? 'active' : ''}" href="/accounts">Visos paskyros</a>
        </nav>
    </header>
    `;
};