import React, { FC } from "react";
import {
	Alert,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Snackbar,
	Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IProduct } from "../types/types";
import { addToCart, closeAlert } from "../store/reducers/productSlice";

interface ProductItemProps {
	product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
	const dispatch = useAppDispatch();
	const { alert } = useAppSelector((state) => state.product);

	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card
				sx={{
					display: "flex",
					justifyItems: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "350px",
					}}
				>
					<CardMedia
						component="img"
						image={product.image}
						alt={product.title}
						title={product.title}
						sx={{ width: "auto", maxHeight: "100%" }}
					/>
				</div>

				<CardContent
					sx={{
						paddingBottom: "8px",
					}}
				>
					<Typography
						gutterBottom
						variant="body1"
						component="h3"
						sx={{
							margin: "0",
							textOverflow: "ellipsis",
							height: "1.5rem",
							overflow: "hidden",
						}}
					>
						{product.title}
					</Typography>
				</CardContent>
				<Typography
					gutterBottom
					variant="body2"
					component="p"
					sx={{ marginBottom: "0", fontWeight: "700" }}
				>
					Price {product.price}$
				</Typography>
				<CardActions sx={{ alignSelf: "flex-start" }}>
					<Button
						variant={"contained"}
						size="small"
						onClick={() => dispatch(addToCart(product))}
					>
						Add to cart
					</Button>
				</CardActions>
			</Card>
			<Snackbar
				open={alert}
				autoHideDuration={6000}
				onClose={() => dispatch(closeAlert())}
			>
				<Alert
					onClose={() => dispatch(closeAlert())}
					severity="success"
					sx={{ width: "100%" }}
				>
					Added to cart.
				</Alert>
			</Snackbar>
		</Grid>
	);
};

export default ProductItem;
