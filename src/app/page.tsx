import styles from "./page.module.css";
import SearchForm from "@/modules/search-form";

export default function Home() {
  return (
    <main className={styles.main}>
      <SearchForm />
    </main>
  );
}
