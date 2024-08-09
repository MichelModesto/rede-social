import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Michel Modesto"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, vero ea fuga repudiandae autem, at, ducimus accusantium deleniti eaque tempore sequi maxime ut placeat earum aut cum. Reprehenderit, rerum fugit."
          />
          <Post
            author="Gabriel Buzzi"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}


