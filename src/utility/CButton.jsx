/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import * as React from "react";
import { useSelector } from "react-redux";
export default function ContainedButtons({
	children,
	btnTitle,
	...rest
}) {
	const { mode } = useSelector(state => state.theme)
	const isDark = Boolean(mode === 'dark')
	return (
		<Box
			sx={{
				color: isDark ? process.env.REACT_APP_TEXT_COLOR_DARK_MODE : process.env.REACT_APP_TEXT_COLOR_LIGHT_MODE,
				p: 1,
				border: "1px solid #C778DD",
				"&:hover": {
					backgroundColor: "#C770DB1A",
					opactiy: 0.8,
					borderColor: "#C778DD",
					cursor: "pointer",
				},
				fontWeight: "600",
			}}
			{...rest}
		>
			{btnTitle} {children}
		</Box>
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
