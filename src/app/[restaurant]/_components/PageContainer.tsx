"use client";

import { useSearchParams } from "next/navigation";

import UnderConstruction from "#components/layout/UnderConstruction";

import PromoPage from "./Promo/PromoPage";
import OrderPage from "./Menu/OrderPage";

export default function PageContainer() {
	const searchParams = useSearchParams();
	const tab = searchParams.get("tab");

	return (
		<div className="pageContainer">
			{tab === "promo" && <PromoPage />}
			{tab === "menu" && <OrderPage />}
			{tab === "reviews" && <UnderConstruction />}
			{tab === "contact" && <UnderConstruction />}
		</div>
	);
}
