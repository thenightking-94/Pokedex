import { useRouter } from "next/router"
import MobileBackIcon from "../../Icons-svg/mobileBackIcon"
import MobileForwardIcon from "../../Icons-svg/mobileForwardIcon"


export default function NavigationBtnMobile ({id}){
    const router = useRouter()

    return(
        <div className="nav-mobile">
            <div onClick={()=>{router.push(`/detail/${Number(id)-1}`)}} className='back-icon'><MobileBackIcon/>Previous</div>
            <div onClick={()=>{router.push(`/detail/${Number(id)+1}`)}} className='forward-icon'>Next<MobileForwardIcon/></div>
        </div>
    )
}