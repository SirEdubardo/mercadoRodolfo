import { Link } from 'react-router-dom';
import { useState } from 'react';
import User from '@mui/icons-material/Person';
import Search from '@mui/icons-material/Search';
import List from '@mui/icons-material/List';
import Menu from '@mui/icons-material/Menu';
import X from '@mui/icons-material/Close';
import Logout from '@mui/icons-material/Logout';
import Favorite from '@mui/icons-material/Favorite';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        window.location.href = "/";
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-lg z-50">
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold">Minha Aplicação</h1>
                    </div>

                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen ? 'true' : 'false'}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>

                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <Link to="/share" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                                <Search className="mr-2 h-5 w-5" />
                                Pesquisar ações
                            </Link>
                            <Link to="/shareList" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                                <List className="mr-2 h-5 w-5" />
                                Listar ações
                            </Link>
                            <Link to="/shareFavList" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                                <Favorite className="mr-2 h-5 w-5" />
                                Ações favoritadas
                            </Link>
                            <Link to="/CadastroUsuarios" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                                <User className="mr-2 h-5 w-5" />
                                Cadastro
                            </Link>
                        </div>
                    </div>

                    <div className="ml-auto flex items-center space-x-4">
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center">
                            <Logout className="mr-2 h-5 w-5" />
                            Sair
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                        to="/share"
                        className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
                    >
                        <Search className="mr-2 h-5 w-5" />
                        Share
                    </Link>
                    <Link
                        to="/shareList"
                        className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
                    >
                        <List className="mr-2 h-5 w-5" />
                        Share List
                    </Link>
                    <Link to="/shareFavList" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                        <Favorite className="mr-2 h-5 w-5" />
                        Ações favoritadas
                    </Link>
                    <Link
                        to="/CadastroUsuarios"
                        className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
                    >
                        <User className="mr-2 h-5 w-5" />
                        Cadastro
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;