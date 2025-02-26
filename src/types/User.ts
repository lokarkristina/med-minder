/**
 * Represents a user in the MedMinder application.
 * @interface User
 * @property {string} id - Unique identifier for the user
 * @property {string} name - The user's full name
 * @property {string} [email] - The user's email address (optional)
 */
export interface User {
  id: string
  name: string
  email?: string
}
