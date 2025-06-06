import { Header } from "@components/header/header"
import { Home } from "@components/home/home"
import type { ReactElement } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const AppRoutes = (): ReactElement => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
    </BrowserRouter>
  )
}


