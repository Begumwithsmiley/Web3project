import { ethers } from "ethers";

export default async function currentBlockNo() {
    const provider = new ethers.JsonRpcProvider("https://quiet-little-tab.ethereum-goerli.discover.quiknode.pro/3bc1c61d1b077c93789f5d47ac033348ba235a5d/")
    const blo = await provider.getBlockNumber()
    return (blo)
}