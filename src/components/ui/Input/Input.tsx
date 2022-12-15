import { FC } from 'react'
import { Grid, TextField } from '@mui/material'
import { Text } from '../Text/Text'

interface IInput {
    fullWidth?: boolean
    title?: string
}

export const Input: FC<IInput> = ({ fullWidth = true, title }) => {
    return (
        <Grid container flexDirection="column" spacing={1}>
            {title && (
                <Grid item xs>
                    <Text>{title}</Text>
                </Grid>
            )}
            <Grid item xs>
                <TextField fullWidth={fullWidth} />
            </Grid>
        </Grid>
    )
}
