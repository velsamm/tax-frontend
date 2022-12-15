import { FC } from 'react'

export const Text: FC<{ value: string }> = ({ value }) => {
    return <span>{value}</span>
}
