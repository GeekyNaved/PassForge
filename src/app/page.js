import styles from "./page.module.css";

export default function Home() {
  return (
    <div class={styles.main}>
      <div class={styles.card}>
        <div class={styles.cardBody}>
          <h3 class={`${styles["cardTitle"]} ${styles["fields"]}`}>Password Generator</h3>
          <div class={styles.fields}>
            <input type="text" id="input" class={styles.plainTxt} placeholder="Enter plain text here"
              required />
            <textarea rows="8" id="output" class={styles.encryptedTxt}
              placeholder="Encrypted Password will come here" />
            <div class={styles.copyContainer}>
              <a class={`${styles["btn"]} ${styles["copy"]}`} href="#" id="copy">copy</a>
            </div>
          </div>
          <div class={styles.btnContainer}>
            <a class={`${styles["btn"]} ${styles["encrypt"]}`} href="#" id="encrypt">Generate (Encrypt)</a>
            <a class={`${styles["btn"]} ${styles["decrypt"]}`} href="#" id="decrypt">Decrypt (Generate original text)</a>
            <a class={`${styles["btn"]} ${styles["clear"]}`} href="#" id="clear"> Clear Text</a>
          </div>
        </div>
      </div>
    </div>
  );
}
