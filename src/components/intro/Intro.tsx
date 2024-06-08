import styles from "../../css/Intro.module.css"
import Banner from "./Banner"
import CallUs from "./CallUs"
import Search from "./Search"
import KindOfFood from "./KindOfFood"

function InfoPage() {
    return (
        <div className={styles.intro}>
            <div className="container">
                <Banner />
                <CallUs />
                <Search />
                <KindOfFood />
            </div>
        </div>
    )
}

export default InfoPage
