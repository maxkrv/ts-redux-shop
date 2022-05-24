import React, { useEffect } from "react";
import Header from "./components/UI/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/UI/footer";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { calculateTotals } from "./store/reducers/productSlice";

const App = () => {
	const cart = useAppSelector((state) => state.product.cart);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(calculateTotals());
	}, [cart.list, dispatch]);
	return (
		<>
			<Header />
			<ProductList />
			<Footer />
		</>
	);
};

export default App;
