import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from "./example.module.css";
import styles2 from "@/styles/Home.module.css";
export default function example1() {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<main className={styles2.main}>
				<h1 style={{ marginBottom: "2rem" }}>Write assertion to for "This is purple"</h1>
				<div id="purple">
					<b class="color">This is purple</b>
				</div>
				<div className={styles.flexbox}>
					<h2>
						<Link href="/example/example4">← Back to Example4</Link>
					</h2>
					<h2>
						<Link href="/example/example6">← Forward to Example6</Link>
					</h2>
				</div>
			</main>
		</Layout>
	);
}
