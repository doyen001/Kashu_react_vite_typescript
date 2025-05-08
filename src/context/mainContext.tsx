import React, {
  PropsWithChildren,
  useState,
  SetStateAction,
  Dispatch,
  createContext,
} from "react";

export type TUser = {
  phone: string;
  code: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  socialSecurityNumber: string;
  streetAddress: string;
  aptNumber: string;
  city: string;
  state: string;
  zipCode: string;
  verified: boolean;
};

type TMainContext = {
  userData?: TUser;
  setUserData: Dispatch<SetStateAction<TUser | undefined>>;
};

export const MainContext = createContext<TMainContext>({
  setUserData: () => {},
});

const MainProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [userData, setUserData] = useState<TUser>();
  console.log("userData", userData);
  return (
    <MainContext.Provider value={{ userData, setUserData }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
