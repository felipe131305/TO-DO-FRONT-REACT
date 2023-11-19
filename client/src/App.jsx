import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/authContext";
import TasksPage from "./pages/TasksPage";
import TaksFormPage from "./pages/TaksFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ProtectedRouter from "./ProtectedRouter";
import { TaskProvider } from "./context/TasksContext";
import Navbar from "./components/Navbar";
function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
        <main className="container mx-auto px-10">
        <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRouter />}>
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/add-task" element={<TaksFormPage />} />
              <Route path="/tasks/:id" element={<TaksFormPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}
export default App;
