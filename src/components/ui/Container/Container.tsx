import { FC, ReactNode } from 'react'
import {
    Container as MuiContainer,
    Paper,
    Breakpoint,
    Card, SxProps,
} from '@mui/material'

export const Container: FC<{
    className?: string
    children?: ReactNode
    maxWidth?: Breakpoint | false | undefined
    paper?: boolean
    card?: boolean
    sx?: SxProps
}> = ({ className, children, maxWidth, paper, card, sx }) => {
    if (paper) {
        return (
            <Paper sx={sx}>
                <MuiContainer className={className} maxWidth={maxWidth}>
                    {children}
                </MuiContainer>
            </Paper>
        )
    }

    if (card) {
        return (
            <Card sx={sx}>
                <MuiContainer className={className} maxWidth={maxWidth}>
                    {children}
                </MuiContainer>
            </Card>
        )
    }

    return (
        <MuiContainer sx={sx} maxWidth={maxWidth} className={className}>
            {children}
        </MuiContainer>
    )
}
