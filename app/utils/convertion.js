export const convertToGB = (value) => {
  // Check if value is greater than or equal to 1000
  if (value >= 1000) {
    // Convert to GB (assuming the input is in MB, adjust as necessary)
    const gbValue = (value / 1000).toFixed(0); // Convert and format to 2 decimal places
    return `${gbValue} GB`;
  }
  // Return the original value if it's less than 1000
  return `${value} MB`;
};

export const convertToText = (value) => {
  switch (value) {
    case "longevity":
      return "Validty";
    case "mca":
      return "Missed Call Alert";
    case "fourg":
      return "4G Internet";
    case "voice":
      return "Minutes";
    case "data":
      return "Internet";

    default:
      return value;
  }
};

export const convertInfo = (value) => {
  switch (value) {
    case "longevity":
      return "Days";
    case "sms":
      return "SMS";
    case "voice":
      return "Min";

    default:
      return value;
  }
};
