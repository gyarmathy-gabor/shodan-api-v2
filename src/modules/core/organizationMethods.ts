import { request } from '../../utils/fetcher';

export const buildOrganizationMethods = (baseUrl: string, apiKey: string) => ({
  /**
   * Get information about your organization such as the list of its members, upgrades, authorized domains and more.
   */
  getOrganization: async () => {
    return await request(baseUrl, 'org', apiKey);
  },
  /**
   * Add a Shodan user to the organization and upgrade them.
   * @param user - Username or email of the Shodan user.
   * @param notify - Whether or not to send an email notification (defaults to true).
   */
  addUserToOrganization: async (user: string, notify = true) => {
    return await request(baseUrl, `org/member/${user}`, apiKey, {
      method: 'PUT',
      params: { notify: notify },
    });
  },
  /**
   * Remove and downgrade the provided member from the organization.
   * @param user - Username or email of the Shodan user
   */
  deleteUserFromOrganization: async (user: string) => {
    return await request(baseUrl, `org/member/${user}`, apiKey, { method: 'DELETE' });
  },
});
