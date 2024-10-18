import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./main/header/Header";
import ItemList from "./main/ItemList";
import Sidebar from "./main/sidebar/Sidebar";

function App() {
	const [items, setItems] = useState([]);

	return (
		<>
			<BackgroundHeading />
			<main className="app">
				<Header />
				<ItemList items={items} />
				<Sidebar setItems={setItems} />
			</main>
			<Footer />
		</>
	)
}

export default App;
