import './App.css';
import { SafetyButton } from 'safety-button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	<h1>SafetyButton Example</h1>
        <SafetyButton dangerValue={5} warningText="Hold the button for 5 seconds">
          <button>Some Sensitive Action</button>
        </SafetyButton>
     </header>
    </div>
  );
}

export default App;
