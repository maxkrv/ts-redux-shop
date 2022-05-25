import React, { FC } from "react";
import { Container, Typography } from "@mui/material";

const Footer: FC = () => {
	return (
		<footer style={{ marginTop: "50px", borderTop: "2px solid grey" }}>
			<Container>
				<div style={{ padding: "40px 0" }}>
					<Typography
						variant="body1"
						component="h5"
						sx={{ textAlign: "center" }}
					>
						Copyright 2022
					</Typography>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
