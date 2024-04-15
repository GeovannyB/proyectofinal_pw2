
import prodsPage from './productosPage';
import indexPage from './indexPage';

const pageContext = {
    "/productos.html":prodsPage,
    "/index.html":indexPage
}

const getContext = (contextKey) => {
    const _pageContext = pageContext[contextKey] || {};
    return Object.assign({}, _pageContext);
}
export default getContext;