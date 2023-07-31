import * as React from "react"
import { useSelector } from "react-redux"
const EmailIcon = () => {
    const { mode, textLight, textGray } = useSelector(state => state.theme)
    const isDark = Boolean(mode === 'dark')
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
            <path
                fill={isDark ? textLight : textGray}
                d="M5.072 9.203a2.829 2.829 0 0 1 1.01-1.585C6.592 7.218 7.224 7 7.875 7h17.25c.651 0 1.283.218 1.793.618.509.4.865.96 1.01 1.585L16.5 16.087 5.072 9.203ZM5 10.82v10.064l8.342-5.04L5 10.82Zm9.719 5.855L5.275 22.38c.233.485.601.894 1.062 1.18.46.288.993.44 1.538.439h17.25c.544 0 1.078-.152 1.538-.439.46-.287.828-.697 1.061-1.182l-9.444-5.705-1.78 1.073-1.781-1.073v.002Zm4.94-.83L28 20.885V10.82l-8.342 5.023v.002Z"
            />
        </svg>
    )
}
export default EmailIcon
