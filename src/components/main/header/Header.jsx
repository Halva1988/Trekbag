import Counter from "./Counter";
import Logo from "./Logo";

const Header = ({ numbersOfItems, packedItems }) => {
	return (
		<header>
			<Logo />
			<Counter numbersOfItems={numbersOfItems} packedItems={packedItems} />
		</header>
	);
};

export default Header;
