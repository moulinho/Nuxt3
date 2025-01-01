export function formatter(key, value) {
  return String(value) === "true" ? key : `${key}_${value}`;
}
