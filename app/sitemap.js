const BASE_URL = 'https://calebwang.info'

const routes = ['/', '/about', '/experiences', '/publications', '/notes', '/cv']

export default function sitemap() {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }))
}
