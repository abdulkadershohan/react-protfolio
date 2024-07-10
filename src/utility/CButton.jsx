import { Button } from "@mui/material";
import * as React from "react";
import { useSelector } from "react-redux";
export default function ContainedButtons({
	btnTitle,
	...rest
}) {
	const { mode, textDark, textWhite } = useSelector(state => state.theme)
	const isDark = Boolean(mode === 'dark')
	return (
		// <Box
		// 	sx={{
		// 		color: isDark ? textWhite : textDark,
		// 		p: 1,
		// 		// border: "1px solid #C778DD",
		// 		border: "1px solid #ABB2BF",
		// 		"&:hover": {
		// 			backgroundColor: "#C770DB1A",
		// 			opactiy: 0.8,
		// 			borderColor: "#C778DD",
		// 			cursor: "pointer",
		// 		},
		// 		fontWeight: "600",
		// 		alignItems: "center",
		// 		justifyContent: "center",
		// 		display: "flex",
		// 	}}
		// 	{...rest}
		// >
		// 	{btnTitle} {children}
		// </Box>
		<Button
			sx={{
				fontWeight: "600",
				border: "1px solid #ABB2BF",
				color: isDark ? textWhite : textDark,
				'&:hover': {
					backgroundColor: isDark ? "#C770DB1A" : "#C778DD1A",
					borderColor: isDark ? "#C778DD" : "#C770DB",
				},

			}}
			variant="outlined"
			size="medium"
			{...rest}
		//	title={btnTitle}

		>
			{btnTitle}
		</Button>
	);
}
