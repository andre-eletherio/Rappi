import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import {AddressPage} from '../pages/AddressPage/AddressPage'
import { FeedPage } from "../pages/FeedPage/FeedPage";
import {RestaurantPage} from '../pages/RestaurantPage/RestaurantPage'
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { CartPage } from "../pages/CartPage/CartPage";
import {MakeLogin} from '../pages/MakeLogin/MakeLogin'

export function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<LoginPage/>}/>
            <Route path="/signUp" element={<SignUpPage/>}/>
            <Route path="/address" element={<AddressPage/>} />
            <Route path="/login" element={<MakeLogin/>}/>
            <Route path="/feed" element={<FeedPage/>} />
            <Route path="/restaurant/:id" element={<RestaurantPage />} />
            <Route path="/product/:id/:name/:description/:price" element={<ProductPage/>}/>
            <Route path="/cart" element={<CartPage/>} />
        </Routes>
    </BrowserRouter>
  )
}
