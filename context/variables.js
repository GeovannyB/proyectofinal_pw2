import prodsPage from './productosPage';
import galPage from './galeriaPage';
import blogPage from './blogPage';
import indexPage from './indexPage';

const pageContext = {
    "/productos.html":prodsPage,
    "/galeria.html":galPage,
    "/blog.html":blogPage,
    "/index.html":indexPage
}

const getContext = (contextKey) => {
    const _pageContext = pageContext[contextKey] || {};
    return Object.assign({}, _pageContext);
}
export default getContext;