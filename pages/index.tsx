import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Cypress Test</title>
				<meta name="description" content="Used to practice cypress examples" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<div className={styles.description}>
					<p>
						Navigate to the following pages and get &nbsp;
						<code className={styles.code}>This is purple</code>
					</p>
					<div>
						<a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
							By Saikiran Salla
						</a>
					</div>
				</div>

				<div className={styles.center}>
					<Image className={styles.logo} src="/ssaik.png" alt="Next.js Logo" width={180} height={37} priority />
					{/* <div className={styles.thirteen}>
						<Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
					</div> */}
				</div>

				<div className={styles.grid}>
					<Link href="/example/example1" className={styles.card}>
						<h2 class="example1" className={inter.className}>
							Example1 <span>-&gt;</span>
						</h2>
						<p className={inter.className}>assert for "This is Purple"</p>
					</Link>

					<Link href="/example/example2" className={styles.card}>
						<h2 class="example2" className={inter.className}>
							Example2 <span>-&gt;</span>
						</h2>
						<p className={inter.className}>assert for "This is Purple"</p>
					</Link>

					<Link href="/example/example3" className={styles.card}>
						<h2 class="example3" className={inter.className}>
							Example3 <span>-&gt;</span>
						</h2>
						<p className={inter.className}>assert for "This is Purple"</p>
					</Link>

					<Link href="/example/example4" className={styles.card}>
						<h2 class="example4" className={inter.className}>
							Example4 <span>-&gt;</span>
						</h2>
						<p className={inter.className}>assert for "This is Purple"</p>
					</Link>

					<Link href="/example/example5" className={styles.card}>
						<h2 class="example5" className={inter.className}>
							Example5 <span>-&gt;</span>
						</h2>
						<p className={inter.className}>assert for "This is Purple"</p>
					</Link>

					<Link href="/example/example6" className={styles.card}>
						<h2 class="example6" className={inter.className}>
							Example6 <span>-&gt;</span>
						</h2>
						<p className={inter.className}>assert for "This is Purple"</p>
					</Link>

					<Link href="/example/example7" className={styles.card}>
						<h2 class="example7" className={inter.className}>
							Example7 <span>-&gt;</span>
						</h2>
						<p className={inter.className}>assert for "This is Purple"</p>
					</Link>

					<Link href="/example/example8" className={styles.card}>
						<h2 class="example8" className={inter.className}>
							Example8 <span>-&gt;</span>
						</h2>
						<p className={inter.className}>assert for "This is Purple"</p>
					</Link>

					<Link href="/example/example9" className={styles.card}>
						<h2 class="example9" className={inter.className}>
							Example9 <span>-&gt;</span>
						</h2>
						<p className={inter.className}>assert for "This is Purple"</p>
					</Link>

					<Link href="/example/exampleTen" className={styles.card}>
						<h2 class="exampleTen" className={inter.className}>
							Example10 <span>-&gt;</span>
						</h2>
						<p className={inter.className}>assert for "This is Purple"</p>
					</Link>
				</div>
			</main>
		</>
	);
}
