import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found | Ubuntu Desktop Simulator</title>
        <meta name="description" content="This address does not exist on the Ubuntu Desktop Simulator." />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/images/logos/fevicon.svg" />
      </Head>
      <div className="flex h-screen flex-col items-center justify-center bg-ub-grey text-white">
        <p className="text-4xl">404</p>
        <p className="mt-4">This address does not exist on the simulator.</p>
        <Link href="/" className="mt-4 underline">
          Back to the desktop
        </Link>
      </div>
    </>
  );
}
