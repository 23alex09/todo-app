import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth";

const initialStatus = 'not-authenticated';

export const AppRouter = () => {

    return (
        <Routes>
            {
                ( initialStatus === 'not-authenticated' )
                    ? (
                        <>
                            <Route path='auth/*' element={ <LoginPage /> } />
                            {/* <Route path='/*' element={ <Navigate to='auth/login' /> } /> */ }
                        </>
                    )
                    : (
                        <>
                            {/* <Route path='/' element={ <CalendarPage /> } /> */ }
                            {/* <Route path='/*' element={ <Navigate to='/' /> } /> */ }
                        </>

                    )

            }

        </Routes>
    )
}