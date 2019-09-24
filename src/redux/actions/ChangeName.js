export default function changeName(name) {
    return {
        type: 'UPDATE_NAME',
        payload: name
    }
}