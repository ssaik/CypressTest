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
				<h1 style={{ marginBottom: "2rem" }}>Write assertion to for "This is purple" Which is in red color</h1>

				<div class="purple">
					<b>This is purple</b>
				</div>
				<div class="red" style={{color: "red"}}>
					<b>This is purple</b>
				</div>
				<div className={styles.flexbox}>
					<h2>
						<Link href="/example/example1">← Back to Example1</Link>
					</h2>
					<h2>
						<Link href="/example/example3">← Forward to Example3</Link>
					</h2>
				</div>
			</main>
		</Layout>
	);
}
