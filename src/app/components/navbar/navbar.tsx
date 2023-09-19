import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.body_navbar}>
      <div className={styles.logo_navbar}>
        <Link href={`/`}>
          <div className={styles.title}>Firedrive</div>
        </Link>
      </div>
      <div className={styles.items_navbar}>
        <Link href={`about`}>
          <div>About Us</div>
        </Link>
        <Link href={`https://andrescuello.netlify.app/`}>
          <div>Contacto</div>
        </Link>
      </div>
      <div className={styles.logo_navbar}>
        <Link href={`login`}>
          <button>Iniciar</button>
        </Link>
        <Link href={`register`}>
          <button>Registrarme</button>
        </Link>
      </div>
    </div>
  );
}
