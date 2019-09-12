export var BACKEND_URL;

if (typeof EXT_SERVER_URL != "undefined") {
  BACKEND_URL = EXT_SERVER_URL;
} else {
  BACKEND_URL = process.env.SERVER_URL;
}
