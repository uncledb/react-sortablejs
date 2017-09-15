import React from 'react';
import Sortable from 'sortablejs';


class SortableList extends React.Component {

	componentDidMount() {
		var el = document.getElementById('items');
		var sortable = Sortable.create(el);
	}

	render() {
		return (
			<ul id="items">
				<li>item 1</li>
				<li>item 2</li>
				<li>item 3</li>
			</ul>
		)
	}
}

export default SortableList;
