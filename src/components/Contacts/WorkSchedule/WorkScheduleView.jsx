import styles from './WorkSchedule.module.scss'

export const WorkScheduleView = () => {
    return (
        <div className={styles.schedule}>
            <h2 className={styles.title}>Work schedule:</h2>
            <ul>
                <li><strong>Mon-Fri: </strong> from 9:00 a.m. to 8:00 p.m</li>
                <li><strong>Sat: </strong>from 9:00 a.m. to 7:00 p.m</li>
                <li><strong>Sun: </strong> Closed</li>
            </ul>
        </div>
    )
}