import { useRoutes } from 'react-router-dom';
import { pages } from './pages';

export const Router = () => {
    return useRoutes(pages);
}