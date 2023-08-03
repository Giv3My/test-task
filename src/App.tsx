import { useWow } from './hooks';

import { Header, Promo, About, Tasks, Projects, Connect, Footer } from '@/components';
import styles from './styles/App.module.scss';

function App() {
  useWow();

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <Promo />
          <About />
          <Tasks />
          <Projects />
          <Connect />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
