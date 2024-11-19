import { Navigate, Route, Routes } from "react-router-dom"
import { LoginForm } from "../features/auth/LoginForm"
import { Application } from "../features/apps/Application"

export const AppRouter = () => {
  return (
    <>
        <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/application" element={<Application />} />
        <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
    </>
  )
}
