/**
 * Represents a stash entry for medication tracking
 * @interface Stash
 * @property {string} id - Unique identifier for the stash
 * @property {number} amount - The quantity of medication in the stash
 * @property {string} lastUpdated - Timestamp of when the stash was last modified
 */
export interface Stash {
  id: string
  amount: number
  lastUpdated: string
}
