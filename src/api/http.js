let baseURL = 'http://faceprog.ru/randomapi2/'


export function myhttp(link, method = 'get') {
    let path = baseURL + link
    return fetch(path, { mathod: method }).then((data) => data.json())
}