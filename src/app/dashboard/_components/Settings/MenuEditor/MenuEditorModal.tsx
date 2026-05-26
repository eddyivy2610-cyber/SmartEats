import { type ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Textfield } from "xtreme-ui";

import SideSheet from "#components/base/SideSheet";
import type { TMenu } from "#utils/database/models/menu";

import "./menuEditorModal.scss";

const VEG_OPTIONS = [
	{ label: "Veg", value: "veg" },
	{ label: "Non-Veg", value: "non-veg" },
	{ label: "Contains Egg", value: "contains-egg" },
];

const FOOD_TYPE_OPTIONS = [
	{ label: "None", value: "" },
	{ label: "Spicy", value: "spicy" },
	{ label: "Extra Spicy", value: "extra-spicy" },
	{ label: "Sweet", value: "sweet" },
];

type MenuEditorModalProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
	editItem?: TMenu;
	categories: string[];
	onSuccess: () => void;
};

const MenuEditorModal = ({ open, setOpen, editItem, categories, onSuccess }: MenuEditorModalProps) => {
	const [busy, setBusy] = useState(false);
	const [formData, setFormData] = useState<Partial<TMenu>>({
		name: "",
		description: "",
		category: categories?.[0] || "",
		price: 0,
		taxPercent: 0,
		foodType: undefined,
		veg: "veg",
		image: "",
		hidden: false,
	});

	useEffect(() => {
		if (open) {
			if (editItem) {
				setFormData(editItem);
			} else {
				setFormData({
					name: "",
					description: "",
					category: categories?.[0] || "",
					price: 0,
					taxPercent: 0,
					foodType: undefined,
					veg: "veg",
					image: "",
					hidden: false,
				});
			}
		}
	}, [open, editItem, categories]);

	const handleChange = (key: keyof TMenu, value: any) => {
		setFormData((prev) => ({ ...prev, [key]: value }));
	};

	const onSave = async () => {
		if (!formData.name) return toast.error("Name is required");
		if (formData.price === undefined || formData.price < 0) return toast.error("Valid price is required");
		if (!formData.category) return toast.error("Category is required");

		setBusy(true);

		try {
			const isEdit = !!editItem;
			const req = await fetch("/api/admin/menu", {
				method: isEdit ? "PUT" : "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			
			const res = await req.json();

			if (res.status === 200) {
				toast.success(res.message);
				onSuccess();
				setOpen(false);
			} else {
				toast.error(res.message || "Failed to save menu item");
			}
		} catch (error) {
			toast.error("An error occurred while saving");
		} finally {
			setBusy(false);
		}
	};

	const categoryOptions = categories?.map((cat) => ({ label: cat, value: cat })) || [];

	return (
		<SideSheet 
			className="menuEditorModal" 
			title={[editItem ? "Edit" : "Add", "Item"]} 
			open={open} 
			setOpen={setOpen}
		>
			<div className="menuEditorForm">
				<Textfield
					label="Name"
					placeholder="Enter item name"
					value={formData.name || ""}
					onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("name", e.target.value)}
				/>

				<div className="inputRow">
					<Textfield
						label="Price"
						type="number"
						placeholder="0"
						value={formData.price?.toString() || "0"}
						onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("price", parseFloat(e.target.value) || 0)}
					/>
					<Textfield
						label="Tax (%)"
						type="number"
						placeholder="0"
						value={formData.taxPercent?.toString() || "0"}
						onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("taxPercent", parseFloat(e.target.value) || 0)}
					/>
				</div>

				<div className="selectWrap">
					<label>Category</label>
					<select className="nativeSelect" value={formData.category} onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange("category", e.target.value)}>
						{categoryOptions.map((opt) => (
							<option key={opt.value} value={opt.value}>{opt.label}</option>
						))}
					</select>
				</div>

				<div className="inputRow">
					<div className="selectWrap">
						<label>Dietary</label>
						<select className="nativeSelect" value={formData.veg} onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange("veg", e.target.value)}>
							{VEG_OPTIONS.map((opt) => (
								<option key={opt.value} value={opt.value}>{opt.label}</option>
							))}
						</select>
					</div>
					<div className="selectWrap">
						<label>Food Type (Optional)</label>
						<select className="nativeSelect" value={formData.foodType || ""} onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange("foodType", e.target.value || undefined)}>
							{FOOD_TYPE_OPTIONS.map((opt) => (
								<option key={opt.value} value={opt.value}>{opt.label}</option>
							))}
						</select>
					</div>
				</div>

				<Textfield
					label="Image URL"
					placeholder="Paste an image URL here..."
					value={formData.image || ""}
					onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("image", e.target.value)}
				/>

				{formData.image && (
					<div className="imagePreview">
						<img src={formData.image} alt="Preview" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.display = 'block')} />
					</div>
				)}

				<Textfield
					label="Description"
					placeholder="Enter item description"
					value={formData.description || ""}
					onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("description", e.target.value)}
				/>

				<div className="toggleRow">
					<label>Visibility</label>
					<div className="toggleWrap">
						<Button
							icon={formData.hidden ? "f070" : "f06e"}
							iconType="solid"
							size="mini"
							type={formData.hidden ? "secondary" : "primary"}
							label={formData.hidden ? "Hidden" : "Visible"}
							onClick={() => handleChange("hidden", !formData.hidden)}
						/>
					</div>
				</div>

				<div className="footerActions">
					<Button label="Cancel" type="secondary" onClick={() => setOpen(false)} />
					<Button label={editItem ? "Save Changes" : "Create Item"} loading={busy} onClick={onSave} />
				</div>
			</div>
		</SideSheet>
	);
};

export default MenuEditorModal;
