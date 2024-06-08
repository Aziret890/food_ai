import styles from "../../css/MoreInfo.module.css"

function FindUs() {
    return (
        <div className={styles.findUs}>
            <h2 className={styles.fundUs__title}>You can find us in 2gis</h2>
            {/* затычка всесто апи карты */}
            <div className={styles.findUs__map}>
                <a
                    target="_blank"
                    href="https://2gis.kg/bishkek/firm/70000001035919302?m=74.619948%2C42.87944%2F16"
                >
                    <img
                        src="images/content/map.png"
                        alt=""
                    />
                </a>
            </div>
        </div>
    )
}

export default FindUs
