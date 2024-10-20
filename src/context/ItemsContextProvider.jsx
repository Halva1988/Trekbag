import { createContext, useEffect, useState } from "react";

export const ItemsContext = createContext();

const ItemsContextProvider = ({ children }) => {
	const [items, setItems] = useState(
		() => JSON.parse(localStorage.getItem("items")) || []
	);

	const numbersOfItems = items.length;
	const packedItems = items.filter((item) => item.packed).length;

	const handleAddItem = (itemText) => {
		const newItem = {
			id: Date.now(),
			name: itemText,
			packed: false,
		};

		setItems([...items, newItem]);
	};

	const handleMarkAllAsComplete = () => {
		const newItems = items.map((item) => {
			return { ...item, packed: true };
		});
		setItems(newItems);
	};

	const handleMarkAllAsIncomplete = () => {
		const newItems = items.map((item) => {
			return { ...item, packed: false };
		});
		setItems(newItems);
	};

	const handleRemoveAllItems = () => {
		setItems([]);
	};

	const handleToggleItem = (id) => {
		const newItems = items.map((item) =>
			item.id === id ? { ...item, packed: !item.packed } : item
		);
		setItems(newItems);
	};

	const handleRemoveItem = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	};

	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(items));
	}, [items]);

	return (
		<ItemsContext.Provider
			value={{
				items,
				packedItems,
				numbersOfItems,
				handleAddItem,
				handleToggleItem,
				handleRemoveItem,
				handleRemoveAllItems,
				handleMarkAllAsComplete,
				handleMarkAllAsIncomplete,
			}}
		>
			{children}
		</ItemsContext.Provider>
	);
};

export default ItemsContextProvider;
