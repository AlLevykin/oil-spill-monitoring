import { Provider } from 'react-redux';
import MapGL from "../MapGL";
import Sidebar from "../Sidebar";
import store from '../../store';

const App = () => {
  return (
    <Provider store={store}>
        <Sidebar />
        <MapGL /> 
    </Provider>
  );
}

export default App;
