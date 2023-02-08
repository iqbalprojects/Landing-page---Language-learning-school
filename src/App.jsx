import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";

function App() {
    return (
        <div className="font-axiforma">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="blog" element={<Blog />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
