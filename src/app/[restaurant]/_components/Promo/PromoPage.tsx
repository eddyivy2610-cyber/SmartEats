import { Lottie } from "xtreme-ui";
import { getAnimSrc } from "#utils/constants/common";

export default function PromoPage() {
	// In the future, you can fetch promotions from your database and map through them here.
	const promos: any[] = []; 

	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", width: "100%", textAlign: "center", padding: "2rem" }}>
			{promos.length > 0 ? (
				<div className="promoList">
					{/* Render your promos here */}
				</div>
			) : (
				<>
					{/* Using a Coming Soon animation from LottieFiles */}
					<div style={{ width: 300, maxWidth: "100%", opacity: 0.8 }}>
						<Lottie src="https://assets5.lottiefiles.com/packages/lf20_xlmz9xwm.json" />
					</div>
					<h2 style={{ marginTop: "1.5rem", fontSize: "1.5rem", fontWeight: 600 }}>Coming Soon!</h2>
					<p style={{ marginTop: "0.5rem", color: "var(--colorContentSecondary, #666)" }}>Check back later for exciting offers and discounts!</p>
				</>
			)}
		</div>
	);
}
