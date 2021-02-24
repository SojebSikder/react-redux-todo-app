/**
 * Manage session
 */
export default function SessionService() {
    const self = {
        /**
         * Set localstorage
         * @param {*} key 
         * @param {*} value 
         */
        set: (key, value) => {
            localStorage.setItem(key, value);
        },
        /**
         * Get localstorage
         * @param {*} key 
         */
        get: (key) => {
            return localStorage.getItem(key);
        }
    }
    return self;
}

