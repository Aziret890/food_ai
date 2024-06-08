import styles from "../../css/Menu.module.css"
import SelectSection from "./SelectSection"
import foodsData from "../../data/foodsData"
import dessertData from "../../data/dessertData"
import drinksData from "../../data/drinksData"
import comboData from "../../data/comboData"
import Card from "./Card"

function Menu() {
    return (
        <div className={styles.menu}>
            <div className="container">
                <h2 className={styles.menu__title}>Menu</h2>
                <SelectSection title="food">
                    {foodsData.map((card) => (
                        <Card
                            img={card.img}
                            title={card.title}
                            text={card.text}
                            price={card.price}
                            key={card.id}
                            weight={card.weight}
                            id={card.id}
                        />
                    ))}
                </SelectSection>
                <SelectSection title="dessert">
                    {dessertData.map((card) => (
                        <Card
                            img={card.img}
                            title={card.title}
                            text={card.text}
                            price={card.price}
                            key={card.id}
                            weight={card.weight}
                            id={card.id}
                        />
                    ))}
                </SelectSection>
                <SelectSection title="drinks">
                    {drinksData.map((card) => (
                        <Card
                            img={card.img}
                            title={card.title}
                            text={card.text}
                            price={card.price}
                            key={card.id}
                            weight={card.weight}
                            id={card.id}
                        />
                    ))}
                </SelectSection>
                <SelectSection title="combo">
                    {comboData.map((card) => (
                        <Card
                            img={card.img}
                            title={card.title}
                            text={card.text}
                            price={card.price}
                            key={card.id}
                            weight={card.weight}
                            id={card.id}
                        />
                    ))}
                </SelectSection>
            </div>
        </div>
    )
}

export default Menu
