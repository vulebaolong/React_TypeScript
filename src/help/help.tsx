export const h = {
    localStorage: {
        get: (name: string): any => {
            if (localStorage.getItem(name)) {
                const data: any = localStorage.getItem(name);
                return JSON.parse(data);
            }
            return undefined
        },

        set: (name: string, value: any): void => {
            if (value) {
                localStorage.setItem(name, JSON.stringify(value));
            }
        },
        remove: (name: string): void => {
            localStorage.removeItem(name);
        },
    },
};
