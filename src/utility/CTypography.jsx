import { Stack, Typography } from "@mui/material";
import * as React from "react";
import { useSelector } from "react-redux";
export default function CTypography({
    children,
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    text,
    color,
    ...rest
}) {
    const { mode, textDark, textWhite } = useSelector(state => state.theme)

    const isDark = Boolean(mode === 'dark')
    return (
        <Stack spacing={1}>
            <Typography
                align={align}
                gutterBottom={gutterBottom}
                noWrap={noWrap}
                paragraph={paragraph}
                fontFamily="FiraCode"
                fontWeight={800}
                //sx={sx ? sx : { fontWeight: 700, py: 0 }}
                //  variant={variant ? variant : "h6"}
                text={text}
                color={color ? color : isDark ? textWhite : textDark}
                //  component={component ? component : "h1"}
                {...rest}
            >
                {text}{children}
            </Typography>
        </Stack>
    );
}
