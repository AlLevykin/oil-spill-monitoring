export const randomNumber = (min, max) => {
    let rand = Math.floor(min + Math.random() * (max - min));
    return rand;
}

export const randomArray = (min, max, count) => {
    return Array.from({length: count}, () => randomNumber(min, max));
}

export const getData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
    }
    return await response.json();
}
