import './App.css';
import Wrapper from './Wrapper';
import BottomBanner from './bottomBanner';
import Footer from './footer';
import Header from './header';
import MiddleBanner from './middleBanner';
import UpperBanner from './upperBanner';

function App() {
  return (
    <Wrapper>
      <Header />
      <UpperBanner />
      <MiddleBanner />
      <BottomBanner />
      <Footer />
    </Wrapper>
  );
}

export default App;
