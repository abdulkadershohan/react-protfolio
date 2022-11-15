/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import * as React from "react";
export default function ContainedButtons({
	children,
	variant,
	size,
	color,
	disabled,
	disableFocusRipple,
	disableRipple,
	endIcon,
	fullWidth,
	href,
	startIcon,
	sx,
	btnTitle,
	...rest
}) {
	return (
		<Button
			variant={"outlined"}
			size={size ?? "small"}
			disabled={disabled}
			disableFocusRipple={disableFocusRipple ? false : true}
			disableRipple={disableRipple ? false : true}
			endIcon={endIcon}
			fullWidth={fullWidth}
			href={href}
			startIcon={startIcon}
			sx={{
				color: "#fff",
				borderColor: "#C778DD",
				"&:hover": {
					backgroundColor: "#C770DB1A",
					opactiy: 0.8,
					borderColor: "#C778DD",
				},
			}}
			{...rest}
		>
			{btnTitle} {children}
		</Button>
	);
}

ContainedButtons.propTypes = {
	children: PropTypes.node,
	variant: PropTypes.string,
	size: PropTypes.string,
	color: PropTypes.string,
	disabled: PropTypes.bool,
	disableFocusRipple: PropTypes.bool,
	disableRipple: PropTypes.bool,
	endIcon: PropTypes.node,
	fullWidth: PropTypes.bool,
	href: PropTypes.string,
	startIcon: PropTypes.node,
	sx: PropTypes.object,
	btnTitle: PropTypes.string,
};
