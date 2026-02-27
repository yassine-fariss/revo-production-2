import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-[80px]">
                {/* pt-[80px] to account for fixed navbar height */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
