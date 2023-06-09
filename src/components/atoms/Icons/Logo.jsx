/* eslint-disable @next/next/no-img-element */
const Logo = ({ className, height, width }) => {
	return (
		<img
			alt="Artsy"
			className={className}
			style={{ height, width }}
			src="/images/icons/logo.svg"
		/>
	);
};

export default Logo;
