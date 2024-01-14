import './App.css';
import Wrapper from './Wrapper';
import Header from './header';
import MiddleBanner from './middleBanner';
import UpperBanner from './upperBanner';

function App() {
  return (
    <Wrapper>
      <Header />
      <UpperBanner />
      <MiddleBanner />
    </Wrapper>
  );
}

export default App;
