import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';

export const AgendaEventosApp = () => {
    return (
        // <div>Hello World</div>
        <>
            <AuthProvider>
            <AppRouter />
            </AuthProvider>
        </>
    )
}