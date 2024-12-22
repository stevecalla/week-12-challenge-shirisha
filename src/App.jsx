import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Page from "./components/Page";
import { useLocation } from "react-router-dom";

function App() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <Header>
        <Navigation currentPage={currentPage} />
      </Header>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
