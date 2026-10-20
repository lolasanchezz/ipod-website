import AsciiDancer from "./ascii-dancer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <AsciiDancer className={styles.dancer} />
    </main>
  );
}
