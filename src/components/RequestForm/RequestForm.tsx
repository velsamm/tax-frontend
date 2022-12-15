import { FC } from 'react'
import { Container } from '../ui/Container/Container'
import { Input } from '../ui/Input/Input'
import { Button } from '../ui/Button/Button'

export const RequestForm: FC = () => {
    return (
        <Container>
            <Input />
            <Input />
            <Button>Submit</Button>
        </Container>
    )
}
