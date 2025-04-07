import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        { name: 'Home', slug: "/", active: true },
        { name: "Login", slug: "/login", active: !authStatus },
        { name: "Signup", slug: "/signup", active: !authStatus },
        { name: "All Posts", slug: "/all-posts", active: authStatus },
        { name: "Add Post", slug: "/add-post", active: authStatus },
    ];

    return (
        <header className="py-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                          shadow-[0_4px_20px_rgba(0,0,0,0.4)] relative z-10">
            <Container>
                <nav className="flex items-center justify-between">
                    <div className="mr-6 transform transition-all duration-300 hover:scale-110">
                        <Link to="/">
                            <div className="relative">
                                <Logo width="70px" />
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 
                                              blur-md opacity-50 rounded-full animate-pulse"></div>
                            </div>
                        </Link>
                    </div>

                    <ul className="flex items-center space-x-2 ml-auto">
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className="relative px-6 py-2 font-[Poppins] font-medium
                                                 text-white bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 
                                                 bg-clip-text text-transparent
                                                 rounded-full transition-all duration-300
                                                 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)]
                                                 group"
                                    >
                                        <span className="relative z-10">{item.name}</span>
                                        <div className="absolute inset-0 bg-gray-800/20 backdrop-blur-sm 
                                                      rounded-full transform scale-95 group-hover:scale-100 
                                                      transition-transform duration-300"></div>
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li className="transform transition-all duration-300 hover:scale-105">
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;