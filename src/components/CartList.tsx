import React, { FC } from "react";
import { Button, Container, Divider, List, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import CartItem from "./CartItem";
import { clearCart } from "../store/reducers/productSlice";

const CartList: FC = () => {
	const cart = useAppSelector((state) => state.product.cart);
	const total = useAppSelector((state) => state.product.cart.total);
	const dispatch = useAppDispatch();

	return (
		<div style={{ height: "100%" }}>
			<Container
				sx={{
					minHeight: "100%",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<List sx={{ flex: "1 1 auto", marginTop: "20px" }}>
					{cart.list.map((item) => (
						<CartItem key={item.id} {...item} />
					))}
				</List>
				<Divider />
				<div
					style={{
						padding: "50px 0",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Typography
						sx={{ marginBottom: "1rem" }}
						variant="h6"
						component="p"
					>
						Total price: {total} $
					</Typography>
					<Button
						variant="contained"
						onClick={() => dispatch(clearCart())}
					>
						Clear cart
					</Button>
				</div>
			</Container>
		</div>
	);
};

export default CartList;
