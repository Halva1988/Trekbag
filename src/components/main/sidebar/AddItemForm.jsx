import { useRef, useState } from "react";
import Button from "../../Button";

const AddItemForm = ({ handleAddItem }) => {
	const [itemText, setItemText] = useState("");
  const inputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

    if (!itemText) {
      inputRef.current.focus();
      return;
    }
		
    handleAddItem(itemText);
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
