/**
 * Get headers for GitLab API requests
 *
 * @param {string} method
 * @param {string} token
 * @returns {Object} headers
 */
const getHeaders = (method, token) => {
    return {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };
  };
  
  /**
   * Get All projects given the GitLab instance
   *
   * @param {Object} credential
   */
  export const getAllProjects = async (credential) => {
    let result = await fetch(
      `https://${credential.instance}/api/v4/projects`,
      getHeaders("GET", credential.token)
    )
      .then((res) => res.json());
  
    return result;
  };