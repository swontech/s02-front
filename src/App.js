import GlobalStyle from './styles/GlobalStyles';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import S022200010 from './views/S022200010';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
        <S022200010 />
      <Footer />
      <div id="root-modal" />
    </>
  );
}

export default App;
