import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'



export function Post(props) {
    console.log(props);

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://media.licdn.com/dms/image/D4D03AQFIzLtnZEuq9A/profile-displayphoto-shrink_800_800/0/1695442047367?e=1728518400&v=beta&t=cH-bmXQBw9tLtgkFxZnGfatHbyC4ux2329DGOttjGe4" />
                    <div className={styles.authorinfo}>
                        <strong>Guilherme Paiva</strong>
                        <span>Desing</span>
                    </div>
                </div>

                <time title='11 de maio às 08:13' dateTime="2022-05-11 08:13:30">Puclicado há 1h</time>
            </header>

            <div className={styles.content}>

                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="">paivinha.design/doctorcare</a></p>

                <p>
                    <a href="#">#novoprojeto</a> {' '}
                    <a href="#">#nlw</a> {' '}
                    <a href="#">#rocketseat</a>
                </p>

            </div>

            <form className={styles.commentForm}>

                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário" />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}