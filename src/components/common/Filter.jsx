import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../store/rootStore';
import { filterAllBooks, filterPrivateBooks } from '../../shared/constants/filterBookTypes';
import filterBookTypeToNameMap from '../../shared/constants/filterBookTypeToNameMap';

const Filter = observer(() => {
  const { filterStore } = useStore();

  return (
    <div>
      {[filterAllBooks, filterPrivateBooks].map((type) => (
        <div key={type}>
          <input
            onChange={() => filterStore.model.setFilterType(type)}
            type="radio"
            name="filterTypes"
            id={type}
            checked={filterStore.model.filterType === type}
          />
          <label htmlFor={type}>{filterBookTypeToNameMap[type]}</label>
        </div>
      ))}
    </div>
  );
});

export default Filter;
