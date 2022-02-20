import { EuiProvider } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import Header from './eui-header.js';
import TopicView from './seattle-terry-stops.js';
import Charter from './demo_charts.js';

function App() {
  return (
    <EuiProvider colorMode='light'>
      <Header />
      <TopicView />
      <Charter />
    </EuiProvider>
  );
}

export default App;
