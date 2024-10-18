import { useRef, useState } from "react";
import Button from "../../Button";

const AddItemForm = ({ setItems }) => {
	const [itemText, setItemText] = useState("");
  const inputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

    if (!itemText) {
      inputRef.current.focus();
      return;
    }

		const newItem = {
      id: Date.now(),
			name: itemText,
			packed: false,
		};
		setItems((prev) => [...prev, newItem]);
    setItemText('');
	};

	const handleChange = (e) => {
		setItemText(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Add an item</h2>
      <input ref={inputRef} value={itemText} onChange={handleChange} autoFocus/>
			<Button>Add to list</Button>
		</form>
	);
};

export default AddItemForm;
