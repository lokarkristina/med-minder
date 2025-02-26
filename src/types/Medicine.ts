/**
 * Represents a medication entry in the database.
 * @interface Medicine
 * @property {string} id - Unique identifier for the medicine
 * @property {string} title - Name or title of the medicine
 * @property {string} text - Additional description or notes about the medicine
 * @property {number} perBox - Number of units per medicine box/package
 * @property {string} dose - Dosage information for the medicine
 * @property {number} amountPerDay - Number of doses to take per day
 */
export interface Medicine {
  id: string
  title: string
  text: string
  perBox: number
  dose: string
  amountPerDay: number
  type: string
  active: boolean
}
