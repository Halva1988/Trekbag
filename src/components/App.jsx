import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./main/header/Header";
import ItemList from "./main/ItemList";
import Sidebar from "./main/sidebar/Sidebar";

function App() {
	return (
		<>
			<BackgroundHeading />
			<main className="app">
				<Header />
				<ItemList />
				<Sidebar />
			</main>
			<Footer />
		</>
	);
}

export default App;
