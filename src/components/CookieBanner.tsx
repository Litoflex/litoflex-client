'use client'
import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('litoflex_cookies_accepted')
    if (!accepted) setShow(true)
  }, [])

  const accept = () => {
    localStorage.setItem('litoflex_cookies_accepted', 'true')
    setShow(false)
  }

  if (!show) return null

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      background: '#ffffff', borderTop: '2px solid #7e4a34',
      padding: '16px 24px', zIndex: 9999,
      boxShadow: '0 -2px 12px rgba(0,0,0,0.1)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: '16px', flexWrap: 'wrap'
    }}>
      <p style={{ fontSize: '14px', margin: 0, color: '#333', flex: '1 1 300px' }}>
        Мы используем cookies для улучшения работы сайта. Продолжая использовать сайт, вы соглашаетесь с{' '}
        <a href="/privacy-policy" style={{ color: '#7e4a34', textDecoration: 'underline' }}>политикой конфиденциальности</a>.
      </p>
      <button
        onClick={accept}
        style={{
          background: '#7e4a34', color: '#fff', border: 'none',
          padding: '10px 24px', borderRadius: '4px',
          fontSize: '14px', fontWeight: 500, cursor: 'pointer', whiteSpace: 'nowrap'
        }}
      >
        Принять
      </button>
    </div>
  )
}
