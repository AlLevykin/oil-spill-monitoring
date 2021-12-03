import { useEffect } from 'react';
import { Provider } from 'react-redux';
import MapGL from "../MapGL";
import Sidebar from "../Sidebar";
import store from '../../store';
import Viewer from '../Spills/Viewer';
import SpillToast from './SpillToast';

const App = () => {

  useEffect(() => {
    store.dispatch.spills.getSpills();
  }, []);

  return (
    <Provider store={store}>
      <Sidebar />
      <MapGL />
      <Viewer />
      <SpillToast />
    </Provider>
  );
}

export default App;
