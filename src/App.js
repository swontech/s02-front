import GlobalStyle from './styles/GlobalStyles';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Test from "./pages/standard/reducertest";

import S021100020 from "./pages/s021/S021100020";
import S022200010 from "./pages/s022/S022200010";
import styles from 'styled-components'

const RootModal = styles.div`
  font-family: "Apple SD Gothic Neo", "NotoSansKR", "NanumMyeongjo";
  font-size: 14px;
  color: #000;
`

const App = ({ store }) => {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Router>
        <Routes>
          <Route path="/" exact element={<S022200010 />} />
          <Route path="/test" exact element={<Test />} />
          <Route path="/s021100020" exact element={<S021100020 />} />
        </Routes>
      </Router>

      <Footer />

      <RootModal id="root-modal" />
    </>
  );
}

export default App;
