# microclip

Minimal copy to clipboard function.


### Install

```bash
npm install microclip
```


### Usage

```js
import { copy } from 'microclip';

copy('Text to copy');
```

#### Legacy Example

```js
var microclip = require('microclip');

microclip.copy('Text to copy');
```

#### React Example
```jsx
import React, { Component } from 'react';
import { copy } from 'microclip';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Microclip</h2>

        <button onClick={ () => copy(new Date().toISOString()) }>Copy ISO Date</button>
      </div>
    );
  }
}

export default App;
```
