import React, { useId } from 'react';

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();

    return (
        <div className="w-full">
            {label && (
                <label
                    className="inline-block mb-2 pl-2 text-white font-[Poppins] font-medium 
                             bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent"
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`px-4 py-3 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 
                          border border-gray-600/50 focus:border-rose-400 outline-none
                          transition-all duration-300 
                          focus:bg-gray-600/60 focus:shadow-[0_0_10px_rgba(244,63,94,0.5)]
                          hover:bg-gray-600/40 hover:border-rose-500/70
                          w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    );
});

export default Input;