import React from 'react';
import Sortable from 'sortablejs';


class SortableList extends React.Component {

	constructor() {
		super();
		this.sortId = +new Date();
	}

	static defaultProps = {
		options: {
			onEnd: function (evt) {
				console.log(evt.oldIndex, evt.newIndex);
			}
		},
		sortListData: [1, 2, 3],
	};

	componentDidMount() {
		this.createSortable();
	}


	componentDidUpdate() {
		this.createSortable();
	}

	createSortable = () => {
		let el = document.getElementById(this.sortId);
		Sortable.create(el, this.props.options);
	};

	render() {
		const {sortId} = this;
		return (
			<div>
				<div id={sortId}>
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default SortableList;
