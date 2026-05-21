import "./footerSection.scss";

const FooterSection = () => {
	return (
		<section className="footerSection" id="homepage-footer">
			<div className="footerContent">
				<div className="logo">
					SmartEats
				</div>
				<div className="links">
					<p>Home</p>
					<p>About Us</p>
					<p>Product</p>
					<p>Quality</p>
				</div>
			</div>
			<p className="copyright">© {new Date().getFullYear()} SmartEats, Inc. All rights reserved.</p>
		</section>
	);
};

export default FooterSection;
