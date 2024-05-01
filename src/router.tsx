import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/notFound";

const AppRouter: React.FC = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>

    );
}

export default AppRouter;