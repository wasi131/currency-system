// lib/sheets.js
export async function submitRateRequest(data) {
  const API_KEY = 5544wy909mm04
  
  try {
    const response = await fetch(`https://sheetdb.io/api/v1/${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [{
          Timestamp: new Date().toISOString(),
          Currency: data.currency,
          CurrentRate: data.currentRate,
          RequestedRate: data.requestedRate,
          Status: 'Pending'
        }]
      })
    })
    return await response.json()
  } catch (error) {
    throw new Error('Failed to submit: ' + error.message)
  }
}
