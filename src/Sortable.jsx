import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import SortableJS from 'sortablejs';

let _nextSibling: null;
let _activeComponent = null;

class Sortable extends Component {
    constructor(props){
      super(props)
      this.sortableInstance = null;
    }

    componentDidMount() {
        let { options } = this.props;
        let callbacks = 'onStart onEnd onAdd onDragDrop onUpdate onRemove onFilter onMove';
        const emitEvent = (type, event) => {
					let  method = options[type];
					if (method && typeof method === "string") {
						method = options[method];
					}
					method && typeof method === "function" && method.call(this, event, this.sortableInstance);
				}
        callbacks.split(' ').forEach((cb) => {
            options[cb] = (...params) => {
                const [event] = params;

                if (cb === 'onStart') {
                    _nextSibling = event.item.nextElementSibling;
                    _activeComponent = this;
                } else if (this.props.onDragDrop && (cb === 'onAdd' || cb === 'onUpdate')) {
                    let node = (_nextSibling && _nextSibling.parentNode !== null) ? _nextSibling : null;
                    event.from.insertBefore(event.item, node);
                    let remote = _activeComponent;
                    if (remote !== this) {
                        let remoteItems = remote.sortableInstance.toArray();
                        remote.props.onDragDrop && remote.props.onDragDrop(event, remoteItems, remote.sortableInstance);
                    }
                    let items = this.sortableInstance.toArray();
                    this.props.onDragDrop(event, items, this.sortableInstance);
                }
                setTimeout(() => {
                    emitEvent(cb, event);
                }, 0);
            };
        });

        this.sortableInstance = SortableJS.create(ReactDOM.findDOMNode(this), options);
    }
    componentWillUnmount() {
      this.sortableInstance.destroy();
      this.sortableInstance = null;
    }
    render() {
        let {
            as: Component,
            ...props
        } = this.props;

        delete props.options;
        delete props.onDragDrop;

        return (
          <Component { ...props }/>
        );
    }
}
Sortable.defaultProps = {
    options: {
      ref: 'list',
		  model: 'items',
		  animation: 100,
    },
    as: 'ul',
};

export default Sortable;
