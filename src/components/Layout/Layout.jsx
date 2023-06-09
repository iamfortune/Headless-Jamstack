/* eslint-disable @next/next/no-page-custom-font */
import styled from "styled-components";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const Layout = ({ children, noBodyWrapper }) => {
	return (
		<StyledLayout>
			<main className="transition-all duration-500 ease-in-out">
				<div>
					<Navbar />
					{!noBodyWrapper ? (
						<div className="sb-content custom-container mx-auto">
							{children}
						</div>
					) : (
						<div className="sb-content">{children}</div>
					)}
				</div>
				<Footer />
			</main>
		</StyledLayout>
	);
};

const StyledLayout = styled.article`
	min-height: 100vh;

	& > main {
		overflow-x: hidden;

		& > div {
			max-width: 1440px;
			margin: 0 auto;
			flex-direction: column;
			justify-content: space-between;

			& > .sb-content {
				width: 100%;
				margin: auto;
				min-height: 78vh;
			}
		}
	}
`;

export default Layout;
