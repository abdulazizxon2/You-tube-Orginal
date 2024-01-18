import Navbar from "./components/navbar/Navbar";
import "./style/Style.css";
import "./style/Media.css";
import PageIndex from "./page/PageIndex";
function App() {
  return (
    <>
      <div className="kontener">
        <Navbar />
        <PageIndex />
      </div>
    </>
  );
}
export default App;
