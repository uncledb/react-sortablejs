import React from 'react';
import Sortable from '../src/index';

const style = {
  padding: '5px 10px',
  border: '1px solid rgba(0,0,0,0.2)',
  margin: '5px',
  cursor: 'move'
};

export default class Simple extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [
        { id: 1, name: 'Заяц' },
        { id: 2, name: 'Волк' },
        { id: 3, name: 'Лиса' }
      ]
    };
  }
  
  handleMove(evt) {
    this.props.log({ ...evt });
    this.setState({ data: moveArray(this.state.data, evt.oldIndex, evt.newIndex) });
  }

  render() {
    return <Sortable onUpdate={this.handleMove.bind(this)} animation={250}>
      {this.state.data.map(item => {
        return <div key={item.id} style={style}>{item.name}</div>;
      })}
    </Sortable>
  }
}

function moveArray(arr, oldIndex, newIndex) {
  const newArr = [...arr];

  const old = newArr.splice(oldIndex, 1)[0];
  newArr.splice(newIndex, 0, old);

  return newArr;
}