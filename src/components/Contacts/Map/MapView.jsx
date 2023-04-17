import styles from "./Map.module.scss";

export const MapView = () => {
    return (
        <div className={styles.frame}>
            <div className={styles.map}>
                <iframe width="652" height="481" id="gmap_canvas"
                        src="https://maps.google.com/maps?q=%D0%BA%D0%B8%D0%B5%D0%B2,
                        %20%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE%20,
                        %2024&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                        title="Location Map on Shevchenko Street">
                </iframe>
            </div>
        </div>
    )
}