export const getItemsFromLocalStorage = (key: string) => {
    const itemsFromStorage = localStorage.getItem(key);

    if (itemsFromStorage === null) {
        return null;
    }

    const items = JSON.parse(itemsFromStorage);
    return items;
};

export const storeItemsToLocalStorage = (key: string, items: any) => {
    const itemsToStore = JSON.stringify(items);
    localStorage.setItem(key, itemsToStore);
}