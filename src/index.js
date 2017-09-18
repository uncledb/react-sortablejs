import React from 'react';
import ReactDOM from 'react-dom'
import SortableList from './main/SortableList';
import uuid from 'uuid';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			list: [1, 2, 3, 4]
		}
	}

	updateList = () => {
		this.setState({
			list: [5, 6, 7, 8]
		})
	};

	render() {
		const {list} = this.state;
		const that = this;
		let p = {
			options: {
				onEnd: function (evt) {
					console.log(evt.oldIndex, evt.newIndex, 'come from pranet');
					that.updateList();
				}
			}
		};
		return (
			<div>
				<SortableList {...p}>
					{
						list.map((item, i) => {
							return <span key={item}>{item}</span>
						})
					}
				</SortableList>
			</div>
		)
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);
