import { useItemsStore } from "../../../stores/itemsStore";


const Counter = () => {
	const numbersOfItems = useItemsStore(state => state.items.length);
	const packedItems = useItemsStore(state => state.items.filter(item => item.packed).length);

	return (
		<div className="counter">
			<b>{packedItems}</b> / {numbersOfItems} items packed
		</div>
	);
};

export default Counter;
