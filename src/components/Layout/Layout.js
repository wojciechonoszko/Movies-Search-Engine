import { Outlet } from 'react-router';
import { Link, Header } from './LayoutStyles';

export default function Navigations() {
    return (
        <Header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </nav>
            <Outlet />
        </Header>
    );
}