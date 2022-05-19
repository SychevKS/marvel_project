
class MarvelService {
    getResouce = async (url) => {
        let res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters() {
        return this.getResouce('https://gateway.marvel.com:443/v1/public/characters?apikey=fbed79066bdc156d5c4979818714eaca')
    }
}

export default MarvelService;