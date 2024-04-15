import prodsPage from './productosPage';
import galPage from './galeriaPage';
import blogPage from './blogPage';
import indexPage from './indexPage';

const pageContext = {
    "/productos.html":prodsPage,
    "/index.html":indexPage,
    "/galeria.html":galPage,
    "/blog.html":blogPage,
    
}

const getContext = (contextKey) => {
    const _pageContext = pageContext[contextKey] || {};
    return Object.assign({}, _pageContext);
}
export default getContext;