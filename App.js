import React, { Component } from 'react';
import img1 from './img.jpg';


import Box from './components/Box';

class App extends Component {
  render() {
  	const C1 ={
 textAlign: 'center',
 fontSize: 'large',
 color: 'red'
}
	const C2 ={
 textAlign: 'center',
fontSize: 'small',
color: 'yellow'
}

const img ={

height: 400,
width:  400
}

  	
    return (
      <div className="Z1">
        <img src={img1} style={img} />

        <p style={C1}>azertya</p>

<br/>
<hr/>

        <p style={C2}>azerty</p>
      </div>
  

    );
  }
}
export default App;