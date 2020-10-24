let baseUrl;
let local = false;

if (local) {
  baseUrl = 'http://localhost:5000';
} else {
  baseUrl = "https://b50357a41b16.ngrok.io";
}
const headers = {
  headers: {
    Authorization: ""
  }
};
headers.headers.Authorization = localStorage && localStorage.getItem('component-token')

export { baseUrl, headers };