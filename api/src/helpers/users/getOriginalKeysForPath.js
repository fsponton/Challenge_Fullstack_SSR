export default (path) => {

    const originalKeys = {
        login: ["email", "password"],
        register: ["email", "full_name", "password", "role"],
    }

    return originalKeys[path.slice(1)];
}