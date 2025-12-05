// frontend/js/api.js
export async function api(path, method = "GET", body = null) {
  const BASE = "http://localhost:5000"; // <- your backend server
  const url = BASE + path;

  try {
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });

    // try parse JSON safely
    const text = await res.text();
    let data;
    try {
      data = text ? JSON.parse(text) : {};
    } catch (e) {
      data = { raw: text };
    }

    return { ok: res.ok, status: res.status, ...data };
  } catch (err) {
    console.error("API fetch error:", err);
    return { ok: false, error: err.message || String(err) };
  }
}
