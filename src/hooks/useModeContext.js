import {ModeContextSettings} from "../context/ModeContext"
import { useContext } from "react"
const useModeContext = () => {
    
  return (
    useContext(ModeContextSettings)
  )
}

export default useModeContext