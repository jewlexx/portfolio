import Image from 'next/image';
import { Roboto } from '@next/font/google';
import styles from './page.module.css';

export default function Home() {
  return (<main className={styles.main}>
	  <header className={ styles.hero}>
	<div className={styles.overlay}>
			  <h1 className={styles.title}>
			Juliette Cordor
			<small className={styles.pronouns}> (She/Her) </small>
		</h1>
        <div>
			{links.map({ emoji, name, url } => (
				<a
					href={`https://${url}`}
					target="_blank"
					rel="noopener noreferrer"
					class={`role ${true ? 'motion' : ''}`}
				>
					<img src={emoji} alt={name} />
				</a>))
			}
		</div>
	</div>
</header>
  </main>);
}
