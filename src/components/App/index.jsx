import { useEffect } from 'react';
import { Provider } from 'react-redux';
import MapGL from "../MapGL";
import Sidebar from "../Sidebar";
import store from '../../store';
import Viewer from '../Spills/Viewer';

const App = () => {

  useEffect(() => {
    store.dispatch.spills.getSpills();
  }, []);

  return (
    <Provider store={store}>
      <Sidebar />
      <MapGL />
      <Viewer />
    </Provider>
  );
}

export default App;
