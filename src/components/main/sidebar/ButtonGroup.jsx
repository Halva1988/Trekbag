import Button from "../../Button";
import { useItemsStore } from "../../../stores/itemsStore";

const ButtonGroup = () => {
	const markAllAsComplete = useItemsStore(state => state.markAllAsComplete);
	const markAllAsIncomplete = useItemsStore(state => state.markAllAsIncomplete);
	const removeAllItems = useItemsStore(state => state.removeAllItems);

	const secondaryButtons = [
		{
			text: "Mark all as complete",
			onClick: markAllAsComplete,
		},
		{
			text: "Mark all as incomplete",
			onClick: markAllAsIncomplete,
		},
		{
			text: "Remove all items",
			onClick: removeAllItems,
		},
	];
	return (
		<section className="button-group">
			{secondaryButtons.map(({ text, onClick }) => {
				return (
					<Button key={text} type="secondary" onClick={onClick}>
						{text}
					</Button>
				);
			})}
		</section>
	);
};

export default ButtonGroup;
