function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination() {
  let pages = createArrayOfSize(0).map((a) => {
    <button data-testid="page-btn">number</button>;
  });
  return <div>
    {createArrayOfSize(10)}
  </div>;
}

export default Pagination;
