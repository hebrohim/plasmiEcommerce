
import Home from './components/Home';
import GlobalContextsProvider from './components/plasmic/furn_e_commerce/PlasmicGlobalContextsProvider'

function App() {
  return (<GlobalContextsProvider><Home /></GlobalContextsProvider>);
}

export default App;
  