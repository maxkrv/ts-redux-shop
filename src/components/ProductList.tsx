import React, { FC, useEffect } from "react";
import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import ProductItem from "./ProductItem";
import { fetchProduct } from "../store/reducers/productSlice";
import ProductSelect from "./ProductSelect";

const ProductList: FC = () => {
	const { list, isLoading } = useAppSelector((state) => state.product);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchProduct());
	}, [dispatch]);

	if (isLoading) {
		return (
			<Box className="loader">
				<CircularProgress />
			</Box>
		);
	}

	return (
		<main style={{ flex: "1 1 auto" }}>
			<Container sx={{ marginTop: "100px" }}>
				<ProductSelect />
				<Grid container spacing={2}>
					{list.map((product) => {
						return (
							<ProductItem key={product.id} product={product} />
						);
					})}
				</Grid>
			</Container>
		</main>
	);
};

export default ProductList;
