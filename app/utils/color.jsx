export const getBgColor = (param) => {
  if (param === "voice") {
    return "bg-red-500 text-white";
  } else if (param === "bioscope") {
    return "bg-purple-500 text-white";
  } else if (param === "sms") {
    return "bg-cyan-500 text-white";
  }

  return "bg-green-500 text-white";
};

export const getTextColor = (param) => {
  if (param === "voice") {
    return "text-red-500 ";
  } else if (param === "bioscope") {
    return "text-purple-500 ";
  } else if (param === "sms") {
    return "text-cyan-500 ";
  } else {
    return "text-green-500 ";
  }
};
