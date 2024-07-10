import * as React from "react"
import { useSelector } from "react-redux"
const ArrowBackIcon = (props) => {
    const { mode, textLight, textGray } = useSelector(state => state.theme)
    const isDark = Boolean(mode === 'dark')
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            {...props}
        >
            <path
                fill={isDark ? textLight : textGray}
                d="m7.825 13 5.6 5.6L12 20l-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825Z"
            />
        </svg>
    )
}
export default ArrowBackIcon
