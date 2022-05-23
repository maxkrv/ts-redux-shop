import React, { FC } from "react";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import CartButton from "../CartButton";

const Header: FC = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed">
				<Container>
					<Toolbar>
						<Typography
							variant="h6"
							component="h1"
							sx={{ flexGrow: 1 }}
						>
							Shop
						</Typography>

						<CartButton />
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
};

export default Header;
