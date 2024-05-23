// Default options
export const defaultOptions = {
  heading: '', // Required
  message: '',
  duration: 3500,
  clickToClose: true
};

/**
 * Merges user-defined options with default notification options and ensures a heading is provided.
 *
 * This function takes an object of user-defined options, merges them with the default options,
 * and validates that a heading is present, as it is required for the notification to be successful.
 * If the heading is missing, an error is thrown. The function then returns an object containing
 * the merged and validated options.
 *
 * @param {object} userOptions - The user-defined options for the notification.
 * @returns {object} An object containing the merged and validated notification options.
 * @throws {Error} If the heading is not provided in the options.
 */
export function getOptions(userOptions: any) {
  let options = { ...defaultOptions, ...userOptions };
  if (!options.heading)
    throw new Error('Heading is required for success notification');
  let heading = options.heading;
  let message = options.message;
  let duration = options.duration;
  let clickToClose = options.clickToClose;
  return { heading, message, duration, clickToClose };
}