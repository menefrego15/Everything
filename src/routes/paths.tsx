// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_MAIN = "/main";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  loginUnprotected: path(ROOTS_AUTH, "/login-unprotected"),
  register: path(ROOTS_AUTH, "/register"),
  registerUnprotected: path(ROOTS_AUTH, "/register-unprotected"),
  resetPassword: path(ROOTS_AUTH, "/reset-password"),
  verify: path(ROOTS_AUTH, "/verify"),
};

export const PATH_MAIN = {
  root: ROOTS_MAIN,
  weather: {
    root: path(ROOTS_MAIN, "/weather"),
  },
  tasks: {
    root: path(ROOTS_MAIN, "/tasks"),
  },
  food: {
    root: path(ROOTS_MAIN, "/food"),
    all: path(ROOTS_MAIN, "/mail/all"),
  },
  games: {
    root: path(ROOTS_MAIN, "/games"),
    all: path(ROOTS_MAIN, "/mail/all"),
  },
  movies: {
    root: path(ROOTS_MAIN, "/movies"),
    new: path(ROOTS_MAIN, "/chat/new"),
  },
};
