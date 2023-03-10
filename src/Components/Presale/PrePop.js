import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../UserContext";
import "./Presale.css";
import { ethers } from "ethers";
import { TokenList } from "../../Constants/Constants";

function PrePop({ setIsModal }) {
  const { connectWallet, provider, contracts, account } =
    useContext(UserContext);
  const [balances, setBalances] = useState({ ETH: 0 });
  const [showComp, setShowComp] = useState(false);
  const tokenElement = useRef({ value: "" });
  const nftAmountElement = useRef();
  const usdAmountElement = useRef();
  const [somestate, setSomeState] = useState(false);
  const [selectedToken, setSelectedToken] = useState("ETH");
  const maxa = useRef();
  const [secondInputValue, setSecondInputValue] = useState(0);
  const [thirdInputValue, setThirdInputValue] = useState(0);

  const handleClick = async (e) => {
    e.preventDefault();
    if (!account) {
      const success = await connectWallet();
      if (!success) {
        alert("please connect to wallet");
      }
    }
    setShowComp(!showComp);
    setSomeState(!somestate);
  };

  useEffect(() => {
    if (!account) {
      setBalances({
        ETH: 0,
        USDT: 0,
      });

      tokenElement.current = { value: "" };
    } else {
      tokenElement.current = { value: "" };

      const getETHBalance = async () => {
        const balance = await provider.getBalance(account);
        return ethers.utils.formatEther(balance);
      };

      const getSomeState = async () => {
        setSomeState(true);
        console.log("fatto");
      };
      const getTokenBalances = async (token) => {
        console.log(token, " getting balance");
        const balance = await contracts[token].balanceOf(account);
        const decimals = (await contracts[token].decimals()).toNumber();
        const aaaa = parseInt(
          await contracts["USDT"].allowance(account, contracts.Main.address),
          10
        );
        console.log("CIAO", aaaa);
        console.log("success");
        return balance.div("1" + "0".repeat(decimals)).toNumber();
      };

      const getAllBalances = async () => {
        const balances = { ETH: await getETHBalance() };
        for (const token of TokenList) {
          balances[token] = await getTokenBalances(token);
        }
        setBalances(balances);
      };

      getAllBalances();
      getSomeState();
    }
  }, [account]);

  const buyNFT = async (e) => {
    e.preventDefault();

    if (!account) {
      return;
    }

    const token = selectedToken;
    const nftAmount = nftAmountElement.current.value;

    try {
      const gasPrice = await provider.getGasPrice();
      let transaction = null;
      const xx = await contracts.Main.salePrice();
      const xxx = ethers.utils.formatEther(xx);
      console.log(nftAmount * xxx);
      if (nftAmount * xxx < 9.8) {
        console.log("Amount is", nftAmount * xxx);
        alert("Please insert more than 10$ to buy!");
        return;
      }
      if (token == "ETH") {
        const ETHAmount = await contracts.Main.getETHAmount(
          ethers.utils.parseUnits(nftAmount.toString(), "wei").toString()
        );
        console.log(ETHAmount.toString());
        transaction = await contracts.Main.buyWithETH(nftAmount, {
          gasLimit: 130055,
          gasPrice: ethers.utils.parseUnits(gasPrice, "gwei"),
          value: ETHAmount.toString(),
        });
      } else {
        const tokenAmount = await contracts.Main.getTokenAmount(
          nftAmount.toString(),
          0
        );
        const b = parseInt(
          await contracts["USDT"].allowance(account, contracts.Main.address),
          10
        );

        if (b <= 0) {
          console.log("sono qui");
          transaction = await contracts["USDT"].approve(
            contracts.Main.address,
            "10000000000000000000000000000000000000000000000000000000000"
          );
        } else {
          console.log("SIIII", nftAmount.toString());
          transaction = await contracts.Main.buyWithUSD(
            nftAmount.toString(),
            0
          );
        }
      }
      const tx_result = await transaction.wait();
      alert(`Successfully transaction! TX: ${tx_result.transactionHash}`);
      console.log("transaction", tx_result.transactionHash);
      setSomeState(!somestate);
    } catch (error) {
      alert(
        "Error occured during transaction. Please check the browser console.\n" +
          error.reason
      );
      console.error("Transaction Error:", error.reason);
      setSomeState(!somestate);
    }
  };

  const handleTokenChange = (e) => {
    setSelectedToken(e.target.value);
  };

  const handleMaxClick = async (e) => {
    e.preventDefault();
    console.log("PROVA", selectedToken);
    if (selectedToken === "ETH") {
      maxa.current.value = Math.max(balances.ETH);
    } else {
      maxa.current.value = Math.max(balances["USDT"]);
    }
    handleFirstInputChange({ target: { value: maxa.current.value } });
  };

  const handleFirstInputChange = async (event) => {
    if (selectedToken === "USDT") {
      const inputValue = event.target.value;
      const pri = await contracts.Main.salePrice();
      const prezzo = ethers.utils.formatEther(pri);
      const priETH = parseInt(inputValue / prezzo, 10);
      console.log(priETH);
      setSecondInputValue(priETH);
      setThirdInputValue(inputValue);
    } else {
      const inputValue = event.target.value;
      const pri = await contracts.Main.salePrice();
      const prezzo = ethers.utils.formatEther(pri);
      const prezzo_ETH = await contracts.Main.getETHLatestPrice();
      const prezzo_ETH_formattato = ethers.utils.formatEther(prezzo_ETH);
      const mio_valore = inputValue * prezzo_ETH_formattato;
      const finale = parseInt(mio_valore / prezzo, 10);
      console.log(finale);
      setSecondInputValue(finale);
      setThirdInputValue(mio_valore.toFixed(2));
    }
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer-2">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setIsModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="">
          <section className="">
            <div className="formWrapper-2">
              <header className="pop-pre-h">
                <h2 className=" mb-10px lh-1">
                  Balance: {balances[selectedToken]} {selectedToken}
                </h2>
              </header>
              <div className="d-flex pre-step-1">
                <div className="d-flex pre-step-1" style={{ width: "156px" }}>
                  <h3>1. YOU PAY</h3>

                  <div className="select-coin">
                    <select
                      id="option"
                      ref={tokenElement}
                      style={{ background: "#00e069", height: "24px" }}
                      onChange={handleTokenChange}
                    >
                      <option value="ETH">ETH</option>
                      <option value="USDT">USDT</option>
                    </select>
                  </div>
                </div>

                <span className="white">:</span>
                <div className="d-flex">
                  <form className="dee-bal">
                    <input
                      type="number"
                      className="fs-26px white weight-3 in-put-pre"
                      placeholder="0.00"
                      onChange={handleFirstInputChange}
                      ref={maxa}
                      required
                    />

                    <button onClick={handleMaxClick} className="btn-max">
                      MAX
                    </button>
                  </form>
                </div>
              </div>

              <div className="d-flex pre-step-1">
                <div className="d-flex pre-step-1" style={{ width: "156px" }}>
                  <h3>2. VALUE</h3>

                  <div className="dee-coin green">$</div>
                </div>

                <span className="white">:</span>
                <div className="d-flex">
                  <form className="dee-bal">
                    <input
                      type="number"
                      className="fs-26px white  weight-3 in-put-pre"
                      placeholder="0.00"
                      value={thirdInputValue}
                      ref={usdAmountElement}
                      required
                    />
                  </form>
                </div>
              </div>

              <div className="d-flex pre-step-1">
                <div className="d-flex pre-step-1" style={{ width: "156px" }}>
                  <h3>3. YOU GET</h3>
                  <div className="dee-coin green">$dlance</div>
                </div>

                <span className="white">:</span>

                <div className="">
                  <input
                    type="number"
                    className="fs-26px white  weight-3 in-put-pre wt-100 "
                    placeholder="0.00"
                    value={secondInputValue}
                    ref={nftAmountElement}
                    required
                  />
                </div>
              </div>

              <div className="m-auto text-center">
                <button type="submit" className="pre-pop-btn" onClick={buyNFT}>
                  Buy Now
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrePop;
