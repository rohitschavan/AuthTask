import Cookies from 'js-cookie'

export const setCookies = (key: string, data: string) => {
  Cookies.set(key, data, {
    expires: 1,
  })
}
