import { Crud } from './Pages/CRUDPage/index';
import { RouterProvider, Routes, Route, createBrowserRouter } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage";

const App = () => {
  const router = createBrowserRouter(
    [
        {
            path: "*",
            element: (
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/admin/*" element={<Crud />} />
                </Routes>
            ),
        },
    ],
);
  return <RouterProvider router={router} />;
};

export default App;
