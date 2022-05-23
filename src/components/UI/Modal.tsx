import { AppBar, Dialog, IconButton, Toolbar, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { FC } from "react";

interface modalProps {
	title: string;
	open: boolean;
	handleClose: () => void;
	children: React.ReactNode | null;
}

const Modal: FC<modalProps> = ({ title, open, handleClose, children }) => {
	return (
		<Dialog fullScreen open={open} onClose={handleClose}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						onClick={handleClose}
						aria-label="close"
					>
						<CloseIcon />
					</IconButton>
					<Typography
						sx={{ margin: "0 auto" }}
						variant="h6"
						component="p"
					>
						{title}
					</Typography>
				</Toolbar>
			</AppBar>

			{children}
		</Dialog>
	);
};

export default Modal;
