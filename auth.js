function authenticate(token) {
  localStorage.setItem('token', token);
}

function isAuthenticated() {
  return localStorage.getItem('token') !== null;
}

export { authenticate, isAuthenticated };
