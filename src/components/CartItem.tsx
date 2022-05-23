import React, { FC } from "react";
import { Divider, IconButton, ListItem, ListItemText } from "@mui/material";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import RemoveCircleSharpIcon from "@mui/icons-material/RemoveCircleSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import { ICart } from "../types/types";
import { increase, removeFromCart } from "../store/reducers/productSlice";
import { useAppDispatch } from "../hooks/redux";

interface CartItemProps extends ICart {}

const CartItem: FC<CartItemProps> = ({ id, title, image, price, quantity }) => {
	const dispatch = useAppDispatch();

	return (
		<>
			<ListItem
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "80px",
					}}
				>
					<img
						src={image}
						alt={title}
						style={{ width: "auto", maxHeight: "100%" }}
					/>
				</div>

				<div style={{ textAlign: "center" }}>
					<ListItemText
						primary={title}
						secondary={`${(price * quantity).toFixed(2)} $`}
					/>
				</div>
				<div style={{ display: "flex", alignItems: "center" }}>
					<div style={{ textAlign: "center" }}>
						<IconButton onClick={() => dispatch(increase(id))}>
							<AddCircleSharpIcon />
						</IconButton>
						<ListItemText primary={quantity} />
						<IconButton>
							<RemoveCircleSharpIcon />
						</IconButton>
					</div>

					<IconButton onClick={() => dispatch(removeFromCart(id))}>
						<DeleteIcon />
					</IconButton>
				</div>
			</ListItem>
			<Divider component="li" />
		</>
	);
};

export default CartItem;
