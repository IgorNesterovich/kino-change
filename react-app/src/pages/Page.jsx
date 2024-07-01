import '../css/pages/page.css';
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar';

export default function Page()
{
    return (
        <>
            <Header />
            <main className="main">
                <div className='container'>
                    <Sidebar />
                    <Outlet />
                </div>
            </main>
        </>
    )
}