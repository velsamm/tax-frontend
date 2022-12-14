import { FC } from 'react'
import { ErrorBoundary } from './ErrorBoundary'

export const App: FC = () => {
    return (
        <ErrorBoundary>
            <div />
        </ErrorBoundary>
    )
}
