"use client";
import React, {ReactNode, useContext} from "react";

interface LocaleContextProps {
  language: string;
  intl: Intl.DateTimeFormat;
}

const defaultIntlOptions: Intl.DateTimeFormatOptions = {
  dateStyle: "long"
}

const LocaleContext = React.createContext<LocaleContextProps | undefined>(undefined);

function useLocaleContext() {
  const ctx = useContext(LocaleContext);
  if(!ctx) {
    throw Error("Tried to use LocaleContext outside LocaleContextProvider");
  }

  return ctx;
}

function LocaleContextProvider({children}: {children: ReactNode | ReactNode[]}) {
  return (
    <LocaleContext.Provider
      value={{
        language: "en-GB",
        intl: new Intl.DateTimeFormat("en-GB", defaultIntlOptions)
      }}
    >
      {children}
    </LocaleContext.Provider>
  )
}

export {useLocaleContext, LocaleContextProvider};