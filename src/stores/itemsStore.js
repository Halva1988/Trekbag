import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useItemsStore = create(
	persist(
		(set) => ({
			items: [],
			removeAllItems: () => {
				set({ items: [] });
			},
			addItem: (itemText) => {
				const newItem = {
					id: Date.now(),
					name: itemText,
					packed: false,
				};
				set((state) => ({ items: [...state.items, newItem] }));
			},
			removeItem: (id) => {
				set((state) => ({
					items: state.items.filter((item) => item.id !== id),
				}));
			},
			toggleItem: (id) => {
				set((state) => ({
					items: state.items.map((item) =>
						item.id === id ? { ...item, packed: !item.packed } : item
					),
				}));
			},
			markAllAsComplete: () => {
				set((state) => ({
					items: state.items.map((item) => ({ ...item, packed: true })),
				}));
			},
			markAllAsIncomplete: () => {
				set((state) => ({
					items: state.items.map((item) => ({ ...item, packed: false })),
				}));
			},
		}),
		{
			name: "items",
		}
	)
);
