import { Amplify } from 'aws-amplify';
import config from './src/aws-exports';
import AuthContextProvider from './src/contexts/AuthContext';

import Navigation from './src/navigation';

Amplify.configure(config);


const App = () => {
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
};

export default App;
