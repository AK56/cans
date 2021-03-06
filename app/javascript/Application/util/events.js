export function isA11yAllowedInput(event = {}) {
  // Only allow enter key from keyboard
  // Allow other types of events, 'click', 'touch', etc
  if (event.type !== 'keypress') return true;
  return isEnterKeyPressed(event);
}

export function isEnterKeyPressed(event = {}) {
  return event.type === 'keypress' && event.key === 'Enter';
}
