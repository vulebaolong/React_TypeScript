import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

type Props = {};
const HomeLayout = (props: Props) => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
export default HomeLayout;
