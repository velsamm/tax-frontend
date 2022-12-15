import { FC, ReactNode } from 'react'

export const Container: FC<{ children: ReactNode }> = ({ children }) => {
    return <div>{children}</div>
}
