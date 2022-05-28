import React, { FC, useState } from "react";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Modal from "./UI/Modal";
import { useAppSelector } from "../hooks/redux";
import CartList from "./CartList";

const CartButton: FC = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const cart = useAppSelector((state) => state.product.cart);
	const { isLoading } = useAppSelector((state) => state.product);

	return (
		<>
			<IconButton onClick={handleOpen} disabled={!!isLoading}>
				<Badge
					showZero={true}
					badgeContent={cart.amount}
					color="secondary"
				>
					<ShoppingCartRoundedIcon sx={{ fill: "#fff" }} />
				</Badge>
			</IconButton>

			<Modal title="Cart" open={open} handleClose={handleClose}>
				<CartList />
			</Modal>
		</>
	);
};

export default CartButton;
