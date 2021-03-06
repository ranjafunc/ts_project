import React from "react";
import { ResourceObjType } from "../../types";
import { TypedIcon } from "typed-design-system";
import useListItem from "./hooks/useListItem";

import {
	Container,
	ItemTitle,
	ItemTools,
	ItemButton,
	ItemEditTitle,
} from "./style";

interface ListItemProps {
	value: ResourceObjType;
}

const ListItem = ({ value }: ListItemProps) => {
	const {
		isEdit,
		text,
		onChange,
		onKeyUp,
		handleSelect,
		handleEdit,
		handleDelete,
		checkSelected,
	} = useListItem(value);

	return (
		<Container onClick={handleSelect} isSelect={checkSelected()}>
			<ItemTitle isEdit={isEdit}>{text}</ItemTitle>
			<ItemEditTitle
				isEdit={isEdit}
				value={text}
				onChange={onChange}
				onKeyUp={onKeyUp}
			/>

			<ItemTools>
				<ItemButton onClick={handleEdit}>
					<TypedIcon icon='edit_small' color='black' />
				</ItemButton>
				<ItemButton delete onClick={handleDelete}>
					<TypedIcon icon='trash_small' color='black' />
				</ItemButton>
			</ItemTools>
		</Container>
	);
};

export default ListItem;
