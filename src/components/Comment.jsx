import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://media.licdn.com/dms/image/C5603AQH4aznzuUolkA/profile-displayphoto-shrink_800_800/0/1651620196655?e=1729123200&v=beta&t=Rt9Amt36wVFeigYBqLCcygvxDfkHrCzq4yxSJBjQGHk" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Daniel Paveliski Maranini</strong>
                            <time title='11 de maio às 08:13' dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>


                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>

                    </header>

                    <p>Muito bom Paiva, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}