import './styles.scss';

function ItemListContainer({greeting}) {
    return (
      <div className="greeting">
        <h2>{greeting}</h2>
      </div>
    );
  }
  
  export default ItemListContainer;