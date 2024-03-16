import Sidebar from "./Sidebar";

const Layout = ({ children,role }) => {
  return (
    <div className="flex h-[100vh] overflow-auto">
      <Sidebar role={role} />
      <div className="w-[calc(100vw-250px)]">{children}</div>
    </div>
  );
};
export default Layout;
