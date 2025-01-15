import Color from './components/color/Color';
import GlobalStyle from './styled/reset';
import Counter from './components/count/Counter';
import ChangeColor from './components/color/ChangeColor';
import Count from './components/count/Count';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Color />
      <ChangeColor />
      <hr />
      <Counter />
      <hr />
      <Count />
    </>
  );
};

export default App;
