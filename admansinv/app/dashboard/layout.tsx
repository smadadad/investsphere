import SideNav from "./components/sideNav";
import TopNav from "./components/topNav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="montserrat flex">
            <SideNav/>
            <div className="grow">
                <TopNav/>
                {children}
            </div>
        </div>
                
        
    )
}