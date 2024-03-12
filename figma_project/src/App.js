import "./App.css";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App bg-app-background">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
