import bannerData from "../data/bannerData"
import styles from "../css/Test.module.css"
import { useState, useEffect, useRef } from "react"

const Test = () => {
    const [currentInd, setcurrentInd] = useState(1)
    const [transition, setTransition] = useState(true)
    const [copyData, setCopyData] = useState([
        bannerData[bannerData.length - 1],
        ...bannerData,
        bannerData[0],
    ])

    const changeSlide = (index: number): void => {
        if (index < 0) {
            setcurrentInd(bannerData.length)
        } else if (index == bannerData.length + 1) {
            setcurrentInd(index)
            setTimeout(() => {
                setcurrentInd(1)
                setTransition(false)
            }, 500)
        } else {
            setTransition(true)
            setcurrentInd(index)
        }
    }

    const nextSlide = (): void => {
        changeSlide(currentInd + 1)
    }
    const prevSlide = (): void => {
        changeSlide(currentInd - 1)
    }

    return (
        <>
            <div className={styles.test}>
                <div className="container">
                    <div
                        style={{
                            transform: `translateX(${-currentInd * 1050}px)`,
                            transition: `${
                                transition ? "all 0.6s ease" : "none"
                            }`,
                        }}
                        className={styles.test__row}
                    >
                        {copyData.map((data, ind) => {
                            return (
                                <img
                                    src={data.img}
                                    alt=""
                                    key={ind}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.btn}>
                <button
                    onClick={prevSlide}
                    className={styles.prev}
                >
                    prev
                </button>
                <button
                    onClick={nextSlide}
                    className={styles.next}
                >
                    next
                </button>
            </div>
        </>
    )
}

export default Test
