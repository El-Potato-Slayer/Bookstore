import PropTypes from 'prop-types';

function CategoryFilter({ handleFilter }) {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <div>
      <span>Filter</span>
      <select onChange={handleFilter}>
        {
          categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))
        }
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
