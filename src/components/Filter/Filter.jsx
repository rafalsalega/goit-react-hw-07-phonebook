import css from './Filter.module.css';
import {  useDispatch } from 'react-redux';
import { setFilter } from '../../redux/actions';

export const Filter = () => {  
  const dispatch = useDispatch();

  const handleFilter = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <>
      <p className={css.item}>Find contact by name</p>
      <input
        type="text"
        placeholder="Search contacts"
        onChange={handleFilter}
      />
    </>
  );
};