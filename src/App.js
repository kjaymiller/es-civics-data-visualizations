import { EuiProvider } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import Header from './eui-header.js';
import Topic from './eui-object-template.js';


function App() {
  return (
    <EuiProvider colorMode='light'>
      <Header />
      <Topic />
    </EuiProvider>
  );
}

export default App;
