import { Stack } from "@mui/system";
import React from "react";
import { CTypography } from "../../utility";

export default function Protfolio() {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            py={4}
        >
            <CTypography
                text='#'
                color='#C778DD'
                fontWeight={500}
                fontSize={32}
            >
                <span style={{ color: '#FFFFFF' }}>
                    Protfolio
                </span>
            </CTypography>
            <CTypography
                fontWeight={300}
                fontSize={16}
            >
                View all ~~{'>'}
            </CTypography>

        </Stack>
    )
}
