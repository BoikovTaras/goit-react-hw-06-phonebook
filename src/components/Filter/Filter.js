import React from 'react';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import filterActions from '../../redux/input/input-actions';

const Filter = ({ filter, filterContact }) => {
  return (
    <label className={s.find_form}>
      Find contact by Name
      <input
        className={s.find_input}
        type="text"
        value={filter}
        onChange={filterContact}
        placeholder="Enter searching name"
      />
    </label>
  );
};

const mapStateToProps = state => {
  return {
    filter: state.app.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterContact: text => dispatch(filterActions.filterContact(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
