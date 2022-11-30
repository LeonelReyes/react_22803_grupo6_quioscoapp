import {useState, useEffect, createContext} from 'react'

const QuioscoContext = createContext()

const QuiscoProvider = ({children}) => {

    return(
        <QuioscoContext.Provider
            value={{

            }}
        >
            {children}
        </QuioscoContext.Provider>
    )

}
export{
    QuiscoProvider
}
export default QuioscoContext