/**
 * Centralized API client for communicating with the Python FastAPI backend.
 */

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/+$/, '');

/**
 * Parses error response from FastAPI backend.
 * @param {Response} response 
 * @returns {Promise<string>}
 */
async function parseError(response) {
  try {
    const errorData = await response.json();
    if (errorData.detail) {
      if (Array.isArray(errorData.detail)) {
        // FastAPI validation errors
        return errorData.detail.map(d => `${d.loc ? d.loc.slice(-1)[0] : 'field'}: ${d.msg}`).join(', ');
      }
      return String(errorData.detail);
    }
    if (errorData.message) return errorData.message;
  } catch {
    // Non-JSON response (e.g. 404 HTML from static host)
  }

  if (response.status === 404) {
    return 'The backend contact API is not reachable on this host. You can send your message directly via email below.';
  }
  return `Server request failed (Status ${response.status}: ${response.statusText || 'Error'})`;
}

/**
 * Health check endpoint
 * @returns {Promise<{ status: string, app: string, timestamp: string }>}
 */
export async function checkHealth() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/health`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    if (!res.ok) {
      const err = await parseError(res);
      throw new Error(err);
    }
    return await res.json();
  } catch (error) {
    console.error('API Health Check Error:', error);
    throw error;
  }
}

/**
 * Submits contact form data to FastAPI backend.
 * @param {{ full_name: string, email: string, subject: string, message: string, website?: string }} data
 * @returns {Promise<{ success: boolean, message: string, submission_id: number }>}
 */
export async function submitContact(data) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorMessage = await parseError(res);
      throw new Error(errorMessage);
    }

    return await res.json();
  } catch (error) {
    console.error('Contact Form Submission Error:', error);
    throw error;
  }
}
