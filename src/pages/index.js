import Head from "next/head";
import { HomePage } from "../components/home-page";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Upwork Nextjs</title>
        <meta name="description" content="Test for Upwork job" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomePage />
      </main>
    </div>
  );
}
