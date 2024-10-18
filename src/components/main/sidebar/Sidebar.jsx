import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({
	handleMarkAllAsComplete,
	handleMarkAllAsIncomplete,
	handleRemoveAllItems,
	handleAddItem,
}) => {
	return (
		<div className="sidebar">
			<AddItemForm handleAddItem={handleAddItem} />
			<ButtonGroup
				handleMarkAllAsComplete={handleMarkAllAsComplete}
				handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
				handleRemoveAllItems={handleRemoveAllItems}
			/>
		</div>
	);
};

export default Sidebar;
