const ItemList = ({ items, handleChangePacked, handleRemoveItem }) => {
	return (
		<ul>
			{items.map((item) => {
				return (
					<Item
						key={item.id}
						item={item}
						handleChangePacked={handleChangePacked}
						handleRemoveItem={handleRemoveItem}
					/>
				);
			})}
		</ul>
	);
};

export default ItemList;

const Item = ({ item, handleChangePacked, handleRemoveItem }) => {
	return (
		<li className="item">
			<label>
				<input
					type="checkbox"
					checked={item.packed}
					onChange={() => handleChangePacked(item.id)}
				/>
				{item.name}
			</label>
			<button
				onClick={() => {
					handleRemoveItem(item.id);
				}}
			>
				⚒
			</button>
		</li>
	);
};
