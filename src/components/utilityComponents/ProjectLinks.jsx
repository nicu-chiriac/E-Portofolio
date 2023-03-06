import items from './../../assets/items/items';

const ProjectLinks = ({ filterCriteria }) => {
  const filteredItems = items.filter((item) =>
    filterCriteria.includes(item.name)
  );

  return (
    <div className="links">
      <h3>Stack used:</h3>
      {filteredItems.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
}

export default ProjectLinks;