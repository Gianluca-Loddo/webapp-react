import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Body from "../Components/Body";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {

    return (
        <>
            <Header />
            <div className="main-content">
                <Body>
                    <Outlet />
                </Body>
            </div>
            <Footer />
        </>
    );

}