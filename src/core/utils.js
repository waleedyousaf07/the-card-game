/* eslint-disable no-underscore-dangle */
import sorterOptions from '../common/sorter/Sorter.utils';

const sortByKey = (items, key, sortTo) => {
  const _items = [...items];

  const sortToMapper = {
    [sorterOptions.ascending]: -1,
    [sorterOptions.descending]: 1,
  };

  const _sortTo = sortToMapper[sortTo] ?? 0;

  _items.sort((a, b) => {
    const first = a[key].toUpperCase();
    const second = b[key].toUpperCase();
    if (first < second) return _sortTo * 1;
    if (first > second) return _sortTo * -1;

    return 0;
  });

  return _items;
};

export default sortByKey;
