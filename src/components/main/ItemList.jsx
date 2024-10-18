const ItemList = ({ items, handleChangePacked }) => {

	return (
		<ul>
			{items.map((item) => {
				return <Item key={item.id} item={item} handleChangePacked={handleChangePacked} />;
			})}
		</ul>
	);
};

export default ItemList;

const Item = ({ item, handleChangePacked }) => {
	
	return (
		<li className="item">
			<label>
				<input type="checkbox" checked={item.packed} onChange={() => handleChangePacked(item.id)} />
				{item.name}
			</label>
			<button>⚒</button>
		</li>
	);
};
