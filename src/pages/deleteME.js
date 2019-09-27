<Item
  frame={JSON.parse(localStorage[i]).frame}
  image={JSON.parse(localStorage[i]).image}
  price={JSON.parse(localStorage[i]).price}
/>;

{
  objects.map((object, i) => <ObjectRow obj={object} key={i} />);
}



const myExample = () => {
  let myObj = {}
  for(let i = 0; i<5;i++) {
      myObj.push(<MyComponent/>)
  }
  return myArray
}

//... in JSX

<tbody>
  {myExample()}
</tbody>