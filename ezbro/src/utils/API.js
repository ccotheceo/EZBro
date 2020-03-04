import axios from 'axios';
const BASEURL = "https://wger.de/api/v2/"
const URLEND = "/?format=json"
const APIKEY = "a29efe9748dbe053c5aa3292a0ec726cdf6eca8f"

export default {
    search: function(query) {
        return axios.get(BASEURL + query + URLEND + APIKEY);
    }
};