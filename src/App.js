import './App.css';
import List from './components/List';
import store, { addTask } from './redux/store';
import { connect, Provider } from 'react-redux';

let items = [
  { id: 0, text: "ahfajdfds" },
  { id: 1, text: "ahfajdfds" },
  { id: 2, text: "ahfajdfds" },
  { id: 3, text: "ahfajdfds" },
  { id: 4, text: "ahfajdfds" },
  { id: 5, text: "ahfajdfds" },
  { id: 6, text: "ahfajdfds" },
]

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <List />
      </div>
    </Provider>
  );
}



export default App;
