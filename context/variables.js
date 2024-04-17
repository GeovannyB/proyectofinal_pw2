import prodsPage from './productosPage';
import indexPage from './indexPage';
import galPage from './galeriaPage';
import blogPage from './blogPage';
import donacionesPage from './donacionesPage';
import preguntasPage from './preguntasPage';

const pageContext = {
    "/productos.html":prodsPage,
    "/index.html":indexPage,
    "/galeria.html":galPage,
    "/blog.html":blogPage,
    "/donaciones.html":donacionesPage,
    "/preguntas.html":preguntasPage,
}

const getContext = (contextKey) => {
    const _pageContext = pageContext[contextKey] || {};
    return Object.assign({}, _pageContext);
}
export default getContext;