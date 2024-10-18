import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./main/header/Header";
import ItemList from "./main/ItemList";
import Sidebar from "./main/sidebar/Sidebar";
import { initialItems } from "./lib/constants";

function App() {
	const [items, setItems] = useState(initialItems);

	const handleAddItem = (itemText) => {
		const newItem = {
			id: Date.now(),
			name: itemText,
			packed: false,
		};

		setItems([...items, newItem]);
	};

	const handleChangePacked = (id) => {
		const newItems = items.map((item) =>
			item.id === id ? { ...item, packed: !item.packed } : item
		);
		setItems(newItems);
	};

	const handleMarkAllAsComplete = () => {
		const newItems = items.map((item) => {
			return { ...item, packed: true }
		})
		setItems(newItems);
	};

	const handleMarkAllAsIncomplete = () => {
		const newItems = items.map((item) => {
			return { ...item, packed: false }
		})
		setItems(newItems);
	};

	const handleRemoveAllItems = () => {
		setItems([]);
	};

	const handleRemoveItem = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	}

	return (
		<>
			<BackgroundHeading />
			<main className="app">
				<Header />
				<ItemList items={items} handleChangePacked={handleChangePacked} handleRemoveItem={handleRemoveItem} />
				<Sidebar
					handleMarkAllAsComplete={handleMarkAllAsComplete}
					handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
					handleRemoveAllItems={handleRemoveAllItems}
					handleAddItem={handleAddItem}
				/>
			</main>
			<Footer />
		</>
	);
}

export default App;
