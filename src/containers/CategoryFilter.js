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
    <div className="flex items-center h-24 px-16 mb-8 bg-white">
      <h1 className="montserrat text-blue-500 text-3xl font-bold">
        Bookstore CMS
      </h1>
      <span className="mx-16 montserrat text-base">Books</span>
      <span className="montserrat text-gray-400 text-base">Categories</span>
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
