import * as React from "react"
const LogoImg = ({ iconColor, ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={17}
            fill="none"
            {...props}
        >
            <path
                fill={iconColor}
                fillRule="evenodd"
                d="M12 .5H8v4H0v12h8v-4h8V.5h-4Zm-8 12h4v-4h4v-4H8v4H4v4Z"
                clipRule="evenodd"
            />
        </svg>
    )
}
export default LogoImg
