/**
 * Represents a medication entry in the database.
 * @interface Medicine
 * @property {string} id - Unique identifier for the medicine
 * @property {string} title - Name or title of the medicine
 * @property {string} text - Additional description or notes about the medicine
 * @property {number} perBox - Number of units per medicine box/package
 * @property {string} dose - Dosage information for the medicine
 * @property {number} amountPerDay - Number of doses to take per day
 * @property {string} type - Type or category of the medicine
 * @property {boolean} active - Indicates if the medicine is currently active or in use
 * @property {boolean} scheduled - Indicates if the medicine is taken as needed
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
  scheduled: boolean
}
