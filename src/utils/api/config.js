export let BASEURL;

if (process.env.DEBUG === "1") {
  BASEURL = process.env.REACT_MONOPOLY_PUBLIC_API_HOST_DEBUG;
} else {
  BASEURL = process.env.REACT_MONOPOLY_PUBLIC_API_HOST;
}
