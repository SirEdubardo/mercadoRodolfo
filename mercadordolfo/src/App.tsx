import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import CadastroUsuario from "./Paginas/CadastroUsuario/CadastroUsuario.tsx";
import Home from './Paginas/Home/Home.tsx'
import Share from './Paginas/Share/Share.tsx'
import SharesPage from "./Paginas/ShareList/ShareList.tsx";
import Navbar from "./Componentes/NavBar/NavBar.tsx";
import SharesFavPage from "./Paginas/ShareFavList/ShareFavList.tsx";
import './App.css'

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/share" element={<Share />} />
                    <Route path="/shareList" element={<SharesPage />} />
                    <Route path="/shareFavList" element={<SharesFavPage />} />
                    <Route path="/CadastroUsuarios" element={<CadastroUsuario />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App
