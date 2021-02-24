import { connect } from 'react-redux';
import InputField from './components/InputField';
import TodosList from './components/TodosList';
import { deleteAll } from './redux/action/addTodo.action';
import './styles.css';

function App({ deleteAll }) {
  return (
    <div className="App">
      <h1 style={{ textDecoration: 'underline' }}>Todos App</h1>
      <InputField />
      <TodosList />
      <div>
        <button
          onClick={deleteAll}
          style={{ marginTop: '20px', cursor: 'pointer' }}
        >
          Delete All
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteAll: () => dispatch(deleteAll())
});

export default connect(null, mapDispatchToProps)(App);
