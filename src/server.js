let baseURL = 'http://faceprog.ru/reactcourseapi/'


export function getData(link, method = 'get') {
    let path = baseURL + link
    return fetch(path, { mathod: method }).then((data) => data.json())
}