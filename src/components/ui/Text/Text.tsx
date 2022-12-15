import { FC, ReactNode } from 'react'
import { Typography } from '@mui/material'

type Variant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'inherit'

export const Text: FC<{ children?: ReactNode; variant?: Variant }> = ({
    variant = 'inherit',
    children,
}) => {
    return <Typography variant={variant}>{children}</Typography>
}
