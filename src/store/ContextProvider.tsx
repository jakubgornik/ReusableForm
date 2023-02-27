import { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

interface ContextType {
  isNavigationVisible: boolean;
  changeNavigationStatus: () => void;
}

// Init
export const Context = createContext<ContextType>({
  isNavigationVisible: false,
  changeNavigationStatus: () => {},
});

// Provider
const ContextProvider = ({ children }: Props) => {
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);

  const changeNavigationDisplay = () => {
    setIsNavigationVisible(!isNavigationVisible);
  };

  // Passed values
  const contextValues: ContextType = {
    isNavigationVisible: isNavigationVisible,
    changeNavigationStatus: changeNavigationDisplay,
  };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};

export default ContextProvider;
