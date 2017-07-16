import React from 'react';
import ReactDOM from 'react-dom';

import Sortable from '.././src/Sortable.jsx';

class App extends React.Component {
	render(){
		return <div>
			<Sortable onDragDrop={(e, order)=>console.log(e, order)} as="ul">
					<li data-id="1">item 1</li>
					<li data-id="2">item 2</li>
					<li data-id="3">item 3</li>
			</Sortable>
		</div>;
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));
