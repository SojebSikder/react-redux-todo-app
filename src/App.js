import InputField from './components/InputField';
import TodosList from './components/TodosList';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1 style={{ textDecoration: 'underline' }}>Todos App</h1>
      <InputField />
      <TodosList />
      <div>
        <button>Delete All</button>
      </div>
    </div>
  );
}

export default App;
