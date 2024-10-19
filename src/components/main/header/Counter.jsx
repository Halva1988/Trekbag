const Counter = ({ numbersOfItems, packedItems }) => {
  
	return (
		<div className="counter">
      <b>{packedItems}</b> / {numbersOfItems} items packed
		</div>
	);
};

export default Counter;
