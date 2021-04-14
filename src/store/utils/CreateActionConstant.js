export default function createActionConstants(name) {
    return {
        REQUEST: `${name}.REQUEST`,
        SUCCESS: `${name}.SUCCESS`,
        FAIL: `${name}.FAIL`
    }
}