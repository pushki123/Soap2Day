function ListGroup() {
  let items = ["lon", "tok", "ita", "was", "ind"];

  items = [];

  items.map((item) => <li>{item}</li>);

  return (
    <>
      <h1>WEEEB</h1>
      {items.length === 0 && <p>No items Found</p>}

      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
