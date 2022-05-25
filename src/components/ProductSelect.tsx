import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import React, { FC, useState } from "react";
import { useAppDispatch } from "../hooks/redux";
import {
	sortByName,
	sortHighToLow,
	sortLowToHigh,
} from "../store/reducers/productSlice";

const ProductSelect: FC = () => {
	const dispatch = useAppDispatch();
	const [value, setValue] = useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setValue(event.target.value);
	};

	return (
		<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
			<InputLabel id="demo-simple-select-standard-label">Sort</InputLabel>
			<Select
				labelId="demo-simple-select-standard-label"
				id="demo-simple-select-standard"
				value={value}
				onChange={handleChange}
				label="Sort"
			>
				<MenuItem
					value={"by name"}
					onClick={() => dispatch(sortByName())}
				>
					by name
				</MenuItem>
				<MenuItem
					value={"low to high"}
					onClick={() => dispatch(sortLowToHigh())}
				>
					low to high
				</MenuItem>
				<MenuItem
					value={"high to low"}
					onClick={() => dispatch(sortHighToLow())}
				>
					high to low
				</MenuItem>
			</Select>
		</FormControl>
	);
};

export default ProductSelect;
