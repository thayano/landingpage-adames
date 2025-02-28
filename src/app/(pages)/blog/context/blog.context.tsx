'use client'

import { createContext, ReactNode, useState } from "react";

interface BlogProviderProps {
    children: ReactNode;
}

interface BlogContextType {
    option: string;
    updateOption: (value: string) => void;
}

export const BlogContext = createContext<BlogContextType>({
    option: '',
    updateOption: () => { }
});

export const BlogProvider = ({ children }: BlogProviderProps) => {
    const [option, setOption] = useState('IMAGE');

    const updateOption = (value: string) => {
        setOption(value)
    }

    const contextValue: BlogContextType = {
        updateOption,
        option,
    };

    return (
        <BlogContext.Provider value={contextValue}>
            {children}
        </BlogContext.Provider>
    )
}