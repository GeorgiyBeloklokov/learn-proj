import { createContext } from 'react';

const MainContext = createContext<string | null | boolean>(null);

export default MainContext;
