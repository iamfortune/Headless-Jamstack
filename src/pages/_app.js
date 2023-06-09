import "@/styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Intro from "../components/bloks/Intro";
import Page from "../components/bloks/Page";
import Features from "../components/bloks/Features";
import Customers from "../components/bloks/Customers";
import Workflows from "../components/bloks/Workflows";
import Supercharge from "../components/bloks/Supercharge";
import Testimonials from "../components/bloks/Testimonials";
import Head from "next/head";

export default function App({ Component, pageProps }) {
	storyblokInit({
		accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
		use: [apiPlugin],
		components: {
			Customers,
			Features,
			Intro,
			page: Page,
			Supercharge,
			Testimonial: Testimonials,
			Workflows,
		},
	});

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="theme-color" content="#00b3b0" />
				<meta
					name="description"
					content="Empowering successful teams, one workflow at a time"
				/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
				/>
				<title>Artsy</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
