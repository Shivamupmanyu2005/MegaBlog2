import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPost().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full py-12 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
                <Container>
                    <div className="flex items-center justify-center h-full">
                        <div className="relative p-6 transform transition-all duration-500 hover:scale-105">
                            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-2xl p-8 
                                          transform rotate-x-6 rotate-y-6 border border-gray-700/50">
                                <h1 className="text-4xl md:text-5xl font-extrabold font-[Poppins]
                                            text-white bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 
                                            bg-clip-text text-transparent
                                            animate-pulse drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                    Login to Explore Posts
                                </h1>
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 
                                              blur opacity-20 rounded-xl transform rotate-x-12 rotate-y-12"></div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-12 bg-gray-900">
            <Container>
                <div className="flex flex-wrap -mx-2">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <div className="transform transition-all duration-300 hover:-translate-y-2 
                                          hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]">
                                <div className="relative group">
                                    <PostCard {...post} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent 
                                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                                  rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;