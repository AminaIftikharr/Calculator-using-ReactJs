import './App.css';
import Button from './components/button';
import Input from './components/input';

const App= ()=> {
  const buttoncolor ="#f2a33c";
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input />
        <div className="rows">
          <Button symbol="7"/>
          <Button symbol="8"/>
          <Button symbol="9"/>
          <Button symbol="/" color={buttoncolor}/>
        </div>
        <div className="rows">
          <Button symbol="4"/>
          <Button symbol="5"/>
          <Button symbol="6"/>
          <Button symbol="*" color={buttoncolor}/>
        </div>
        <div className="rows">
          <Button symbol="1"/>
          <Button symbol="2"/>
          <Button symbol="3"/>
          <Button symbol="+" color={buttoncolor}/>
        </div>
        <div className="rows">
          <Button symbol="0"/>
          <Button symbol="."/>
          <Button symbol="="/>
          <Button symbol="-" color={buttoncolor}/>
        </div>
        <Button symbol="Clear" />
      </div>
    </div>
  );
}

export default App;
