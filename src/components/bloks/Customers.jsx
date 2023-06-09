/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import { storyblokEditable } from "@storyblok/react";

const styles = {
	stripe: {
		height: 35,
		width: 84,
	},
	microsoft: {
		height: 35,
		width: 163,
	},
	airbnb: {
		height: 35,
		width: 110,
	},
	google: {
		height: 35,
		width: 107,
	},
	storyblok: {
		height: 35,
		width: 164,
	},
};

const Customers = ({ blok }) => {
	return (
		<Section {...storyblokEditable(blok)} className="w-full mx-auto">
			<h2 className="text-center" style={{ marginBottom: 40 }}>
				{blok?.title}
			</h2>

			<div className="sb-company-logos flex items-center justify-center">
				<Marquee
					speed={100}
					gradient={false}
					direction="left"
					pauseOnHover={true}
					className="flex items-center"
				>
					{blok?.companies?.length
						? blok.companies.map((company) => (
								<img
									key={company?.id}
									alt={company?.alt}
									src={company?.filename}
									style={{
										height: styles[company?.title.toLowerCase()]?.height,
										width: styles[company?.title.toLowerCase()]?.width,
									}}
								/>
						  ))
						: null}
				</Marquee>
			</div>
		</Section>
	);
};

const Section = styled.section`
	left: 0;
	right: 0;
	height: 225px;
	position: absolute;
	padding: 61px 0 60px;
	background: rgba(0, 179, 176, 0.12);

	& h2 {
		color: #828282;
		font-size: 24px;
		font-weight: 600;
		line-height: 29px;
	}

	& .sb-company-logos {
		& img {
			margin-right: 100px !important;

			@media screen and (max-width: 767px) {
				margin-right: 50px !important;
			}
		}
	}
`;

export default Customers;
