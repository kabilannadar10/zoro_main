export function saveTokens({ access, refresh }) {
  localStorage.setItem("access", access);
  localStorage.setItem("refresh", refresh);
}

export function clearTokens() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
}

export function isLoggedIn() {
  return !!localStorage.getItem("access");
}