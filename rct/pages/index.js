import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import useSWR from "swr";
import Navbar from "../components/navbar";
import { useKeenSlider } from "keen-slider/react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function BusinessCard(props) {
  return (
    <div
      className="keen-slider__slide rounded overflow-hidden shadow-lg mr-2 mb-2">
      <img
        className="w-full"
        src={props.image || "https://unsplash.com/photos/poI7DelFiVA/download?w=640"}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <p className="text-gray-700 text-base">
          {props.description ||
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nullxa!"}
        </p>
      </div>
      <div className="px-6 py-4">
        <a href={"mailto:"+props.cta} className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2">
          Experiment
        </a>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {props.category}
        </span>
      </div>
    </div>
  );
}

function ExperimentsCard(props) {
  return (
    <div
      className="keen-slider__slide rounded overflow-hidden shadow-lg mr-2 mb-2">
      <img
        className="w-full"
        src={props.image || "https://unsplash.com/photos/poI7DelFiVA/download?w=640"}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.b1} x {props.b2}</div>
        <p className="text-gray-700 text-base">
          {props.description ||
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nullxa!"}
        </p>
      </div>
      <div className="px-6 py-4">
        <a href={"mailto:"+props.cta} className="inline-block bg-yellow-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2">
          Read More
        </a>
      </div>
    </div>
  );
}

function Businesses() {
  const { data, error } = useSWR(
    process.env.NEXT_PUBLIC_API_URL + "/api/AllBusinesses",
    fetcher
  );
  console.log(error);
  const [sliderRef] = useKeenSlider({ slidesPerView: 4, spacing: 15 });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const ds = data.map((d) => (
    <BusinessCard description={d.description} name={d.name} key={d.id} category={d.category} cta={d.email} image={d.image} />
  ));
  return (
    <div ref={sliderRef} className="keen-slider pt-1">
      {ds}
    </div>
  );
}

function Experiments() {
  const { data, error } = useSWR(
    process.env.NEXT_PUBLIC_API_URL + "/api/AllExperiments",
    fetcher
  );
  console.log(error);
  const [sliderRef] = useKeenSlider({ slidesPerView: 4, spacing: 15 });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const ds = data.map((d) => (
    <ExperimentsCard description={d.description} b1={d.b1} b2={d.b2}  key={d.id} image={d.image} />
  ));
  return (
    <div ref={sliderRef} className="keen-slider pt-1">
      {ds}
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Meaningful{" "}
            <Link href="/posts/first-post">
              <a>experiments</a>
            </Link>{" "}
            with <br />
            <Link href="/posts/first-post">
              <a>businesses</a>
            </Link>{" "}
            around you!
          </h1>
        </div>
        <div className="mt-1 ml-3">
          <h2 className="font-bold text-xl">Recent Experiments &gt;</h2>
          <Experiments />
        </div>
        <div className="mt-5 ml-3">
          <h2 className="font-bold text-xl">Nearby Businesses &gt;</h2>
          <Businesses />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://darshanbaid.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with &lt;3 by Darshan Baid
        </a>
      </footer>
    </div>
  );
}
