import './App.css';
import Main from './components/Main'
import { DataProvider } from './contextAPI/DataContext'

import { VerifyProvider } from './contextAPI/VerifyContext'

function App() {


  return (
    <DataProvider>
      <VerifyProvider>
          <Main />
      </VerifyProvider>
    </DataProvider>

  );
}

export default App;
