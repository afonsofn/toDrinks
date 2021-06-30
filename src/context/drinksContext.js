import { createContext, useState, useContext } from "react"


export const DrinksContext = createContext("teste")

export function DrinksContextProvider({ children }) {

  const [test, setTest] = useState("Raul")

  return (
    <DrinksContext.Provider value={{
      test
    }}>
      { children }
    </DrinksContext.Provider>
  )
}

export const useDrinks = () => {
  return useContext(DrinksContext)
}