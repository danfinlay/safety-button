# SafetyButton

A React component to add safety friction around sensitive actions. Users are required to hold the button down for a specified duration before the sensitive action becomes available.

You can find an example app demonstrating the usage of the ```SafetyButton``` component [here](https://danfinlay.github.io/safety-button).

## Installation
```bash
npm install safety-button
```
## Usage
```javascript
import React from 'react';
import { SafetyButton } from 'safety-button';

function App() {
  return (
    <div className="App">
      <SafetyButton dangerValue={5} warningText="Hold the button for 5 seconds">
        <button>Some Sensitive Action</button>
      </SafetyButton>
    </div>
  );
}

export default App;
```
## Props
| Prop | Type | Default | Description |
|----------|----------|----------|----------|
| dangerValue | number   | - | The number of seconds to require the user holds the button to approve. |
| warningText | string | -    | Warning message displayed below the button   |
| children  | node  | -  | React elements to render, which will be disabled until the button is held. |

