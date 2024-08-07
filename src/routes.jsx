import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import { categoryLoader } from "./pages/DetailPage/loader";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";
// import Favorites from "./pages/Favorites";
import BasketPage from "./pages/BasketPage";



import Favorites from "./pages/Favorites";


export const ROUTES = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: ":categoryId",
        loader: categoryLoader,
        element: <DetailPage />
    },
    {
        path: "/add-product",
        element: <AddPage />
    },
    {
        path: "/edit/:id",
        element: <EditPage />
    },
    {
        path: "/fav",
        element: <Favorites />
    },
    {
        path: "/basket",
        element: <BasketPage />
    },
]);
