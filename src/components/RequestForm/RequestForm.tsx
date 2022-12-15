import { FC } from 'react'
import { Grid } from '@mui/material'
import { Container } from '../ui/Container/Container'
import { Input } from '../ui/Input/Input'
import { Button } from '../ui/Button/Button'

export const RequestForm: FC = () => {
    return (
        <Container card sx={{ py: 2 }}>
            <Grid container flexDirection="column" spacing={2}>
                <Grid item xs>
                    <Input title="Field 1" />
                </Grid>
                <Grid item xs>
                    <Input title="Field 2" />
                </Grid>
                <Grid item xs>
                    <Button variant="contained">Submit</Button>
                </Grid>
            </Grid>
        </Container>
    )
}
