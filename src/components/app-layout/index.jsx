import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import FormComponent from '../form'
import TodoComponent from '../todo'

import './styles.css';
import configureStore from '../../configureStore';


const initialItems = [
    {id: Date.now(),  date: Date.now(), value: "HELLLLLLO", flag: false, readonly: false}
];

const store = configureStore(initialItems);


export default class TodoContainer extends React.PureComponent{
  
  render(){ 
    return (
      <Provider store={store}>
        <div className="wrapper">
          <div className="title" >TO - DO LIST</div>
            <FormComponent />
            <TodoComponent />
        </div>
      </Provider>
    )
  }
}










