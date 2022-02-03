import React from 'react';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import filterActions from '../../redux/input/input-actions';

export default function Filter() {
  const value = useSelector(state => state.app.filter);
  const dispatch = useDispatch();

  return (
    <label className={s.find_form}>
      Find contact by Name
      <input
        className={s.find_input}
        type="text"
        value={value}
        onChange={text =>
          dispatch(filterActions.filterContact(text.target.value))
        }
        placeholder="Enter searching name"
      />
    </label>
  );
}
