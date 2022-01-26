import filterTypes from './filter-types';

const filterContact = text => ({
  type: filterTypes.FILTER,
  payload: text,
});

export default { filterContact };
