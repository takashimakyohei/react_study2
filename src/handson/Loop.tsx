function Loop() {
  const items = ['Apple', 'Banana', 'Cherry'];
  const products = [
    {id: 1, title: 'iphone'},
    {id: 2, title: 'Android'}
  ]
  return (
      <>
        <ul>
          {items.map((item, index) => (
              <li key={index}>{item}</li>
          ))}
        </ul>
        <ul>
          {products.map((product) => (
              <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </>
  );
}

export default Loop