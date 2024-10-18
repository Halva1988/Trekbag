import Button from "../../Button";
import { SECONDARY_BUTTONS } from "../../lib/constants";

const ButtonGroup = () => {
	return (
		<section className="button-group">
			{SECONDARY_BUTTONS.map((title) => {
				return (
					<Button key={title} type="secondary">
						{title}
					</Button>
				);
			})}
		</section>
	);
};

export default ButtonGroup;
