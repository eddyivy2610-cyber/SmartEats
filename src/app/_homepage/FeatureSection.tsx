"use client";

import "./featureSection.scss";

import type { ReactNode } from "react";

const IconCost = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
	</svg>
);

const IconLink = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
		<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
	</svg>
);

const IconHistory = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<circle cx="12" cy="12" r="10"></circle>
		<polyline points="12 6 12 12 16 14"></polyline>
	</svg>
);

const IconBriefcase = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
		<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
	</svg>
);

const IconUtensils = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
		<path d="M7 2v20"></path>
		<path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
	</svg>
);

const IconCheck = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
		<polyline points="22 4 12 14.01 9 11.01"></polyline>
	</svg>
);

const features = [
	{ text: "Bring down your operating and logistics cost", icon: <IconCost /> },
	{ text: "Eliminate any third parties between your customer and kitchen", icon: <IconLink /> },
	{ text: "Track history of all your customer orders", icon: <IconHistory /> },
	{ text: "Time to get a professional edge", icon: <IconBriefcase /> },
	{ text: "Enhance the dining experience for your own customers", icon: <IconUtensils /> },
	{ text: "Remove any scope of human error in your restaurant management", icon: <IconCheck /> },
];

const FeatureList = ({ items }: { items: { text: string; icon: ReactNode }[] }) => {
	return (
		<div className="featuresGrid">
			{items.map((item, i) => (
				<div className="featureListItem" key={i}>
					<div className="featureLetter">{item.icon}</div>
					<p>{item.text}</p>
				</div>
			))}
		</div>
	);
};

const FeatureSection = () => (
	<section className="featureSection" id="homepage-features">
		<div className="featuresContent">
			<h2><span className="highlight">Why</span> SmartEats?</h2>
			<FeatureList items={features} />
		</div>
	</section>
);

export default FeatureSection;
