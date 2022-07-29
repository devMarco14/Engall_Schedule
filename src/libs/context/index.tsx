import React from 'react';

interface RefreshedContextType {
  isRefreshed: boolean;
  changeRefreshState: () => void;
}

export const RefreshedContext = React.createContext<RefreshedContextType>({
  isRefreshed: false,
  changeRefreshState: () => undefined,
});

export function RefreshedProvider({ children }: { children: React.ReactNode }) {
  const [isRefreshed, setIsRefreshed] = React.useState<boolean>(false);

  const changeRefreshState = () => {
    setIsRefreshed(!isRefreshed);
  };

  const memoedValue = React.useMemo(
    () => ({
      isRefreshed,
      changeRefreshState,
    }),
    [isRefreshed],
  );

  return (
    <RefreshedContext.Provider value={memoedValue}>
      {children}
    </RefreshedContext.Provider>
  );
}
