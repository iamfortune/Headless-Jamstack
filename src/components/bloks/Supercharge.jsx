import styled from "styled-components";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Supercharge = ({ blok }) => {
	return (
		<Section
			{...storyblokEditable(blok)}
			className="flex flex-col items-center justify-center"
		>
			<div>
				<h2 className="text-center text-white font-inter">
					Supercharge your team’s workflow today
				</h2>

				<div className="text-center text-white">{render(blok?.body)}</div>

				<button className="block">{blok?.buttonText}</button>
			</div>
		</Section>
	);
};

const Section = styled.section`
	z-index: 1;
	width: 100%;
	position: relative;
	background: #00b3b0;
	border-radius: 30px;
	padding: 68px 24px 67px;
	bottom: -97px;

	@media screen and (max-width: 767px) {
		bottom: -40px;
		border-radius: 16px;
	}

	& h2 {
		margin: 0 auto;
		font-size: 48px;
		max-width: 788px;
		font-weight: 700;
		line-height: 58px;

		@media screen and (max-width: 767px) {
			font-size: 32px;
			line-height: 42px;
		}
	}

	& > div > div {
		& p {
			font-weight: 400;
			font-size: 20px;
			max-width: 502px;
			line-height: 26px;
			margin: 24px auto 47px;

			@media screen and (max-width: 767px) {
				font-size: 18px;
				line-height: 26px;
			}
		}
	}

	& button {
		width: 229px;
		height: 44px;
		margin: 0 auto;
		font-size: 15px;
		font-weight: 500;
		background: #fff;
		line-height: 20px;
		border-radius: 5px;
		box-shadow: 7px 7px 0px #1b243f;

		@media screen and (max-width: 767px) {
			width: 100%;
		}

		&:hover {
			box-shadow: 7px 7px 0px #1b243f;
		}
	}
`;

export default Supercharge;
