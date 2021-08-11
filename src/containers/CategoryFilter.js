import PropTypes from 'prop-types';

function CategoryFilter({ handleFilter }) {
  const categories = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <div className="border flex items-center h-24 px-16">
      <h1 className="montserrat text-blue-500 text-2xl font-bold">
        Bookstore CMS
      </h1>
      <span className="mx-24">Books</span>
      <span className="montserrat text-gray-500 text-xs">Categories</span>
      <select onChange={handleFilter}>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      <div className="flex-1 flex justify-end">
        <img
          alt="aa"
          src="https://img.icons8.com/emoji/48/000000/mens-room-emoji.png"
        />
      </div>
    </div>
  );
}

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
