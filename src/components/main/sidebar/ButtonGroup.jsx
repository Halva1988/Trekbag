import Button from "../../Button";
import { useItemsContext } from "../../../lib/hooks";

const ButtonGroup = () => {
	const {
		handleMarkAllAsComplete,
		handleMarkAllAsIncomplete,
		handleRemoveAllItems,
	} = useItemsContext();

	const secondaryButtons = [
		{
			text: "Mark all as complete",
			onClick: handleMarkAllAsComplete,
		},
		{
			text: "Mark all as incomplete",
			onClick: handleMarkAllAsIncomplete,
		},
		{
			text: "Remove all items",
			onClick: handleRemoveAllItems,
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
