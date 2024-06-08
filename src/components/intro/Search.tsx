import styles from "../../css/Intro.module.css"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../typeOfStates/RootState"
import { whichId, setPick } from "../../reducers/cardPcikedSlcie"
import {
    changeInput,
    setSearchData,
    setSearchActive,
} from "../../reducers/serachSlice"
import { useEffect } from "react"
import Found from "./Found"
import foodsData from "../../data/foodsData"
import dessertData from "../../data/dessertData"
import drinksData from "../../data/drinksData"
import comboData from "../../data/comboData"

function Search() {
    const dispatch = useDispatch()
    // inputState
    const searchValue = useSelector((state: RootState) => state.search.input)
    // serachDataState
    const searchData = useSelector(
        (state: RootState) => state.search.searchData
    )
    const searchActive = useSelector(
        (state: RootState) => state.search.searchActive
    )

    useEffect(() => {
        const allData = [
            ...foodsData,
            ...dessertData,
            ...drinksData,
            ...comboData,
        ]
        dispatch(
            setSearchData(
                allData.filter((el) => {
                    if (searchValue.length !== 0) {
                        return (
                            el.title
                                .slice(0, searchValue.length)
                                .toLowerCase() == searchValue.toLowerCase()
                        )
                    }
                })
            )
        )
    }, [searchValue])

    const clickOnTarget = (e: any) => {
        const targetElement = e.target
        // Проверяем, был ли клик не по элементу с классом "ignoreClick"
        if (!targetElement.closest(styles.card)) {
            dispatch(setSearchData([]))
        }
    }

    return (
        <div
            onClick={(e) => {
                clickOnTarget(e)
            }}
            className={styles.search}
        >
            <h3 className={styles.search__title}>search</h3>
            <div className={styles.search__row}>
                <div className={styles.search__svg}>
                    <img
                        src="/images/svg/search.svg"
                        alt=""
                    />
                </div>
                <input
                    onChange={(e) => dispatch(changeInput(e.target.value))}
                    onFocus={() => {
                        // dispatch(setSearchActive(true))
                        dispatch(changeInput(""))
                    }}
                    onBlur={(e) => {
                        // dispatch(setSearchActive(false))
                        e.target.value = ""
                    }}
                    className={styles.search__search}
                    type="text"
                />
                <div
                    style={{
                        boxShadow: `${
                            searchData.length === 0
                                ? ""
                                : "-1px 4px 11px 5px rgba(0, 0, 0, 0.37)"
                        }`,
                    }}
                    className={styles.search__data}
                >
                    {searchData.map((data) => {
                        return (
                            <Found
                                key={data.id}
                                id={data.id}
                                text={data.text}
                                title={data.title}
                                weight={data.weight}
                                img={data.img}
                                price={data.price}
                            >
                                {/* {which === data.id && pick && (
                                    <PickedCard
                                        id={data.id}
                                        text={data.text}
                                        title={data.title}
                                        weight={data.weight}
                                        img={data.img}
                                        price={data.price}
                                    />
                                )} */}
                            </Found>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Search
