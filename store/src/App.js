const App = () => {
  const categories = [
    {
      id: 1,
      title: "Men",
    },
    {
      id: 1,
      title: "women",
    },
    {
      id: 2,
      title: "women",
    },
    {
      id: 3,
      title: "Children",
    },
  ];
  return (
    <div className="categories-container">
      <div className="category-container">
        {categories.map(({title}) => {
          return (
            <div className="category-body-container">
              <h2>{ title}</h2>
              <p>Lets shop now</p>
            </div>
          );
        })}
        
      </div>
    </div> //end categories;
  );
};
export default App;
