import Button from "../../Button";

const ButtonGroup = () => {
	return (
		<section className="button-group">
			<Button type="secondary">Mark all as complete</Button>
			<Button type="secondary">Mark all as incomplete</Button>
			<Button type="secondary">Reset to initial</Button>
			<Button type="secondary">Reset all items</Button>
		</section>
	);
};

export default ButtonGroup;
