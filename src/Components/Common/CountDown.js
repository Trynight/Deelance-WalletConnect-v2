import Clock from "../../assets/timer.png";
import { useContext, useEffect, useState } from "react"
import UserContext from "../../UserContext";

const CountDown = () => {
    const { contracts } = useContext(UserContext)
    const contract = contracts.Main

    const [timeRange, setTimeRange] = useState()
    const [currentTime, setCurrentTime] = useState()

    useEffect(() => {
        const setRemainingTime = async () => {
            setTimeRange({
                startTime: (await contract.startTime()).toNumber(),
                endTime: (await contract.endTime()).toNumber(),
            })
        }
        setRemainingTime();

        setInterval(() => setCurrentTime(Math.floor(Date.now() / 1000)), 1000)
    })

    const getRemainingTime = () => {
        const seconds = timeRange.endTime - currentTime
        return {
            days: Math.floor(seconds / (24 * 3600)),
            hours: Math.floor((seconds / 3600) % 24),
            minutes: Math.floor((seconds / 60) % 60),
            seconds: seconds % 60,
        }
    }

    return (
        <div className="d-flex justify-content-center mt-10">
            <img src={Clock} alt="" className="timer" />
            <p className="count-down">
                {(!timeRange || currentTime < timeRange.startTime) ? (
                    <>It's not started yet</>
                ) : (
                    currentTime < timeRange.endTime ? (
                        <>
                            <span className="num">{getRemainingTime().days}</span> DAYS,{" "}
                            <span className="num">{getRemainingTime().hours}</span> HOURS,{" "}
                            <span className="num">{getRemainingTime().minutes}</span> MINUTES,{" "}
                            <span className="num">{getRemainingTime().seconds}</span> SECONDS remaining
                        </>
                    ) : (
                        <>It's already finished </>
                    )
                )}

            </p>
        </div>
    )
}

export default CountDown