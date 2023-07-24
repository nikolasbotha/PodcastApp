
/**
 * Fetches all podcast shows from the API.
 *
 * @returns {Promise<Object[]>} A promise that resolves to an array of podcast show objects.
 * @throws {Error} If there's an error fetching the data or the response is not OK.
 */

export default async function getAllShows() {
    try {
      const response = await fetch('https://podcast-api.netlify.app/shows');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const podcasts = await response.json();
      return podcasts;
    } catch (error) {
      console.error('Error in getAllShows:', error);
      throw error;
    }
  };


