import axios from "axios";

const URL = 'https://pixabay.com/api/';
const KEY = '32019120-f6c917bb65a52104f5b17c554';

async function fetchApi (name, page) {
	const response = await axios.get(`${URL}?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12
	`)
	return response;
}

const api = {
	fetchApi,
}
export default api;