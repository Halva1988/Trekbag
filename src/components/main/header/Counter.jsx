import { useItemsContext } from "../../../lib/hooks";


const Counter = () => {
	const { numbersOfItems, packedItems } = useItemsContext();

	return (
		<div className="counter">
			<b>{packedItems}</b> / {numbersOfItems} items packed
		</div>
	);
};

export default Counter;
