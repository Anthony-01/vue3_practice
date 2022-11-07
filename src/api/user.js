export default function getUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                userName: "Anthony",
                age: 25,
                id
            })
        }, 300)
    })
}