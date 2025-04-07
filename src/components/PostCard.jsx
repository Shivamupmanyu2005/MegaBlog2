import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-800/90 rounded-xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.3)]
                          transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                {/* Image Container */}
                <div className="w-full justify-center mb-4 relative overflow-hidden rounded-xl">
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    {/* Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent 
                                  opacity-70 hover:opacity-90 transition-opacity duration-300"></div>
                </div>

                {/* Title with Gradient */}
                <h2 className="text-xl font-bold font-[Poppins] text-white
                             bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent
                             drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                    {title}
                </h2>
            </div>
        </Link>
    );
}

export default PostCard;