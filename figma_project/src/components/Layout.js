
import Sidebar from "./Sidebar"

const Layout=({children})=>{
    return <div className="flex h-[100%]">
        <Sidebar/>
        <div>{children}</div>
    </div>
}
export default Layout