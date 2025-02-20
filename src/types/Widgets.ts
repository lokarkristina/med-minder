/**
 * Interface representing widget components.
 * @interface
 * @property {string} title - The title of the widget.
 * @property {string} [summ] - Optional summary text for the widget.
 */
export interface Widgets {
  id: string
  title: string
  info?: string
}
