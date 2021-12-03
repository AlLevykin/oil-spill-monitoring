import { Provider } from 'react-redux';
import MapGL from "../MapGL";
import Sidebar from "../Sidebar";
import store from '../../store';
import Viewer from '../Spills/Viewer';

const App = () => {
  return (
    <Provider store={store}>
        <Sidebar />
        <MapGL /> 
        <Viewer />
    </Provider>
  );
}

export default App;
