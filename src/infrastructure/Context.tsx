import { useState, createContext, useContext, ReactNode } from 'react'


export interface AppContextType {
    pageId: any,
    setPageId: any,
    isSidebarOpen: boolean;
    sidebarState: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [pageId, setPageId] = useState(null);

    const sidebarState = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <AppContext.Provider value={{
            isSidebarOpen,
            sidebarState,
            pageId,
            setPageId
        }}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

