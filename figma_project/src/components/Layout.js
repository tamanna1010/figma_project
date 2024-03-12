import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-[100%]">
      <Sidebar />
      <div className="w-[calc(100vw-250px)]">{children}</div>
    </div>
  );
};
export default Layout;
