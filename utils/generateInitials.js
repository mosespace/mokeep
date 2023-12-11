export default function generateInitials(fullName) {
  if (fullName === undefined || fullName === null) {
    // Handle the case when fullName is undefined or null
    return "";
  }

  // Splinting the full name into an array of words
  const words = fullName.split(/\s+/);

  //  Getting first letter of each word and joining them
  const initials = words.map((word) => word.charAt(0)).join("");

  //   Ensuring that all initials are in capitalized form
  return initials.toUpperCase();
}

// Example Usage
// const fullName = "Kisakye Moses";
// const initials = generateInitials(fullName);
// console.log(initials); // Output KM
