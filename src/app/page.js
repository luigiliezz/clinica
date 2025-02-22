import styles from "./page.module.css"
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.h1inicio}>Bem-vindo à Stay Health!</h1>
      <p className={styles.p}> Você está agora em nossa site especial para pacientes, acesse o menu para tirar sua duvidas.</p>
      <Image className={styles.img} src="/images/clinicaaa.jpg" alt="imag" width={600} height={450}/>
    </div>
  );
}