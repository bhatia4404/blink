import moment from "moment";
export function Analyze(text: string) {
  if (
    text.toLowerCase().includes("hi") ||
    text.toLowerCase().includes("hey") ||
    text.toLowerCase().includes("hello")
  ) {
    return "Hi how i can assist you... ";
  } else if (text.toLowerCase().includes("date")) {
    return moment().format("MMMM DD YYYY");
  } else if (text.includes("time")) {
    return moment().format("h:mm:ss a");
  } else if (text.toLowerCase().includes("google link")) {
    return "https://www.google.com";
  } else if (text.toLowerCase().includes("thankyou")) {
    return "welcome";
  } else if (
    text.toLowerCase().includes("Create Account") ||
    text.toLowerCase().includes("account")
  ) {
    return "Click on Create Account on the NavBar";
  } else if (text.toLowerCase().includes("card")) {
    return "You can get a virtual card after making accound.\nLog in and then  Click on 'Get Card' on Dashboard.";
  } else if (text.toLowerCase().includes("login")) {
    return "Click on 'Login' button in NavBar";
  } else {
    return "We regret to inform you that we are currently unable to assist you at this time.";
  }
}
