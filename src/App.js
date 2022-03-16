import GlobalStyle from './styles/GlobalStyles';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import S022200010 from "./views/S022200010";
import Test from "./views/standard/reducertest";

const App = ({ store }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact element={<S022200010 />} />
          <Route path="/test" exact element={<Test />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
