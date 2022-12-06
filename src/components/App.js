import Display from "./Display";
import ButtonPannel from "./ButtonPannel";
import {useCalculate} from '../logic/calculate';

function App() {
  const {calculate, next, total} = useCalculate();

  const changeHandler = (value) => {
    calculate(value);
  }

  return (
    <div className="App">
      <Display display={next || total ? next || total : '0'}/>
      <ButtonPannel changeHandler={changeHandler}/>
    </div>
  );
}

export default App;