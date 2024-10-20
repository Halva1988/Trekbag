import { useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";
import { useItemsStore } from "../../stores/itemsStore";

const options = [
	{ value: "default", label: "Sort by default" },
	{ value: "packed", label: "Sort by packed" },
	{ value: "unpacked", label: "Sort by unpacked" },
];

const ItemList = () => {
	const [sortBy, setSortBy] = useState("default");
	const items = useItemsStore(state => state.items);
	
	const toggleItem = useItemsStore(state => state.toggleItem);
	const removeItem = useItemsStore(state => state.removeItem);

	const sortedItems = useMemo(
		() =>
			[...items].sort((a, b) => {
				if (sortBy === "packed") {
					return b.packed - a.packed;
				} else if (sortBy === "unpacked") {
					return a.packed - b.packed;
				}
				return items;
			}),
		[items, sortBy]
	);

	return !items.length ? (
		<EmptyView />
	) : (
		<>
			<ul className="item-list">
				<section className="sorting">
					<Select
						defaultValue={sortBy}
						onChange={(options) => setSortBy(options.value)}
						options={options}
					/>
				</section>
				{sortedItems.map((item) => {
					return (
						<Item
							key={item.id}
							item={item}
							handleToggleItem={toggleItem}
							handleRemoveItem={removeItem}
						/>
					);
				})}
			</ul>
		</>
	);
};

export default ItemList;

const Item = ({ item, handleToggleItem, handleRemoveItem }) => {
	return (
		<li className="item">
			<label>
				<input
					type="checkbox"
					checked={item.packed}
					onChange={() => handleToggleItem(item.id)}
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
