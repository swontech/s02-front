import GlobalStyle from './styles/GlobalStyles';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
        
      <Footer />
      <div id="root-modal" />
    </>
  );
}

export default App;
