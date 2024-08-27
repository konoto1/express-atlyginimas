export function header(currentPageHref) {

    return `
    <header>
        <img src="#" alt="Logo" />
        <nav>
            <a class="${currentPageHref === '/' ? 'active' : ''}" href="/">Pagrindinis</a>
            <a class="${currentPageHref === '/about' ? 'active' : ''}" href="/about">Apie projekta</a>
            <a class="${currentPageHref === '/accounts' ? 'active' : ''}" href="/accounts">Susikurti paskyra</a>
        </nav>
    </header>
    `;
};