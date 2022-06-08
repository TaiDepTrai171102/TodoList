import './App.css';
import Header from './components/Header'
import ButtonPluss from './components/Button/ButtonPluss';
import Input from './components/Input';
import Divider from './components/Divider';
import List from './components/List';
import Panigation from './components/Pagination';
import HelloWorld from './components/HelloWorld'
import { listTasks } from './constants/index';
function App() {
  return (
    
    <form>
    <div className="App">
      <Header title={'TO DO LIST APPLICATION'} />
      <div className='add-task-wrapper'>
        <Input />
        <ButtonPluss />
      </div>
      <Divider fullWidth />
      <List listTasks={listTasks}  />
      <Divider fullWidth />
      <Panigation />
    </div>
    </form>
  );
}

export default App;