import { icons } from '../icons';

/**
 * Populates a given container with a notification element.
 *
 * @param {HTMLElement} container - The container to which the notification will be appended.
 * @param {string} type - The type of the notification (e.g., 'success', 'error'), used to determine the icon and styling.
 * @param {string} heading - The heading text of the notification.
 * @param {string} message - The message text of the notification.
 * @param {string} notificationId - A unique identifier for the notification, used for targeting the notification after creation.
 * @returns {HTMLElement} The newly created notification element.
 */
export function populateNotification(
  container,
  type,
  heading,
  message,
  notificationId
) {
  let notificationClass = 'sn_notification';
  let headingWrapperClass = 'sn_notification-heading-wrapper';
  let iconClass = 'sn_notification-icon';
  let messageClass = 'sn_notification-message';
  let headingClass = 'sn_notification-heading';

  const notification = `
<div sn-notification="${notificationId}" class="${notificationClass} is-${type}" >
  <div sn-heading-wrapper class="${headingWrapperClass}">
    <div sn-notification-icon class="${iconClass}">${icons.get(type)}</div>
    <div sn-notification-heading="true" class="${headingClass}">${heading}</div>
  </div>
  <div sn-notification-message class="${messageClass}">${message}</div>
</div>`;

  container.insertAdjacentHTML('beforeend', notification);

  return container.querySelector(`[sn-notification="${notificationId}"]`);
}