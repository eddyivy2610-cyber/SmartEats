import { useRouter } from "next/navigation";
import { type MouseEvent, useRef } from "react";
import { Button, useXTheme } from "xtreme-ui";

import { scrollToSection } from "#utils/helper/common";

import "./landingSection.scss";

import clsx from "clsx";

const bgImg = "/backgrounds/jollofCover.png";

const LandingSection = () => {
	const router = useRouter();
	const { isDarkTheme } = useXTheme();

	return (
		<section className={clsx("landingSection", isDarkTheme && "dark")} id="homepage">
			<div className="orange-blob" />
			<div className="landingGreeting">
				<h1 className="head">Taste the Difference,<br/><span className="highlight">Taste the Good Life</span></h1>
				<p className="desc">Gone are the days of complex ordering systems and outdated paper menus. It&apos;s time for the new normal, SmartEats.</p>
				<div className="greetingAction">
					<Button label="Learn more" type="secondary" onClick={() => scrollToSection("homepage-aboutus")} />
					<Button label="Order now" onClick={() => router.push("/scan")} />
				</div>
			</div>
			<div className="landingImage">
				<div className="food-plate">
					<img src={bgImg} alt="Food Plate" />
				</div>
			</div>
		</section>
	);
};

export default LandingSection;
