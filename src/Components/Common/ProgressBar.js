import { useContext, useEffect, useState } from "react"
import UserContext from "../../UserContext"
import { ethers } from 'ethers';
import { BigNFTABI } from './Constants/ABI';
import { ContractAddr, providerOptions, RPCUrl } from './Constants/Constants';

const ProgressBar = () => {
const { connectWallet,provider, contracts, account } = useContext(UserContext);
const [total, setTotal] = useState(0)
const [inSale, setInSale] = useState(0)

useEffect(() => {
    const getSaleProgress = async () => {
            const ibatAmount = await contracts.Main.inSale().toNumber()
            setInSale((await contracts.Main.inSale()).toNumber())
            setTotal((await contracts.Main.totalTokensForPresale()).toNumber())
            
    }
    getSaleProgress();
}, [])

return (
    <>
        <div className="bar">
            <div className="sub-bar" style={{ width: (total ? ((total - inSale) / total) : 0) * 100 + "%" }}></div>
        </div>
        <p className="progress-1">
            Progress <span className="pr-num">{total ? Math.floor(((total - inSale) / total) * 100) : 0}%</span>({(total - inSale).toLocaleString()}/{total.toLocaleString()})
        </p>
    </>
)

}

export default ProgressBar