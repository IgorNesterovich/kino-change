import '../css/pages/page.css';
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function Page()
{
    return (
        <>
            <Header />
            <main className="main">
                <div className='container'>
                    <div className='wrapper'>
                        <Sidebar />
                        <Outlet />
                    </div>
                </div>
            </main>
            <div className='container'>
                <Footer />
            </div>
        </>
    )
}