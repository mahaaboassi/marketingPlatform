"use client"
import { Provider } from "react-redux"
import { store } from "../../app/redux/store"
const WrapperProvider = ({children})=>{
    return(<Provider store={store}>{children}</Provider>)
}
export default WrapperProvider