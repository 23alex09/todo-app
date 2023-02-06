import { useStore } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../auth";

export const AppRouter = () => {

    const { status } = useStore( state => state.auth );

    return (
        <Routes>

            <Route path='/' element={ <LoginPage /> } />
            <Route path='auth/register' element={ <RegisterPage /> } />

        </Routes>
    )
}