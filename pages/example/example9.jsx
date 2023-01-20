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
				<div>
					<b class="color">This is red</b>
					<h2>
						<b class="color">This is purple</b>
					</h2>
					<h3>
						<b class="color">This is yellow</b>
					</h3>
				</div>
				<div className={styles.flexbox}>
					<h2>
						<Link href="/example/example8">← Back to Example8</Link>
					</h2>
					<h2>
						<Link href="/example/example10">← Forward to Example10</Link>
					</h2>
				</div>
			</main>
		</Layout>
	);
}
