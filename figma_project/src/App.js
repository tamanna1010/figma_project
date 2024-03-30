import CRM from "./CRM.js";
import "./App.css";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import Appbar from "./components/AppBar.js";

function App() {
  return (
    <div className="App  ">
      {/* <Layout>
        <Home />
      </Layout> */}
      <Appbar/>
     <div className="px-7"> <CRM /></div>
    </div>
  );
}

export default App;
