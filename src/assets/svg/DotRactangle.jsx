import * as React from "react"
const DotRactangle = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={53}
            height={53}
            fill="none"
            {...props}
        >
            <mask id="a" fill="#fff">
                <path fillRule="evenodd" d="M0 14h26v13H13v13h13v13H0V14Z" />
            </mask>
            <path
                fill="#C778DD"
                d="M0 14v-1h-1v1h1Zm26 0h1v-1h-1v1Zm0 13v1h1v-1h-1Zm-13 0v-1h-1v1h1Zm0 13h-1v1h1v-1Zm13 0h1v-1h-1v1Zm0 13v1h1v-1h-1ZM0 53h-1v1h1v-1Zm13-40H0v2h13v-2Zm13 0H13v2h13v-2Zm1 14V14h-2v13h2Zm-14 1h13v-2H13v2Zm1 12V27h-2v13h2Zm-1 1h13v-2H13v2Zm12-1v13h2V40h-2Zm1 12H13v2h13v-2ZM0 54h13v-2H0v2Zm-1-14v13h2V40h-2Zm0-13v13h2V27h-2Zm0-13v13h2V14h-2Z"
                mask="url(#a)"
            />
            <mask
                id="b"
                width={28}
                height={41}
                x={25}
                y={0}
                fill="#000"
                maskUnits="userSpaceOnUse"
            >
                <path fill="#fff" d="M25 0h28v41H25z" />
                <path fillRule="evenodd" d="M26 1h26v39H26V27h13V14H26V1Z" />
            </mask>
            <path
                fill="#C778DD"
                d="M26 1V0h-1v1h1Zm26 0h1V0h-1v1Zm0 39v1h1v-1h-1Zm-26 0h-1v1h1v-1Zm0-13v-1h-1v1h1Zm13 0v1h1v-1h-1Zm0-13h1v-1h-1v1Zm-13 0h-1v1h1v-1ZM39 0H26v2h13V0Zm13 0H39v2h13V0Zm1 14V1h-2v13h2Zm0 13V14h-2v13h2Zm0 13V27h-2v13h2Zm-14 1h13v-2H39v2Zm0-2H26v2h13v-2Zm-12 1V27h-2v13h2Zm-1-12h13v-2H26v2Zm12-14v13h2V14h-2Zm-12 1h13v-2H26v2ZM25 1v13h2V1h-2Z"
                mask="url(#b)"
            />
        </svg>
    )
}
export default DotRactangle
