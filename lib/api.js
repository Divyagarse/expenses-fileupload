// lib/api.js
export const API_BASE = "http://192.168.1.32:5000/api";

// ===== Admin =====
export async function adminRegister(name, email, password) {
  const res = await fetch(`${API_BASE}/admin/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  return res.json();
}

export async function adminLogin(email, password) {
  const res = await fetch(`${API_BASE}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

export async function addMember(email, password, type, token) {
  const res = await fetch(`${API_BASE}/admin/members/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ email, password, type }),
  });
  const data = await res.json();
  return { ok: res.ok, data };
}
export async function getAdminProfile(token) {
  const res = await fetch(`${API_BASE}/admin/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch admin profile");
  return res.json(); // { id, name, email, avatar }
}


export async function getMembers(token) {
  const res = await fetch(`${API_BASE}/admin/members`, {
    method: "GET",
    headers: { 
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}` 
    },
  });
  if (!res.ok) throw new Error("Failed to fetch members");
  return res.json();
}


// ===== Member =====
export async function memberRegister(email, password, token, name) {
  const res = await fetch(`${API_BASE}/member/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, token, name }),
  });
  return res.json();
}

export async function memberLogin(email, password) {
  const res = await fetch(`${API_BASE}/member/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

// ===== Approvals =====
export async function getApprovals(token, status) {
  const query = status ? `?status=${status}` : "";
  const res = await fetch(`${API_BASE}/approvals${query}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to fetch approvals");
  const json = await res.json();
  return json.approvals || [];
}

export async function getPendingApprovals(token) {
  try {
    const res = await fetch(`${API_BASE}/approvals?status=pending`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || "Failed to fetch pending approvals");
    }

    const json = await res.json();
    // Ensure approvals is always an array
    return Array.isArray(json.approvals) ? json.approvals : [];
  } catch (err) {
    console.error("getPendingApprovals error:", err);
    return [];
  }
}




export async function approveApproval(token, id) {
  const res = await fetch(`${API_BASE}/approvals/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ status: "approved" }),
  });
  if (!res.ok) throw new Error("Failed to approve approval");
  return res.json();
}

export async function denyApproval(token, id) {
  const res = await fetch(`${API_BASE}/approvals/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ status: "denied" }),
  });
  if (!res.ok) throw new Error("Failed to deny approval");
  return res.json();
}


export async function bulkDeny(ids, token) {
  const res = await fetch(`${API_BASE}/approvals/bulk`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ ids, status: "denied" }),
  });
  if (!res.ok) throw new Error("Failed to bulk deny");
  return res.json();
}

export async function bulkApprove(ids, token) {
  const res = await fetch(`${API_BASE}/approvals/bulk`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ ids }),
  });
  if (!res.ok) throw new Error("Failed to bulk approve");
  return res.json();
}


// ===== Balance =====
export async function addBalance(memberId, amount, token) {
  console.log("➡️ Sending addBalance:", { memberId, amount, token });
  const res = await fetch(`${API_BASE}/balance/${memberId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // must be REAL token
    },
    body: JSON.stringify({ amount }),
  });

  const data = await res.json().catch(() => ({}));
  console.log("⬅️ Response addBalance:", res.status, data);

  if (!res.ok) throw new Error(data.message || "Failed to add balance");
  return data;
}

export async function getBalance(memberId, token) {
  console.log("➡️ Fetching balance:", { memberId, token });
  const res = await fetch(`${API_BASE}/balance/${memberId}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await res.json().catch(() => ({}));
  console.log("⬅️ Response getBalance:", res.status, data);

  if (!res.ok) throw new Error(data.message || "Failed to fetch balance");
  return data;
}
export async function updateAdminProfile(data, token) {
  const res = await fetch(`${API_BASE}/admin/profile`, {
    method: "PUT", // ✅ must match backend
    headers: { 
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Failed to update profile");
  }

  return res.json();
}
// ===== Approvals =====
export async function getDeniedApprovals(token) {
  const res = await fetch(`${API_BASE}/approvals?status=denied`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch denied approvals");
  const json = await res.json();
  return json.approvals || [];
}





// User: Start New Journey
export async function startJourney(purpose, notes, startLocation, endLocation) {
  const res = await fetch(`${API_BASE}/user/newjourney`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      purpose,
      notes,
      startLocation,
      endLocation,
    }),
  });

  return res.json();
}

export const getUserProfile = async (token) => {
  try {
    const res = await fetch("http://192.168.1.32:5000/api/user/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || "Failed to fetch profile");
    }

    return await res.json();
  } catch (err) {
    console.error("Error in getUserProfile:", err);
    throw err;
  }
};



// lib/api.js
export const updateUserProfile = async (token, updatedData) => {
  try {
    const response = await fetch("http://192.168.1.32:5000/api/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // send token
      },
      body: JSON.stringify(updatedData), // send updated profile
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Failed to update profile");
    }

    return await response.json();
  } catch (err) {
    console.error("Error in updateUserProfile:", err);
    throw err;
  }
};
