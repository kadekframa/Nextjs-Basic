import Footer from "../components/footer/Footer";
import Header from "../components/header/header";
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout = (props: LayoutProps) => {
    const { children } = props;
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;