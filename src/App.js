import { EuiProvider } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import Header from './eui-header.js';
import TopicView from './seattle-terry-stops.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

function App() {
  return (
    <EuiProvider colorMode='light'>
      <Header />
      <TopicView />
    </EuiProvider>
  );
}

export default App;
