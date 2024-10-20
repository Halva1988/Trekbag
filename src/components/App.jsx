import ItemsContextProvider from "../context/ItemsContextProvider";
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
				<ItemsContextProvider>
					<Header />
					<ItemList />
					<Sidebar />
				</ItemsContextProvider>
			</main>
			<Footer />
		</>
	);
}

export default App;
