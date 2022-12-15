import { FC, ReactNode } from 'react'
import { Button as MuiButton } from '@mui/material'

interface IButton {
    children?: ReactNode
    fullWidth?: boolean
    variant?: Variant
    disabled?: boolean
}

type Variant = 'contained' | 'outlined' | 'text' | undefined

export const Button: FC<IButton> = ({
    children,
    fullWidth = true,
    variant,
    disabled,
}) => {
    return (
        <MuiButton fullWidth={fullWidth} variant={variant} disabled={disabled}>
            {children}
        </MuiButton>
    )
}
