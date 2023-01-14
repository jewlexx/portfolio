import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (<main className={styles.main}>
    <header class="hero">
	<div class="overlay">
		<h1 class="title">
			Juliette Cordor
			<small class="pronouns"> (She/Her) </small>
		</h1>
        <div>
			{#each links as { emoji, name, url }}
				<a
					href={`https://${url}`}
					target="_blank"
					rel="noopener noreferrer"
					class={`role ${true ? 'motion' : ''}`}
				>
					<img src={emoji} alt={name} />
				</a>
			{/each}
		</div>
	</div>
</header>
  </main>);
}
