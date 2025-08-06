export default async function handler(req, res) {
  try {
    const response = await fetch('https://sheetdb.io/api/v1/5544wy909mm04')
    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Connection failed' })
  }
}
