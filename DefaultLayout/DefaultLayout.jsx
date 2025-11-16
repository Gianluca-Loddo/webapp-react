import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Body from "../Components/Body";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {

    return (
        <>
            <Header />
            <Body>
                <Outlet/>
            </Body>
            <Footer />
        </>
    );

}