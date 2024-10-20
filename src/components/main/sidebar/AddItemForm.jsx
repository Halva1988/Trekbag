import { useRef, useState } from "react";
import Button from "../../Button";
import { useItemsStore } from "../../../stores/itemsStore";

const AddItemForm = () => {
	const addItem = useItemsStore(state => state.addItem);
	const [itemText, setItemText] = useState("");
  const inputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

    if (!itemText) {
      inputRef.current.focus();
      return;
    }
		
		addItem(itemText);
    setItemText('');
	};

	const handleChange = (e) => {
		setItemText(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Add an item</h2>
      <input ref={inputRef} value={itemText} onChange={handleChange} autoFocus placeholder="Passport...?"/>
			<Button>Add to list</Button>
		</form>
	);
};

export default AddItemForm;
