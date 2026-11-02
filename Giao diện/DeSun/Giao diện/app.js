// ============================================================================
// DeSun — Web App & Responsive Mobile App (Full Production UI/UX)
// Automatically adapts to Desktop Web (>=1024px) & Mobile App (<1024px)
// ============================================================================

const SVG = {
  brandLogo: (height = 38) => `
    <svg height="${height}" viewBox="0 0 285 92" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sunG" x1="48" y1="6" x2="48" y2="62" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="45%" stop-color="#FB923C" />
          <stop offset="100%" stop-color="#EA580C" />
        </linearGradient>
        <linearGradient id="waveTopG" x1="8" y1="54" x2="90" y2="68" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="50%" stop-color="#14B8A6" />
          <stop offset="100%" stop-color="#0284C7" />
        </linearGradient>
        <linearGradient id="waveBotG" x1="12" y1="64" x2="96" y2="82" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#0284C7" />
          <stop offset="55%" stop-color="#1D4ED8" />
          <stop offset="100%" stop-color="#172554" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="44" r="31" fill="url(#sunG)" />
      <path d="M 12 58 C 28 48, 48 64, 68 52 C 78 46, 86 48, 92 53 L 92 86 L 12 86 Z" fill="#FFFFFF" />
      <path d="M 10 61 C 26 50, 46 66, 67 53 C 77 47, 86 49, 92 55 C 83 54, 74 58, 63 65 C 44 76, 26 62, 10 68 Z" fill="url(#waveTopG)" />
      <path d="M 14 70 C 30 63, 46 77, 66 66 C 77 59, 85 57, 94 60 C 86 73, 70 82, 50 82 C 33 82, 21 76, 14 70 Z" fill="url(#waveBotG)" />
      <text x="106" y="63" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="45" letter-spacing="-1">
        <tspan fill="#1B365D">De</tspan><tspan fill="#F97316">Sun</tspan>
      </text>
    </svg>
  `,
  walletIllustration: `
    <svg width="115" height="86" viewBox="0 0 118 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="rotate(12 75 35)">
        <rect x="44" y="10" width="62" height="42" rx="8" fill="#38BDF8" stroke="#BAE6FD" stroke-width="1.5"/>
        <rect x="52" y="20" width="12" height="9" rx="2" fill="#FDE047"/>
        <line x1="52" y1="38" x2="88" y2="38" stroke="#E0F2FE" stroke-width="3" stroke-linecap="round"/>
      </g>
      <g transform="rotate(-6 45 50)">
        <rect x="14" y="26" width="64" height="48" rx="10" fill="url(#walletGrad)" stroke="#FED7AA" stroke-width="1.5"/>
        <path d="M 58 42 H 78 V 58 H 58 C 53.5 58 50 54.5 50 50 C 50 45.5 53.5 42 58 42 Z" fill="#C2410C"/>
        <circle cx="58" cy="50" r="3" fill="#FDE047"/>
      </g>
      <defs>
        <linearGradient id="walletGrad" x1="14" y1="26" x2="78" y2="74" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FB923C"/>
          <stop offset="100%" stop-color="#EA580C"/>
        </linearGradient>
      </defs>
    </svg>
  `,
  home: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  receipt: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/></svg>`,
  wallet: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
  shieldCheck: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  users: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  chartBar: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  user: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  settings: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  logout: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  search: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  bell: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
  eye: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  plus: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
  edit: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>`,
  trash: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,
  phone: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,
  monitor: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
  // Category Icons
  food: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`,
  car: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>`,
  fuel: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="15" y1="22" y2="22"/><line x1="4" x2="14" y1="9" y2="9"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/></svg>`,
  coffee: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>`,
  homeCat: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  bolt: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  gift: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect width="20" height="5" x="2" y="7"/><line x1="12" x2="12" y1="22" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
  bag: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  bill: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="8" x2="16" y1="10" y2="10"/><line x1="8" x2="12" y1="14" y2="14"/></svg>`,
  game: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>`,
  heart: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  plane: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>`,
  laptop: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>`,
  calendar: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
  note: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
  arrowLeft: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
  close: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  check: `<svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  trendUp: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
  trendDown: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>`,
  mail: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  lock: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  eyeOff: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`,
  arrowRight: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  excel: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 13 6 6"/><path d="m15 13-6 6"/></svg>`,
  download: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
  upload: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>`,
  refresh: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`,
  link: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  moduleCube: `<svg class="w-[21px] h-[21px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22.08" x2="12" y2="12"/><line x1="7.5" y1="4.21" x2="16.5" y2="9.42"/></svg>`,
  globe: `<svg class="w-[21px] h-[21px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  wifiMini: `<svg class="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`,
  pin: `<svg class="w-[20px] h-[20px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="17" x2="12" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg>`,
  checkMod: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
};

const SYSTEM_MODULES = [
  { code: 'PFM', name: 'Quản lý chi tiêu', fullLabel: 'PFM - Quản lý chi tiêu', adminOnly: false, desc: 'Quản lý thu chi cá nhân, sổ giao dịch, ngân sách & mục tiêu tiết kiệm' },
  { code: 'ADM', name: 'Quản lý tài khoản', fullLabel: 'ADM - Quản lý tài khoản', adminOnly: true, desc: 'Cấp phát tài khoản đăng nhập, mật khẩu & phân quyền hệ thống (Chỉ Admin)' }
];

const DEFAULT_USER_MODULES = {
  personal: ['PFM', 'ADM'],
  user_minhanh: ['PFM'],
  user_hoangnam: ['PFM'],
  user_khanhvy: ['PFM']
};

const DEFAULT_USER_PASSWORDS = {
  personal: 'Duc@123',
  user_minhanh: 'MinhAnh@123',
  user_hoangnam: 'HoangNam@123',
  user_khanhvy: 'KhanhVy@123'
};

const MULTI_USER_SEED_DATA = {
  transactions: [
    // Trần Minh Anh (user_minhanh)
    { id: 'tx_ma_1', userId: 'user_minhanh', userName: 'Trần Minh Anh', title: 'Lương tháng 10 Minh Anh', categoryId: 'cat_salary', categoryName: 'Lương chính', date: '10/10/2026', amount: 18500000, type: 'INCOME', wallet: 'Techcombank Chính' },
    { id: 'tx_ma_2', userId: 'user_minhanh', userName: 'Trần Minh Anh', title: 'Mỹ phẩm Hasaki & Olive Young', categoryId: 'cat_shop', categoryName: 'Mua sắm', date: '14/10/2026', amount: 1250000, type: 'EXPENSE', wallet: 'Ví MoMo' },
    { id: 'tx_ma_3', userId: 'user_minhanh', userName: 'Trần Minh Anh', title: 'Ăn trưa здоровый Salad & Cafe', categoryId: 'cat_food', categoryName: 'Ăn uống', date: '18/10/2026', amount: 680000, type: 'EXPENSE', wallet: 'Tiền mặt cá nhân' },
    { id: 'tx_ma_4', userId: 'user_minhanh', userName: 'Trần Minh Anh', title: 'Thưởng KPI Marketing Q3', categoryId: 'cat_bonus', categoryName: 'Thưởng', date: '20/10/2026', amount: 3200000, type: 'INCOME', wallet: 'Techcombank Chính' },
    { id: 'tx_ma_5', userId: 'user_minhanh', userName: 'Trần Minh Anh', title: 'Tập Yoga & Chăm sóc sức khỏe', categoryId: 'cat_health', categoryName: 'Sức khỏe', date: '22/10/2026', amount: 1500000, type: 'EXPENSE', wallet: 'Techcombank Chính' },
    // Lê Hoàng Nam (user_hoangnam)
    { id: 'tx_hn_1', userId: 'user_hoangnam', userName: 'Lê Hoàng Nam', title: 'Lương Kỹ sư Phần mềm tháng 10', categoryId: 'cat_salary', categoryName: 'Lương chính', date: '10/10/2026', amount: 24000000, type: 'INCOME', wallet: 'Techcombank Chính' },
    { id: 'tx_hn_2', userId: 'user_hoangnam', userName: 'Lê Hoàng Nam', title: 'Bàn phím cơ Keychron & Chuột', categoryId: 'cat_shop', categoryName: 'Mua sắm', date: '15/10/2026', amount: 2850000, type: 'EXPENSE', wallet: 'Techcombank Chính' },
    { id: 'tx_hn_3', userId: 'user_hoangnam', userName: 'Lê Hoàng Nam', title: 'Đổ xăng & Bảo dưỡng xe máy', categoryId: 'cat_move', categoryName: 'Đi lại', date: '19/10/2026', amount: 750000, type: 'EXPENSE', wallet: 'Tiền mặt cá nhân' },
    { id: 'tx_hn_4', userId: 'user_hoangnam', userName: 'Lê Hoàng Nam', title: 'Cổ tức Quỹ ETF công nghệ', categoryId: 'cat_invest', categoryName: 'Đầu tư', date: '21/10/2026', amount: 4500000, type: 'INCOME', wallet: 'Techcombank Chính' },
    // Phạm Khánh Vy (user_khanhvy)
    { id: 'tx_kv_1', userId: 'user_khanhvy', userName: 'Phạm Khánh Vy', title: 'Thu nhập Thiết kế UI/UX', categoryId: 'cat_salary', categoryName: 'Lương chính', date: '11/10/2026', amount: 15000000, type: 'INCOME', wallet: 'Techcombank Chính' },
    { id: 'tx_kv_2', userId: 'user_khanhvy', userName: 'Phạm Khánh Vy', title: 'Khóa học IELTS & Thiết kế 3D', categoryId: 'cat_study', categoryName: 'Học tập', date: '16/10/2026', amount: 2400000, type: 'EXPENSE', wallet: 'Techcombank Chính' },
    { id: 'tx_kv_3', userId: 'user_khanhvy', userName: 'Phạm Khánh Vy', title: 'Siêu thị Aeon Mall cuối tuần', categoryId: 'cat_food', categoryName: 'Ăn uống', date: '20/10/2026', amount: 890000, type: 'EXPENSE', wallet: 'Ví MoMo' }
  ],
  goals: [
    { id: 'g_ma_1', userId: 'user_minhanh', userName: 'Trần Minh Anh', title: 'Du lịch Hàn Quốc mùa thu', current: 8500000, target: 25000000, color: '#0284C7', bg: '#E0F2FE', icon: 'plane' },
    { id: 'g_ma_2', userId: 'user_minhanh', userName: 'Trần Minh Anh', title: 'Mua iPhone 17 Pro', current: 12000000, target: 32000000, color: '#EC4899', bg: '#FCE7F3', icon: 'bag' },
    { id: 'g_hn_1', userId: 'user_hoangnam', userName: 'Lê Hoàng Nam', title: 'Nâng cấp PC Đồ họa RTX', current: 18000000, target: 45000000, color: '#8B5CF6', bg: '#EDE9FE', icon: 'laptop' },
    { id: 'g_hn_2', userId: 'user_hoangnam', userName: 'Lê Hoàng Nam', title: 'Quỹ dự phòng cá nhân 6 tháng', current: 25000000, target: 60000000, color: '#10B981', bg: '#DCFCE7', icon: 'shieldCheck' },
    { id: 'g_kv_1', userId: 'user_khanhvy', userName: 'Phạm Khánh Vy', title: 'Quỹ học bổng Thạc sĩ Quốc tế', current: 14000000, target: 50000000, color: '#0284C7', bg: '#E0F2FE', icon: 'laptop' },
    { id: 'g_kv_2', userId: 'user_khanhvy', userName: 'Phạm Khánh Vy', title: 'Tiết kiệm mua xe tay ga', current: 16500000, target: 40000000, color: '#F97316', bg: '#FFEDD5', icon: 'bag' }
  ]
};

const INITIAL_DATA = {
  userName: 'Nguyễn Thanh Đức',
  userEmail: 'duc.nguyen@desun.vn',
  balanceHidden: false,
  activeWorkspace: 'personal',
  seededMultiUserV1: true,
  realtimeSyncV4Initialized: true,
  realtimeSyncV8Initialized: true,
  hasUnsyncedCrud: false,
  lastCrudAt: 0,
  deletedTxIds: [],
  deletedCatIds: [],
  deletedGoalIds: [],
  deletedUserIds: [],
  workspaces: [
    { id: 'personal', name: 'Thanh Đức', fullName: 'Nguyễn Thanh Đức', email: 'duc.nguyen@desun.vn', password: DEFAULT_USER_PASSWORDS.personal, avatar: 'TĐ', roleCode: 'ADMIN', role: 'Quản trị viên (Admin)', allowedModules: DEFAULT_USER_MODULES.personal, provisionedBy: 'Hệ thống (Root Admin)', createdAt: '01/10/2026', hasLoggedIn: true, lastLoginAt: '29/10/2026 09:50:32', status: 'Y' },
    { id: 'user_minhanh', name: 'Minh Anh', fullName: 'Trần Minh Anh', email: 'minhanh@desun.vn', password: DEFAULT_USER_PASSWORDS.user_minhanh, avatar: 'MA', roleCode: 'USER', role: 'Thành viên cá nhân (User)', allowedModules: DEFAULT_USER_MODULES.user_minhanh, provisionedBy: 'Nguyễn Thanh Đức (Admin)', createdAt: '10/10/2026', hasLoggedIn: true, lastLoginAt: '26/10/2026 20:15:00', status: 'Y' },
    { id: 'user_hoangnam', name: 'Hoàng Nam', fullName: 'Lê Hoàng Nam', email: 'hoangnam@desun.vn', password: DEFAULT_USER_PASSWORDS.user_hoangnam, avatar: 'HN', roleCode: 'USER', role: 'Thành viên cá nhân (User)', allowedModules: DEFAULT_USER_MODULES.user_hoangnam, provisionedBy: 'Nguyễn Thanh Đức (Admin)', createdAt: '10/10/2026', hasLoggedIn: true, lastLoginAt: '26/10/2026 20:10:00', status: 'Y' },
    { id: 'user_khanhvy', name: 'Khánh Vy', fullName: 'Phạm Khánh Vy', email: 'khanhvy@desun.vn', password: DEFAULT_USER_PASSWORDS.user_khanhvy, avatar: 'KV', roleCode: 'USER', role: 'Thành viên cá nhân (User)', allowedModules: DEFAULT_USER_MODULES.user_khanhvy, provisionedBy: 'Nguyễn Thanh Đức (Admin)', createdAt: '11/10/2026', hasLoggedIn: false, lastLoginAt: '', status: 'Y' }
  ],
  wallets: [
    { id: 'w1', userId: 'personal', userName: 'Nguyễn Thanh Đức', name: 'Techcombank Chính', type: 'Ngân hàng', number: '•••• 8899', initialBalance: 0, balance: -3048000 },
    { id: 'w2', userId: 'personal', userName: 'Nguyễn Thanh Đức', name: 'Ví MoMo', type: 'Ví điện tử', number: '0988•••456', initialBalance: 0, balance: 0 },
    { id: 'w3', userId: 'personal', userName: 'Nguyễn Thanh Đức', name: 'Tiền mặt cá nhân', type: 'Tiền mặt', number: 'Ví tiêu dùng', initialBalance: 0, balance: 0 }
  ],
  categories: [
    { id: 'cat_food', name: 'Ăn uống', color: '#F59E0B', bg: '#FEF3C7', icon: 'food', limit: 3000000 },
    { id: 'cat_move', name: 'Đi lại', color: '#10B981', bg: '#D1FAE5', icon: 'car', limit: 2000000 },
    { id: 'cat_xang', name: 'Xăng', color: '#EA580C', bg: '#FFEDD5', icon: 'fuel', limit: 2000000 },
    { id: 'cat_shop', name: 'Mua sắm', color: '#F97316', bg: '#FFEDD5', icon: 'bag', limit: 3000000 },
    { id: 'cat_bill', name: 'Hóa đơn', color: '#8B5CF6', bg: '#EDE9FE', icon: 'bill', limit: 1500000 },
    { id: 'cat_fun', name: 'Giải trí', color: '#0EA5E9', bg: '#E0F2FE', icon: 'game', limit: 1000000 },
    { id: 'cat_health', name: 'Sức khỏe', color: '#EC4899', bg: '#FCE7F3', icon: 'heart', limit: 1500000 },
    { id: 'cat_study', name: 'Học tập', color: '#4F46E5', bg: '#E0E7FF', icon: 'laptop', limit: 2000000 },
    { id: 'cat_other', name: 'Khác', color: '#94A3B8', bg: '#F1F5F9', icon: 'wallet', limit: 1000000 },
    { id: 'cat_salary', name: 'Lương chính', color: '#10B981', bg: '#D1FAE5', icon: 'wallet', isIncome: true },
    { id: 'cat_bonus', name: 'Thưởng', color: '#0EA5E9', bg: '#E0F2FE', icon: 'shieldCheck', isIncome: true },
    { id: 'cat_invest', name: 'Đầu tư', color: '#8B5CF6', bg: '#EDE9FE', icon: 'chartBar', isIncome: true },
    { id: 'cat_income_other', name: 'Thu khác', color: '#F59E0B', bg: '#FEF3C7', icon: 'receipt', isIncome: true }
  ],
  transactions: [
    { id: 'tx_1793242810031', userId: 'personal', userName: 'Nguyễn Thanh Đức', title: 'Xăng', note: 'Xăng', categoryId: 'cat_xang', categoryName: 'Xăng', date: '27/10/2026', periodMonth: '2026-10', amount: 60000, type: 'EXPENSE', walletId: 'w1', wallet: 'Techcombank Chính', status: 'Y', updatedAt: '29/10/2026 10:00:10' },
    { id: 'tx_1793242742900', userId: 'personal', userName: 'Nguyễn Thanh Đức', title: 'Miếng Vịt', note: 'Miếng Vịt', categoryId: 'cat_food', categoryName: 'Ăn uống', date: '27/10/2026', periodMonth: '2026-10', amount: 39000, type: 'EXPENSE', walletId: 'w1', wallet: 'Techcombank Chính', status: 'Y', updatedAt: '29/10/2026 09:59:02' },
    { id: 'tx_1793242478121', userId: 'personal', userName: 'Nguyễn Thanh Đức', title: 'Grab tới Aeon', note: 'Grab tới Aeon', categoryId: 'cat_move', categoryName: 'Đi lại', date: '29/10/2026', periodMonth: '2026-10', amount: 20000, type: 'EXPENSE', walletId: 'w1', wallet: 'Techcombank Chính', status: 'Y', updatedAt: '29/10/2026 09:54:38' },
    { id: 'tx_1793242463928', userId: 'personal', userName: 'Nguyễn Thanh Đức', title: 'Phúc Long', note: 'Phúc Long', categoryId: 'cat_food', categoryName: 'Ăn uống', date: '29/10/2026', periodMonth: '2026-10', amount: 60000, type: 'EXPENSE', walletId: 'w1', wallet: 'Techcombank Chính', status: 'Y', updatedAt: '29/10/2026 09:54:23' },
    { id: 'tx_1793242452232', userId: 'personal', userName: 'Nguyễn Thanh Đức', title: 'Bún bò', note: 'Bún bò', categoryId: 'cat_food', categoryName: 'Ăn uống', date: '29/10/2026', periodMonth: '2026-10', amount: 40000, type: 'EXPENSE', walletId: 'w1', wallet: 'Techcombank Chính', status: 'Y', updatedAt: '29/10/2026 09:54:12' },
    { id: 'tx_1793242407193', userId: 'personal', userName: 'Nguyễn Thanh Đức', title: 'Kem', note: 'Kem', categoryId: 'cat_food', categoryName: 'Ăn uống', date: '28/10/2026', periodMonth: '2026-10', amount: 79000, type: 'EXPENSE', walletId: 'w1', wallet: 'Techcombank Chính', status: 'Y', updatedAt: '29/10/2026 09:53:40' },
    { id: 'tx_1793242393477', userId: 'personal', userName: 'Nguyễn Thanh Đức', title: 'Nước Cam', note: 'Nước Cam', categoryId: 'cat_food', categoryName: 'Ăn uống', date: '28/10/2026', periodMonth: '2026-10', amount: 25000, type: 'EXPENSE', walletId: 'w1', wallet: 'Techcombank Chính', status: 'Y', updatedAt: '29/10/2026 09:53:35' },
    { id: 'tx_1793242360534', userId: 'personal', userName: 'Nguyễn Thanh Đức', title: 'Ghế ngồi máy bay', note: 'Ghế ngồi máy bay', categoryId: 'cat_move', categoryName: 'Đi lại', date: '28/10/2026', periodMonth: '2026-10', amount: 45000, type: 'EXPENSE', walletId: 'w1', wallet: 'Techcombank Chính', status: 'Y', updatedAt: '29/10/2026 09:53:01' },
    { id: 'tx_1793242341924', userId: 'personal', userName: 'Nguyễn Thanh Đức', title: 'Súp Cua + Trứng', note: 'Súp Cua + Trứng', categoryId: 'cat_food', categoryName: 'Ăn uống', date: '28/10/2026', periodMonth: '2026-10', amount: 35000, type: 'EXPENSE', walletId: 'w1', wallet: 'Techcombank Chính', status: 'Y', updatedAt: '29/10/2026 09:52:21' },
    { id: 'tx_1793067861108', userId: 'personal', userName: 'Nguyễn Thanh Đức', title: 'Súp cua - Trứng - Bắp', note: 'Súp cua - Trứng - Bắp', categoryId: 'cat_food', categoryName: 'Ăn uống', date: '27/10/2026', periodMonth: '2026-10', amount: 45000, type: 'EXPENSE', walletId: 'w1', wallet: 'Techcombank Chính', status: 'Y', updatedAt: '27/10/2026 09:24:21' },
    { id: 'tx_1793026832119', userId: 'personal', userName: 'Nguyễn Thanh Đức', title: 'Uống Maycha', note: 'Uống Maycha', categoryId: 'cat_food', categoryName: 'Ăn uống', date: '26/10/2026', periodMonth: '2026-10', amount: 25000, type: 'EXPENSE', walletId: 'w1', wallet: 'Techcombank Chính', status: 'Y' },
    { id: 'tx_1793026799207', userId: 'personal', userName: 'Nguyễn Thanh Đức', title: 'Mì Thịt Trứng', note: 'Mì Thịt Trứng', categoryId: 'cat_food', categoryName: 'Ăn uống', date: '26/10/2026', periodMonth: '2026-10', amount: 30000, type: 'EXPENSE', walletId: 'w1', wallet: 'Techcombank Chính', status: 'Y' },
    { id: 'tx_1793006890947', userId: 'personal', userName: 'Nguyễn Thanh Đức', title: 'Vé về quê khám nghĩa vụ', note: 'Vé về quê khám nghĩa vụ', categoryId: 'cat_move', categoryName: 'Đi lại', date: '26/10/2026', periodMonth: '2026-10', amount: 2500000, type: 'EXPENSE', walletId: 'w1', wallet: 'Techcombank Chính', status: 'Y' },
    { id: 'tx_1793006869683', userId: 'personal', userName: 'Nguyễn Thanh Đức', title: 'Cháo Lòng', note: 'Cháo Lòng', categoryId: 'cat_food', categoryName: 'Ăn uống', date: '26/10/2026', periodMonth: '2026-10', amount: 25000, type: 'EXPENSE', walletId: 'w1', wallet: 'Techcombank Chính', status: 'Y' },
    { id: 'tx_1793006858506', userId: 'personal', userName: 'Nguyễn Thanh Đức', title: 'Nước Cam', note: 'Nước Cam', categoryId: 'cat_food', categoryName: 'Ăn uống', date: '26/10/2026', periodMonth: '2026-10', amount: 25000, type: 'EXPENSE', walletId: 'w1', wallet: 'Techcombank Chính', status: 'Y' },
    ...MULTI_USER_SEED_DATA.transactions
  ],
  monthlyHistory: [
    { month: 'Tháng 5', income: 0, expense: 0 },
    { month: 'Tháng 6', income: 0, expense: 0 },
    { month: 'Tháng 7', income: 0, expense: 0 },
    { month: 'Tháng 8', income: 0, expense: 0 },
    { month: 'Tháng 9', income: 0, expense: 0 },
    { month: 'Tháng 10', income: 0, expense: 3.048 }
  ],
  goals: [
    { id: 'g1', userId: 'personal', userName: 'Nguyễn Thanh Đức', title: 'Du lịch Đà Lạt', current: 3500000, target: 10000000, themeId: 'sky', themeLabel: 'Du lịch', color: '#0EA5E9', bg: '#E0F2FE', icon: 'plane' },
    { id: 'g2', userId: 'personal', userName: 'Nguyễn Thanh Đức', title: 'Mua Macbook', current: 4200000, target: 30000000, themeId: 'violet', themeLabel: 'Công nghệ', color: '#8B5CF6', bg: '#EDE9FE', icon: 'laptop' },
    { id: 'g3', userId: 'personal', userName: 'Nguyễn Thanh Đức', title: 'Tiết kiệm khẩn cấp', current: 2000000, target: 20000000, themeId: 'emerald', themeLabel: 'Quỹ dự phòng', color: '#0284C7', bg: '#E0F2FE', icon: 'shieldCheck' },
    ...MULTI_USER_SEED_DATA.goals
  ],
  goalDeposits: []
};

function getTodayDateString() {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yyyy = now.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

function getDateTimeStringNow() {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yyyy = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, '0');
  const mi = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  return `${dd}/${mm}/${yyyy} ${hh}:${mi}:${ss}`;
}

function normalizeDateString(dateStr) {
  if (!dateStr || String(dateStr).toLowerCase().includes('hôm nay')) {
    return getTodayDateString();
  }
  const s = String(dateStr).trim();
  const dmy = s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
  if (dmy) {
    const dd = String(Math.min(31, Math.max(1, parseInt(dmy[1], 10)))).padStart(2, '0');
    const mm = String(Math.min(12, Math.max(1, parseInt(dmy[2], 10)))).padStart(2, '0');
    return `${dd}/${mm}/${dmy[3]}`;
  }
  const ymd = s.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/);
  if (ymd) {
    const dd = String(Math.min(31, Math.max(1, parseInt(ymd[3], 10)))).padStart(2, '0');
    const mm = String(Math.min(12, Math.max(1, parseInt(ymd[2], 10)))).padStart(2, '0');
    return `${dd}/${mm}/${ymd[1]}`;
  }
  return s;
}

function resolveWalletIdForUser(userId, walletName) {
  const uid = userId || 'personal';
  const wName = String(walletName || 'Techcombank Chính').trim().toLowerCase();
  const suffix = wName.includes('momo') ? 'w2' : wName.includes('tiền mặt') || wName.includes('tien mat') ? 'w3' : 'w1';
  return uid === 'personal' ? suffix : `${uid}_${suffix}`;
}

function extractPeriodMonth(dateStr) {
  const now = new Date();
  const curMonth = now.getMonth() + 1;
  const curYear = now.getFullYear();
  if (!dateStr || String(dateStr).toLowerCase().includes('hôm nay')) {
    return { month: curMonth, year: curYear, period: `${curYear}-${String(curMonth).padStart(2, '0')}` };
  }
  const s = String(dateStr).trim();
  const dmy = s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
  if (dmy) {
    const m = Math.min(12, Math.max(1, parseInt(dmy[2], 10)));
    const y = parseInt(dmy[3], 10);
    return { month: m, year: y, period: `${y}-${String(m).padStart(2, '0')}` };
  }
  const ym = s.match(/^(\d{4})[\/\-](\d{1,2})/);
  if (ym) {
    const y = parseInt(ym[1], 10);
    const m = Math.min(12, Math.max(1, parseInt(ym[2], 10)));
    return { month: m, year: y, period: `${y}-${String(m).padStart(2, '0')}` };
  }
  return { month: curMonth, year: curYear, period: `${curYear}-${String(curMonth).padStart(2, '0')}` };
}

function computeAvatarInitials(fullName) {
  const parts = String(fullName || 'User').trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'US';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[parts.length - 2][0] + parts[parts.length - 1][0]).toUpperCase();
}

function isCurrentUserAdmin(d = state.data) {
  if (!d || !Array.isArray(d.workspaces)) return false;
  const activeWs = d.workspaces.find(w => w.id === d.activeWorkspace) || d.workspaces[0];
  if (!activeWs) return false;
  return activeWs.roleCode === 'ADMIN' || activeWs.id === 'personal' || String(activeWs.role || '').toUpperCase().includes('ADMIN');
}

function recalculateDerivedData(d) {
  if (!d) return d;

  // Đảm bảo danh sách tài khoản được cấp luôn có mật khẩu và phân quyền (ADMIN / USER) chuẩn
  if (!Array.isArray(d.workspaces) || d.workspaces.length === 0) {
    d.workspaces = JSON.parse(JSON.stringify(INITIAL_DATA.workspaces));
  } else {
    d.workspaces = d.workspaces.map(w => {
      const isRootAdmin = w.id === 'personal' || String(w.roleCode || '').toUpperCase() === 'ADMIN' || String(w.role || '').toUpperCase().includes('ADMIN');
      const rCode = isRootAdmin ? 'ADMIN' : 'USER';
      const validSystemCodes = new Set(SYSTEM_MODULES.map(m => m.code));
      let allowedMods = Array.isArray(w.allowedModules)
        ? w.allowedModules
            .map(m => {
              const c = String(m || '').toUpperCase().trim();
              return c === 'FIN' ? 'PFM' : c;
            })
            .filter(c => validSystemCodes.has(c))
        : [];
      if (!allowedMods.includes('PFM')) allowedMods.unshift('PFM');
      if (isRootAdmin && !allowedMods.includes('ADM')) allowedMods.push('ADM');
      if (!isRootAdmin) allowedMods = allowedMods.filter(c => c !== 'ADM');
      return {
        ...w,
        name: w.name || (w.fullName ? w.fullName.split(' ').slice(-2).join(' ') : 'User'),
        fullName: w.fullName || w.name || 'User',
        password: w.password || DEFAULT_USER_PASSWORDS[w.id] || 'Desun@123',
        avatar: w.avatar || computeAvatarInitials(w.fullName || w.name),
        roleCode: rCode,
        role: rCode === 'ADMIN' ? 'Quản trị viên (Admin)' : 'Thành viên cá nhân (User)',
        allowedModules: Array.from(new Set(allowedMods)),
        provisionedBy: w.provisionedBy || (w.id === 'personal' ? 'Hệ thống (Root Admin)' : 'Nguyễn Thanh Đức (Admin)'),
        createdAt: w.createdAt || '10/10/2026',
        lastLoginAt: w.lastLoginAt || '',
        status: w.status === 'N' ? 'N' : 'Y'
      };
    });
  }

  const wsMap = new Map(d.workspaces.map(w => [w.id, w]));
  const activeWs = wsMap.get(d.activeWorkspace) || d.workspaces[0] || { id: 'personal', fullName: d.userName || 'Nguyễn Thanh Đức' };
  d.activeWorkspace = activeWs.id;
  d.userName = activeWs.fullName || activeWs.name;
  d.userEmail = activeWs.email;

  // Bổ sung dữ liệu mẫu ban đầu cho các tài khoản cá nhân khác (Minh Anh, Hoàng Nam, Khánh Vy) nếu chưa khởi tạo
  if (!d.seededMultiUserV1) {
    const existingTxIds = new Set((d.transactions || []).map(t => t.id));
    MULTI_USER_SEED_DATA.transactions.forEach(st => {
      if (!existingTxIds.has(st.id)) {
        d.transactions = [...(d.transactions || []), { ...st }];
      }
    });
    const existingGoalIds = new Set((d.goals || []).map(g => g.id));
    MULTI_USER_SEED_DATA.goals.forEach(sg => {
      if (!existingGoalIds.has(sg.id)) {
        d.goals = [...(d.goals || []), { ...sg }];
      }
    });
    d.seededMultiUserV1 = true;
  }

  const txs = Array.isArray(d.transactions) ? d.transactions : [];
  const cats = Array.isArray(d.categories) ? d.categories : INITIAL_DATA.categories;
  const catMap = new Map(cats.map(c => [c.id, c]));

  // Chuẩn hóa đầy đủ các trường dữ liệu từng giao dịch (PFM_TRANSACTIONS) theo đúng chủ tài khoản (userId)
  d.transactions = txs.map((t, idx) => {
    const normalizedDate = normalizeDateString(t.date);
    const pm = extractPeriodMonth(normalizedDate);
    const uid = t.userId || 'personal';
    const ownerObj = wsMap.get(uid) || activeWs;
    const catObj = catMap.get(t.categoryId) || cats[0] || { id: 'cat_food', name: 'Ăn uống' };
    const walletName = String(t.wallet || 'Techcombank Chính').trim();
    const titleVal = String(t.title || t.note || catObj.name || '').trim();
    const noteVal = String(t.note !== undefined ? t.note : titleVal).trim();

    return {
      ...t,
      id: String(t.id || `tx_${idx + 1}`).trim(),
      userId: uid,
      userName: t.userName || ownerObj.fullName || ownerObj.name || 'Nguyễn Thanh Đức',
      title: titleVal,
      note: noteVal,
      categoryId: t.categoryId || catObj.id,
      categoryName: t.categoryName || catObj.name,
      date: normalizedDate,
      periodMonth: pm.period,
      amount: Math.abs(Number(t.amount) || 0),
      type: t.type === 'INCOME' ? 'INCOME' : 'EXPENSE',
      walletId: t.walletId || resolveWalletIdForUser(uid, walletName),
      wallet: walletName,
      status: t.status || 'Y',
      updatedAt: t.updatedAt || ''
    };
  });

  // Chuẩn hóa metadata mục tiêu tiết kiệm (PFM_SAVINGS_GOALS) theo đúng chủ tài khoản (userId)
  const themeByIcon = {
    shieldCheck: { id: 'emerald', label: 'Quỹ dự phòng' },
    plane: { id: 'sky', label: 'Du lịch' },
    laptop: { id: 'violet', label: 'Công nghệ' },
    bag: { id: 'orange', label: 'Mua sắm lớn' },
    heart: { id: 'pink', label: 'Gia đình & Sức khỏe' }
  };
  if (Array.isArray(d.goals)) {
    d.goals = d.goals.map((g, idx) => {
      const uid = g.userId || 'personal';
      const ownerObj = wsMap.get(uid) || activeWs;
      const cur = Number(g.current) || 0;
      const tgt = Math.max(1000, Number(g.target) || 10000000);
      const iconCode = g.icon || 'shieldCheck';
      const thInfo = themeByIcon[iconCode] || { id: 'emerald', label: 'Quỹ dự phòng' };
      return {
        ...g,
        id: String(g.id || `g_${idx + 1}`).trim(),
        userId: uid,
        userName: g.userName || ownerObj.fullName || ownerObj.name || 'Nguyễn Thanh Đức',
        title: String(g.title || '').trim(),
        current: cur,
        target: tgt,
        themeId: g.themeId || thInfo.id,
        themeLabel: g.themeLabel || thInfo.label,
        color: g.color || '#10B981',
        bg: g.bg || '#DCFCE7',
        icon: iconCode,
        goalStatus: cur >= tgt && tgt > 0 ? 'COMPLETED' : 'ACTIVE',
        updatedAt: g.updatedAt || ''
      };
    });
  }

  if (!Array.isArray(d.goalDeposits)) {
    d.goalDeposits = [];
  }

  // 1. Đồng bộ số dư chuẩn từng Ví (Vi_Nguon_Tien - PFM_WALLETS) tách biệt theo từng User từ danh sách Giao_Dich
  const baseWalletTemplates = [
    { suffix: 'w1', name: 'Techcombank Chính', type: 'Ngân hàng', number: '•••• 8899' },
    { suffix: 'w2', name: 'Ví MoMo', type: 'Ví điện tử', number: '0988•••456' },
    { suffix: 'w3', name: 'Tiền mặt cá nhân', type: 'Tiền mặt', number: 'Ví tiêu dùng' }
  ];
  const existingWallets = Array.isArray(d.wallets) ? d.wallets : [];
  const rebuiltWallets = [];

  d.workspaces.forEach(ws => {
    baseWalletTemplates.forEach((tpl) => {
      const found = existingWallets.find(
        ew => (ew.userId || 'personal') === ws.id && String(ew.name || '').trim().toLowerCase() === tpl.name.toLowerCase()
      );
      const walletTxs = d.transactions.filter(
        t => t.status !== 'D' && (t.userId || 'personal') === ws.id && (t.wallet || 'Techcombank Chính').trim().toLowerCase() === tpl.name.toLowerCase()
      );
      const incomeTotal = walletTxs.filter(t => t.type === 'INCOME').reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
      const expenseTotal = walletTxs.filter(t => t.type === 'EXPENSE').reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
      const initialBal = found ? (Number(found.initialBalance) || 0) : 0;
      rebuiltWallets.push({
        id: found && found.id ? found.id : (ws.id === 'personal' ? tpl.suffix : `${ws.id}_${tpl.suffix}`),
        userId: ws.id,
        userName: ws.fullName || ws.name,
        name: tpl.name,
        type: tpl.type,
        number: found && found.number ? found.number : tpl.number,
        initialBalance: initialBal,
        incomeTotal,
        expenseTotal,
        balance: initialBal + incomeTotal - expenseTotal
      });
    });
  });
  d.wallets = rebuiltWallets;

  // 2. Đồng bộ Lịch sử 6 tháng (Lich_Su_6_Thang) trực tiếp từ dữ liệu Giao_Dich của User đang đăng nhập
  const now = new Date();
  const curYear = now.getFullYear();
  const monthsList = [5, 6, 7, 8, 9, 10];
  const activeUserTxs = d.transactions.filter(t => t.status !== 'D' && (t.userId || 'personal') === activeWs.id);
  d.monthlyHistory = monthsList.map(m => {
    const monthTxs = activeUserTxs.filter(t => {
      const pm = extractPeriodMonth(t.date);
      return pm.month === m;
    });
    const incVND = monthTxs.filter(t => t.type === 'INCOME').reduce((s, t) => s + (Number(t.amount) || 0), 0);
    const expVND = monthTxs.filter(t => t.type === 'EXPENSE').reduce((s, t) => s + (Number(t.amount) || 0), 0);
    return {
      month: `Tháng ${m}`,
      periodMonth: `${curYear}-${String(m).padStart(2, '0')}`,
      incomeVND: incVND,
      expenseVND: expVND,
      netVND: incVND - expVND,
      income: Number((incVND / 1000000).toFixed(3)),
      expense: Number((expVND / 1000000).toFixed(3))
    };
  });

  return d;
}

function getActiveUserTransactions(d = state.data) {
  const activeId = (d && d.activeWorkspace) || 'personal';
  return ((d && d.transactions) || []).filter(t => t.status !== 'D' && (t.userId || 'personal') === activeId);
}

function getActiveUserWallets(d = state.data) {
  const activeId = (d && d.activeWorkspace) || 'personal';
  const list = ((d && d.wallets) || []).filter(w => (w.userId || 'personal') === activeId);
  return list.length > 0 ? list : ((d && d.wallets) || []).slice(0, 3);
}

function getActiveUserGoals(d = state.data) {
  const activeId = (d && d.activeWorkspace) || 'personal';
  return ((d && d.goals) || []).filter(g => (g.userId || 'personal') === activeId);
}

function loadState() {
  try {
    const saved = window.localStorage && localStorage.getItem('DESUN_APP_INDIVIDUAL_V3');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed.deletedTxIds)) parsed.deletedTxIds = [];
      if (!Array.isArray(parsed.deletedCatIds)) parsed.deletedCatIds = [];
      if (!Array.isArray(parsed.deletedGoalIds)) parsed.deletedGoalIds = [];
      if (!Array.isArray(parsed.deletedUserIds)) parsed.deletedUserIds = [];

      const delCatSet = new Set(parsed.deletedCatIds);
      const existingCatIds = new Set((parsed.categories || []).map(c => c.id));
      (INITIAL_DATA.categories || []).forEach(baseCat => {
        if (!existingCatIds.has(baseCat.id) && !delCatSet.has(baseCat.id)) {
          parsed.categories = [...(parsed.categories || []), { ...baseCat }];
          existingCatIds.add(baseCat.id);
        }
      });

      const delTxSet = new Set(parsed.deletedTxIds);
      const existingTxIds = new Set((parsed.transactions || []).map(t => t.id));
      const missingBaseTxs = [];
      (INITIAL_DATA.transactions || []).forEach(baseTx => {
        if (!existingTxIds.has(baseTx.id) && !delTxSet.has(baseTx.id)) {
          missingBaseTxs.push({ ...baseTx });
          existingTxIds.add(baseTx.id);
        }
      });
      if (missingBaseTxs.length > 0) {
        parsed.transactions = [...missingBaseTxs, ...(parsed.transactions || [])];
      }

      parsed.realtimeSyncV4Initialized = true;
      parsed.realtimeSyncV8Initialized = true;
      return recalculateDerivedData(parsed);
    }
  } catch (e) {}
  return recalculateDerivedData(JSON.parse(JSON.stringify(INITIAL_DATA)));
}

function formatNumberWithDots(val) {
  const digits = String(val ?? '').replace(/\D/g, '').replace(/^0+(?=\d)/, '');
  if (!digits) return '';
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

let state = {
  data: loadState(),
  isAuthenticated: false,     // Start on Login Page so user can experience Login -> App flow
  activePage: 'home',         // 'home' | 'transactions' | 'budgets' | 'goals' | 'profile' | 'admin_accounts'
  activeModule: 'PFM',        // 'PFM' (Quản lý chi tiêu) | 'ADM' (Quản lý tài khoản)
  moduleSwitcherOpen: false,  // Popover chọn Module kiểu 3D Cube ở Sidebar
  sidebarPinned: true,        // Nút Ghim ở cụm Module Dock
  budgetSubTab: 'budgets',    // 'budgets' | 'goals' (used on Mobile combined tab)
  isMobileSimulator: false,   // Toggle to test mobile layout on desktop screen
  txFilter: 'ALL',            // 'ALL' | 'EXPENSE' | 'INCOME'
  txCategoryFilter: 'ALL',    // 'ALL' | categoryId
  txPage: 1,                  // Trang hiện tại của bảng Danh sách thu chi
  txPageSize: 8,              // Số dòng mỗi trang trên bảng Danh sách thu chi (5 | 8 | 10 | 20 | 50)
  homeTxPage: 1,              // Trang hiện tại của danh sách Khoản thu chi trong kỳ trên Trang chủ
  homeTxPageSize: 5,          // Số dòng mỗi trang trên thẻ Khoản thu chi trong kỳ (Trang chủ)
  searchQuery: '',
  modalOpen: false,
  goalModalOpen: false,
  categoryModalOpen: false,
  adminUserModalOpen: false,
  categoryModalForm: {
    mode: 'CREATE',           // 'CREATE' | 'EDIT'
    editId: null,
    name: '',
    isIncome: false,
    limit: '2.000.000',
    themeId: 'food'
  },
  adminAccountView: {
    search: '',
    roleFilter: 'ALL',        // 'ALL' | 'ADMIN' | 'USER'
    statusFilter: 'ALL',      // 'ALL' | 'Y' | 'N'
    moduleFilter: 'ALL',      // 'ALL' | 'PFM' | 'ADM'
    selectedUserForModuleRbac: 'personal',
    activeModuleBadgeCode: 'ADM',
    openRowModuleMenuUserId: null,
    loginTableFilter: 'ALL'   // 'ALL' | 'ADMIN' | 'USER'
  },
  adminUserModalForm: {
    mode: 'CREATE',           // 'CREATE' | 'EDIT'
    editId: null,
    id: '',
    fullName: '',
    name: '',
    email: '',
    password: '',
    roleCode: 'USER',         // 'ADMIN' | 'USER'
    allowedModules: ['PFM'],
    status: 'Y',              // 'Y' | 'N'
    initialWalletBalance: '0'
  },
  goalModalForm: {
    mode: 'CREATE',           // 'CREATE' | 'EDIT' | 'DEPOSIT' | 'BUDGET_LIMIT'
    goalId: null,
    catId: null,
    title: '',
    target: '20.000.000',
    current: '0',
    depositAmount: '1.000.000',
    themeId: 'emerald'
  },
  loginForm: {
    selectedWsId: 'personal',
    email: 'duc.nguyen@desun.vn',
    password: '',
    errorMsg: '',
    showPassword: false,
    rememberMe: true
  },
  modalForm: {
    editTxId: null,
    type: 'EXPENSE',
    amount: '450.000',
    categoryId: 'cat_food',
    walletName: 'Techcombank Chính',
    date: getTodayDateString(),
    note: ''
  },
  deleteConfirm: {
    open: false,
    txId: null
  },
  notificationCenter: {
    open: false,
    filterTab: 'ALL',     // 'ALL' | 'UNREAD' | 'TX' | 'ALERT'
    readIds: {},
    customLogs: []
  },
  excel: {
    fileHandle: null,
    fileName: 'DeSun_DuLieu_ThuChi.xlsx',
    isLinked: false,
    needsPermission: false,
    bridgeOnline: false,
    fileLockedByExcel: false,
    hasMergedDiskInSession: false,
    hasMergedBridgeInSession: false,
    lastSavedAt: null,
    lastSyncedMtimeMs: 0,
    lastFileMtimeMs: 0,
    isWriting: false
  },
  dashboardFilter: {
    mode: 'ALL',           // 'ALL' | 'DAY' | 'MONTH' | 'YEAR'
    day: '',               // '' | '01'..'31'
    month: '',             // '' | '01'..'12'
    year: '',              // '' | '2025' | '2026' | '2027'
    exactDate: '',         // YYYY-MM-DD
    keyword: '',           // Tìm kiếm nhanh trên Dashboard
    donutType: 'EXPENSE',  // 'EXPENSE' | 'INCOME'
    activeCatId: null,     // Spotlight danh mục trên Donut chart
    trendView: 'MONTH',    // 'DAY' | 'MONTH' | 'YEAR'
    openSelect: null,      // null | 'DAY' | 'MONTH' | 'YEAR' | 'TX_CAT'
    selectQuery: ''        // Từ khóa gõ tìm nhanh bên trong Select Popover
  }
};

const LOCAL_EXCEL_BRIDGE_HOSTS = ['http://127.0.0.1:8765', 'http://localhost:8765'];
let activeBridgeBaseUrl = LOCAL_EXCEL_BRIDGE_HOSTS[0];
const LOCAL_EXCEL_BRIDGE_URL = 'http://127.0.0.1:8765/api/excel-sync';
const LOCAL_EXCEL_STATUS_URL = 'http://127.0.0.1:8765/api/excel-status';
let queuedExcelPollTimer = null;

async function fetchLocalBridge(pathAndQuery, options = {}, timeoutMs = 2500) {
  const hosts = [activeBridgeBaseUrl, ...LOCAL_EXCEL_BRIDGE_HOSTS.filter(h => h !== activeBridgeBaseUrl)];
  let lastErr = null;
  for (const base of hosts) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      const res = await fetch(`${base}${pathAndQuery}`, {
        ...options,
        signal: controller.signal
      });
      clearTimeout(timer);
      if (res && res.ok) {
        activeBridgeBaseUrl = base;
        return res;
      }
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error('Local Excel Bridge offline');
}

function persistDataToLocalStorage() {
  try {
    if (window.localStorage) {
      localStorage.setItem('DESUN_APP_INDIVIDUAL_V3', JSON.stringify(state.data));
    }
  } catch (e) {}
}

function pollQueuedExcelWrite() {
  if (queuedExcelPollTimer) clearInterval(queuedExcelPollTimer);
  queuedExcelPollTimer = setInterval(async () => {
    try {
      const res = await fetchLocalBridge('/api/excel-status', { cache: 'no-store' }, 1500);
      if (!res.ok) return;
      const st = await res.json();
      if (st && st.ok && !st.pendingWrite) {
        clearInterval(queuedExcelPollTimer);
        queuedExcelPollTimer = null;
        state.data.hasUnsyncedCrud = false;
        persistDataToLocalStorage();
        state.excel.lastSavedAt = st.lastSavedAt || getTimeStringNow();
        if (st.mtimeMs) state.excel.lastSyncedMtimeMs = st.mtimeMs;
        renderApp();
        showToast(`✅ Đã ghi thành công (${state.data.transactions.length} giao dịch) vào DeSun_DuLieu_ThuChi.xlsx!`);
      }
    } catch (e) {}
  }, 1500);
}

async function syncWorkbookToLocalBridge(wbOut, silent = false) {
  try {
    const res = await fetchLocalBridge('/api/excel-sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/octet-stream' },
      body: new Blob([wbOut], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
    }, 5000);
    if (!res.ok) {
      state.excel.bridgeOnline = false;
      return false;
    }
    const info = await res.json();
    if (info && info.ok) {
      state.excel.bridgeOnline = true;
      state.excel.hasMergedBridgeInSession = true;
      state.excel.fileLockedByExcel = false;
      state.excel.fileName = info.fileName || 'DeSun_DuLieu_ThuChi.xlsx';
      state.excel.isLinked = true;
      state.excel.needsPermission = false;
      state.excel.lastSavedAt = info.savedAt || getTimeStringNow();
      if (info.mtimeMs) state.excel.lastSyncedMtimeMs = info.mtimeMs;
      if (!info.queued) {
        state.data.hasUnsyncedCrud = false;
        persistDataToLocalStorage();
      }
      const badgeEl = document.getElementById('excel-sync-timestamp');
      if (badgeEl) badgeEl.textContent = `Excel: ${state.excel.lastSavedAt}`;
      renderApp();
      if (info.queued) {
        showToast('⚠️ Hãy đóng cửa sổ Microsoft Excel để dữ liệu tự động lưu xuống file.');
        pollQueuedExcelWrite();
      }
      return true;
    }
  } catch (e) {
    state.excel.bridgeOnline = false;
  }
  return false;
}

async function pullWorkbookFromLocalBridge(silent = true) {
  try {
    const res = await fetchLocalBridge(`/api/excel-sync?t=${Date.now()}`, {
      method: 'GET',
      cache: 'no-store'
    }, 3000);
    if (!res.ok) return false;
    state.excel.bridgeOnline = true;
    const arrayBuffer = await res.arrayBuffer();
    const wb = XLSX.read(arrayBuffer, { type: 'array' });
    if (parseWorkbookToState(wb)) {
      state.excel.hasMergedBridgeInSession = true;
      state.excel.fileLockedByExcel = false;
      state.excel.fileName = 'DeSun_DuLieu_ThuChi.xlsx';
      state.excel.isLinked = true;
      state.excel.needsPermission = false;
      state.excel.lastSavedAt = getTimeStringNow();
      // Nếu file Excel trên ổ đĩa chưa có đủ bộ Sheet chuẩn (gồm cả Vai_Tro, Phan_He_Module, Phan_Quyen_Module, Nhat_Ky_Dang_Nhap), tự động ghi chuẩn hóa lại ngay
      const tkRows = wb.Sheets['Tai_Khoan'] ? XLSX.utils.sheet_to_json(wb.Sheets['Tai_Khoan']) : [];
      const hasRbacColumns = tkRows.length > 0 && ('Mã Phân quyền' in tkRows[0]) && ('Modules được cấp' in tkRows[0]);
      if (!wb.SheetNames.includes('Lich_Su_Nap_Muc_Tieu') || !wb.SheetNames.includes('Phan_Quyen_Module') || !hasRbacColumns) {
        const upgradedWb = buildWorkbookFromState();
        if (upgradedWb) {
          const wbOut = XLSX.write(upgradedWb, { bookType: 'xlsx', type: 'array' });
          await syncWorkbookToLocalBridge(wbOut, true);
        }
      }
      try {
        const stRes = await fetchLocalBridge('/api/excel-status', { cache: 'no-store' }, 1500);
        if (stRes.ok) {
          const st = await stRes.json();
          if (st && st.mtimeMs) state.excel.lastSyncedMtimeMs = st.mtimeMs;
        }
      } catch (e) {}
      renderApp();
      if (!silent) {
        showToast(`✅ Đã tải real-time (${state.data.transactions.length} giao dịch) từ DeSun_DuLieu_ThuChi.xlsx`);
      }
      return true;
    }
  } catch (e) {
    state.excel.bridgeOnline = false;
  }
  return false;
}

async function tryFetchRelativeExcelFile() {
  if (!window.XLSX) return false;
  try {
    const res = await fetch(`./DeSun_DuLieu_ThuChi.xlsx?t=${Date.now()}`, { cache: 'no-store' });
    if (!res.ok) return false;
    const arrayBuffer = await res.arrayBuffer();
    const wb = XLSX.read(arrayBuffer, { type: 'array' });
    if (parseWorkbookToState(wb)) {
      state.excel.fileName = 'DeSun_DuLieu_ThuChi.xlsx';
      renderApp();
      return true;
    }
  } catch (e) {}
  return false;
}

async function autoSyncWithLocalExcelBridge() {
  // 1. Khôi phục ngay lập tức FileHandle từ IndexedDB
  await restoreExcelHandleFromIDB();

  if (!window.XLSX) return;

  // 2. Kiểm tra Local Excel Bridge (http://127.0.0.1:8765 hoặc http://localhost:8765)
  try {
    const stRes = await fetchLocalBridge('/api/excel-status', { cache: 'no-store' }, 900);
    if (stRes.ok) {
      const st = await stRes.json();
      state.excel.bridgeOnline = true;
      state.excel.isLinked = true;
      state.excel.needsPermission = false;
      state.excel.fileName = (st && st.fileName) || 'DeSun_DuLieu_ThuChi.xlsx';

      if (state.data.hasUnsyncedCrud) {
        // Hợp nhất dữ liệu đang có trong Excel trước khi ghi để không bao giờ làm mất giao dịch cũ
        try {
          const pullRes = await fetchLocalBridge(`/api/excel-sync?t=${Date.now()}`, { method: 'GET', cache: 'no-store' }, 2500);
          if (pullRes.ok) {
            const ab = await pullRes.arrayBuffer();
            const diskWb = XLSX.read(ab, { type: 'array' });
            mergeWorkbookDataIntoCurrentState(diskWb);
            state.excel.hasMergedBridgeInSession = true;
          }
        } catch (e) {}
        const wb = buildWorkbookFromState();
        if (wb) {
          const wbOut = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
          await syncWorkbookToLocalBridge(wbOut, true);
        }
      } else {
        // Ngược lại, đọc dữ liệu mới nhất từ DeSun_DuLieu_ThuChi.xlsx lên giao diện
        await pullWorkbookFromLocalBridge(true);
      }
      return;
    }
  } catch (e) {
    state.excel.bridgeOnline = false;
  }

  // 3. Nếu chưa có Local Bridge và chưa có dữ liệu unsynced, thử đọc trực tiếp từ file cùng thư mục (nếu mở qua HTTP)
  if (!state.data.hasUnsyncedCrud && !state.excel.isLinked) {
    await tryFetchRelativeExcelFile();
  }
}

// Đảm bảo cấp quyền FileHandle ngay lập tức trong sự kiện Click (User Gesture) trước mọi lệnh await mạng
async function ensureExcelPermissionOnUserGesture(allowOpenPickerIfMissing = false) {
  if (state.excel.bridgeOnline) return true;

  if (state.excel.fileHandle && typeof state.excel.fileHandle.queryPermission === 'function') {
    try {
      let perm = await state.excel.fileHandle.queryPermission({ mode: 'readwrite' });
      if (perm !== 'granted' && typeof state.excel.fileHandle.requestPermission === 'function') {
        perm = await state.excel.fileHandle.requestPermission({ mode: 'readwrite' });
      }
      if (perm === 'granted') {
        state.excel.isLinked = true;
        state.excel.needsPermission = false;
        // Ngay khi vừa cấp lại quyền cho fileHandle trong phiên mới, đọc & gộp dữ liệu có sẵn trong file để tránh ghi đè mất dữ liệu
        if (!state.excel.hasMergedDiskInSession && window.XLSX) {
          try {
            const existingFile = await state.excel.fileHandle.getFile();
            if (existingFile && existingFile.size > 0) {
              const ab = await existingFile.arrayBuffer();
              const diskWb = XLSX.read(ab, { type: 'array' });
              mergeWorkbookDataIntoCurrentState(diskWb);
              state.excel.hasMergedDiskInSession = true;
              state.excel.lastFileMtimeMs = existingFile.lastModified || Date.now();
            }
          } catch (e) {}
        }
        return true;
      }
    } catch (e) {}
  }

  if (!state.excel.fileHandle && allowOpenPickerIfMissing && typeof window.showSaveFilePicker === 'function') {
    try {
      const pickedHandle = await window.showSaveFilePicker({
        id: 'desun_excel_db',
        suggestedName: 'DeSun_DuLieu_ThuChi.xlsx',
        types: [
          {
            description: 'Microsoft Excel Workbook (.xlsx)',
            accept: {
              'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
            }
          }
        ]
      });
      if (pickedHandle) {
        state.excel.fileHandle = pickedHandle;
        state.excel.fileName = pickedHandle.name || 'DeSun_DuLieu_ThuChi.xlsx';
        state.excel.isLinked = true;
        state.excel.needsPermission = false;
        await storeExcelHandleToIDB(pickedHandle);
        if (window.XLSX) {
          try {
            const existingFile = await pickedHandle.getFile();
            if (existingFile && existingFile.size > 0) {
              const ab = await existingFile.arrayBuffer();
              const diskWb = XLSX.read(ab, { type: 'array' });
              mergeWorkbookDataIntoCurrentState(diskWb);
              state.excel.hasMergedDiskInSession = true;
              state.excel.lastFileMtimeMs = existingFile.lastModified || Date.now();
            }
          } catch (e) {}
        }
        return true;
      }
    } catch (err) {
      if (err && err.name === 'AbortError') return false;
    }
  }
  return false;
}

async function saveState(skipExcelSync = false, fromUserGesture = false) {
  recalculateDerivedData(state.data);
  if (!skipExcelSync) {
    state.data.hasUnsyncedCrud = true;
    state.data.lastCrudAt = Date.now();
  }
  persistDataToLocalStorage();
  if (!skipExcelSync) {
    await window.saveToLinkedExcelFile(true, fromUserGesture);
  }
}

// ============================================================================
// REAL EXCEL DATABASE ENGINE (SheetJS + File System Access API + IndexedDB)
// ============================================================================
const EXCEL_IDB_NAME = 'DeSunExcelHandleDB';
const EXCEL_IDB_STORE = 'handles';
const EXCEL_IDB_KEY = 'active_excel_handle';

function openExcelHandleDB() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) return reject(new Error('IndexedDB not supported'));
    const req = indexedDB.open(EXCEL_IDB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(EXCEL_IDB_STORE)) {
        db.createObjectStore(EXCEL_IDB_STORE);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function storeExcelHandleToIDB(handle) {
  try {
    const db = await openExcelHandleDB();
    const tx = db.transaction(EXCEL_IDB_STORE, 'readwrite');
    tx.objectStore(EXCEL_IDB_STORE).put(handle, EXCEL_IDB_KEY);
  } catch (e) {}
}

async function clearExcelHandleFromIDB() {
  try {
    const db = await openExcelHandleDB();
    const tx = db.transaction(EXCEL_IDB_STORE, 'readwrite');
    tx.objectStore(EXCEL_IDB_STORE).delete(EXCEL_IDB_KEY);
  } catch (e) {}
}

async function restoreExcelHandleFromIDB() {
  try {
    const db = await openExcelHandleDB();
    const handle = await new Promise((resolve) => {
      const tx = db.transaction(EXCEL_IDB_STORE, 'readonly');
      const r = tx.objectStore(EXCEL_IDB_STORE).get(EXCEL_IDB_KEY);
      r.onsuccess = () => resolve(r.result || null);
      r.onerror = () => resolve(null);
    });
    if (!handle) return;

    state.excel.fileHandle = handle;
    state.excel.fileName = handle.name || 'DeSun_DuLieu_ThuChi.xlsx';

    if (typeof handle.queryPermission === 'function') {
      const perm = await handle.queryPermission({ mode: 'readwrite' });
      if (perm === 'granted') {
        state.excel.isLinked = true;
        state.excel.needsPermission = false;
        if (state.data.hasUnsyncedCrud) {
          await window.saveToLinkedExcelFile(true, false);
          renderApp();
        } else {
          await readFromFileHandle(handle, true, true);
        }
      } else {
        state.excel.isLinked = false;
        state.excel.needsPermission = true;
        renderApp();
      }
    }
  } catch (e) {}
}

function getTimeStringNow() {
  const now = new Date();
  return now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function parseExcelNumber(val, fallback = 0) {
  if (typeof val === 'number' && !isNaN(val)) return Math.round(val);
  if (val === null || val === undefined) return fallback;
  const cleaned = String(val).replace(/[^\d-]/g, '');
  const n = parseInt(cleaned, 10);
  return isNaN(n) ? fallback : n;
}

function buildWorkbookFromState() {
  if (!window.XLSX) {
    showToast('Đang tải thư viện Excel (SheetJS), vui lòng thử lại sau giây lát!');
    return null;
  }

  recalculateDerivedData(state.data);
  const wb = XLSX.utils.book_new();
  const d = state.data;
  const activeWs = (d.workspaces || []).find(w => w.id === d.activeWorkspace) || (d.workspaces && d.workspaces[0]) || { id: 'personal', fullName: d.userName || 'Nguyễn Thanh Đức' };
  const ownerId = activeWs.id || 'personal';
  const ownerName = activeWs.fullName || activeWs.name || 'Nguyễn Thanh Đức';
  const curPeriod = extractPeriodMonth(getTodayDateString()).period;

  // 1. Sheet: Giao_Dich (Bảng PFM_TRANSACTIONS chuẩn OAP — Đầy đủ các trường dữ liệu CRUD)
  const txHeaders = [
    'STT',
    'Mã GD',
    'Mã TK',
    'Chủ tài khoản',
    'Nội dung',
    'Ghi chú',
    'Phân loại',
    'Mã Loại',
    'Mã Danh mục',
    'Tên Danh mục',
    'Số tiền (VNĐ)',
    'Mã Ví',
    'Nguồn tiền / Ví',
    'Thời gian',
    'Kỳ hạch toán',
    'Trạng thái',
    'Ngày cập nhật'
  ];
  const txRows = (d.transactions || []).map((t, idx) => {
    const normDate = normalizeDateString(t.date);
    const pm = extractPeriodMonth(normDate);
    const uid = t.userId || ownerId;
    const wName = t.wallet || 'Techcombank Chính';
    return {
      'STT': idx + 1,
      'Mã GD': t.id || `tx_${idx + 1}`,
      'Mã TK': uid,
      'Chủ tài khoản': t.userName || ownerName,
      'Nội dung': t.title || '',
      'Ghi chú': t.note !== undefined ? t.note : (t.title || ''),
      'Phân loại': t.type === 'INCOME' ? 'Khoản thu' : 'Khoản chi',
      'Mã Loại': t.type || 'EXPENSE',
      'Mã Danh mục': t.categoryId || 'cat_food',
      'Tên Danh mục': t.categoryName || '',
      'Số tiền (VNĐ)': Number(t.amount) || 0,
      'Mã Ví': t.walletId || resolveWalletIdForUser(uid, wName),
      'Nguồn tiền / Ví': wName,
      'Thời gian': normDate,
      'Kỳ hạch toán': t.periodMonth || pm.period,
      'Trạng thái': t.status || 'Y',
      'Ngày cập nhật': t.updatedAt || ''
    };
  });
  const wsTx = XLSX.utils.json_to_sheet(txRows, { header: txHeaders });
  wsTx['!cols'] = [
    { wch: 6 },  // STT
    { wch: 20 }, // Mã GD
    { wch: 15 }, // Mã TK
    { wch: 20 }, // Chủ tài khoản
    { wch: 28 }, // Nội dung
    { wch: 24 }, // Ghi chú
    { wch: 14 }, // Phân loại
    { wch: 12 }, // Mã Loại
    { wch: 16 }, // Mã Danh mục
    { wch: 18 }, // Tên Danh mục
    { wch: 18 }, // Số tiền (VNĐ)
    { wch: 16 }, // Mã Ví
    { wch: 22 }, // Nguồn tiền / Ví
    { wch: 14 }, // Thời gian
    { wch: 14 }, // Kỳ hạch toán
    { wch: 10 }, // Trạng thái
    { wch: 20 }  // Ngày cập nhật
  ];
  XLSX.utils.book_append_sheet(wb, wsTx, 'Giao_Dich');

  // 2. Sheet: Vi_Nguon_Tien (Bảng PFM_WALLETS chuẩn — Số dư tự động đồng bộ từ Giao_Dich)
  const walletHeaders = [
    'Mã Ví',
    'Mã TK',
    'Chủ tài khoản',
    'Tên Ví',
    'Loại Ví',
    'Số Tài khoản / Mô tả',
    'Số dư đầu kỳ (VNĐ)',
    'Tổng thu (VNĐ)',
    'Tổng chi (VNĐ)',
    'Số dư (VNĐ)',
    'Trạng thái'
  ];
  const walletRows = (d.wallets || []).map(w => ({
    'Mã Ví': w.id,
    'Mã TK': w.userId || ownerId,
    'Chủ tài khoản': w.userName || ownerName,
    'Tên Ví': w.name,
    'Loại Ví': w.type,
    'Số Tài khoản / Mô tả': w.number,
    'Số dư đầu kỳ (VNĐ)': Number(w.initialBalance) || 0,
    'Tổng thu (VNĐ)': Number(w.incomeTotal) || 0,
    'Tổng chi (VNĐ)': Number(w.expenseTotal) || 0,
    'Số dư (VNĐ)': Number(w.balance) || 0,
    'Trạng thái': 'Y'
  }));
  const wsWallets = XLSX.utils.json_to_sheet(walletRows, { header: walletHeaders });
  wsWallets['!cols'] = [
    { wch: 16 },
    { wch: 14 },
    { wch: 20 },
    { wch: 22 },
    { wch: 15 },
    { wch: 20 },
    { wch: 18 },
    { wch: 16 },
    { wch: 16 },
    { wch: 18 },
    { wch: 10 }
  ];
  XLSX.utils.book_append_sheet(wb, wsWallets, 'Vi_Nguon_Tien');

  // 3. Sheet: Ngan_Sach_Danh_Muc (Bảng PFM_CATEGORIES & PFM_BUDGETS — kèm số Đã chi thực tế, Còn lại, %)
  const catHeaders = [
    'Mã Danh mục',
    'Tên Danh mục',
    'Mã TK',
    'Chủ tài khoản',
    'Nhóm',
    'Mã Nhóm',
    'Kỳ ngân sách',
    'Hạn mức tháng (VNĐ)',
    'Đã chi thực tế (VNĐ)',
    'Thu thực tế (VNĐ)',
    'Còn lại (VNĐ)',
    'Tỷ lệ sử dụng (%)',
    'Trạng thái ngân sách',
    'Màu sắc',
    'Màu nền',
    'Icon'
  ];
  const activeTxsForCats = getActiveUserTransactions(d);
  const catRows = (d.categories || []).map(c => {
    const isInc = Boolean(c.isIncome);
    const limitAmt = isInc ? 0 : (Number(c.limit) || 0);
    const spentAmt = isInc
      ? 0
      : activeTxsForCats
          .filter(t => t.type === 'EXPENSE' && t.categoryId === c.id)
          .reduce((s, t) => s + (Number(t.amount) || 0), 0);
    const incAmt = isInc
      ? activeTxsForCats
          .filter(t => t.type === 'INCOME' && t.categoryId === c.id)
          .reduce((s, t) => s + (Number(t.amount) || 0), 0)
      : 0;
    const remainingAmt = isInc ? 0 : (limitAmt - spentAmt);
    const usagePct = (!isInc && limitAmt > 0) ? Math.round((spentAmt / limitAmt) * 100) : 0;
    const budgetStatus = isInc
      ? 'Danh mục thu'
      : usagePct > 100
        ? 'Vượt ngân sách'
        : usagePct >= 80
          ? 'Cảnh báo (>=80%)'
          : 'Trong hạn mức';

    return {
      'Mã Danh mục': c.id,
      'Tên Danh mục': c.name,
      'Mã TK': ownerId,
      'Chủ tài khoản': ownerName,
      'Nhóm': isInc ? 'Thu nhập' : 'Chi tiêu',
      'Mã Nhóm': isInc ? 'INCOME' : 'EXPENSE',
      'Kỳ ngân sách': curPeriod,
      'Hạn mức tháng (VNĐ)': limitAmt,
      'Đã chi thực tế (VNĐ)': spentAmt,
      'Thu thực tế (VNĐ)': incAmt,
      'Còn lại (VNĐ)': remainingAmt,
      'Tỷ lệ sử dụng (%)': usagePct,
      'Trạng thái ngân sách': budgetStatus,
      'Màu sắc': c.color || '#F59E0B',
      'Màu nền': c.bg || '#FEF3C7',
      'Icon': c.icon || 'wallet'
    };
  });
  const wsCats = XLSX.utils.json_to_sheet(catRows, { header: catHeaders });
  wsCats['!cols'] = [
    { wch: 18 },
    { wch: 18 },
    { wch: 14 },
    { wch: 20 },
    { wch: 12 },
    { wch: 12 },
    { wch: 14 },
    { wch: 20 },
    { wch: 20 },
    { wch: 18 },
    { wch: 18 },
    { wch: 16 },
    { wch: 20 },
    { wch: 12 },
    { wch: 12 },
    { wch: 14 }
  ];
  XLSX.utils.book_append_sheet(wb, wsCats, 'Ngan_Sach_Danh_Muc');

  // 4. Sheet: Muc_Tieu_Tiet_Kiem (Bảng PFM_SAVINGS_GOALS — Đầy đủ Chủ đề, Nhóm, Tiến độ, Ngày cập nhật)
  const goalHeaders = [
    'Mã Mục tiêu',
    'Mã TK',
    'Chủ tài khoản',
    'Tên Mục tiêu',
    'Đã tích lũy (VNĐ)',
    'Mục tiêu cần đạt (VNĐ)',
    'Còn thiếu (VNĐ)',
    'Tiến độ (%)',
    'Trạng thái mục tiêu',
    'Chủ đề',
    'Nhóm mục tiêu',
    'Màu sắc',
    'Màu nền',
    'Icon',
    'Ngày cập nhật'
  ];
  const goalRows = (d.goals || []).map(g => {
    const cur = Number(g.current) || 0;
    const tgt = Number(g.target) || 0;
    const rem = Math.max(0, tgt - cur);
    const pct = tgt > 0 ? Math.min(100, Math.round((cur / tgt) * 100)) : 0;
    return {
      'Mã Mục tiêu': g.id,
      'Mã TK': g.userId || ownerId,
      'Chủ tài khoản': g.userName || ownerName,
      'Tên Mục tiêu': g.title,
      'Đã tích lũy (VNĐ)': cur,
      'Mục tiêu cần đạt (VNĐ)': tgt,
      'Còn thiếu (VNĐ)': rem,
      'Tiến độ (%)': pct,
      'Trạng thái mục tiêu': cur >= tgt && tgt > 0 ? 'COMPLETED' : 'ACTIVE',
      'Chủ đề': g.themeId || 'emerald',
      'Nhóm mục tiêu': g.themeLabel || 'Quỹ dự phòng',
      'Màu sắc': g.color || '#10B981',
      'Màu nền': g.bg || '#DCFCE7',
      'Icon': g.icon || 'shieldCheck',
      'Ngày cập nhật': g.updatedAt || ''
    };
  });
  const wsGoals = XLSX.utils.json_to_sheet(goalRows, { header: goalHeaders });
  wsGoals['!cols'] = [
    { wch: 16 },
    { wch: 14 },
    { wch: 20 },
    { wch: 26 },
    { wch: 20 },
    { wch: 22 },
    { wch: 18 },
    { wch: 14 },
    { wch: 18 },
    { wch: 12 },
    { wch: 18 },
    { wch: 12 },
    { wch: 12 },
    { wch: 14 },
    { wch: 20 }
  ];
  XLSX.utils.book_append_sheet(wb, wsGoals, 'Muc_Tieu_Tiet_Kiem');

  // 5. Sheet: Tai_Khoan (Bảng PFM_PROFILES & Phân quyền Admin / User + Modules chuẩn OAP)
  const userHeaders = [
    'STT',
    'Mã TK',
    'Tên ngắn',
    'Họ và tên',
    'Email',
    'Mật khẩu',
    'Mã Phân quyền',
    'Vai trò',
    'Modules được cấp',
    'Người cấp quyền',
    'Ngày cấp',
    'Avatar',
    'Đã đăng nhập',
    'Đang sử dụng',
    'Đăng nhập gần nhất',
    'Trạng thái'
  ];
  const wsRows = (d.workspaces || []).map((w, idx) => ({
    'STT': idx + 1,
    'Mã TK': w.id,
    'Tên ngắn': w.name,
    'Họ và tên': w.fullName || w.name,
    'Email': w.email,
    'Mật khẩu': w.password || DEFAULT_USER_PASSWORDS[w.id] || 'Desun@123',
    'Mã Phân quyền': w.roleCode === 'ADMIN' || w.id === 'personal' ? 'ADMIN' : 'USER',
    'Vai trò': w.roleCode === 'ADMIN' || w.id === 'personal' ? 'Quản trị viên (Admin)' : 'Thành viên cá nhân (User)',
    'Modules được cấp': Array.isArray(w.allowedModules) ? w.allowedModules.join(', ') : (w.roleCode === 'ADMIN' || w.id === 'personal' ? 'PFM, ADM' : 'PFM'),
    'Người cấp quyền': w.provisionedBy || 'Nguyễn Thanh Đức (Admin)',
    'Ngày cấp': w.createdAt || '10/10/2026',
    'Avatar': w.avatar || 'US',
    'Đã đăng nhập': w.hasLoggedIn ? 'TRUE' : 'FALSE',
    'Đang sử dụng': d.activeWorkspace === w.id ? 'TRUE' : 'FALSE',
    'Đăng nhập gần nhất': w.lastLoginAt || '',
    'Trạng thái': w.status === 'N' ? 'N' : 'Y'
  }));
  const wsUsers = XLSX.utils.json_to_sheet(wsRows, { header: userHeaders });
  wsUsers['!cols'] = [
    { wch: 6 },
    { wch: 16 },
    { wch: 16 },
    { wch: 22 },
    { wch: 26 },
    { wch: 16 },
    { wch: 15 },
    { wch: 24 },
    { wch: 30 },
    { wch: 24 },
    { wch: 14 },
    { wch: 10 },
    { wch: 14 },
    { wch: 14 },
    { wch: 20 },
    { wch: 10 }
  ];
  XLSX.utils.book_append_sheet(wb, wsUsers, 'Tai_Khoan');

  // 5B. Sheet: Vai_Tro (Bảng Danh mục Role chuẩn hệ thống: ADMIN / USER)
  const roleHeaders = [
    'STT',
    'Mã Vai trò',
    'Tên Vai trò',
    'Mô tả quyền hạn',
    'Toàn quyền hệ thống',
    'Module mặc định',
    'Màu Badge',
    'Trạng thái'
  ];
  const roleRows = [
    {
      'STT': 1,
      'Mã Vai trò': 'ADMIN',
      'Tên Vai trò': 'Quản trị viên (Admin)',
      'Mô tả quyền hạn': 'Toàn quyền cấp phát tài khoản, khóa/mở khóa và phân quyền truy cập các Module',
      'Toàn quyền hệ thống': 'TRUE',
      'Module mặc định': 'PFM, ADM',
      'Màu Badge': '#F97316',
      'Trạng thái': 'Y'
    },
    {
      'STT': 2,
      'Mã Vai trò': 'USER',
      'Tên Vai trò': 'Thành viên cá nhân (User)',
      'Mô tả quyền hạn': 'Sử dụng không gian tài chính cá nhân độc lập theo các Module được Admin cấp',
      'Toàn quyền hệ thống': 'FALSE',
      'Module mặc định': 'PFM',
      'Màu Badge': '#0284C7',
      'Trạng thái': 'Y'
    }
  ];
  const wsRoles = XLSX.utils.json_to_sheet(roleRows, { header: roleHeaders });
  wsRoles['!cols'] = [{ wch: 6 }, { wch: 14 }, { wch: 24 }, { wch: 60 }, { wch: 18 }, { wch: 18 }, { wch: 14 }, { wch: 10 }];
  XLSX.utils.book_append_sheet(wb, wsRoles, 'Vai_Tro');

  // 5C. Sheet: Phan_He_Module (Bảng Danh mục Phân hệ 3D Cube)
  const modHeaders = [
    'STT',
    'Mã Module',
    'Tên Module',
    'Nhãn đầy đủ',
    'Mô tả chức năng',
    'Chỉ dành cho Admin',
    'Mặc định khi tạo User',
    'Thứ tự',
    'Trạng thái'
  ];
  const modRows = SYSTEM_MODULES.map((m, i) => ({
    'STT': i + 1,
    'Mã Module': m.code,
    'Tên Module': m.name,
    'Nhãn đầy đủ': m.fullLabel,
    'Mô tả chức năng': m.desc || '',
    'Chỉ dành cho Admin': m.adminOnly ? 'TRUE' : 'FALSE',
    'Mặc định khi tạo User': m.code === 'PFM' ? 'TRUE' : 'FALSE',
    'Thứ tự': i + 1,
    'Trạng thái': 'Y'
  }));
  const wsMods = XLSX.utils.json_to_sheet(modRows, { header: modHeaders });
  wsMods['!cols'] = [{ wch: 6 }, { wch: 12 }, { wch: 22 }, { wch: 26 }, { wch: 64 }, { wch: 18 }, { wch: 20 }, { wch: 10 }, { wch: 10 }];
  XLSX.utils.book_append_sheet(wb, wsMods, 'Phan_He_Module');

  // 5D. Sheet: Phan_Quyen_Module (Bảng trung gian User – Module RBAC chuẩn 3NF)
  const pqHeaders = [
    'STT',
    'Mã PQ',
    'Mã TK',
    'Chủ tài khoản',
    'Email',
    'Mã Vai trò',
    'Mã Module',
    'Tên Module',
    'Quyền Truy cập',
    'Quyền Thêm',
    'Quyền Sửa',
    'Quyền Xóa',
    'Người cấp quyền',
    'Ngày cấp',
    'Trạng thái'
  ];
  const pqRows = [];
  (d.workspaces || []).forEach(w => {
    const rCode = w.roleCode === 'ADMIN' || w.id === 'personal' ? 'ADMIN' : 'USER';
    const uMods = Array.isArray(w.allowedModules) && w.allowedModules.length > 0
      ? w.allowedModules
      : (rCode === 'ADMIN' ? ['PFM', 'ADM'] : ['PFM']);
    uMods.forEach(mc => {
      const mInfo = SYSTEM_MODULES.find(x => x.code === mc) || { code: mc, name: mc };
      pqRows.push({
        'STT': pqRows.length + 1,
        'Mã PQ': `pq_${w.id}_${mc.toLowerCase()}`,
        'Mã TK': w.id,
        'Chủ tài khoản': w.fullName || w.name,
        'Email': w.email,
        'Mã Vai trò': rCode,
        'Mã Module': mInfo.code,
        'Tên Module': mInfo.name,
        'Quyền Truy cập': 'TRUE',
        'Quyền Thêm': 'TRUE',
        'Quyền Sửa': 'TRUE',
        'Quyền Xóa': 'TRUE',
        'Người cấp quyền': w.provisionedBy || 'Nguyễn Thanh Đức (Admin)',
        'Ngày cấp': w.createdAt || '10/10/2026',
        'Trạng thái': w.status === 'N' ? 'N' : 'Y'
      });
    });
  });
  const wsPq = XLSX.utils.json_to_sheet(pqRows, { header: pqHeaders });
  wsPq['!cols'] = [
    { wch: 6 }, { wch: 22 }, { wch: 16 }, { wch: 22 }, { wch: 24 },
    { wch: 12 }, { wch: 12 }, { wch: 20 }, { wch: 14 }, { wch: 12 },
    { wch: 12 }, { wch: 12 }, { wch: 24 }, { wch: 14 }, { wch: 10 }
  ];
  XLSX.utils.book_append_sheet(wb, wsPq, 'Phan_Quyen_Module');

  // 5E. Sheet: Nhat_Ky_Dang_Nhap (Lịch sử Phiên đăng nhập & Cấp phát tài khoản)
  const logHeaders = [
    'STT',
    'Mã Phiên',
    'Mã TK',
    'Chủ tài khoản',
    'Email',
    'Loại sự kiện',
    'Thiết bị / Trình duyệt',
    'Ghi nhớ phiên',
    'Thời gian thực hiện',
    'Ghi chú / Kết quả',
    'Trạng thái'
  ];
  const logRows = (d.workspaces || []).map((w, idx) => {
    const isAdm = w.roleCode === 'ADMIN' || w.id === 'personal';
    const hasLog = Boolean(w.hasLoggedIn && w.lastLoginAt);
    return {
      'STT': idx + 1,
      'Mã Phiên': `log_${w.id}`,
      'Mã TK': w.id,
      'Chủ tài khoản': w.fullName || w.name,
      'Email': w.email,
      'Loại sự kiện': hasLog ? 'LOGIN_SUCCESS' : 'PROVISION_ACCOUNT',
      'Thiết bị / Trình duyệt': hasLog ? 'Desktop Web (Windows)' : 'Admin Console (ADM)',
      'Ghi nhớ phiên': hasLog ? 'TRUE' : 'FALSE',
      'Thời gian thực hiện': w.lastLoginAt || `${w.createdAt || '10/10/2026'} 09:00:00`,
      'Ghi chú / Kết quả': hasLog
        ? `Đăng nhập thành công [${isAdm ? 'Quản trị viên (Admin)' : 'Thành viên (User)'}]`
        : `Được cấp bởi ${w.provisionedBy || 'Admin'} (Chưa đăng nhập lần đầu)`,
      'Trạng thái': w.status === 'N' ? 'N' : 'Y'
    };
  });
  const wsLogs = XLSX.utils.json_to_sheet(logRows, { header: logHeaders });
  wsLogs['!cols'] = [
    { wch: 6 }, { wch: 18 }, { wch: 16 }, { wch: 22 }, { wch: 24 },
    { wch: 18 }, { wch: 22 }, { wch: 14 }, { wch: 20 }, { wch: 46 }, { wch: 10 }
  ];
  XLSX.utils.book_append_sheet(wb, wsLogs, 'Nhat_Ky_Dang_Nhap');

  // 6. Sheet: Lich_Su_6_Thang (Tổng hợp Thu Chi 6 Tháng Thực Tế từ Giao_Dich)
  const histHeaders = [
    'Tháng',
    'Kỳ hạch toán',
    'Tổng thu (VNĐ)',
    'Tổng chi (VNĐ)',
    'Chênh lệch ròng (VNĐ)',
    'Thu nhập (Triệu VNĐ)',
    'Chi tiêu (Triệu VNĐ)'
  ];
  const histRows = (d.monthlyHistory || []).map(m => ({
    'Tháng': m.month,
    'Kỳ hạch toán': m.periodMonth || '',
    'Tổng thu (VNĐ)': Number(m.incomeVND) || 0,
    'Tổng chi (VNĐ)': Number(m.expenseVND) || 0,
    'Chênh lệch ròng (VNĐ)': Number(m.netVND) || 0,
    'Thu nhập (Triệu VNĐ)': Number(m.income) || 0,
    'Chi tiêu (Triệu VNĐ)': Number(m.expense) || 0
  }));
  const wsHist = XLSX.utils.json_to_sheet(histRows, { header: histHeaders });
  wsHist['!cols'] = [
    { wch: 14 },
    { wch: 14 },
    { wch: 18 },
    { wch: 18 },
    { wch: 20 },
    { wch: 20 },
    { wch: 20 }
  ];
  XLSX.utils.book_append_sheet(wb, wsHist, 'Lich_Su_6_Thang');

  // 7. Sheet: Lich_Su_Nap_Muc_Tieu (Bảng PFM_GOAL_DEPOSITS — Chi tiết các lần + Nạp tiền mục tiêu)
  const depHeaders = [
    'STT',
    'Mã Nạp',
    'Mã Mục tiêu',
    'Tên Mục tiêu',
    'Mã TK',
    'Chủ tài khoản',
    'Số tiền nạp (VNĐ)',
    'Tích lũy sau nạp (VNĐ)',
    'Thời gian nạp',
    'Trạng thái'
  ];
  const depRows = (d.goalDeposits || []).map((dep, idx) => ({
    'STT': idx + 1,
    'Mã Nạp': dep.id || `pgd_${idx + 1}`,
    'Mã Mục tiêu': dep.goalId || '',
    'Tên Mục tiêu': dep.goalTitle || '',
    'Mã TK': dep.userId || ownerId,
    'Chủ tài khoản': dep.userName || ownerName,
    'Số tiền nạp (VNĐ)': Number(dep.amount) || 0,
    'Tích lũy sau nạp (VNĐ)': Number(dep.afterBalance) || 0,
    'Thời gian nạp': dep.date || getDateTimeStringNow(),
    'Trạng thái': dep.status || 'Y'
  }));
  const wsDeps = XLSX.utils.json_to_sheet(depRows, { header: depHeaders });
  wsDeps['!cols'] = [
    { wch: 6 },
    { wch: 18 },
    { wch: 16 },
    { wch: 26 },
    { wch: 14 },
    { wch: 20 },
    { wch: 18 },
    { wch: 22 },
    { wch: 20 },
    { wch: 10 }
  ];
  XLSX.utils.book_append_sheet(wb, wsDeps, 'Lich_Su_Nap_Muc_Tieu');

  return wb;
}

function extractDataFromWorkbook(wb, baseData = state.data) {
  if (!wb || !wb.SheetNames || wb.SheetNames.length === 0) return null;
  const nextData = JSON.parse(JSON.stringify(baseData || INITIAL_DATA));

  // 1. Parse Workspaces / Users (Tai_Khoan) ĐẦU TIÊN để có đúng activeWorkspace & thông tin chủ tài khoản
  const userSheetName = wb.SheetNames.find(n => n === 'Tai_Khoan' || n.toLowerCase().includes('tai_khoan'));
  if (userSheetName) {
    const rows = XLSX.utils.sheet_to_json(wb.Sheets[userSheetName], { defval: '' });
    if (rows.length > 0) {
      let activeWsId = nextData.activeWorkspace;
      nextData.workspaces = rows.map((r, i) => {
        const id = String(r['Mã TK'] || r.id || `user_${i + 1}`).trim();
        const isActive = String(r['Đang sử dụng'] || '').toUpperCase() === 'TRUE';
        if (isActive) activeWsId = id;
        const rawRoleCode = String(r['Mã Phân quyền'] || r.roleCode || '').toUpperCase().trim();
        const rawRoleLabel = String(r['Vai trò'] || r.role || '').trim();
        const isAdminRole = id === 'personal' || rawRoleCode === 'ADMIN' || rawRoleLabel.toUpperCase().includes('ADMIN');
        const rCode = isAdminRole ? 'ADMIN' : 'USER';
        const fullNameVal = String(r['Họ và tên'] || r.fullName || r['Tên ngắn'] || 'User').trim();
        const rawModsStr = String(r['Modules được cấp'] || r.allowedModules || '').trim();
        const parsedMods = rawModsStr
          ? rawModsStr.split(/[,;|]+/).map(m => {
              const c = m.trim().toUpperCase();
              return c === 'FIN' ? 'PFM' : c;
            }).filter(c => c === 'PFM' || c === 'ADM')
          : (isAdminRole ? ['PFM', 'ADM'] : ['PFM']);
        return {
          id,
          name: String(r['Tên ngắn'] || r.name || fullNameVal).trim(),
          fullName: fullNameVal,
          email: String(r['Email'] || r.email || 'user@desun.vn').trim(),
          password: String(r['Mật khẩu'] || r.password || DEFAULT_USER_PASSWORDS[id] || 'Desun@123').trim(),
          roleCode: rCode,
          role: rCode === 'ADMIN' ? 'Quản trị viên (Admin)' : 'Thành viên cá nhân (User)',
          allowedModules: parsedMods,
          provisionedBy: String(r['Người cấp quyền'] || r.provisionedBy || (id === 'personal' ? 'Hệ thống (Root Admin)' : 'Nguyễn Thanh Đức (Admin)')).trim(),
          createdAt: String(r['Ngày cấp'] || r.createdAt || '10/10/2026').trim(),
          avatar: String(r['Avatar'] || r.avatar || computeAvatarInitials(fullNameVal)).trim(),
          hasLoggedIn: String(r['Đã đăng nhập'] || r.hasLoggedIn || 'TRUE').toUpperCase() !== 'FALSE',
          lastLoginAt: String(r['Đăng nhập gần nhất'] || r.lastLoginAt || '').trim(),
          status: String(r['Trạng thái'] || r.status || 'Y').toUpperCase().trim() === 'N' ? 'N' : 'Y'
        };
      });
      if (!state.isAuthenticated) {
        nextData.activeWorkspace = activeWsId;
      }
      const activeObj = nextData.workspaces.find(w => w.id === nextData.activeWorkspace) || nextData.workspaces[0];
      if (activeObj) {
        nextData.userName = activeObj.fullName || activeObj.name;
        nextData.userEmail = activeObj.email;
      }
    }
  }

  // 2. Parse Categories & Budgets (Ngan_Sach_Danh_Muc) trước khi đọc Giao_Dich
  const catSheetName = wb.SheetNames.find(n => n === 'Ngan_Sach_Danh_Muc' || n.toLowerCase().includes('danh_muc') || n.toLowerCase().includes('ngan_sach'));
  if (catSheetName) {
    const rows = XLSX.utils.sheet_to_json(wb.Sheets[catSheetName], { defval: '' });
    if (rows.length > 0) {
      nextData.categories = rows.map((r, i) => {
        const groupStr = String(r['Mã Nhóm'] || r['Nhóm'] || r['Loại'] || '').toLowerCase();
        const isInc = groupStr.includes('thu') || groupStr === 'income' || Boolean(r.isIncome);
        const limitVal = parseExcelNumber(r['Hạn mức tháng (VNĐ)'] ?? r['Hạn mức'] ?? r.limit, 0);
        return {
          id: String(r['Mã Danh mục'] || r.id || `cat_${i + 1}`).trim(),
          name: String(r['Tên Danh mục'] || r.name || `Danh mục ${i + 1}`).trim(),
          color: String(r['Màu sắc'] || r.color || (isInc ? '#10B981' : '#F59E0B')).trim(),
          bg: String(r['Màu nền'] || r['Nền'] || r.bg || (isInc ? '#D1FAE5' : '#FEF3C7')).trim(),
          icon: String(r['Icon'] || r.icon || 'wallet').trim(),
          ...(isInc ? { isIncome: true } : { limit: limitVal || 2000000 })
        };
      });
    }
  }

  // 3. Parse Wallets (Vi_Nguon_Tien)
  const walletSheetName = wb.SheetNames.find(n => n === 'Vi_Nguon_Tien' || n.toLowerCase().includes('vi_') || n.toLowerCase().includes('nguon_tien'));
  if (walletSheetName) {
    const rows = XLSX.utils.sheet_to_json(wb.Sheets[walletSheetName], { defval: '' });
    if (rows.length > 0) {
      nextData.wallets = rows.map((r, i) => ({
        id: String(r['Mã Ví'] || r.id || `w${i + 1}`).trim(),
        userId: String(r['Mã TK'] || r.userId || 'personal').trim(),
        userName: String(r['Chủ tài khoản'] || r.userName || 'Nguyễn Thanh Đức').trim(),
        name: String(r['Tên Ví'] || r.name || `Ví ${i + 1}`).trim(),
        type: String(r['Loại Ví'] || r.type || 'Ngân hàng').trim(),
        number: String(r['Số Tài khoản / Mô tả'] || r.number || '').trim(),
        initialBalance: parseExcelNumber(r['Số dư đầu kỳ (VNĐ)'] ?? r.initialBalance, 0),
        balance: parseExcelNumber(r['Số dư (VNĐ)'] ?? r['Số dư'] ?? r.balance, 0)
      }));
    }
  }

  // 4. Parse Transactions (Giao_Dich) — đọc đầy đủ tất cả các trường chuẩn OAP & tự động giữ danh mục tùy chỉnh (như Xăng)
  const txSheetName = wb.SheetNames.find(n => n === 'Giao_Dich' || n.toLowerCase().includes('giao_dich') || n.toLowerCase().includes('thu_chi')) || wb.SheetNames[0];
  if (txSheetName) {
    const rows = XLSX.utils.sheet_to_json(wb.Sheets[txSheetName], { defval: '' });
    nextData.transactions = rows.map((r, i) => {
      const rawType = String(r['Mã Loại'] || r['Phân loại'] || r.type || '').toUpperCase().trim();
      const isInc = rawType === 'INCOME' || rawType.includes('THU') || rawType === '+';
      const catNameInput = String(r['Tên Danh mục'] || r['Danh mục'] || r.categoryName || '').trim();
      const catIdInput = String(r['Mã Danh mục'] || r.categoryId || '').trim();
      let matchedCat =
        nextData.categories.find(c => c.id === catIdInput) ||
        (catNameInput ? nextData.categories.find(c => c.name.toLowerCase() === catNameInput.toLowerCase()) : null);

      if (!matchedCat && (catIdInput || catNameInput)) {
        const q = (catNameInput || catIdInput).toLowerCase();
        const isFuel = q.includes('xăng') || q.includes('xang') || q.includes('fuel');
        const autoCat = {
          id: catIdInput || ('cat_' + q.replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '')),
          name: catNameInput || catIdInput,
          color: isFuel ? '#EA580C' : (isInc ? '#10B981' : '#F59E0B'),
          bg: isFuel ? '#FFEDD5' : (isInc ? '#D1FAE5' : '#FEF3C7'),
          icon: isFuel ? 'fuel' : (isInc ? 'wallet' : 'receipt'),
          ...(isInc ? { isIncome: true } : { limit: 2000000 })
        };
        nextData.categories.push(autoCat);
        matchedCat = autoCat;
      }
      if (!matchedCat) {
        matchedCat = nextData.categories.find(c => Boolean(c.isIncome) === isInc) || nextData.categories[0];
      }

      const uid = String(r['Mã TK'] || r.userId || nextData.activeWorkspace || 'personal').trim();
      const walletName = String(r['Nguồn tiền / Ví'] || r['Ví'] || r.wallet || 'Techcombank Chính').trim();
      const normDate = normalizeDateString(r['Thời gian'] || r['Ngày'] || r.date);
      const pm = extractPeriodMonth(normDate);
      const titleStr = String(r['Nội dung'] || r['Khoản mục'] || r.title || matchedCat.name).trim();
      const noteStr = String(r['Ghi chú'] !== undefined && r['Ghi chú'] !== '' ? r['Ghi chú'] : titleStr).trim();

      return {
        id: String(r['Mã GD'] || r.id || `tx_${Date.now()}_${i}`).trim(),
        userId: uid,
        userName: String(r['Chủ tài khoản'] || r.userName || nextData.userName || 'Nguyễn Thanh Đức').trim(),
        title: titleStr,
        note: noteStr,
        categoryId: matchedCat.id,
        categoryName: catNameInput || matchedCat.name,
        date: normDate,
        periodMonth: String(r['Kỳ hạch toán'] || r.periodMonth || pm.period).trim(),
        amount: Math.abs(parseExcelNumber(r['Số tiền (VNĐ)'] ?? r['Số tiền'] ?? r.amount, 0)),
        type: isInc ? 'INCOME' : 'EXPENSE',
        walletId: String(r['Mã Ví'] || r.walletId || resolveWalletIdForUser(uid, walletName)).trim(),
        wallet: walletName,
        status: String(r['Trạng thái'] || r.status || 'Y').trim(),
        updatedAt: String(r['Ngày cập nhật'] || r.updatedAt || '').trim()
      };
    }).filter(t => t.amount > 0 || t.title);
  }

  // 5. Parse Goals (Muc_Tieu_Tiet_Kiem)
  const goalSheetName = wb.SheetNames.find(n => n === 'Muc_Tieu_Tiet_Kiem' || n.toLowerCase().includes('muc_tieu'));
  if (goalSheetName) {
    const rows = XLSX.utils.sheet_to_json(wb.Sheets[goalSheetName], { defval: '' });
    nextData.goals = rows.map((r, i) => ({
      id: String(r['Mã Mục tiêu'] || r.id || `g${i + 1}`).trim(),
      userId: String(r['Mã TK'] || r.userId || 'personal').trim(),
      userName: String(r['Chủ tài khoản'] || r.userName || 'Nguyễn Thanh Đức').trim(),
      title: String(r['Tên Mục tiêu'] || r.title || '').trim(),
      current: parseExcelNumber(r['Đã tích lũy (VNĐ)'] ?? r.current, 0),
      target: Math.max(1000, parseExcelNumber(r['Mục tiêu cần đạt (VNĐ)'] ?? r.target, 10000000)),
      themeId: String(r['Chủ đề'] || r.themeId || '').trim(),
      themeLabel: String(r['Nhóm mục tiêu'] || r.themeLabel || '').trim(),
      color: String(r['Màu sắc'] || r.color || '#0EA5E9').trim(),
      bg: String(r['Màu nền'] || r.bg || '#E0F2FE').trim(),
      icon: String(r['Icon'] || r.icon || 'shieldCheck').trim(),
      updatedAt: String(r['Ngày cập nhật'] || r.updatedAt || '').trim()
    })).filter(g => g.title);
  }

  // 6. Parse Goal Deposits (Lich_Su_Nap_Muc_Tieu)
  const depSheetName = wb.SheetNames.find(n => n === 'Lich_Su_Nap_Muc_Tieu' || n.toLowerCase().includes('nap_muc_tieu'));
  if (depSheetName) {
    const rows = XLSX.utils.sheet_to_json(wb.Sheets[depSheetName], { defval: '' });
    nextData.goalDeposits = rows.map((r, i) => ({
      id: String(r['Mã Nạp'] || r.id || `pgd_${i + 1}`).trim(),
      goalId: String(r['Mã Mục tiêu'] || r.goalId || '').trim(),
      goalTitle: String(r['Tên Mục tiêu'] || r.goalTitle || '').trim(),
      userId: String(r['Mã TK'] || r.userId || 'personal').trim(),
      userName: String(r['Chủ tài khoản'] || r.userName || 'Nguyễn Thanh Đức').trim(),
      amount: parseExcelNumber(r['Số tiền nạp (VNĐ)'] ?? r.amount, 0),
      afterBalance: parseExcelNumber(r['Tích lũy sau nạp (VNĐ)'] ?? r.afterBalance, 0),
      date: String(r['Thời gian nạp'] || r.date || '').trim(),
      status: String(r['Trạng thái'] || r.status || 'Y').trim()
    })).filter(d => d.amount > 0);
  }

  return nextData;
}

// Hợp nhất thông minh (Non-destructive Smart Merge):
// Giữ toàn bộ các thay đổi trên giao diện hiện tại VÀ bổ sung mọi giao dịch / danh mục / mục tiêu đang có trong file Excel (trừ những mục user đã chủ động bấm Xóa)
function mergeWorkbookDataIntoCurrentState(wb) {
  const diskData = extractDataFromWorkbook(wb, state.data);
  if (!diskData) return false;

  const delUserSet = new Set(state.data.deletedUserIds || []);
  const delCatSet = new Set(state.data.deletedCatIds || []);
  const delTxSet = new Set(state.data.deletedTxIds || []);
  const delGoalSet = new Set(state.data.deletedGoalIds || []);

  // 1. Merge Workspaces
  const curWsIds = new Set((state.data.workspaces || []).map(w => w.id));
  (diskData.workspaces || []).forEach(dw => {
    if (dw && dw.id && !curWsIds.has(dw.id) && !delUserSet.has(dw.id)) {
      state.data.workspaces.push(dw);
      curWsIds.add(dw.id);
    }
  });

  // 2. Merge Categories
  const curCatIds = new Set((state.data.categories || []).map(c => c.id));
  const curCatNames = new Set((state.data.categories || []).map(c => String(c.name || '').toLowerCase()));
  (diskData.categories || []).forEach(dc => {
    if (dc && dc.id && !curCatIds.has(dc.id) && !curCatNames.has(String(dc.name || '').toLowerCase()) && !delCatSet.has(dc.id)) {
      state.data.categories.push(dc);
      curCatIds.add(dc.id);
      curCatNames.add(String(dc.name || '').toLowerCase());
    }
  });

  // 3. Merge Transactions (giữ nguyên các giao dịch mới/sửa trên state.data, bổ sung các giao dịch có trong Excel mà chưa có trên state.data)
  const curTxIds = new Set((state.data.transactions || []).map(t => t.id));
  const diskTxsToAdd = [];
  (diskData.transactions || []).forEach(dt => {
    if (dt && dt.id && !curTxIds.has(dt.id) && !delTxSet.has(dt.id) && dt.status !== 'D') {
      diskTxsToAdd.push(dt);
      curTxIds.add(dt.id);
    }
  });
  if (diskTxsToAdd.length > 0) {
    state.data.transactions = [...(state.data.transactions || []), ...diskTxsToAdd];
  }

  // 4. Merge Goals
  const curGoalIds = new Set((state.data.goals || []).map(g => g.id));
  (diskData.goals || []).forEach(dg => {
    if (dg && dg.id && !curGoalIds.has(dg.id) && !delGoalSet.has(dg.id)) {
      state.data.goals.push(dg);
      curGoalIds.add(dg.id);
    }
  });

  // 5. Merge Goal Deposits
  const curDepIds = new Set((state.data.goalDeposits || []).map(d => d.id));
  (diskData.goalDeposits || []).forEach(dd => {
    if (dd && dd.id && !curDepIds.has(dd.id)) {
      state.data.goalDeposits.push(dd);
      curDepIds.add(dd.id);
    }
  });

  state.data.realtimeSyncV4Initialized = true;
  state.data.realtimeSyncV8Initialized = true;
  recalculateDerivedData(state.data);
  persistDataToLocalStorage();
  return true;
}

function parseWorkbookToState(wb) {
  const nextData = extractDataFromWorkbook(wb, state.data);
  if (!nextData) return false;

  const delTxSet = new Set(state.data.deletedTxIds || []);
  const delCatSet = new Set(state.data.deletedCatIds || []);
  const delGoalSet = new Set(state.data.deletedGoalIds || []);
  const delUserSet = new Set(state.data.deletedUserIds || []);

  nextData.deletedTxIds = Array.from(delTxSet);
  nextData.deletedCatIds = Array.from(delCatSet);
  nextData.deletedGoalIds = Array.from(delGoalSet);
  nextData.deletedUserIds = Array.from(delUserSet);

  // Lọc bỏ các bản ghi mà người dùng đã chủ động xóa trong phiên
  nextData.transactions = (nextData.transactions || []).filter(t => !delTxSet.has(t.id));
  nextData.categories = (nextData.categories || []).filter(c => !delCatSet.has(c.id));
  nextData.goals = (nextData.goals || []).filter(g => !delGoalSet.has(g.id));
  nextData.workspaces = (nextData.workspaces || []).filter(w => !delUserSet.has(w.id));

  // Nếu trong bộ nhớ trình duyệt đang có thay đổi CRUD chưa kịp ghi xuống Excel, giữ lại đầy đủ để không mất dữ liệu vừa nhập
  if (state.data && state.data.hasUnsyncedCrud) {
    const fileCatIds = new Set(nextData.categories.map(c => c.id));
    (state.data.categories || []).forEach(c => {
      if (c && c.id && !fileCatIds.has(c.id) && !delCatSet.has(c.id)) {
        nextData.categories.push(c);
        fileCatIds.add(c.id);
      }
    });

    const fileTxIds = new Set(nextData.transactions.map(t => t.id));
    const localNewTxs = (state.data.transactions || []).filter(t => t && t.id && !fileTxIds.has(t.id) && !delTxSet.has(t.id));
    if (localNewTxs.length > 0) {
      nextData.transactions = [...localNewTxs, ...nextData.transactions];
    }
  }

  nextData.realtimeSyncV4Initialized = true;
  nextData.realtimeSyncV8Initialized = true;
  nextData.hasUnsyncedCrud = Boolean(state.data && state.data.hasUnsyncedCrud);

  // Tự động đồng bộ chuẩn lại Số dư Ví và Lịch sử 6 tháng từ danh sách Giao_Dich thực tế
  recalculateDerivedData(nextData);

  state.data = nextData;
  persistDataToLocalStorage();
  return true;
}

async function readFromFileHandle(handle, silent = false, mergeCurrentCustomTx = true) {
  try {
    const delTxSet = new Set(state.data.deletedTxIds || []);
    const existingCustomTxs = mergeCurrentCustomTx
      ? (state.data.transactions || []).filter(t => t && t.id && !delTxSet.has(t.id))
      : [];
    const existingCustomCats = mergeCurrentCustomTx
      ? (state.data.categories || [])
      : [];

    const file = await handle.getFile();
    state.excel.lastFileMtimeMs = file.lastModified || Date.now();
    const arrayBuffer = await file.arrayBuffer();
    const wb = XLSX.read(arrayBuffer, { type: 'array' });
    const ok = parseWorkbookToState(wb);
    if (ok) {
      if (existingCustomCats.length > 0) {
        const fileCatIds = new Set((state.data.categories || []).map(c => c.id));
        existingCustomCats.forEach(c => {
          if (c && c.id && !fileCatIds.has(c.id)) {
            state.data.categories.push(c);
            fileCatIds.add(c.id);
          }
        });
      }
      if (existingCustomTxs.length > 0) {
        const fileTxIds = new Set((state.data.transactions || []).map(t => t.id));
        const newTxsToKeep = existingCustomTxs.filter(t => !fileTxIds.has(t.id));
        if (newTxsToKeep.length > 0) {
          state.data.transactions = [...newTxsToKeep, ...(state.data.transactions || [])];
        }
      }
      recalculateDerivedData(state.data);
      persistDataToLocalStorage();

      state.excel.fileHandle = handle;
      state.excel.fileName = file.name;
      state.excel.isLinked = true;
      state.excel.needsPermission = false;
      state.excel.hasMergedDiskInSession = true;
      state.excel.lastSavedAt = getTimeStringNow();
      // Tự động ghi chuẩn hóa lại cấu trúc Sheet & số liệu đồng bộ xuống file vừa liên kết
      await window.saveToLinkedExcelFile(true, false);
      renderApp();
      if (!silent) {
        showToast(`✅ Đã đồng bộ & lưu chuẩn vào "${file.name}" (${state.data.transactions.length} khoản thu chi)`);
      }
    }
  } catch (err) {
    if (!silent) showToast('Không thể đọc file Excel: ' + (err.message || err));
  }
}

window.saveToLinkedExcelFile = async function(silent = false, fromUserGesture = false) {
  if (state.excel.isWriting) return;
  state.excel.isWriting = true;
  try {
    // QUAN TRỌNG: Xin quyền FileHandle NGAY ĐẦU HÀM khi còn hiệu lực User Gesture (khi bấm Đăng nhập / Lưu CRUD / Lưu Excel)
    let manualPerm = 'prompt';
    if ((!silent || fromUserGesture) && !state.excel.bridgeOnline) {
      if (state.excel.fileHandle && typeof state.excel.fileHandle.queryPermission === 'function') {
        try {
          manualPerm = await state.excel.fileHandle.queryPermission({ mode: 'readwrite' });
          if (manualPerm !== 'granted' && typeof state.excel.fileHandle.requestPermission === 'function') {
            manualPerm = await state.excel.fileHandle.requestPermission({ mode: 'readwrite' });
          }
        } catch (e) {
          manualPerm = 'denied';
        }
      } else if (!silent && !state.excel.fileHandle && typeof window.showSaveFilePicker === 'function') {
        try {
          const pickedHandle = await window.showSaveFilePicker({
            id: 'desun_excel_db',
            suggestedName: 'DeSun_DuLieu_ThuChi.xlsx',
            types: [
              {
                description: 'Microsoft Excel Workbook (.xlsx)',
                accept: {
                  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
                }
              }
            ]
          });
          if (pickedHandle) {
            state.excel.fileHandle = pickedHandle;
            state.excel.fileName = pickedHandle.name || 'DeSun_DuLieu_ThuChi.xlsx';
            manualPerm = 'granted';
            await storeExcelHandleToIDB(pickedHandle);
          }
        } catch (err) {
          if (err && err.name === 'AbortError') return;
        }
      }
    }

    // BẢO VỆ DỮ LIỆU TUYỆT ĐỐI TRƯỚC KHI GHI:
    // Nếu trong phiên làm việc hiện tại chưa đọc/hợp nhất dữ liệu sẵn có từ file Excel trên ổ đĩa,
    // tự động đọc và gộp (Smart Merge) trước khi xuất Workbook để KHÔNG BAO GIỜ ghi đè làm mất các giao dịch cũ!
    if (state.excel.fileHandle && !state.excel.hasMergedDiskInSession && window.XLSX) {
      try {
        const existingFile = await state.excel.fileHandle.getFile();
        if (existingFile && existingFile.size > 0) {
          const ab = await existingFile.arrayBuffer();
          const diskWb = XLSX.read(ab, { type: 'array' });
          mergeWorkbookDataIntoCurrentState(diskWb);
          state.excel.hasMergedDiskInSession = true;
        }
      } catch (e) {}
    } else if (state.excel.bridgeOnline && !state.excel.hasMergedBridgeInSession && window.XLSX) {
      try {
        const pullRes = await fetchLocalBridge(`/api/excel-sync?t=${Date.now()}`, { method: 'GET', cache: 'no-store' }, 2000);
        if (pullRes.ok) {
          const ab = await pullRes.arrayBuffer();
          const diskWb = XLSX.read(ab, { type: 'array' });
          mergeWorkbookDataIntoCurrentState(diskWb);
          state.excel.hasMergedBridgeInSession = true;
        }
      } catch (e) {}
    }

    const wb = buildWorkbookFromState();
    if (!wb) return;
    const wbOut = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    // 1. Ưu tiên số 1 (REAL-TIME 0-CLICK): Đồng bộ trực tiếp qua Local Excel Bridge xuống DeSun_DuLieu_ThuChi.xlsx
    const bridged = await syncWorkbookToLocalBridge(wbOut, silent);
    if (bridged && !state.excel.fileHandle) {
      if (!silent) {
        showToast(`✅ Đã đồng bộ real-time (${state.data.transactions.length} giao dịch) vào DeSun_DuLieu_ThuChi.xlsx!`);
      }
      return;
    }

    // 2. Ghi trực tiếp qua FileHandle (File System Access API) nếu đã có quyền readwrite
    if (state.excel.fileHandle) {
      let perm = manualPerm;
      try {
        if (perm !== 'granted' && typeof state.excel.fileHandle.queryPermission === 'function') {
          perm = await state.excel.fileHandle.queryPermission({ mode: 'readwrite' });
        }
        if (perm === 'granted') {
          const wasLocked = Boolean(state.excel.fileLockedByExcel);
          const writable = await state.excel.fileHandle.createWritable();
          await writable.write(new Blob([wbOut], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
          await writable.close();

          try {
            const updatedFile = await state.excel.fileHandle.getFile();
            state.excel.lastFileMtimeMs = updatedFile.lastModified || Date.now();
          } catch (e) {
            state.excel.lastFileMtimeMs = Date.now();
          }

          state.data.hasUnsyncedCrud = false;
          persistDataToLocalStorage();
          state.excel.isLinked = true;
          state.excel.needsPermission = false;
          state.excel.fileLockedByExcel = false;
          state.excel.hasMergedDiskInSession = true;
          state.excel.lastSavedAt = getTimeStringNow();
          const badgeEl = document.getElementById('excel-sync-timestamp');
          if (badgeEl) badgeEl.textContent = `Excel: ${state.excel.lastSavedAt}`;
          renderApp();
          if (!silent || wasLocked) {
            showToast(`✅ Đã lưu chuẩn (${state.data.transactions.length} giao dịch) vào "${state.excel.fileName}"!`);
          }
          return;
        }
      } catch (err) {
        if (bridged) return;
        // Nếu quyền đã được cấp ('granted') nhưng createWritable/close báo lỗi -> Do file đang mở trên Microsoft Excel nên bị khóa ghi!
        if (perm === 'granted') {
          state.excel.isLinked = true;
          state.excel.needsPermission = false;
          state.excel.fileLockedByExcel = true;
          state.data.hasUnsyncedCrud = true;
          persistDataToLocalStorage();
          renderApp();
          if (!silent || fromUserGesture) {
            showToast(`⚠️ File "${state.excel.fileName}" đang mở trên Microsoft Excel nên tạm khóa ghi! Hãy đóng cửa sổ Excel để hệ thống tự động lưu ngay.`);
          }
          return;
        }
        state.excel.needsPermission = true;
        renderApp();
        return;
      }
    }

    if (!bridged) {
      state.excel.isLinked = false;
      state.excel.needsPermission = true;
      renderApp();
    }
  } finally {
    state.excel.isWriting = false;
  }
};

window.syncToExcelDatabaseNow = async function() {
  await window.saveToLinkedExcelFile(false, true);
};

// Vòng lặp Real-Time 2 chiều (Mỗi 2 giây):
// 1. Tự động đẩy ngay mọi thay đổi CRUD chưa lưu xuống DeSun_DuLieu_ThuChi.xlsx
// 2. Tự động phát hiện khi file DeSun_DuLieu_ThuChi.xlsx được sửa bên ngoài và nạp lại lên giao diện
setInterval(async () => {
  if (!window.XLSX || state.excel.isWriting) return;

  // Kiểm tra qua Local Excel Bridge trước
  try {
    const res = await fetchLocalBridge('/api/excel-status', { cache: 'no-store' }, 650);
    if (res.ok) {
      const st = await res.json();
      const wasOffline = !state.excel.bridgeOnline;
      state.excel.bridgeOnline = true;
      state.excel.isLinked = true;
      state.excel.needsPermission = false;

      if (state.data.hasUnsyncedCrud) {
        if (!state.excel.hasMergedBridgeInSession) {
          try {
            const pullRes = await fetchLocalBridge(`/api/excel-sync?t=${Date.now()}`, { method: 'GET', cache: 'no-store' }, 2000);
            if (pullRes.ok) {
              const ab = await pullRes.arrayBuffer();
              const diskWb = XLSX.read(ab, { type: 'array' });
              mergeWorkbookDataIntoCurrentState(diskWb);
              state.excel.hasMergedBridgeInSession = true;
            }
          } catch (e) {}
        }
        const wb = buildWorkbookFromState();
        if (wb) {
          const wbOut = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
          await syncWorkbookToLocalBridge(wbOut, true);
        }
        return;
      }

      if (wasOffline) {
        await pullWorkbookFromLocalBridge(true);
        return;
      }

      if (st && st.mtimeMs && state.excel.lastSyncedMtimeMs && st.mtimeMs > state.excel.lastSyncedMtimeMs + 500 && !st.pendingWrite) {
        await pullWorkbookFromLocalBridge(true);
      }
      return;
    }
  } catch (e) {
    state.excel.bridgeOnline = false;
  }

  // Nếu không dùng Bridge mà dùng FileHandle trực tiếp trên trình duyệt
  if (state.excel.fileHandle && typeof state.excel.fileHandle.queryPermission === 'function') {
    try {
      const perm = await state.excel.fileHandle.queryPermission({ mode: 'readwrite' });
      if (perm === 'granted') {
        if (state.data.hasUnsyncedCrud) {
          await window.saveToLinkedExcelFile(true, false);
          return;
        }
        const f = await state.excel.fileHandle.getFile();
        if (f && f.lastModified && state.excel.lastFileMtimeMs && f.lastModified > state.excel.lastFileMtimeMs + 500) {
          await readFromFileHandle(state.excel.fileHandle, true, true);
        }
      }
    } catch (e) {}
  }
}, 2000);

window.connectExcelFile = async function() {
  if (typeof window.showOpenFilePicker === 'function') {
    try {
      const [handle] = await window.showOpenFilePicker({
        multiple: false,
        types: [
          {
            description: 'Microsoft Excel Workbook (.xlsx)',
            accept: {
              'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
              'application/vnd.ms-excel': ['.xls']
            }
          }
        ]
      });
      if (!handle) return;
      if (typeof handle.requestPermission === 'function') {
        await handle.requestPermission({ mode: 'readwrite' });
      }
      await storeExcelHandleToIDB(handle);
      await readFromFileHandle(handle, false, true);
    } catch (err) {
      if (err && err.name !== 'AbortError') {
        showToast('Không thể kết nối file Excel: ' + (err.message || err));
      }
    }
  } else {
    window.triggerExcelImport();
  }
};

window.createNewExcelFile = async function() {
  if (typeof window.showSaveFilePicker === 'function') {
    try {
      const handle = await window.showSaveFilePicker({
        id: 'desun_excel_db',
        suggestedName: 'DeSun_DuLieu_ThuChi.xlsx',
        types: [
          {
            description: 'Microsoft Excel Workbook (.xlsx)',
            accept: {
              'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
            }
          }
        ]
      });
      if (!handle) return;
      state.excel.fileHandle = handle;
      state.excel.fileName = handle.name || 'DeSun_DuLieu_ThuChi.xlsx';
      state.excel.isLinked = true;
      state.excel.needsPermission = false;
      state.excel.hasMergedDiskInSession = false;
      await storeExcelHandleToIDB(handle);
      await window.saveToLinkedExcelFile(false, true);
      renderApp();
      return;
    } catch (err) {
      if (err && err.name === 'AbortError') return;
    }
  }

  // Fallback for browsers without showSaveFilePicker
  window.exportExcelDownload();
};

window.reconnectSavedExcelHandle = async function() {
  const handle = state.excel.fileHandle;
  if (!handle) {
    window.createNewExcelFile();
    return;
  }
  try {
    if (typeof handle.requestPermission === 'function') {
      const perm = await handle.requestPermission({ mode: 'readwrite' });
      if (perm === 'granted') {
        state.excel.isLinked = true;
        state.excel.needsPermission = false;
        await window.saveToLinkedExcelFile(false, true);
        return;
      }
    }
    window.createNewExcelFile();
  } catch (e) {
    window.createNewExcelFile();
  }
};

window.reloadFromLinkedExcelFile = async function() {
  if (!state.excel.fileHandle) {
    window.connectExcelFile();
    return;
  }
  await readFromFileHandle(state.excel.fileHandle, false);
};

window.disconnectExcelFile = async function() {
  state.excel.fileHandle = null;
  state.excel.fileName = null;
  state.excel.isLinked = false;
  state.excel.needsPermission = false;
  state.excel.lastSavedAt = null;
  await clearExcelHandleFromIDB();
  renderApp();
  showToast('Đã ngắt liên kết file Excel tự động');
};

window.exportExcelDownload = function() {
  const wb = buildWorkbookFromState();
  if (!wb) return;
  const fileName = state.excel.fileName || 'DeSun_DuLieu_ThuChi.xlsx';
  XLSX.writeFile(wb, fileName);
  showToast(`Đã xuất file Excel "${fileName}" thành công!`);
};

window.triggerExcelImport = function() {
  const input = document.getElementById('excel-file-input');
  if (input) {
    input.value = '';
    input.click();
  }
};

window.handleExcelUploadInput = function(event) {
  const file = event && event.target && event.target.files && event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = new Uint8Array(e.target.result);
      const wb = XLSX.read(data, { type: 'array' });
      const ok = parseWorkbookToState(wb);
      if (ok) {
        state.excel.fileName = file.name;
        state.excel.lastSavedAt = getTimeStringNow();
        renderApp();
        showToast(`Đã nhập dữ liệu từ "${file.name}" (${state.data.transactions.length} giao dịch)`);
      }
    } catch (err) {
      showToast('File Excel không hợp lệ: ' + (err.message || err));
    }
  };
  reader.readAsArrayBuffer(file);
};

function getLoggedInWorkspaces() {
  const list = state.data.workspaces.filter(w => w.hasLoggedIn);
  return list.length > 0 ? list : [state.data.workspaces[0]];
}

function formatVND(n) {
  return new Intl.NumberFormat('vi-VN').format(Math.round(Number(n) || 0)) + ' ₫';
}

function getCategory(id) {
  return state.data.categories.find(c => c.id === id) || state.data.categories[0];
}

function showToast(msg) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const el = document.createElement('div');
  el.className = 'px-4 py-3 rounded-2xl bg-[#1B365D] text-white text-xs font-semibold shadow-xl flex items-center gap-2.5 animate-fade';
  el.innerHTML = `<span class="w-2 h-2 rounded-full bg-[#F97316]"></span><span>${msg}</span>`;
  container.appendChild(el);
  setTimeout(() => el.remove(), 2800);
}

// ============================================================================
// Calculations & Smart Date-Month-Year Analytics Engine
// ============================================================================
function parseTxDateObj(dateStr) {
  const now = new Date();
  let d = now.getDate();
  let m = now.getMonth() + 1;
  let y = now.getFullYear();

  if (dateStr && !String(dateStr).toLowerCase().includes('hôm nay')) {
    const s = String(dateStr).trim();
    const dmy = s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
    if (dmy) {
      d = Math.min(31, Math.max(1, parseInt(dmy[1], 10)));
      m = Math.min(12, Math.max(1, parseInt(dmy[2], 10)));
      y = parseInt(dmy[3], 10);
    } else {
      const ymd = s.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/);
      if (ymd) {
        y = parseInt(ymd[1], 10);
        m = Math.min(12, Math.max(1, parseInt(ymd[2], 10)));
        d = Math.min(31, Math.max(1, parseInt(ymd[3], 10)));
      }
    }
  }
  const dd = String(d).padStart(2, '0');
  const mm = String(m).padStart(2, '0');
  const yyyy = String(y);
  return {
    day: d,
    month: m,
    year: y,
    dd,
    mm,
    yyyy,
    display: `${dd}/${mm}/${yyyy}`,
    iso: `${yyyy}-${mm}-${dd}`,
    periodMonth: `${yyyy}-${mm}`
  };
}

function getDashboardFilteredTransactions() {
  const df = state.dashboardFilter || {};
  const allTxs = getActiveUserTransactions();
  return allTxs.filter(t => {
    const dt = parseTxDateObj(t.date);
    if (df.exactDate) {
      if (dt.iso !== df.exactDate) return false;
    } else {
      if (df.day && dt.dd !== String(df.day).padStart(2, '0')) return false;
      if (df.month && dt.mm !== String(df.month).padStart(2, '0')) return false;
      if (df.year && dt.yyyy !== String(df.year)) return false;
    }
    if (df.keyword && df.keyword.trim()) {
      const q = df.keyword.trim().toLowerCase();
      const matchTitle = String(t.title || '').toLowerCase().includes(q);
      const matchCat = String(t.categoryName || '').toLowerCase().includes(q);
      const matchWallet = String(t.wallet || '').toLowerCase().includes(q);
      const matchDate = dt.display.includes(q);
      if (!matchTitle && !matchCat && !matchWallet && !matchDate) return false;
    }
    return true;
  });
}

function getDashFilterSummaryLabel() {
  const df = state.dashboardFilter || {};
  if (df.exactDate) {
    const parts = df.exactDate.split('-');
    if (parts.length === 3) return `Ngày ${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  const segs = [];
  if (df.day) segs.push(`Ngày ${String(df.day).padStart(2, '0')}`);
  if (df.month) segs.push(`Tháng ${String(df.month).padStart(2, '0')}`);
  if (df.year) segs.push(`Năm ${df.year}`);
  if (segs.length === 0) return 'Tất cả thời gian';
  return segs.join(' • ');
}

function computeStats() {
  const allTxs = getActiveUserTransactions();
  const allIncome = allTxs.filter(t => t.type === 'INCOME').reduce((s, t) => s + t.amount, 0);
  const allExpense = allTxs.filter(t => t.type === 'EXPENSE').reduce((s, t) => s + t.amount, 0);
  const currentBalance = allIncome - allExpense;

  const txs = getDashboardFilteredTransactions();
  const incomeTxs = txs.filter(t => t.type === 'INCOME');
  const expenseTxs = txs.filter(t => t.type === 'EXPENSE');

  const totalIncome = incomeTxs.reduce((s, t) => s + t.amount, 0);
  const totalExpense = expenseTxs.reduce((s, t) => s + t.amount, 0);
  const periodNet = totalIncome - totalExpense;
  const savingsRate = totalIncome > 0 ? Math.max(0, Math.round(((totalIncome - totalExpense) / totalIncome) * 100)) : 0;

  const byCat = {};
  const byCatCount = {};
  expenseTxs.forEach(t => {
    byCat[t.categoryId] = (byCat[t.categoryId] || 0) + t.amount;
    byCatCount[t.categoryId] = (byCatCount[t.categoryId] || 0) + 1;
  });

  const byIncCat = {};
  const byIncCatCount = {};
  incomeTxs.forEach(t => {
    byIncCat[t.categoryId] = (byIncCat[t.categoryId] || 0) + t.amount;
    byIncCatCount[t.categoryId] = (byIncCatCount[t.categoryId] || 0) + 1;
  });

  const breakdown = state.data.categories
    .filter(c => !c.isIncome)
    .map(c => {
      const amt = byCat[c.id] || 0;
      const count = byCatCount[c.id] || 0;
      const pct = totalExpense > 0 ? Math.round((amt / totalExpense) * 100) : 0;
      return { ...c, amount: amt, count, pct };
    })
    .filter(c => c.amount > 0)
    .sort((a, b) => b.amount - a.amount);

  const incomeBreakdown = state.data.categories
    .filter(c => c.isIncome)
    .map(c => {
      const amt = byIncCat[c.id] || 0;
      const count = byIncCatCount[c.id] || 0;
      const pct = totalIncome > 0 ? Math.round((amt / totalIncome) * 100) : 0;
      return { ...c, amount: amt, count, pct };
    })
    .filter(c => c.amount > 0)
    .sort((a, b) => b.amount - a.amount);

  return {
    currentBalance,
    periodNet,
    totalIncome,
    totalExpense,
    incomeCount: incomeTxs.length,
    expenseCount: expenseTxs.length,
    txCount: txs.length,
    savingsRate,
    breakdown,
    incomeBreakdown,
    byCat,
    filteredTxs: txs,
    filterLabel: getDashFilterSummaryLabel()
  };
}

// Dashboard Interactive Filter Handlers
window.setDashFilterMode = function(mode) {
  const df = state.dashboardFilter;
  df.mode = mode;
  df.activeCatId = null;
  state.homeTxPage = 1;
  const now = new Date();
  const curDD = String(now.getDate()).padStart(2, '0');
  const curMM = String(now.getMonth() + 1).padStart(2, '0');
  const curYYYY = String(now.getFullYear());
  const userTxs = getActiveUserTransactions();

  if (mode === 'ALL') {
    df.day = '';
    df.month = '';
    df.year = '';
    df.exactDate = '';
    df.trendView = 'MONTH';
  } else if (mode === 'DAY') {
    const firstTx = userTxs[0];
    const refDt = firstTx ? parseTxDateObj(firstTx.date) : { dd: curDD, mm: curMM, yyyy: curYYYY };
    df.day = refDt.dd;
    df.month = refDt.mm;
    df.year = refDt.yyyy;
    df.exactDate = '';
    df.trendView = 'DAY';
  } else if (mode === 'MONTH') {
    const firstTx = userTxs[0];
    const refDt = firstTx ? parseTxDateObj(firstTx.date) : { mm: curMM, yyyy: curYYYY };
    df.day = '';
    df.month = refDt.mm;
    df.year = refDt.yyyy;
    df.exactDate = '';
    df.trendView = 'DAY';
  } else if (mode === 'YEAR') {
    const firstTx = userTxs[0];
    const refDt = firstTx ? parseTxDateObj(firstTx.date) : { yyyy: curYYYY };
    df.day = '';
    df.month = '';
    df.year = refDt.yyyy;
    df.exactDate = '';
    df.trendView = 'MONTH';
  }
  renderApp();
};

window.setDashDay = function(val) {
  state.dashboardFilter.day = val;
  state.dashboardFilter.exactDate = '';
  state.dashboardFilter.openSelect = null;
  state.dashboardFilter.selectQuery = '';
  state.dashboardFilter.mode = val ? 'DAY' : (state.dashboardFilter.month ? 'MONTH' : (state.dashboardFilter.year ? 'YEAR' : 'ALL'));
  if (val) state.dashboardFilter.trendView = 'DAY';
  state.homeTxPage = 1;
  renderApp();
};

window.setDashMonth = function(val) {
  state.dashboardFilter.month = val;
  state.dashboardFilter.exactDate = '';
  state.dashboardFilter.openSelect = null;
  state.dashboardFilter.selectQuery = '';
  state.dashboardFilter.mode = state.dashboardFilter.day ? 'DAY' : (val ? 'MONTH' : (state.dashboardFilter.year ? 'YEAR' : 'ALL'));
  if (val) state.dashboardFilter.trendView = 'DAY';
  state.homeTxPage = 1;
  renderApp();
};

window.setDashYear = function(val) {
  state.dashboardFilter.year = val;
  state.dashboardFilter.exactDate = '';
  state.dashboardFilter.openSelect = null;
  state.dashboardFilter.selectQuery = '';
  state.dashboardFilter.mode = state.dashboardFilter.day ? 'DAY' : (state.dashboardFilter.month ? 'MONTH' : (val ? 'YEAR' : 'ALL'));
  state.homeTxPage = 1;
  renderApp();
};

window.toggleCustomSelect = function(key, event) {
  if (event) event.stopPropagation();
  const df = state.dashboardFilter;
  if (df.openSelect === key) {
    df.openSelect = null;
    df.selectQuery = '';
    renderApp();
  } else {
    df.openSelect = key;
    df.selectQuery = '';
    renderApp();
    setTimeout(() => {
      const el = document.getElementById(`custom-select-search-${key}`);
      if (el) el.focus();
    }, 15);
  }
};

window.handleCustomSelectSearch = function(val, key) {
  state.dashboardFilter.selectQuery = val || '';
  const listContainer = document.getElementById(`custom-select-options-${key}`);
  if (listContainer) {
    listContainer.innerHTML = buildCustomSelectOptionsListHTML(key);
  }
};

window.handleCustomSelectKeydown = function(event, key) {
  if (event.key === 'Escape') {
    event.preventDefault();
    state.dashboardFilter.openSelect = null;
    state.dashboardFilter.selectQuery = '';
    renderApp();
    return;
  }
  if (event.key === 'Enter') {
    event.preventDefault();
    const listContainer = document.getElementById(`custom-select-options-${key}`);
    if (listContainer) {
      const firstBtn = listContainer.querySelector('button[data-select-val]');
      if (firstBtn) firstBtn.click();
    }
  }
};

function getCustomSelectItemsData(key) {
  const df = state.dashboardFilter || {};
  const allTxs = getActiveUserTransactions();

  if (key === 'DAY') {
    const dayCounts = {};
    allTxs.forEach(t => {
      const dt = parseTxDateObj(t.date);
      if ((!df.month || dt.mm === df.month) && (!df.year || dt.yyyy === df.year)) {
        dayCounts[dt.dd] = (dayCounts[dt.dd] || 0) + 1;
      }
    });
    const days = Array.from({ length: 31 }, (_, i) => {
      const dd = String(i + 1).padStart(2, '0');
      const count = dayCounts[dd] || 0;
      return {
        value: dd,
        label: `Ngày ${dd}`,
        searchText: `${dd} ngay ${dd} ${i + 1}`,
        count,
        selected: df.day === dd
      };
    });
    return {
      allOption: { value: '', label: 'Tất cả các ngày', count: allTxs.length, selected: !df.day },
      items: days,
      actionFn: 'setDashDay'
    };
  }

  if (key === 'MONTH') {
    const monthCounts = {};
    allTxs.forEach(t => {
      const dt = parseTxDateObj(t.date);
      if (!df.year || dt.yyyy === df.year) {
        monthCounts[dt.mm] = (monthCounts[dt.mm] || 0) + 1;
      }
    });
    const months = Array.from({ length: 12 }, (_, i) => {
      const mm = String(i + 1).padStart(2, '0');
      const count = monthCounts[mm] || 0;
      return {
        value: mm,
        label: `Tháng ${mm}`,
        searchText: `${mm} thang ${mm} ${i + 1}`,
        count,
        selected: df.month === mm
      };
    });
    return {
      allOption: { value: '', label: 'Tất cả các tháng', count: allTxs.length, selected: !df.month },
      items: months,
      actionFn: 'setDashMonth'
    };
  }

  if (key === 'YEAR') {
    const yearCounts = {};
    const yearsSet = new Set(['2024', '2025', '2026', '2027']);
    allTxs.forEach(t => {
      const dt = parseTxDateObj(t.date);
      yearsSet.add(dt.yyyy);
      yearCounts[dt.yyyy] = (yearCounts[dt.yyyy] || 0) + 1;
    });
    const years = Array.from(yearsSet).sort().map(y => ({
      value: y,
      label: `Năm ${y}`,
      searchText: `${y} nam ${y}`,
      count: yearCounts[y] || 0,
      selected: df.year === y
    }));
    return {
      allOption: { value: '', label: 'Tất cả các năm', count: allTxs.length, selected: !df.year },
      items: years,
      actionFn: 'setDashYear'
    };
  }

  if (key === 'TX_CAT') {
    const catCounts = {};
    allTxs.forEach(t => {
      catCounts[t.categoryId] = (catCounts[t.categoryId] || 0) + 1;
    });
    const cats = (state.data.categories || []).map(c => ({
      value: c.id,
      label: c.name,
      searchText: `${c.name.toLowerCase()} ${c.id}`,
      count: catCounts[c.id] || 0,
      color: c.color,
      selected: state.txCategoryFilter === c.id
    }));
    return {
      allOption: { value: 'ALL', label: 'Tất cả danh mục', count: allTxs.length, selected: state.txCategoryFilter === 'ALL' },
      items: cats,
      actionFn: 'setTxCategoryFilter'
    };
  }

  return { allOption: null, items: [], actionFn: '' };
}

function buildCustomSelectOptionsListHTML(key) {
  const q = String((state.dashboardFilter && state.dashboardFilter.selectQuery) || '').trim().toLowerCase();
  const { allOption, items, actionFn } = getCustomSelectItemsData(key);
  const filtered = q
    ? items.filter(it => it.label.toLowerCase().includes(q) || it.searchText.includes(q))
    : items;

  const showAllOpt = allOption && (!q || allOption.label.toLowerCase().includes(q) || 'tat ca'.includes(q));

  if (!showAllOpt && filtered.length === 0) {
    return `<div class="py-5 text-center text-[11px] font-semibold text-slate-400">Không tìm thấy kết quả "${q}"</div>`;
  }

  // Sort items with transactions first when not searching so active days/months stand out
  const sorted = (!q && key === 'DAY')
    ? [...filtered].sort((a, b) => (b.count > 0 ? 1 : 0) - (a.count > 0 ? 1 : 0) || a.value.localeCompare(b.value))
    : filtered;

  return `
    ${showAllOpt ? `
      <button
        type="button"
        data-select-val="${allOption.value}"
        onclick="${actionFn}('${allOption.value}')"
        class="desun-select-option ${allOption.selected ? 'selected' : ''} mb-0.5"
      >
        <span>${allOption.label}</span>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${allOption.selected ? 'bg-orange-200/70 text-[#EA580C]' : 'bg-slate-100 text-slate-500'}">
          ${allOption.count} GD
        </span>
      </button>
    ` : ''}
    ${sorted.map(it => `
      <button
        type="button"
        data-select-val="${it.value}"
        onclick="${actionFn}('${it.value}')"
        class="desun-select-option ${it.selected ? 'selected' : ''}"
      >
        <div class="flex items-center gap-2 truncate">
          ${it.color ? `<span class="w-2 h-2 rounded-full shrink-0" style="background:${it.color}"></span>` : `<span class="w-1.5 h-1.5 rounded-full shrink-0 ${it.count > 0 ? 'bg-[#10B981]' : 'bg-slate-200'}"></span>`}
          <span class="truncate">${it.label}</span>
        </div>
        <div class="flex items-center gap-1.5 shrink-0">
          ${it.count > 0 ? `
            <span class="text-[10px] font-extrabold font-num px-2 py-0.5 rounded-full ${it.selected ? 'bg-orange-200/80 text-[#EA580C]' : 'bg-emerald-50 text-[#10B981] border border-emerald-200/60'}">
              ${it.count} khoản
            </span>
          ` : `
            <span class="text-[10px] font-medium text-slate-300">0</span>
          `}
        </div>
      </button>
    `).join('')}
  `;
}

function renderCustomSearchableSelect({ key, prefixLabel, valueLabel, hasValue, searchPlaceholder, alignLeft = false }) {
  const df = state.dashboardFilter || {};
  const isOpen = df.openSelect === key;
  return `
    <div class="relative inline-block" onclick="event.stopPropagation()">
      <button
        type="button"
        onclick="toggleCustomSelect('${key}', event)"
        class="desun-select-trigger ${isOpen ? 'is-open' : ''} ${hasValue ? 'has-value' : ''}"
      >
        <span class="text-[11px] font-semibold text-slate-400">${prefixLabel}</span>
        <span class="font-extrabold">${valueLabel}</span>
        <svg class="w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#F97316]' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      ${isOpen ? `
        <div class="desun-select-popover ${alignLeft ? '!left-0 !right-auto !w-60' : ''}">
          <div class="desun-select-search-wrap">
            <span class="text-slate-400 shrink-0">${SVG.search}</span>
            <input
              id="custom-select-search-${key}"
              type="text"
              value="${df.selectQuery || ''}"
              oninput="handleCustomSelectSearch(this.value, '${key}')"
              onkeydown="handleCustomSelectKeydown(event, '${key}')"
              placeholder="${searchPlaceholder}"
              autocomplete="off"
              class="w-full bg-transparent text-xs font-bold text-[#1B365D] placeholder-slate-400 focus:outline-none"
            />
          </div>
          <div id="custom-select-options-${key}" class="max-h-52 overflow-y-auto space-y-0.5 pr-0.5">
            ${buildCustomSelectOptionsListHTML(key)}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

window.setDashExactDate = function(isoVal) {
  state.dashboardFilter.exactDate = isoVal || '';
  if (isoVal) {
    const parts = isoVal.split('-');
    if (parts.length === 3) {
      state.dashboardFilter.year = parts[0];
      state.dashboardFilter.month = parts[1];
      state.dashboardFilter.day = parts[2];
    }
    state.dashboardFilter.mode = 'DAY';
    state.dashboardFilter.trendView = 'DAY';
  }
  state.homeTxPage = 1;
  renderApp();
};

window.setDashKeyword = function(val) {
  state.dashboardFilter.keyword = val || '';
  state.homeTxPage = 1;
  renderApp();
  setTimeout(() => {
    const input = document.getElementById('dash-keyword-input');
    if (input) {
      input.focus();
      const len = input.value.length;
      input.setSelectionRange(len, len);
    }
  }, 10);
};

window.setDashDonutType = function(type) {
  state.dashboardFilter.donutType = type;
  state.dashboardFilter.activeCatId = null;
  state.homeTxPage = 1;
  renderApp();
};

window.toggleDashCatSpotlight = function(catId) {
  if (state.dashboardFilter.activeCatId === catId) {
    state.dashboardFilter.activeCatId = null;
  } else {
    state.dashboardFilter.activeCatId = catId;
  }
  state.homeTxPage = 1;
  renderApp();
};

window.setDashTrendView = function(view) {
  state.dashboardFilter.trendView = view;
  renderApp();
};

window.selectBarPeriodOnChart = function(granularity, keyVal) {
  const df = state.dashboardFilter;
  df.exactDate = '';
  if (granularity === 'DAY') {
    const dt = parseTxDateObj(keyVal);
    if (df.day === dt.dd && df.month === dt.mm && df.year === dt.yyyy) {
      df.day = '';
      df.mode = df.month ? 'MONTH' : 'ALL';
    } else {
      df.day = dt.dd;
      df.month = dt.mm;
      df.year = dt.yyyy;
      df.mode = 'DAY';
    }
  } else if (granularity === 'MONTH') {
    const mm = String(keyVal).padStart(2, '0');
    if (df.month === mm && !df.day) {
      df.month = '';
      df.mode = df.year ? 'YEAR' : 'ALL';
    } else {
      df.day = '';
      df.month = mm;
      if (!df.year) df.year = String(new Date().getFullYear());
      df.mode = 'MONTH';
    }
  } else if (granularity === 'YEAR') {
    const yyyy = String(keyVal);
    if (df.year === yyyy && !df.month && !df.day) {
      df.year = '';
      df.mode = 'ALL';
    } else {
      df.day = '';
      df.month = '';
      df.year = yyyy;
      df.mode = 'YEAR';
    }
  }
  state.homeTxPage = 1;
  renderApp();
};

window.resetDashFilter = function() {
  state.dashboardFilter = {
    mode: 'ALL',
    day: '',
    month: '',
    year: '',
    exactDate: '',
    keyword: '',
    donutType: state.dashboardFilter.donutType || 'EXPENSE',
    activeCatId: null,
    trendView: 'MONTH'
  };
  state.homeTxPage = 1;
  renderApp();
  showToast('Đã đặt lại bộ lọc báo cáo về tất cả thời gian');
};

// ============================================================================
// Interactive Handlers
// ============================================================================
window.selectLoginUser = function(wsId) {
  if (wsId === 'NEW_ACCOUNT') {
    state.loginForm.selectedWsId = 'NEW_ACCOUNT';
    state.loginForm.email = '';
    state.loginForm.password = '';
    state.loginForm.errorMsg = '';
    renderApp();
    setTimeout(() => {
      const emailEl = document.getElementById('login-email-input');
      if (emailEl) emailEl.focus();
    }, 40);
    return;
  }
  const ws = state.data.workspaces.find(w => w.id === wsId);
  if (!ws) return;
  state.loginForm.selectedWsId = wsId;
  state.loginForm.email = ws.email;
  state.loginForm.password = '';
  state.loginForm.errorMsg = '';
  renderApp();
  setTimeout(() => {
    const passEl = document.getElementById('login-password-input');
    if (passEl) passEl.focus();
  }, 40);
};

window.fillDemoFirstTimeUser = function(email) {
  const ws = state.data.workspaces.find(w => w.email.toLowerCase() === String(email || '').toLowerCase());
  state.loginForm.selectedWsId = ws ? ws.id : 'NEW_ACCOUNT';
  state.loginForm.email = email;
  state.loginForm.password = '';
  state.loginForm.errorMsg = '';
  renderApp();
  setTimeout(() => {
    const passEl = document.getElementById('login-password-input');
    if (passEl) passEl.focus();
  }, 40);
};

window.quickFillCredentials = function(wsId) {
  const ws = state.data.workspaces.find(w => w.id === wsId);
  if (!ws) return;
  if (ws.status === 'N') {
    state.loginForm.errorMsg = `Tài khoản "${ws.fullName || ws.name}" (${ws.email}) đang bị Quản trị viên (Admin) tạm khóa quyền đăng nhập!`;
    renderApp();
    showToast('Tài khoản này đang bị Admin tạm khóa!');
    return;
  }
  state.loginForm.selectedWsId = ws.id;
  state.loginForm.email = ws.email;
  state.loginForm.password = ws.password || DEFAULT_USER_PASSWORDS[ws.id] || 'Duc@123';
  state.loginForm.errorMsg = '';
  renderApp();
  showToast(`Đã điền tài khoản & mật khẩu của ${ws.fullName || ws.name}`);
};

window.setLoginTableRoleFilter = function(roleFilter) {
  if (!state.adminAccountView) state.adminAccountView = { search: '', roleFilter: 'ALL', statusFilter: 'ALL', loginTableFilter: 'ALL' };
  state.adminAccountView.loginTableFilter = roleFilter || 'ALL';
  renderApp();
};

window.toggleLoginPassword = function() {
  const emailEl = document.getElementById('login-email-input');
  const passEl = document.getElementById('login-password-input');
  if (emailEl) state.loginForm.email = emailEl.value;
  if (passEl) state.loginForm.password = passEl.value;
  state.loginForm.showPassword = !state.loginForm.showPassword;
  renderApp();
};

window.handleLoginSubmit = async function(e) {
  if (e) e.preventDefault();
  const emailEl = document.getElementById('login-email-input');
  const passEl = document.getElementById('login-password-input');
  const emailVal = emailEl ? emailEl.value.trim() : (state.loginForm.email || '').trim();
  const passVal = passEl ? passEl.value.trim() : (state.loginForm.password || '').trim();

  state.loginForm.email = emailVal;
  state.loginForm.password = passVal;

  if (!emailVal || !passVal) {
    state.loginForm.errorMsg = 'Vui lòng nhập đầy đủ Email tài khoản và Mật khẩu được Admin cấp!';
    renderApp();
    showToast('Vui lòng nhập đầy đủ Email và Mật khẩu');
    return;
  }

  // Kích hoạt lại quyền đọc/ghi FileSystemFileHandle ngay trong User Gesture (khi bấm Đăng nhập sau khi tắt máy mở lại)
  await ensureExcelPermissionOnUserGesture(false);

  // Luôn đọc & hợp nhất dữ liệu mới nhất từ Excel (qua FileHandle hoặc Bridge) trước khi xác thực để không bỏ sót giao dịch nào
  if (state.excel.fileHandle && !state.excel.needsPermission && typeof XLSX !== 'undefined') {
    try {
      const file = await state.excel.fileHandle.getFile();
      if (file && file.size > 0) {
        const buf = await file.arrayBuffer();
        const wb = XLSX.read(buf, { type: 'array' });
        if (wb && wb.SheetNames && wb.SheetNames.length > 0) {
          if (state.data.hasUnsyncedCrud) {
            mergeWorkbookDataIntoCurrentState(wb);
          } else {
            parseWorkbookToState(wb);
          }
          state.excel.hasMergedDiskInSession = true;
          state.excel.lastFileMtimeMs = file.lastModified || Date.now();
        }
      }
    } catch (err) {}
  } else if (state.excel.bridgeOnline && typeof XLSX !== 'undefined') {
    await pullWorkbookFromLocalBridge(true);
  }

  // Strictly match only provisioned accounts in state.data.workspaces (Sheet Tai_Khoan)
  const matchedWs = (state.data.workspaces || []).find(
    w => String(w.email || '').trim().toLowerCase() === emailVal.toLowerCase()
  );

  if (!matchedWs) {
    state.loginForm.errorMsg = `Tài khoản "${emailVal}" chưa được Quản trị viên (Admin) cấp trên hệ thống! Chỉ Admin mới có quyền cấp tài khoản đăng nhập.`;
    renderApp();
    showToast('Từ chối đăng nhập: Email chưa được Admin cấp quyền!');
    return;
  }

  if (matchedWs.status === 'N') {
    state.loginForm.errorMsg = `Tài khoản "${matchedWs.fullName || matchedWs.name}" (${matchedWs.email}) hiện đang bị Quản trị viên (Admin) tạm khóa quyền truy cập!`;
    renderApp();
    showToast('Tài khoản đã bị Admin khóa quyền đăng nhập!');
    return;
  }

  const expectedPassword = String(matchedWs.password || DEFAULT_USER_PASSWORDS[matchedWs.id] || 'Duc@123').trim();
  if (passVal !== expectedPassword) {
    state.loginForm.errorMsg = `Mật khẩu không chính xác cho tài khoản ${matchedWs.fullName || matchedWs.name} (${matchedWs.email})!`;
    renderApp();
    showToast('Sai mật khẩu! Vui lòng kiểm tra lại mật khẩu được cấp.');
    return;
  }

  // Credentials verified strictly -> Log in to this specific user's workspace
  matchedWs.hasLoggedIn = true;
  matchedWs.lastLoginAt = getDateTimeStringNow();
  state.loginForm.selectedWsId = matchedWs.id;
  state.loginForm.email = matchedWs.email;
  state.loginForm.password = '';
  state.loginForm.errorMsg = '';

  state.data.activeWorkspace = matchedWs.id;
  state.data.userName = matchedWs.fullName || matchedWs.name;
  state.data.userEmail = matchedWs.email;

  // Reset filters so user sees their complete personal financial data
  state.searchQuery = '';
  state.txFilter = 'ALL';
  state.txCategoryFilter = 'ALL';
  state.txPage = 1;
  state.homeTxPage = 1;
  if (state.dashboardFilter) {
    state.dashboardFilter.day = '';
    state.dashboardFilter.month = '';
    state.dashboardFilter.year = '';
    state.dashboardFilter.exactDate = '';
    state.dashboardFilter.keyword = '';
    state.dashboardFilter.activeCatId = null;
    state.dashboardFilter.mode = 'ALL';
  }

  state.isAuthenticated = true;
  state.activePage = 'home';
  recalculateDerivedData(state.data);
  renderApp();
  const canSyncExcelNow = Boolean(
    state.excel.bridgeOnline ||
    (state.excel.isLinked && !state.excel.needsPermission && state.excel.hasMergedDiskInSession)
  );
  await saveState(!canSyncExcelNow, true);
  const userTxCount = getActiveUserTransactions().length;
  const roleBadge = (matchedWs.roleCode === 'ADMIN' || matchedWs.id === 'personal') ? 'Quản trị viên (Admin)' : 'Thành viên (User)';
  showToast(`Đăng nhập thành công [${roleBadge}]: ${state.data.userName} (${userTxCount} giao dịch)`);
};

// ============================================================================
// ADMIN ACCOUNT PROVISIONING & RBAC MANAGEMENT HANDLERS (Chỉ dành cho Admin)
// ============================================================================
function buildCleanUserIdFromName(fullName) {
  const slug = String(fullName || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/gi, 'd')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '')
    .slice(-12);
  return 'user_' + (slug || Date.now().toString().slice(-5));
}

function syncAdminUserModalInputs() {
  const f = state.adminUserModalForm;
  const fullNameEl = document.getElementById('admin-user-fullname');
  const nameEl = document.getElementById('admin-user-shortname');
  const emailEl = document.getElementById('admin-user-email');
  const passEl = document.getElementById('admin-user-password');
  const initBalEl = document.getElementById('admin-user-init-balance');
  if (fullNameEl) f.fullName = fullNameEl.value;
  if (nameEl) f.name = nameEl.value;
  if (emailEl) f.email = emailEl.value;
  if (passEl) f.password = passEl.value;
  if (initBalEl) f.initialWalletBalance = formatNumberWithDots(initBalEl.value);
}

window.openAdminUserModal = function(mode = 'CREATE', wsId = null) {
  if (!isCurrentUserAdmin()) {
    showToast('⛔ Chỉ Quản trị viên (Admin) mới được phân quyền cấp phát & chỉnh sửa tài khoản!');
    return;
  }
  if (mode === 'EDIT' && wsId) {
    const u = (state.data.workspaces || []).find(w => w.id === wsId);
    if (!u) return;
    const w1 = (state.data.wallets || []).find(w => w.userId === u.id && w.name === 'Techcombank Chính');
    const rCode = u.roleCode === 'ADMIN' || u.id === 'personal' ? 'ADMIN' : 'USER';
    const existingMods = Array.isArray(u.allowedModules) && u.allowedModules.length > 0
      ? [...u.allowedModules]
      : (rCode === 'ADMIN' ? ['PFM', 'ADM'] : ['PFM']);
    state.adminUserModalForm = {
      mode: 'EDIT',
      editId: u.id,
      id: u.id,
      fullName: u.fullName || u.name || '',
      name: u.name || '',
      email: u.email || '',
      password: u.password || DEFAULT_USER_PASSWORDS[u.id] || 'Desun@123',
      roleCode: rCode,
      allowedModules: existingMods,
      status: u.status === 'N' ? 'N' : 'Y',
      initialWalletBalance: formatNumberWithDots((w1 && w1.initialBalance) || 0)
    };
  } else {
    state.adminUserModalForm = {
      mode: 'CREATE',
      editId: null,
      id: '',
      fullName: '',
      name: '',
      email: '',
      password: 'Desun@' + Math.floor(100 + Math.random() * 900),
      roleCode: 'USER',
      allowedModules: ['PFM'],
      status: 'Y',
      initialWalletBalance: '0'
    };
  }
  state.adminUserModalOpen = true;
  renderApp();
  setTimeout(() => {
    const el = document.getElementById('admin-user-fullname');
    if (el) el.focus();
  }, 40);
};

window.closeAdminUserModal = function() {
  state.adminUserModalOpen = false;
  renderApp();
};

window.setAdminModalRole = function(roleCode) {
  syncAdminUserModalInputs();
  if (state.adminUserModalForm.editId === 'personal' && roleCode !== 'ADMIN') {
    showToast('Tài khoản Root Admin mặc định luôn giữ quyền Quản trị viên (ADMIN)');
    return;
  }
  const nextRole = roleCode === 'ADMIN' ? 'ADMIN' : 'USER';
  state.adminUserModalForm.roleCode = nextRole;
  if (nextRole === 'ADMIN') {
    state.adminUserModalForm.allowedModules = ['PFM', 'ADM'];
  } else {
    state.adminUserModalForm.allowedModules = ['PFM'];
  }
  renderApp();
};

window.toggleAdminModalModule = function(modCode) {
  syncAdminUserModalInputs();
  const code = String(modCode || '').toUpperCase().trim();
  if (!code) return;
  if (state.adminUserModalForm.editId === 'personal' && (code === 'ADM' || code === 'PFM')) {
    showToast('Tài khoản Root Admin luôn giữ quyền truy cập PFM & ADM!');
    return;
  }
  if (code === 'ADM') {
    if (state.adminUserModalForm.roleCode === 'ADMIN') {
      state.adminUserModalForm.roleCode = 'USER';
      state.adminUserModalForm.allowedModules = ['PFM'];
    } else {
      state.adminUserModalForm.roleCode = 'ADMIN';
      state.adminUserModalForm.allowedModules = ['PFM', 'ADM'];
    }
    renderApp();
    return;
  }
  showToast('Module PFM - Quản lý chi tiêu là phân hệ mặc định khi đăng nhập!');
};

window.setAdminModalStatus = function(st) {
  syncAdminUserModalInputs();
  if (state.adminUserModalForm.editId === 'personal' && st === 'N') {
    showToast('Không thể khóa tài khoản Root Admin đang quản trị hệ thống!');
    return;
  }
  state.adminUserModalForm.status = st === 'N' ? 'N' : 'Y';
  renderApp();
};

window.generateRandomUserPassword = function() {
  syncAdminUserModalInputs();
  const prefixes = ['DeSun', 'FinFlow', 'User', 'Vip'];
  const p = prefixes[Math.floor(Math.random() * prefixes.length)];
  state.adminUserModalForm.password = `${p}@${Math.floor(100 + Math.random() * 900)}`;
  renderApp();
};

window.handleAdminFullNameInput = function(el) {
  if (!el) return;
  const val = el.value;
  state.adminUserModalForm.fullName = val;
  const parts = String(val || '').trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    const shortSuggested = parts.slice(-2).join(' ');
    const shortEl = document.getElementById('admin-user-shortname');
    if (shortEl && (!state.adminUserModalForm.name || state.adminUserModalForm.mode === 'CREATE')) {
      shortEl.value = shortSuggested;
      state.adminUserModalForm.name = shortSuggested;
    }
    if (state.adminUserModalForm.mode === 'CREATE') {
      const slug = parts.slice(-2).join('').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/gi, 'd').toLowerCase().replace(/[^a-z0-9]/g, '');
      const emailEl = document.getElementById('admin-user-email');
      if (emailEl && (!emailEl.value || emailEl.value.endsWith('@desun.vn'))) {
        emailEl.value = `${slug || 'user'}@desun.vn`;
        state.adminUserModalForm.email = emailEl.value;
      }
    }
  }
};

window.submitAdminUserModal = async function(e) {
  if (e) e.preventDefault();
  if (!isCurrentUserAdmin()) {
    showToast('⛔ Chỉ Quản trị viên (Admin) mới có quyền cấp phát tài khoản!');
    return;
  }
  syncAdminUserModalInputs();
  await ensureExcelPermissionOnUserGesture(true);

  const f = state.adminUserModalForm;
  const fullName = String(f.fullName || '').trim();
  const shortName = String(f.name || '').trim() || (fullName ? fullName.split(/\s+/).slice(-2).join(' ') : '');
  const email = String(f.email || '').trim().toLowerCase();
  const password = String(f.password || '').trim();
  const roleCode = f.roleCode === 'ADMIN' ? 'ADMIN' : 'USER';
  const status = f.status === 'N' ? 'N' : 'Y';
  const initBal = parseInt(String(f.initialWalletBalance || '').replace(/\D/g, ''), 10) || 0;
  const allowedMods = roleCode === 'ADMIN' ? ['PFM', 'ADM'] : ['PFM'];

  if (!fullName) {
    showToast('Vui lòng nhập Họ và tên chủ tài khoản!');
    return;
  }
  if (!email || !email.includes('@')) {
    showToast('Vui lòng nhập Email đăng nhập hợp lệ (VD: ten@desun.vn)!');
    return;
  }
  if (!password || password.length < 4) {
    showToast('Mật khẩu cấp phát phải có ít nhất 4 ký tự!');
    return;
  }

  const currentAdmin = (state.data.workspaces || []).find(w => w.id === state.data.activeWorkspace) || { fullName: 'Nguyễn Thanh Đức' };
  const adminLabel = `${currentAdmin.fullName || 'Nguyễn Thanh Đức'} (Admin)`;

  if (f.mode === 'EDIT' && f.editId) {
    const dupEmail = (state.data.workspaces || []).find(w => w.id !== f.editId && String(w.email || '').toLowerCase() === email);
    if (dupEmail) {
      showToast(`Email "${email}" đã được cấp cho tài khoản ${dupEmail.fullName}!`);
      return;
    }
    const target = (state.data.workspaces || []).find(w => w.id === f.editId);
    if (target) {
      target.fullName = fullName;
      target.name = shortName;
      target.email = email;
      target.password = password;
      target.roleCode = target.id === 'personal' ? 'ADMIN' : roleCode;
      target.role = target.roleCode === 'ADMIN' ? 'Quản trị viên (Admin)' : 'Thành viên cá nhân (User)';
      target.allowedModules = target.roleCode === 'ADMIN' ? ['PFM', 'ADM'] : ['PFM'];
      target.status = target.id === 'personal' ? 'Y' : status;
      target.avatar = computeAvatarInitials(fullName);

      // Đồng bộ số dư đầu kỳ Ví chính nếu Admin điều chỉnh
      const w1 = (state.data.wallets || []).find(w => w.userId === target.id && w.name === 'Techcombank Chính');
      if (w1) {
        w1.initialBalance = initBal;
      }
      // Đồng bộ tên chủ tài khoản trên các giao dịch/mục tiêu của user đó
      (state.data.transactions || []).forEach(t => {
        if (t.userId === target.id) t.userName = fullName;
      });
      (state.data.goals || []).forEach(g => {
        if (g.userId === target.id) g.userName = fullName;
      });
      if (state.data.activeWorkspace === target.id) {
        state.data.userName = fullName;
        state.data.userEmail = email;
      }
    }
    state.adminUserModalOpen = false;
    pushActivityNotification({
      type: 'ALERT',
      title: `🛡️ Admin cập nhật tài khoản: ${fullName}`,
      desc: `Email: ${email} • Modules: ${allowedMods.join(', ')} • Trạng thái: ${status === 'Y' ? 'Hoạt động' : 'Đã khóa'}`,
      time: `Vừa xong (${getTimeStringNow()})`,
      icon: 'users',
      color: '#0284C7',
      bg: '#E0F2FE',
      actionType: 'PAGE',
      targetId: 'admin_accounts'
    });
    renderApp();
    await saveState(false, true);
    showToast(`✅ Đã cập nhật phân quyền (${allowedMods.join(', ')}) & lưu Excel cho "${fullName}"`);
    return;
  }

  // CREATE NEW ACCOUNT BY ADMIN
  const dupEmail = (state.data.workspaces || []).find(w => String(w.email || '').toLowerCase() === email);
  if (dupEmail) {
    showToast(`Email "${email}" đã tồn tại trên hệ thống (${dupEmail.fullName})!`);
    return;
  }

  let newId = buildCleanUserIdFromName(fullName);
  if ((state.data.workspaces || []).some(w => w.id === newId)) {
    newId = `${newId}_${Date.now().toString().slice(-3)}`;
  }

  const newWs = {
    id: newId,
    name: shortName,
    fullName,
    email,
    password,
    avatar: computeAvatarInitials(fullName),
    roleCode,
    role: roleCode === 'ADMIN' ? 'Quản trị viên (Admin)' : 'Thành viên cá nhân (User)',
    allowedModules: [...allowedMods],
    provisionedBy: adminLabel,
    createdAt: getTodayDateString(),
    hasLoggedIn: false,
    lastLoginAt: '',
    status
  };

  state.data.workspaces.push(newWs);
  DEFAULT_USER_PASSWORDS[newId] = password;
  state.adminAccountView.selectedUserForModuleRbac = newId;

  // Khởi tạo ngay 3 Ví chuẩn cho tài khoản vừa được Admin cấp
  state.data.wallets.push(
    { id: `${newId}_w1`, userId: newId, userName: fullName, name: 'Techcombank Chính', type: 'Ngân hàng', number: '•••• 8899', initialBalance: initBal, balance: initBal },
    { id: `${newId}_w2`, userId: newId, userName: fullName, name: 'Ví MoMo', type: 'Ví điện tử', number: '0988•••456', initialBalance: 0, balance: 0 },
    { id: `${newId}_w3`, userId: newId, userName: fullName, name: 'Tiền mặt cá nhân', type: 'Tiền mặt', number: 'Ví tiêu dùng', initialBalance: 0, balance: 0 }
  );

  state.adminUserModalOpen = false;
  pushActivityNotification({
    type: 'ALERT',
    title: `🛡️ Admin vừa cấp tài khoản mới: ${fullName}`,
    desc: `Email: ${email} • Mật khẩu: ${password} • Modules: ${allowedMods.join(', ')}`,
    time: `Vừa xong (${getTimeStringNow()})`,
    icon: 'users',
    color: '#10B981',
    bg: '#DCFCE7',
    actionType: 'PAGE',
    targetId: 'admin_accounts'
  });
  renderApp();
  await saveState(false, true);
  showToast(`✅ Đã cấp tài khoản "${fullName}" (Modules: ${allowedMods.join(', ')}) & lưu vào Excel!`);
};

// ============================================================================
// MODULE SWITCHER & MODULE PERMISSION RBAC HANDLERS (2 Module: PFM & ADM)
// ============================================================================
window.toggleSidebarModuleSwitcher = function(event) {
  if (event) event.stopPropagation();
  state.moduleSwitcherOpen = !state.moduleSwitcherOpen;
  state.adminAccountView.openRowModuleMenuUserId = null;
  renderApp();
};

window.toggleSidebarPin = function(event) {
  if (event) event.stopPropagation();
  state.sidebarPinned = !state.sidebarPinned;
  renderApp();
  showToast(state.sidebarPinned ? '📌 Đã ghim thanh Module cố định' : '📌 Đã bỏ ghim thanh Module');
};

window.selectSystemModule = function(modCode, event) {
  if (event) event.stopPropagation();
  const code = String(modCode || 'PFM').toUpperCase().trim();
  const modObj = SYSTEM_MODULES.find(m => m.code === code) || SYSTEM_MODULES[0];
  const isAdmin = isCurrentUserAdmin();

  if (code === 'ADM') {
    if (!isAdmin) {
      showToast('⛔ Chỉ Quản trị viên (Admin) mới có quyền truy cập Module ADM - Quản lý tài khoản!');
      return;
    }
    state.activeModule = 'ADM';
    state.activePage = 'admin_accounts';
    state.moduleSwitcherOpen = false;
    renderApp();
    showToast(`📦 Đã chuyển sang Module: ${modObj.fullLabel}`);
    return;
  }

  // Chuyển về PFM - Quản lý chi tiêu
  state.activeModule = 'PFM';
  if (state.activePage === 'admin_accounts') {
    state.activePage = 'home';
  }
  state.moduleSwitcherOpen = false;
  renderApp();
  showToast(`📦 Đã chuyển sang Module: ${modObj.fullLabel}`);
};

window.selectUserForModuleRbac = function(wsId, event) {
  if (event) event.stopPropagation();
  state.adminAccountView.selectedUserForModuleRbac = wsId;
  renderApp();
};

window.toggleUserModulePermission = async function(wsId, modCode, event) {
  if (event) event.stopPropagation();
  if (!isCurrentUserAdmin()) {
    showToast('⛔ Chỉ Quản trị viên (Admin) mới được phân quyền Module cho tài khoản!');
    return;
  }
  const u = (state.data.workspaces || []).find(w => w.id === wsId);
  if (!u) return;
  const code = String(modCode || '').toUpperCase().trim();

  if (u.id === 'personal') {
    showToast('⚠️ Tài khoản Root Admin mặc định luôn có toàn quyền truy cập cả 2 Module PFM & ADM!');
    return;
  }
  if (code === 'PFM') {
    showToast('ℹ️ Module PFM - Quản lý chi tiêu là phân hệ cơ bản mặc định cho mọi tài khoản!');
    return;
  }

  await ensureExcelPermissionOnUserGesture(true);
  const currentMods = Array.isArray(u.allowedModules) ? [...u.allowedModules] : ['PFM'];
  const hasAdm = currentMods.includes('ADM');
  if (hasAdm) {
    u.roleCode = 'USER';
    u.role = 'Thành viên cá nhân (User)';
    u.allowedModules = ['PFM'];
  } else {
    u.roleCode = 'ADMIN';
    u.role = 'Quản trị viên (Admin)';
    u.allowedModules = ['PFM', 'ADM'];
  }

  state.adminAccountView.selectedUserForModuleRbac = u.id;
  renderApp();
  await saveState(false, true);
  showToast(
    u.roleCode === 'ADMIN'
      ? `✅ Đã cấp quyền Module [ADM - Quản lý tài khoản] cho ${u.fullName} (Đã lưu Excel)`
      : `🔒 Đã thu hồi quyền Module [ADM - Quản lý tài khoản] của ${u.fullName} (Đã lưu Excel)`
  );
};

window.setAdminModuleFilter = function(modCode) {
  state.adminAccountView.moduleFilter = modCode || 'ALL';
  renderApp();
};

window.toggleRowModulePopover = function(wsId, event) {
  if (event) event.stopPropagation();
  state.adminAccountView.openRowModuleMenuUserId =
    state.adminAccountView.openRowModuleMenuUserId === wsId ? null : wsId;
  state.adminAccountView.selectedUserForModuleRbac = wsId;
  renderApp();
};

window.toggleAdminUserStatus = async function(wsId) {
  if (!isCurrentUserAdmin()) {
    showToast('⛔ Chỉ Quản trị viên (Admin) mới có quyền khóa/mở khóa tài khoản!');
    return;
  }
  if (wsId === 'personal') {
    showToast('Không thể khóa tài khoản Root Admin của hệ thống!');
    return;
  }
  await ensureExcelPermissionOnUserGesture(true);
  const u = (state.data.workspaces || []).find(w => w.id === wsId);
  if (!u) return;
  u.status = u.status === 'N' ? 'Y' : 'N';
  renderApp();
  await saveState(false, true);
  showToast(
    u.status === 'Y'
      ? `🔓 Đã mở khóa quyền đăng nhập cho ${u.fullName} (Đã lưu Excel)`
      : `🔒 Đã tạm khóa quyền đăng nhập của ${u.fullName} (Đã lưu Excel)`
  );
};

window.deleteAdminUser = async function(wsId) {
  if (!isCurrentUserAdmin()) {
    showToast('⛔ Chỉ Quản trị viên (Admin) mới có quyền thu hồi tài khoản!');
    return;
  }
  if (wsId === 'personal' || wsId === state.data.activeWorkspace) {
    showToast('Không thể xóa tài khoản Admin đang đăng nhập!');
    return;
  }
  await ensureExcelPermissionOnUserGesture(true);
  const u = (state.data.workspaces || []).find(w => w.id === wsId);
  if (!u) return;
  if (!Array.isArray(state.data.deletedUserIds)) state.data.deletedUserIds = [];
  if (!state.data.deletedUserIds.includes(wsId)) state.data.deletedUserIds.push(wsId);
  state.data.workspaces = (state.data.workspaces || []).filter(w => w.id !== wsId);
  state.data.wallets = (state.data.wallets || []).filter(w => w.userId !== wsId);
  state.data.transactions = (state.data.transactions || []).filter(t => t.userId !== wsId);
  state.data.goals = (state.data.goals || []).filter(g => g.userId !== wsId);
  renderApp();
  await saveState(false, true);
  showToast(`🗑️ Đã thu hồi tài khoản "${u.fullName}" và cập nhật xuống Excel!`);
};

window.impersonateUserByAdmin = async function(wsId) {
  if (!isCurrentUserAdmin()) {
    showToast('⛔ Chỉ Quản trị viên (Admin) mới có quyền truy cập nhanh tài khoản!');
    return;
  }
  const u = (state.data.workspaces || []).find(w => w.id === wsId);
  if (!u) return;
  u.hasLoggedIn = true;
  u.lastLoginAt = getDateTimeStringNow();
  state.data.activeWorkspace = u.id;
  state.data.userName = u.fullName || u.name;
  state.data.userEmail = u.email;
  state.activePage = 'home';
  recalculateDerivedData(state.data);
  renderApp();
  await saveState(false, true);
  showToast(`Switched: Đang xem không gian dữ liệu của ${u.fullName}`);
};

window.copyAccountCredentials = function(wsId) {
  const u = (state.data.workspaces || []).find(w => w.id === wsId);
  if (!u) return;
  const text = `Tài khoản DeSun FinFlow — Họ tên: ${u.fullName} | Email: ${u.email} | Mật khẩu: ${u.password} | Phân quyền: ${u.role}`;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(() => {});
  }
  showToast(`📋 Đã sao chép thông tin đăng nhập của ${u.fullName}`);
};

window.setAdminAccountSearch = function(val) {
  state.adminAccountView.search = val || '';
  renderApp();
  setTimeout(() => {
    const el = document.getElementById('admin-account-search-input');
    if (el) {
      el.focus();
      const len = el.value.length;
      try { el.setSelectionRange(len, len); } catch (e) {}
    }
  }, 10);
};

window.setAdminAccountRoleFilter = function(role) {
  state.adminAccountView.roleFilter = role || 'ALL';
  renderApp();
};

window.setAdminAccountStatusFilter = function(st) {
  state.adminAccountView.statusFilter = st || 'ALL';
  renderApp();
};

window.logoutApp = function() {
  state.isAuthenticated = false;
  state.modalOpen = false;
  state.goalModalOpen = false;
  state.loginForm.selectedWsId = state.data.activeWorkspace;
  state.loginForm.email = state.data.userEmail;
  state.loginForm.password = '';
  state.loginForm.errorMsg = '';
  renderApp();
  showToast('Đã đăng xuất khỏi tài khoản. Vui lòng nhập mật khẩu để đăng nhập lại.');
};

window.navigate = function(page) {
  state.activePage = page;
  state.moduleSwitcherOpen = false;
  state.adminAccountView.openRowModuleMenuUserId = null;
  if (page === 'admin_accounts') {
    state.activeModule = 'ADM';
  } else {
    state.activeModule = 'PFM';
  }
  if (page === 'budgets') state.budgetSubTab = 'budgets';
  if (page === 'goals') state.budgetSubTab = 'goals';
  renderApp();
};

window.setBudgetSubTab = function(sub) {
  state.budgetSubTab = sub;
  state.activePage = sub === 'goals' ? 'goals' : 'budgets';
  renderApp();
};

window.toggleMobileSimulator = function() {
  state.isMobileSimulator = !state.isMobileSimulator;
  renderApp();
  showToast(state.isMobileSimulator ? 'Đang xem chế độ Responsive Điện thoại' : 'Đang xem chế độ Web App Máy tính');
};

window.switchWorkspace = function(wsId) {
  if (wsId === 'NEW_ACCOUNT') {
    state.isAuthenticated = false;
    state.modalOpen = false;
    state.loginForm.selectedWsId = 'NEW_ACCOUNT';
    state.loginForm.email = '';
    state.loginForm.password = '';
    state.loginForm.errorMsg = '';
    renderApp();
    showToast('Vui lòng nhập Email & Mật khẩu được cấp để đăng nhập');
    return;
  }
  if (wsId === state.data.activeWorkspace) return;
  const ws = state.data.workspaces.find(w => w.id === wsId);
  state.isAuthenticated = false;
  state.modalOpen = false;
  state.goalModalOpen = false;
  state.loginForm.selectedWsId = ws ? ws.id : 'personal';
  state.loginForm.email = ws ? ws.email : '';
  state.loginForm.password = '';
  state.loginForm.errorMsg = '';
  renderApp();
  if (ws) {
    showToast(`Vui lòng nhập mật khẩu của ${ws.fullName || ws.name} để truy cập dữ liệu riêng`);
  }
};

window.toggleBalanceVisibility = function() {
  state.data.balanceHidden = !state.data.balanceHidden;
  renderApp();
};

window.setTxFilter = function(f) {
  state.txFilter = f;
  state.txPage = 1;
  state.homeTxPage = 1;
  renderApp();
};

window.setTxCategoryFilter = function(catId) {
  state.txCategoryFilter = catId;
  state.txPage = 1;
  if (state.dashboardFilter) {
    state.dashboardFilter.openSelect = null;
    state.dashboardFilter.selectQuery = '';
  }
  renderApp();
};

window.setTxPage = function(page) {
  const p = Math.max(1, parseInt(page, 10) || 1);
  state.txPage = p;
  if (state.activePage === 'transactions') {
    const listEl = document.getElementById('tx-list-target');
    if (listEl) {
      listEl.innerHTML = renderTransactionTableHTML(computeStats(), state.isMobileSimulator);
      return;
    }
  }
  renderApp();
};

window.setTxPageSize = function(size) {
  const s = Math.max(1, parseInt(size, 10) || 8);
  state.txPageSize = s;
  state.txPage = 1;
  if (state.activePage === 'transactions') {
    const listEl = document.getElementById('tx-list-target');
    if (listEl) {
      listEl.innerHTML = renderTransactionTableHTML(computeStats(), state.isMobileSimulator);
      return;
    }
  }
  renderApp();
};

window.setHomeTxPage = function(page) {
  const p = Math.max(1, parseInt(page, 10) || 1);
  state.homeTxPage = p;
  if (state.activePage === 'home') {
    const homeEl = document.getElementById('home-tx-list-target');
    if (homeEl) {
      homeEl.innerHTML = renderTransactionItemsHTML(computeStats(), 5);
      return;
    }
  }
  renderApp();
};

function buildPaginationNumbers(currentPage, totalPages) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, '...', totalPages];
  }
  if (currentPage >= totalPages - 3) {
    return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }
  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
}

window.handleSearch = function(val, inputIdToFocus = '') {
  state.searchQuery = val || '';
  state.txPage = 1;
  state.homeTxPage = 1;
  if (state.dashboardFilter) {
    state.dashboardFilter.keyword = val || '';
  }
  if (state.activePage === 'transactions') {
    const listEl = document.getElementById('tx-list-target');
    if (listEl) {
      listEl.innerHTML = renderTransactionTableHTML(computeStats(), state.isMobileSimulator);
      return;
    }
  }
  renderApp();
  if (inputIdToFocus) {
    setTimeout(() => {
      const el = document.getElementById(inputIdToFocus);
      if (el) {
        el.focus();
        const len = el.value.length;
        el.setSelectionRange(len, len);
      }
    }, 10);
  }
};

window.clearGlobalSearch = function(inputIdToFocus = '') {
  state.searchQuery = '';
  state.txPage = 1;
  state.homeTxPage = 1;
  if (state.dashboardFilter) {
    state.dashboardFilter.keyword = '';
  }
  renderApp();
  if (inputIdToFocus) {
    setTimeout(() => {
      const el = document.getElementById(inputIdToFocus);
      if (el) el.focus();
    }, 15);
  }
};

function syncModalInputsToState() {
  const amtEl = document.getElementById('modal-amount-input');
  const noteEl = document.getElementById('modal-note-input');
  const dateEl = document.getElementById('modal-date-input');
  const walletEl = document.getElementById('modal-wallet-select');
  if (amtEl) state.modalForm.amount = formatNumberWithDots(amtEl.value);
  if (noteEl) state.modalForm.note = noteEl.value;
  if (dateEl) state.modalForm.date = dateEl.value;
  if (walletEl) state.modalForm.walletName = walletEl.value;
}

window.openAddModal = function(defaultType = 'EXPENSE') {
  state.modalForm = {
    editTxId: null,
    type: defaultType,
    amount: defaultType === 'INCOME' ? '2.500.000' : '450.000',
    categoryId: defaultType === 'INCOME' ? 'cat_salary' : 'cat_food',
    walletName: 'Techcombank Chính',
    date: getTodayDateString(),
    note: ''
  };
  state.modalOpen = true;
  renderApp();
  setTimeout(() => {
    const input = document.getElementById('modal-amount-input');
    if (input) {
      input.focus();
      const len = input.value.length;
      try { input.setSelectionRange(len, len); } catch (e) {}
    }
  }, 50);
};

window.openEditTxModal = function(txId, event) {
  if (event) event.stopPropagation();
  const tx = (state.data.transactions || []).find(t => t.id === txId);
  if (!tx) return;
  state.modalForm = {
    editTxId: tx.id,
    type: tx.type || 'EXPENSE',
    amount: formatNumberWithDots(tx.amount || 0),
    categoryId: tx.categoryId || (tx.type === 'INCOME' ? 'cat_salary' : 'cat_food'),
    walletName: tx.wallet || 'Techcombank Chính',
    date: normalizeDateString(tx.date || getTodayDateString()),
    note: tx.note || tx.title || ''
  };
  state.modalOpen = true;
  renderApp();
  setTimeout(() => {
    const input = document.getElementById('modal-note-input') || document.getElementById('modal-amount-input');
    if (input) {
      input.focus();
      const len = input.value.length;
      try { input.setSelectionRange(len, len); } catch (e) {}
    }
  }, 40);
};

window.closeAddModal = function() {
  state.modalOpen = false;
  renderApp();
};

window.setModalType = function(type) {
  syncModalInputsToState();
  state.modalForm.type = type;
  state.modalForm.categoryId = type === 'INCOME' ? 'cat_salary' : 'cat_food';
  renderApp();
};

window.setModalCategory = function(catId) {
  syncModalInputsToState();
  state.modalForm.categoryId = catId;
  renderApp();
};

window.handleModalAmountInput = function(el) {
  if (!el) return;
  const rawSelectionStart = el.selectionStart || 0;
  const digitsBeforeCursor = el.value.slice(0, rawSelectionStart).replace(/\D/g, '').length;
  const formatted = formatNumberWithDots(el.value);
  el.value = formatted;
  state.modalForm.amount = formatted;

  // Keep cursor position accurate when dots are inserted/removed
  let newCursorPos = 0;
  let seenDigits = 0;
  for (let i = 0; i < formatted.length; i++) {
    if (seenDigits >= digitsBeforeCursor) break;
    if (/\d/.test(formatted[i])) seenDigits++;
    newCursorPos = i + 1;
  }
  try {
    el.setSelectionRange(newCursorPos, newCursorPos);
  } catch (e) {}

  // Update active state on preset chips smoothly
  const isIncome = state.modalForm.type === 'INCOME';
  const activeBg = isIncome ? 'bg-[#10B981] text-white shadow-xs' : 'bg-[#F97316] text-white shadow-xs';
  const rawNum = parseInt(formatted.replace(/\D/g, ''), 10) || 0;
  document.querySelectorAll('[data-preset-amt]').forEach(btn => {
    const btnVal = parseInt(btn.getAttribute('data-preset-amt'), 10);
    btn.className = 'px-2 py-0.5 rounded-lg text-[11px] font-bold transition font-num ' +
      (btnVal === rawNum ? activeBg : 'bg-white border border-slate-200/80 hover:border-slate-300 text-slate-600');
  });
};

window.setPresetAmount = function(val) {
  syncModalInputsToState();
  const formatted = formatNumberWithDots(val);
  state.modalForm.amount = formatted;
  const input = document.getElementById('modal-amount-input');
  if (input) {
    input.value = formatted;
    window.handleModalAmountInput(input);
    input.focus();
  }
};

window.appendZerosModal = function() {
  const input = document.getElementById('modal-amount-input');
  if (!input) return;
  const rawDigits = input.value.replace(/\D/g, '');
  if (!rawDigits) {
    window.setPresetAmount(100000);
    return;
  }
  if (rawDigits.length <= 9) {
    const formatted = formatNumberWithDots(rawDigits + '000');
    input.value = formatted;
    window.handleModalAmountInput(input);
    input.focus();
  }
};

window.submitAddModal = async function(e) {
  if (e) e.preventDefault();
  syncModalInputsToState();

  const rawAmt = String(state.modalForm.amount || '').replace(/\D/g, '');
  let amount = parseInt(rawAmt, 10) || 0;
  if (amount > 0 && amount < 1000) amount *= 1000;
  if (amount <= 0) {
    showToast('Vui lòng nhập số tiền lớn hơn 0 ₫');
    return;
  }

  // Đảm bảo quyền ghi FileSystemFileHandle được cấp ngay trong User Gesture khi bấm Lưu CRUD
  await ensureExcelPermissionOnUserGesture(true);

  const cat = getCategory(state.modalForm.categoryId);
  const rawNote = (state.modalForm.note && state.modalForm.note.trim()) ? state.modalForm.note.trim() : '';
  const title = rawNote || cat.name;
  const note = rawNote || title;
  const date = normalizeDateString((state.modalForm.date && state.modalForm.date.trim()) ? state.modalForm.date.trim() : getTodayDateString());
  const wallet = state.modalForm.walletName || 'Techcombank Chính';
  const activeWs = (state.data.workspaces || []).find(w => w.id === state.data.activeWorkspace) || { id: 'personal', fullName: state.data.userName };
  const activeUserId = activeWs.id || 'personal';
  const walletId = resolveWalletIdForUser(activeUserId, wallet);
  const updatedAt = getDateTimeStringNow();

  if (state.modalForm.editTxId) {
    const existing = (state.data.transactions || []).find(t => t.id === state.modalForm.editTxId);
    if (existing) {
      existing.title = title;
      existing.note = note;
      existing.categoryId = cat.id;
      existing.categoryName = cat.name;
      existing.date = date;
      existing.periodMonth = extractPeriodMonth(date).period;
      existing.amount = amount;
      existing.type = state.modalForm.type;
      existing.walletId = walletId;
      existing.wallet = wallet;
      existing.status = 'Y';
      existing.updatedAt = updatedAt;
    }
    state.modalOpen = false;
    pushActivityNotification({
      type: 'TX',
      title: `Cập nhật giao dịch: ${title}`,
      desc: `${state.modalForm.type === 'INCOME' ? '+' : '-'}${formatVND(amount)} • Ví ${wallet} • ${date}`,
      time: `Vừa xong (${getTimeStringNow()})`,
      icon: cat.icon || 'receipt',
      color: cat.color || '#0284C7',
      bg: cat.bg || '#E0F2FE',
      actionType: 'EDIT_TX',
      targetId: state.modalForm.editTxId
    });
    renderApp();
    await saveState(false, true);
    showToast(`Đã cập nhật giao dịch: ${title} (${state.modalForm.type === 'INCOME' ? '+' : '-'}${formatVND(amount)})`);
    return;
  }

  const newTxId = 'tx_' + Date.now();
  state.data.transactions.unshift({
    id: newTxId,
    userId: activeUserId,
    userName: activeWs.fullName || activeWs.name || 'Nguyễn Thanh Đức',
    title,
    note,
    categoryId: cat.id,
    categoryName: cat.name,
    date,
    periodMonth: extractPeriodMonth(date).period,
    amount,
    type: state.modalForm.type,
    walletId,
    wallet,
    status: 'Y',
    updatedAt
  });

  state.txPage = 1;
  state.homeTxPage = 1;
  state.modalOpen = false;
  pushActivityNotification({
    type: 'TX',
    title: `Biến động số dư: ${state.modalForm.type === 'INCOME' ? '+' : '-'}${formatVND(amount)}`,
    desc: `${title} (${cat.name}) • Nguồn tiền: ${wallet}`,
    time: `Vừa xong (${getTimeStringNow()})`,
    icon: cat.icon || 'wallet',
    color: state.modalForm.type === 'INCOME' ? '#10B981' : '#F97316',
    bg: state.modalForm.type === 'INCOME' ? '#DCFCE7' : '#FFEDD5',
    actionType: 'EDIT_TX',
    targetId: newTxId
  });
  renderApp();
  await saveState(false, true);
  showToast(`Đã lưu: ${title} (${state.modalForm.type === 'INCOME' ? '+' : '-'}${formatVND(amount)})`);
};

window.deleteTx = function(id, event) {
  if (event) event.stopPropagation();
  state.deleteConfirm = {
    open: true,
    txId: id
  };
  renderApp();
};

window.closeDeleteConfirmModal = function() {
  state.deleteConfirm = {
    open: false,
    txId: null
  };
  renderApp();
};

window.confirmDeleteTx = async function() {
  const id = state.deleteConfirm && state.deleteConfirm.txId;
  if (!id) {
    window.closeDeleteConfirmModal();
    return;
  }
  await ensureExcelPermissionOnUserGesture(true);
  const targetTx = (state.data.transactions || []).find(t => t.id === id);
  if (!Array.isArray(state.data.deletedTxIds)) state.data.deletedTxIds = [];
  if (!state.data.deletedTxIds.includes(id)) state.data.deletedTxIds.push(id);
  state.data.transactions = (state.data.transactions || []).filter(t => t.id !== id);
  state.deleteConfirm = { open: false, txId: null };
  if (state.modalOpen && state.modalForm && state.modalForm.editTxId === id) {
    state.modalOpen = false;
  }
  if (targetTx) {
    pushActivityNotification({
      type: 'ALERT',
      title: `Đã xóa giao dịch: ${targetTx.title}`,
      desc: `Khoản ${targetTx.type === 'INCOME' ? 'thu' : 'chi'} ${formatVND(targetTx.amount)} (${targetTx.date}) đã được gỡ khỏi sổ`,
      time: `Vừa xong (${getTimeStringNow()})`,
      icon: 'trash',
      color: '#EF4444',
      bg: '#FEE2E2',
      actionType: 'PAGE',
      targetId: 'transactions'
    });
  }
  renderApp();
  await saveState(false, true);
  showToast(targetTx ? `Đã xóa giao dịch "${targetTx.title}"` : 'Đã xóa giao dịch');
};

// ============================================================================
// Smart Notification Center Engine (Danh sách Thông báo Biến động & Cảnh báo)
// ============================================================================
function pushActivityNotification(item) {
  if (!state.notificationCenter) return;
  const notif = {
    id: 'notif_live_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
    ...item
  };
  state.notificationCenter.customLogs.unshift(notif);
  state.notificationCenter.customLogs = state.notificationCenter.customLogs.slice(0, 15);
}

function getNotificationsList(stats) {
  const nc = state.notificationCenter || { readIds: {}, customLogs: [] };
  const list = [];

  // 1. Live activity notifications created during session
  (nc.customLogs || []).forEach(n => {
    list.push({
      ...n,
      isRead: Boolean(nc.readIds[n.id])
    });
  });

  // 2. Smart Budget & Spending Alerts
  const expenseCats = (state.data.categories || []).filter(c => !c.isIncome && c.limit);
  expenseCats.forEach(c => {
    const spent = (stats && stats.byCat && stats.byCat[c.id]) || 0;
    if (spent <= 0) return;
    const pct = Math.round((spent / c.limit) * 100);
    if (pct >= 40) {
      const id = `notif_budget_${c.id}`;
      const isOver = pct >= 100;
      list.push({
        id,
        type: 'ALERT',
        title: isOver
          ? `⚠️ Vượt hạn mức ngân sách: ${c.name} (${pct}%)`
          : `📊 Theo dõi ngân sách: ${c.name} đã dùng ${pct}%`,
        desc: `Đã chi ${formatVND(spent)} / Hạn mức ${formatVND(c.limit)}`,
        time: 'Tháng này',
        icon: c.icon || 'shieldCheck',
        color: isOver ? '#EF4444' : '#F97316',
        bg: isOver ? '#FEE2E2' : '#FFEDD5',
        actionType: 'PAGE',
        targetId: 'budgets',
        isRead: Boolean(nc.readIds[id])
      });
    }
  });

  // 3. Recent Transactions Balance Notifications
  getActiveUserTransactions().slice(0, 8).forEach(t => {
    const id = `notif_tx_${t.id}`;
    const cat = getCategory(t.categoryId);
    const isInc = t.type === 'INCOME';
    list.push({
      id,
      type: 'TX',
      title: `Biến động số dư: ${isInc ? '+' : '-'}${formatVND(t.amount)}`,
      desc: `${t.title} • ${t.categoryName} (${t.wallet || 'Techcombank Chính'})`,
      time: t.date || 'Gần đây',
      icon: cat.icon || 'receipt',
      color: isInc ? '#10B981' : (cat.color || '#F97316'),
      bg: isInc ? '#DCFCE7' : (cat.bg || '#FFEDD5'),
      actionType: 'EDIT_TX',
      targetId: t.id,
      isRead: Boolean(nc.readIds[id])
    });
  });

  // 4. Savings Goals Progress Notifications
  getActiveUserGoals().slice(0, 2).forEach(g => {
    const id = `notif_goal_${g.id}`;
    const pct = Math.min(100, Math.round((g.current / g.target) * 100));
    list.push({
      id,
      type: 'ALERT',
      title: `🎯 Mục tiêu "${g.title}" đạt ${pct}%`,
      desc: `Đã tích lũy ${formatVND(g.current)} / ${formatVND(g.target)}`,
      time: 'Mục tiêu tiết kiệm',
      icon: g.icon || 'plane',
      color: g.color || '#0284C7',
      bg: g.bg || '#E0F2FE',
      actionType: 'PAGE',
      targetId: 'goals',
      isRead: Boolean(nc.readIds[id])
    });
  });

  return list;
}

window.toggleNotificationPopover = function(event) {
  if (event) event.stopPropagation();
  if (state.dashboardFilter) state.dashboardFilter.openSelect = null;
  state.notificationCenter.open = !state.notificationCenter.open;
  renderApp();
};

window.setNotificationTab = function(tab, event) {
  if (event) event.stopPropagation();
  state.notificationCenter.filterTab = tab;
  renderApp();
};

window.markAllNotificationsRead = function(event) {
  if (event) event.stopPropagation();
  const all = getNotificationsList(computeStats());
  all.forEach(n => {
    state.notificationCenter.readIds[n.id] = true;
  });
  renderApp();
  showToast('Đã đánh dấu đọc tất cả thông báo');
};

window.handleNotificationItemClick = function(notifId, actionType, targetId, event) {
  if (event) event.stopPropagation();
  state.notificationCenter.readIds[notifId] = true;
  state.notificationCenter.open = false;
  if (actionType === 'EDIT_TX' && targetId) {
    const exists = (state.data.transactions || []).some(t => t.id === targetId);
    if (exists) {
      window.openEditTxModal(targetId);
      return;
    }
  }
  if (actionType === 'PAGE' && targetId) {
    window.navigate(targetId);
    return;
  }
  renderApp();
};

function renderNotificationBellHTML(stats) {
  const nc = state.notificationCenter || { open: false, filterTab: 'ALL', readIds: {} };
  const allNotifs = getNotificationsList(stats);
  const unreadCount = allNotifs.filter(n => !n.isRead).length;
  const filteredNotifs = allNotifs.filter(n => {
    if (nc.filterTab === 'UNREAD') return !n.isRead;
    if (nc.filterTab === 'TX') return n.type === 'TX';
    if (nc.filterTab === 'ALERT') return n.type === 'ALERT';
    return true;
  });

  return `
    <div class="relative shrink-0" onclick="event.stopPropagation()">
      <button
        type="button"
        onclick="toggleNotificationPopover(event)"
        class="w-10 h-10 rounded-full ${nc.open ? 'bg-orange-50 text-[#F97316] ring-2 ring-[#F97316]/30' : 'bg-slate-100 hover:bg-slate-200/70 text-slate-600'} flex items-center justify-center relative transition cursor-pointer"
        title="Danh sách thông báo (${unreadCount} chưa đọc)"
      >
        ${SVG.bell}
        ${unreadCount > 0 ? `
          <span class="min-w-[18px] h-[18px] px-1 rounded-full bg-[#F97316] text-white font-num text-[10px] font-extrabold flex items-center justify-center absolute -top-0.5 -right-0.5 shadow-xs border-2 border-white">
            ${unreadCount > 9 ? '9+' : unreadCount}
          </span>
        ` : ''}
      </button>

      ${nc.open ? `
        <div class="absolute right-0 top-[calc(100%+10px)] w-[340px] sm:w-[390px] bg-white/98 backdrop-blur-xl rounded-2xl border border-slate-200/90 shadow-2xl z-50 overflow-hidden animate-modal-pop">
          <!-- Popover Header -->
          <div class="px-4 pt-3.5 pb-2.5 border-b border-slate-100 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <h4 class="text-sm font-extrabold text-[#1B365D]">Thông báo của bạn</h4>
              <span class="px-2 py-0.5 rounded-full ${unreadCount > 0 ? 'bg-orange-50 text-[#F97316]' : 'bg-slate-100 text-slate-500'} text-[10px] font-extrabold font-num">
                ${unreadCount} mới
              </span>
            </div>
            ${unreadCount > 0 ? `
              <button
                type="button"
                onclick="markAllNotificationsRead(event)"
                class="text-[11px] font-bold text-[#0284C7] hover:text-[#F97316] transition"
              >
                ✓ Đánh dấu đã đọc hết
              </button>
            ` : `
              <span class="text-[11px] font-semibold text-emerald-600">Đã đọc tất cả</span>
            `}
          </div>

          <!-- Filter Tabs -->
          <div class="px-3 py-2 bg-slate-50/80 border-b border-slate-100 flex items-center gap-1">
            ${[
              { id: 'ALL', label: `Tất cả (${allNotifs.length})` },
              { id: 'UNREAD', label: `Chưa đọc (${unreadCount})` },
              { id: 'TX', label: 'Biến động số dư' },
              { id: 'ALERT', label: 'Ngân sách & Mục tiêu' }
            ].map(t => `
              <button
                type="button"
                onclick="setNotificationTab('${t.id}', event)"
                class="px-2.5 py-1 rounded-lg text-[11px] font-bold transition whitespace-nowrap ${
                  nc.filterTab === t.id
                    ? 'bg-[#1B365D] text-white shadow-2xs'
                    : 'text-slate-500 hover:text-[#1B365D] hover:bg-white'
                }"
              >
                ${t.label}
              </button>
            `).join('')}
          </div>

          <!-- Notification Items List -->
          <div class="max-h-[360px] overflow-y-auto divide-y divide-slate-100">
            ${filteredNotifs.length === 0 ? `
              <div class="py-10 px-4 text-center">
                <div class="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-2">
                  ${SVG.bell}
                </div>
                <p class="text-xs font-bold text-slate-600">Không có thông báo nào trong mục này</p>
                <p class="text-[11px] text-slate-400 mt-0.5">Mọi biến động thu chi và cảnh báo ngân sách sẽ hiển thị tại đây</p>
              </div>
            ` : filteredNotifs.map(n => `
              <div
                onclick="handleNotificationItemClick('${n.id}', '${n.actionType}', '${n.targetId}', event)"
                class="px-4 py-3 flex items-start gap-3 cursor-pointer transition ${
                  n.isRead ? 'bg-white hover:bg-slate-50/90 opacity-80' : 'bg-orange-50/35 hover:bg-orange-50/70'
                }"
              >
                <div
                  class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 shadow-2xs"
                  style="background:${n.bg}; color:${n.color}"
                >
                  ${SVG[n.icon] || SVG.bell}
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-start justify-between gap-2">
                    <p class="text-xs font-extrabold text-[#1B365D] leading-snug">${n.title}</p>
                    ${!n.isRead ? `<span class="w-2 h-2 rounded-full bg-[#F97316] shrink-0 mt-1"></span>` : ''}
                  </div>
                  <p class="text-[11px] text-slate-500 mt-0.5 leading-relaxed">${n.desc}</p>
                  <span class="text-[10px] font-bold text-slate-400 font-num mt-1 inline-block">${n.time}</span>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Footer -->
          <div class="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px]">
            <span class="text-slate-400 font-medium">Bấm vào thông báo để xem chi tiết</span>
            <button
              type="button"
              onclick="state.notificationCenter.open = false; navigate('transactions');"
              class="font-bold text-[#F97316] hover:underline"
            >
              Xem sổ giao dịch →
            </button>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

const GOAL_THEMES = [
  { id: 'emerald', label: 'Quỹ dự phòng', icon: 'shieldCheck', color: '#10B981', bg: '#DCFCE7' },
  { id: 'sky', label: 'Du lịch', icon: 'plane', color: '#0284C7', bg: '#E0F2FE' },
  { id: 'violet', label: 'Công nghệ', icon: 'laptop', color: '#8B5CF6', bg: '#EDE9FE' },
  { id: 'orange', label: 'Mua sắm lớn', icon: 'bag', color: '#F97316', bg: '#FFEDD5' },
  { id: 'pink', label: 'Gia đình & Sức khỏe', icon: 'heart', color: '#EC4899', bg: '#FCE7F3' }
];

function syncGoalModalInputs() {
  const titleEl = document.getElementById('goal-title-input');
  const targetEl = document.getElementById('goal-target-input');
  const currentEl = document.getElementById('goal-current-input');
  const depositEl = document.getElementById('goal-deposit-input');
  if (titleEl) state.goalModalForm.title = titleEl.value;
  if (targetEl) state.goalModalForm.target = formatNumberWithDots(targetEl.value);
  if (currentEl) state.goalModalForm.current = formatNumberWithDots(currentEl.value);
  if (depositEl) state.goalModalForm.depositAmount = formatNumberWithDots(depositEl.value);
}

window.openGoalModal = function(mode = 'CREATE', id = null) {
  if (mode === 'CREATE') {
    state.goalModalForm = {
      mode: 'CREATE',
      goalId: null,
      catId: null,
      title: '',
      target: '20.000.000',
      current: '2.000.000',
      depositAmount: '1.000.000',
      themeId: 'emerald'
    };
  } else if (mode === 'EDIT') {
    const g = state.data.goals.find(x => x.id === id);
    if (!g) return;
    const matchedTheme = GOAL_THEMES.find(t => t.icon === g.icon) || GOAL_THEMES[0];
    state.goalModalForm = {
      mode: 'EDIT',
      goalId: g.id,
      catId: null,
      title: g.title,
      target: formatNumberWithDots(g.target),
      current: formatNumberWithDots(g.current),
      depositAmount: '1.000.000',
      themeId: matchedTheme.id
    };
  } else if (mode === 'DEPOSIT') {
    const g = state.data.goals.find(x => x.id === id);
    if (!g) return;
    state.goalModalForm = {
      mode: 'DEPOSIT',
      goalId: g.id,
      catId: null,
      title: g.title,
      target: formatNumberWithDots(g.target),
      current: formatNumberWithDots(g.current),
      depositAmount: '1.000.000',
      themeId: 'emerald'
    };
  } else if (mode === 'BUDGET_LIMIT') {
    const c = state.data.categories.find(x => x.id === id);
    if (!c) return;
    state.goalModalForm = {
      mode: 'BUDGET_LIMIT',
      goalId: null,
      catId: c.id,
      title: c.name,
      target: formatNumberWithDots(c.limit || 2000000),
      current: '0',
      depositAmount: '0',
      themeId: 'orange'
    };
  }

  state.goalModalOpen = true;
  renderApp();
  setTimeout(() => {
    const firstInput = document.getElementById(
      mode === 'CREATE' || mode === 'EDIT'
        ? 'goal-title-input'
        : mode === 'DEPOSIT'
          ? 'goal-deposit-input'
          : 'goal-target-input'
    );
    if (firstInput) firstInput.focus();
  }, 40);
};

window.closeGoalModal = function() {
  state.goalModalOpen = false;
  renderApp();
};

window.setGoalModalTheme = function(themeId) {
  syncGoalModalInputs();
  state.goalModalForm.themeId = themeId;
  renderApp();
};

window.handleGoalAmountInput = function(el, field) {
  if (!el) return;
  const formatted = formatNumberWithDots(el.value);
  state.goalModalForm[field] = formatted;
  if (el.value !== formatted) {
    el.value = formatted;
  }
};

window.setGoalPresetAmount = function(val, field, inputId) {
  syncGoalModalInputs();
  const formatted = formatNumberWithDots(val);
  state.goalModalForm[field] = formatted;
  renderApp();
  setTimeout(() => {
    const el = document.getElementById(inputId);
    if (el) el.focus();
  }, 20);
};

window.submitGoalModal = async function(e) {
  if (e) e.preventDefault();
  syncGoalModalInputs();
  const gf = state.goalModalForm;

  // Đảm bảo quyền ghi FileSystemFileHandle được cấp ngay trong User Gesture
  await ensureExcelPermissionOnUserGesture(true);

  if (gf.mode === 'BUDGET_LIMIT') {
    const cat = state.data.categories.find(x => x.id === gf.catId);
    if (!cat) return;
    let newLimit = parseInt(String(gf.target || '').replace(/\D/g, ''), 10) || 0;
    if (newLimit > 0 && newLimit < 1000) newLimit *= 1000;
    if (newLimit <= 0) {
      showToast('Vui lòng nhập hạn mức ngân sách lớn hơn 0 ₫');
      return;
    }
    cat.limit = newLimit;
    state.goalModalOpen = false;
    renderApp();
    await saveState(false, true);
    showToast(`Đã cập nhật hạn mức "${cat.name}": ${formatVND(newLimit)}`);
    return;
  }

  if (gf.mode === 'DEPOSIT') {
    const g = state.data.goals.find(x => x.id === gf.goalId);
    if (!g) return;
    let dep = parseInt(String(gf.depositAmount || '').replace(/\D/g, ''), 10) || 0;
    if (dep > 0 && dep < 1000) dep *= 1000;
    if (dep <= 0) {
      showToast('Vui lòng nhập số tiền nạp lớn hơn 0 ₫');
      return;
    }
    const nowStr = getDateTimeStringNow();
    g.current = (Number(g.current) || 0) + dep;
    g.goalStatus = g.current >= g.target ? 'COMPLETED' : 'ACTIVE';
    g.updatedAt = nowStr;
    if (!Array.isArray(state.data.goalDeposits)) state.data.goalDeposits = [];
    state.data.goalDeposits.unshift({
      id: 'dep_' + Date.now(),
      goalId: g.id,
      goalTitle: g.title,
      userId: g.userId || state.data.activeWorkspace || 'personal',
      userName: g.userName || state.data.userName || 'Nguyễn Thanh Đức',
      amount: dep,
      afterBalance: g.current,
      date: nowStr,
      status: 'Y'
    });
    state.goalModalOpen = false;
    renderApp();
    await saveState(false, true);
    showToast(`Đã nạp thêm +${formatVND(dep)} vào mục tiêu "${g.title}"`);
    return;
  }

  const title = (gf.title || '').trim();
  if (!title) {
    showToast('Vui lòng nhập tên mục tiêu cá nhân');
    return;
  }

  let targetAmt = parseInt(String(gf.target || '').replace(/\D/g, ''), 10) || 0;
  if (targetAmt > 0 && targetAmt < 1000) targetAmt *= 1000;
  if (targetAmt <= 0) {
    showToast('Vui lòng nhập số tiền mục tiêu lớn hơn 0 ₫');
    return;
  }

  let currentAmt = parseInt(String(gf.current || '').replace(/\D/g, ''), 10) || 0;
  if (currentAmt > 0 && currentAmt < 1000) currentAmt *= 1000;

  const theme = GOAL_THEMES.find(t => t.id === gf.themeId) || GOAL_THEMES[0];
  const nowStr = getDateTimeStringNow();

  if (gf.mode === 'EDIT') {
    const g = state.data.goals.find(x => x.id === gf.goalId);
    if (g) {
      g.title = title;
      g.target = targetAmt;
      g.current = currentAmt;
      g.themeId = theme.id;
      g.themeLabel = theme.label;
      g.icon = theme.icon;
      g.color = theme.color;
      g.bg = theme.bg;
      g.goalStatus = currentAmt >= targetAmt ? 'COMPLETED' : 'ACTIVE';
      g.updatedAt = nowStr;
    }
    showToast(`Đã cập nhật mục tiêu "${title}"`);
  } else {
    state.data.goals.unshift({
      id: 'g_' + Date.now(),
      userId: state.data.activeWorkspace || 'personal',
      userName: state.data.userName || 'Nguyễn Thanh Đức',
      title,
      target: targetAmt,
      current: currentAmt,
      themeId: theme.id,
      themeLabel: theme.label,
      icon: theme.icon,
      color: theme.color,
      bg: theme.bg,
      goalStatus: currentAmt >= targetAmt ? 'COMPLETED' : 'ACTIVE',
      updatedAt: nowStr
    });
    showToast(`Đã thêm mục tiêu mới: "${title}"`);
  }

  state.goalModalOpen = false;
  renderApp();
  await saveState(false, true);
};

window.deleteGoal = async function(goalId) {
  await ensureExcelPermissionOnUserGesture(true);
  const g = state.data.goals.find(x => x.id === goalId);
  if (!Array.isArray(state.data.deletedGoalIds)) state.data.deletedGoalIds = [];
  if (!state.data.deletedGoalIds.includes(goalId)) state.data.deletedGoalIds.push(goalId);
  state.data.goals = state.data.goals.filter(x => x.id !== goalId);
  renderApp();
  await saveState(false, true);
  if (g) showToast(`Đã xóa mục tiêu "${g.title}"`);
};

window.depositToGoal = function(goalId) {
  window.openGoalModal('DEPOSIT', goalId);
};

// ============================================================================
// MASTER DATA: CATEGORY MANAGEMENT HANDLERS (Khoản mục Thu - Chi)
// ============================================================================
const CATEGORY_THEMES = [
  { id: 'fuel', label: 'Xăng xe', icon: 'fuel', color: '#EA580C', bg: '#FFEDD5' },
  { id: 'coffee', label: 'Cà phê', icon: 'coffee', color: '#B45309', bg: '#FEF3C7' },
  { id: 'homeCat', label: 'Tiền nhà', icon: 'homeCat', color: '#4F46E5', bg: '#E0E7FF' },
  { id: 'bolt', label: 'Điện nước', icon: 'bolt', color: '#CA8A04', bg: '#FEF9C3' },
  { id: 'gift', label: 'Hiếu hỉ', icon: 'gift', color: '#E11D48', bg: '#FFE4E6' },
  { id: 'food', label: 'Ăn uống', icon: 'food', color: '#F59E0B', bg: '#FEF3C7' },
  { id: 'car', label: 'Đi lại', icon: 'car', color: '#0EA5E9', bg: '#E0F2FE' },
  { id: 'bag', label: 'Mua sắm', icon: 'bag', color: '#EC4899', bg: '#FCE7F3' },
  { id: 'bill', label: 'Hóa đơn', icon: 'bill', color: '#8B5CF6', bg: '#EDE9FE' },
  { id: 'game', label: 'Giải trí', icon: 'game', color: '#10B981', bg: '#D1FAE5' },
  { id: 'heart', label: 'Sức khỏe', icon: 'heart', color: '#EF4444', bg: '#FEE2E2' },
  { id: 'plane', label: 'Du lịch', icon: 'plane', color: '#0284C7', bg: '#E0F2FE' },
  { id: 'laptop', label: 'Học tập', icon: 'laptop', color: '#6366F1', bg: '#E0E7FF' },
  { id: 'wallet', label: 'Lương & Ví', icon: 'wallet', color: '#059669', bg: '#D1FAE5' },
  { id: 'chartBar', label: 'Đầu tư', icon: 'chartBar', color: '#D97706', bg: '#FEF3C7' },
  { id: 'receipt', label: 'Khác', icon: 'receipt', color: '#64748B', bg: '#F1F5F9' }
];

const QUICK_CATEGORY_PRESETS = {
  EXPENSE: [
    { name: 'Xăng', themeId: 'fuel', limit: 1000000 },
    { name: 'Cà phê', themeId: 'coffee', limit: 800000 },
    { name: 'Tiền nhà', themeId: 'homeCat', limit: 4500000 },
    { name: 'Điện nước', themeId: 'bolt', limit: 1200000 },
    { name: 'Hiếu hỉ', themeId: 'gift', limit: 1500000 },
    { name: 'Du lịch', themeId: 'plane', limit: 3000000 }
  ],
  INCOME: [
    { name: 'Làm thêm', themeId: 'laptop', limit: 0 },
    { name: 'Cổ tức', themeId: 'chartBar', limit: 0 },
    { name: 'Cho thuê', themeId: 'homeCat', limit: 0 },
    { name: 'Tiền thưởng', themeId: 'gift', limit: 0 }
  ]
};

function buildCategoryIdFromName(name) {
  const slug = String(name || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/gi, 'd')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 18);
  return 'cat_' + (slug || Date.now().toString().slice(-5));
}

function syncCategoryModalInputs() {
  if (!state.categoryModalForm) return;
  const nameEl = document.getElementById('cat-modal-name-input');
  const limitEl = document.getElementById('cat-modal-limit-input');
  if (nameEl) state.categoryModalForm.name = nameEl.value;
  if (limitEl) state.categoryModalForm.limit = formatNumberWithDots(limitEl.value);
}

window.openCategoryModal = function(mode = 'CREATE', catId = null, defaultType = null) {
  if (state.modalOpen) {
    syncModalInputsToState();
  }
  if (mode === 'EDIT' && catId) {
    const c = (state.data.categories || []).find(x => x.id === catId);
    if (!c) return;
    const matchedTheme = CATEGORY_THEMES.find(t => t.icon === c.icon && t.color === c.color)
      || CATEGORY_THEMES.find(t => t.icon === c.icon)
      || CATEGORY_THEMES[0];
    state.categoryModalForm = {
      mode: 'EDIT',
      editId: c.id,
      name: c.name || '',
      isIncome: Boolean(c.isIncome),
      limit: formatNumberWithDots(c.limit || 2000000),
      themeId: matchedTheme.id
    };
  } else {
    const isInc = defaultType === 'INCOME';
    state.categoryModalForm = {
      mode: 'CREATE',
      editId: null,
      name: '',
      isIncome: isInc,
      limit: '1.000.000',
      themeId: isInc ? 'wallet' : 'fuel'
    };
  }
  state.categoryModalOpen = true;
  renderApp();
  setTimeout(() => {
    const el = document.getElementById('cat-modal-name-input');
    if (el) el.focus();
  }, 40);
};

window.closeCategoryModal = function() {
  state.categoryModalOpen = false;
  renderApp();
};

window.setCategoryModalType = function(isInc) {
  syncCategoryModalInputs();
  state.categoryModalForm.isIncome = Boolean(isInc);
  if (isInc && (state.categoryModalForm.themeId === 'food' || state.categoryModalForm.themeId === 'fuel')) {
    state.categoryModalForm.themeId = 'wallet';
  } else if (!isInc && state.categoryModalForm.themeId === 'wallet') {
    state.categoryModalForm.themeId = 'fuel';
  }
  renderApp();
};

window.setCategoryModalTheme = function(themeId) {
  syncCategoryModalInputs();
  state.categoryModalForm.themeId = themeId;
  renderApp();
};

window.applyQuickCategoryPreset = function(name, themeId, limitVal) {
  state.categoryModalForm.name = name;
  state.categoryModalForm.themeId = themeId;
  if (limitVal > 0) {
    state.categoryModalForm.limit = formatNumberWithDots(limitVal);
  }
  renderApp();
  setTimeout(() => {
    const el = document.getElementById('cat-modal-name-input');
    if (el) {
      el.focus();
      const len = el.value.length;
      try { el.setSelectionRange(len, len); } catch (e) {}
    }
  }, 20);
};

window.handleCategoryNameInput = function(el) {
  if (!el) return;
  const val = el.value;
  state.categoryModalForm.name = val;
  const q = val.toLowerCase();
  let autoTheme = null;
  if (q.includes('xăng') || q.includes('xang') || q.includes('dầu')) autoTheme = 'fuel';
  else if (q.includes('cà phê') || q.includes('cafe') || q.includes('coffee') || q.includes('trà')) autoTheme = 'coffee';
  else if (q.includes('nhà') || q.includes('trọ') || q.includes('thuê')) autoTheme = 'homeCat';
  else if (q.includes('điện') || q.includes('nước') || q.includes('mạng') || q.includes('wifi')) autoTheme = 'bolt';
  else if (q.includes('quà') || q.includes('cưới') || q.includes('hiếu') || q.includes('thưởng')) autoTheme = 'gift';
  else if (q.includes('xe') || q.includes('grab') || q.includes('taxi')) autoTheme = 'car';

  if (autoTheme && state.categoryModalForm.themeId !== autoTheme) {
    state.categoryModalForm.themeId = autoTheme;
    document.querySelectorAll('[data-cat-theme-btn]').forEach(btn => {
      const tid = btn.getAttribute('data-cat-theme-btn');
      const isInc = Boolean(state.categoryModalForm.isIncome);
      btn.className = 'cat-item-btn py-1.5 px-1 flex flex-col items-center ' +
        (tid === autoTheme ? (isInc ? 'active-income' : 'active-expense') : '');
    });
  }
};

window.handleCategoryLimitInput = function(el) {
  if (!el) return;
  const formatted = formatNumberWithDots(el.value);
  state.categoryModalForm.limit = formatted;
  if (el.value !== formatted) {
    el.value = formatted;
  }
};

window.setCategoryPresetLimit = function(val) {
  syncCategoryModalInputs();
  state.categoryModalForm.limit = formatNumberWithDots(val);
  renderApp();
  setTimeout(() => {
    const el = document.getElementById('cat-modal-limit-input');
    if (el) el.focus();
  }, 20);
};

window.submitCategoryModal = async function(e) {
  if (e) e.preventDefault();
  syncCategoryModalInputs();
  const cf = state.categoryModalForm;
  const name = (cf.name || '').trim();
  if (!name) {
    showToast('Vui lòng nhập tên khoản mục (VD: Ăn uống, Đi lại, Tiền nhà...)');
    return;
  }

  let limitAmt = parseInt(String(cf.limit || '').replace(/\D/g, ''), 10) || 0;
  if (limitAmt > 0 && limitAmt < 1000) limitAmt *= 1000;
  if (!cf.isIncome && limitAmt <= 0) {
    limitAmt = 2000000;
  }

  await ensureExcelPermissionOnUserGesture(true);
  const theme = CATEGORY_THEMES.find(t => t.id === cf.themeId) || CATEGORY_THEMES[0];

  if (cf.mode === 'EDIT' && cf.editId) {
    const cat = (state.data.categories || []).find(x => x.id === cf.editId);
    if (cat) {
      cat.name = name;
      cat.color = theme.color;
      cat.bg = theme.bg;
      cat.icon = theme.icon;
      if (cf.isIncome) {
        cat.isIncome = true;
        delete cat.limit;
      } else {
        delete cat.isIncome;
        cat.limit = limitAmt;
      }
      // Đồng bộ tên danh mục trên các giao dịch đã gắn mã danh mục này
      (state.data.transactions || []).forEach(tx => {
        if (tx.categoryId === cat.id) {
          tx.categoryName = cat.name;
        }
      });
    }
    state.categoryModalOpen = false;
    renderApp();
    await saveState(false, true);
    showToast(`Đã cập nhật khoản mục "${name}" (Đã lưu Excel)`);
    return;
  }

  // Tạo mới Khoản mục Master Data
  let newId = buildCategoryIdFromName(name);
  if ((state.data.categories || []).some(c => c.id === newId)) {
    newId = newId + '_' + Date.now().toString().slice(-3);
  }

  const newCat = {
    id: newId,
    name,
    color: theme.color,
    bg: theme.bg,
    icon: theme.icon,
    ...(cf.isIncome ? { isIncome: true } : { limit: limitAmt })
  };

  if (Array.isArray(state.data.deletedCatIds)) {
    state.data.deletedCatIds = state.data.deletedCatIds.filter(id => id !== newId);
  }
  state.data.categories.push(newCat);

  // Nếu đang mở popup Thêm giao dịch thì tự động chọn ngay khoản mục vừa tạo
  if (state.modalOpen && state.modalForm) {
    state.modalForm.type = cf.isIncome ? 'INCOME' : 'EXPENSE';
    state.modalForm.categoryId = newCat.id;
  }

  state.categoryModalOpen = false;
  renderApp();
  await saveState(false, true);
  showToast(`Đã thêm khoản mục "${name}" vào Master Data & Excel!`);
};

window.deleteCategory = async function(catId, event) {
  if (event) event.stopPropagation();
  const cats = state.data.categories || [];
  const target = cats.find(c => c.id === catId);
  if (!target) return;

  const sameGroupCount = cats.filter(c => Boolean(c.isIncome) === Boolean(target.isIncome)).length;
  if (sameGroupCount <= 1) {
    showToast('Cần giữ lại tối thiểu 1 khoản mục trong nhóm này!');
    return;
  }

  const usedCount = (state.data.transactions || []).filter(t => t.categoryId === catId && t.status !== 'D').length;
  if (usedCount > 0) {
    showToast(`Khoản mục "${target.name}" đang có ${usedCount} giao dịch. Bạn có thể bấm "Sửa" để đổi tên!`);
    return;
  }

  await ensureExcelPermissionOnUserGesture(true);
  if (!Array.isArray(state.data.deletedCatIds)) state.data.deletedCatIds = [];
  if (!state.data.deletedCatIds.includes(catId)) state.data.deletedCatIds.push(catId);
  state.data.categories = cats.filter(c => c.id !== catId);
  if (state.txCategoryFilter === catId) {
    state.txCategoryFilter = 'ALL';
  }
  renderApp();
  await saveState(false, true);
  showToast(`Đã xóa khoản mục "${target.name}" khỏi Master Data`);
};

window.resetPrototype = function() {
  try {
    if (window.localStorage) {
      localStorage.removeItem('DESUN_APP_INDIVIDUAL_V2');
      localStorage.removeItem('DESUN_APP_INDIVIDUAL_V3');
    }
  } catch (e) {}
  state.data = JSON.parse(JSON.stringify(INITIAL_DATA));
  state.loginForm.selectedWsId = 'personal';
  state.loginForm.email = 'duc.nguyen@desun.vn';
  renderApp();
  showToast('Đã khôi phục dữ liệu mặc định ban đầu');
};

// ============================================================================
// Reusable Charts & Components
// ============================================================================
function renderDonutChartSVG(breakdown, totalAmount, size = 176, isIncomeMode = false) {
  const r = 60;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * r;
  let offsetPct = 0;
  const activeCatId = state.dashboardFilter && state.dashboardFilter.activeCatId;
  const activeItem = activeCatId ? breakdown.find(x => x.id === activeCatId) : null;

  const segments = breakdown.map(item => {
    const segLen = Math.max(0, (item.pct / 100) * circumference - (breakdown.length > 1 ? 3 : 0));
    const dashArray = `${segLen} ${circumference}`;
    const dashOffset = -((offsetPct / 100) * circumference);
    offsetPct += item.pct;
    const isDimmed = activeCatId && activeCatId !== item.id;
    const isSelected = activeCatId && activeCatId === item.id;
    return `
      <circle
        cx="${cx}"
        cy="${cy}"
        r="${r}"
        fill="transparent"
        stroke="${item.color}"
        stroke-width="${isSelected ? 26 : 21}"
        stroke-linecap="round"
        stroke-dasharray="${dashArray}"
        stroke-dashoffset="${dashOffset}"
        class="donut-segment"
        style="opacity:${isDimmed ? '0.32' : '1'}"
        onclick="toggleDashCatSpotlight('${item.id}')"
      >
        <title>${item.name}: ${formatVND(item.amount)} (${item.pct}%)</title>
      </circle>
    `;
  }).join('');

  const centerTitle = activeItem
    ? activeItem.name
    : (isIncomeMode ? 'Tổng khoản thu' : 'Tổng chi tiêu');
  const centerValue = activeItem
    ? formatVND(activeItem.amount)
    : formatVND(totalAmount);
  const centerSub = activeItem
    ? `${activeItem.pct}% • ${activeItem.count || 0} giao dịch`
    : `${breakdown.reduce((s, x) => s + (x.count || 0), 0)} khoản phát sinh`;

  return `
    <div class="relative inline-flex items-center justify-center shrink-0 select-none" style="width:${size}px; height:${size}px">
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" class="donut-svg-anim">
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="transparent" stroke="#F1F5F9" stroke-width="21" />
        ${segments}
      </svg>
      <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-3 pointer-events-none">
        <span class="text-[10px] font-bold uppercase tracking-wider ${activeItem ? 'text-[#F97316]' : 'text-slate-400'} truncate max-w-[110px]">
          ${centerTitle}
        </span>
        <span class="font-num font-extrabold text-[13px] sm:text-sm text-[#1B365D] leading-tight mt-0.5">
          ${centerValue}
        </span>
        <span class="text-[10px] font-semibold text-slate-400 mt-0.5">
          ${centerSub}
        </span>
      </div>
    </div>
  `;
}

function buildInteractiveTrendSeries() {
  const df = state.dashboardFilter || {};
  const view = df.trendView || 'MONTH';
  const allTxs = getActiveUserTransactions().filter(t => {
    if (df.keyword && df.keyword.trim()) {
      const q = df.keyword.trim().toLowerCase();
      const dt = parseTxDateObj(t.date);
      if (
        !String(t.title || '').toLowerCase().includes(q) &&
        !String(t.categoryName || '').toLowerCase().includes(q) &&
        !String(t.wallet || '').toLowerCase().includes(q) &&
        !dt.display.includes(q)
      ) {
        return false;
      }
    }
    if (df.activeCatId && t.categoryId !== df.activeCatId) return false;
    return true;
  });

  if (view === 'DAY') {
    const map = new Map();
    const targetMonth = df.month || '';
    const targetYear = df.year || '';
    allTxs.forEach(t => {
      const dt = parseTxDateObj(t.date);
      if (targetMonth && dt.mm !== String(targetMonth).padStart(2, '0')) return;
      if (targetYear && dt.yyyy !== String(targetYear)) return;
      const key = dt.display;
      if (!map.has(key)) {
        map.set(key, {
          key,
          label: `${dt.dd}/${dt.mm}`,
          fullLabel: `Ngày ${dt.display}`,
          sortKey: `${dt.yyyy}${dt.mm}${dt.dd}`,
          incomeVND: 0,
          expenseVND: 0,
          txCount: 0,
          isSelected: df.day === dt.dd && (!df.month || df.month === dt.mm)
        });
      }
      const bucket = map.get(key);
      if (t.type === 'INCOME') bucket.incomeVND += Number(t.amount) || 0;
      else bucket.expenseVND += Number(t.amount) || 0;
      bucket.txCount += 1;
    });

    let items = Array.from(map.values()).sort((a, b) => a.sortKey.localeCompare(b.sortKey));
    if (items.length === 0) {
      const today = parseTxDateObj(getTodayDateString());
      items = [{
        key: today.display,
        label: `${today.dd}/${today.mm}`,
        fullLabel: `Ngày ${today.display}`,
        incomeVND: 0,
        expenseVND: 0,
        txCount: 0,
        isSelected: false
      }];
    }
    return { view: 'DAY', items: items.slice(-8) };
  }

  if (view === 'YEAR') {
    const yearsSet = new Set(['2024', '2025', '2026', '2027']);
    allTxs.forEach(t => yearsSet.add(parseTxDateObj(t.date).yyyy));
    const years = Array.from(yearsSet).sort();
    const items = years.map(y => {
      const yTxs = allTxs.filter(t => parseTxDateObj(t.date).yyyy === y);
      const inc = yTxs.filter(t => t.type === 'INCOME').reduce((s, t) => s + (Number(t.amount) || 0), 0);
      const exp = yTxs.filter(t => t.type === 'EXPENSE').reduce((s, t) => s + (Number(t.amount) || 0), 0);
      return {
        key: y,
        label: `Năm ${y}`,
        fullLabel: `Năm tài chính ${y}`,
        incomeVND: inc,
        expenseVND: exp,
        txCount: yTxs.length,
        isSelected: df.year === y && !df.month && !df.day
      };
    });
    return { view: 'YEAR', items };
  }

  // Default: view === 'MONTH'
  const selectedYear = df.year || String(new Date().getFullYear());
  const activeMonthsSet = new Set([5, 6, 7, 8, 9, 10]);
  allTxs.forEach(t => {
    const dt = parseTxDateObj(t.date);
    if (!df.year || dt.yyyy === selectedYear) {
      activeMonthsSet.add(dt.month);
    }
  });
  const monthsList = Array.from(activeMonthsSet).sort((a, b) => a - b).slice(-8);
  const items = monthsList.map(m => {
    const mm = String(m).padStart(2, '0');
    const mTxs = allTxs.filter(t => {
      const dt = parseTxDateObj(t.date);
      if (df.year && dt.yyyy !== df.year) return false;
      return dt.month === m;
    });
    const inc = mTxs.filter(t => t.type === 'INCOME').reduce((s, t) => s + (Number(t.amount) || 0), 0);
    const exp = mTxs.filter(t => t.type === 'EXPENSE').reduce((s, t) => s + (Number(t.amount) || 0), 0);
    return {
      key: mm,
      label: `Thg ${m}`,
      fullLabel: `Tháng ${mm}/${selectedYear}`,
      incomeVND: inc,
      expenseVND: exp,
      txCount: mTxs.length,
      isSelected: df.month === mm && !df.day
    };
  });
  return { view: 'MONTH', items };
}

function formatShortMoneyAxis(valVND) {
  if (valVND >= 1000000) {
    const tr = valVND / 1000000;
    return (Number.isInteger(tr) ? tr : tr.toFixed(1)) + 'tr';
  }
  if (valVND >= 1000) {
    return Math.round(valVND / 1000) + 'k';
  }
  return '0';
}

function renderSixMonthBarChart() {
  const { view, items } = buildInteractiveTrendSeries();
  const peakVND = Math.max(
    ...items.map(m => Math.max(m.incomeVND || 0, m.expenseVND || 0)),
    1000000
  );
  const niceMaxVND = peakVND <= 1500000
    ? 1500000
    : peakVND <= 3000000
      ? 3000000
      : peakVND <= 6000000
        ? 6000000
        : Math.ceil(peakVND / 3000000) * 3000000;
  const step1 = Math.round((niceMaxVND * 2) / 3);
  const step2 = Math.round(niceMaxVND / 3);

  return `
    <div class="mt-3">
      <div class="flex items-end gap-2.5 h-48 pt-6 border-b border-slate-100 relative">
        <!-- Horizontal Dashed Grid Lines -->
        <div class="absolute inset-x-10 top-6 bottom-0 flex flex-col justify-between pointer-events-none">
          <div class="border-b border-dashed border-slate-100 w-full"></div>
          <div class="border-b border-dashed border-slate-100 w-full"></div>
          <div class="border-b border-dashed border-slate-100 w-full"></div>
          <div></div>
        </div>

        <!-- Y-Axis Labels -->
        <div class="flex flex-col justify-between h-full text-[10px] text-slate-400 font-bold font-num pr-1.5 pb-1 z-10 w-9 text-right">
          <span>${formatShortMoneyAxis(niceMaxVND)}</span>
          <span>${formatShortMoneyAxis(step1)}</span>
          <span>${formatShortMoneyAxis(step2)}</span>
          <span>0</span>
        </div>

        <!-- Dynamic Bar Columns -->
        <div class="flex-1 grid gap-2 items-end h-full z-10" style="grid-template-columns: repeat(${Math.max(1, items.length)}, minmax(0, 1fr));">
          ${items.map((m, idx) => {
            const incH = m.incomeVND > 0 ? Math.max(8, Math.min(100, Math.round((m.incomeVND / niceMaxVND) * 100))) : 3;
            const expH = m.expenseVND > 0 ? Math.max(8, Math.min(100, Math.round((m.expenseVND / niceMaxVND) * 100))) : 3;
            const net = m.incomeVND - m.expenseVND;
            const delayMs = idx * 45;
            return `
              <div
                onclick="selectBarPeriodOnChart('${view}', '${m.key}')"
                class="chart-col-group flex flex-col items-center h-full justify-end px-1 py-1 rounded-xl ${m.isSelected ? 'bg-orange-50/80 ring-1 ring-[#F97316]/40' : 'hover:bg-slate-50/90'}"
              >
                <!-- Floating Glass Tooltip -->
                <div class="chart-tooltip absolute -top-2 left-1/2 w-44 p-2.5 rounded-xl bg-[#0F172A]/95 text-white text-[11px] shadow-xl border border-white/10">
                  <div class="font-extrabold text-sky-300 border-b border-white/10 pb-1 mb-1 flex items-center justify-between">
                    <span>${m.fullLabel}</span>
                    <span class="text-[10px] text-slate-300">${m.txCount} GD</span>
                  </div>
                  <div class="flex justify-between font-num text-emerald-400">
                    <span>Thu:</span>
                    <strong>+${formatVND(m.incomeVND)}</strong>
                  </div>
                  <div class="flex justify-between font-num text-orange-400 mt-0.5">
                    <span>Chi:</span>
                    <strong>-${formatVND(m.expenseVND)}</strong>
                  </div>
                  <div class="flex justify-between font-num border-t border-white/10 pt-1 mt-1 ${net >= 0 ? 'text-sky-200' : 'text-rose-300'}">
                    <span>Ròng:</span>
                    <strong>${net >= 0 ? '+' : ''}${formatVND(net)}</strong>
                  </div>
                </div>

                <div class="flex items-end gap-1.5 sm:gap-2 h-full w-full justify-center">
                  <div
                    class="chart-bar-anim w-3 sm:w-4 rounded-t-lg ${m.incomeVND > 0 ? 'chart-bar-income' : 'bg-slate-200/70'}"
                    style="height:${incH}%; animation-delay:${delayMs}ms"
                  ></div>
                  <div
                    class="chart-bar-anim w-3 sm:w-4 rounded-t-lg ${m.expenseVND > 0 ? 'chart-bar-expense' : 'bg-slate-200/70'}"
                    style="height:${expH}%; animation-delay:${delayMs + 30}ms"
                  ></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- X-Axis Labels -->
      <div class="flex pl-11 pt-2">
        <div class="flex-1 grid gap-1 text-center text-[11px] font-bold" style="grid-template-columns: repeat(${Math.max(1, items.length)}, minmax(0, 1fr));">
          ${items.map(m => `
            <button
              onclick="selectBarPeriodOnChart('${view}', '${m.key}')"
              class="truncate px-1 py-0.5 rounded-md transition ${m.isSelected ? 'text-[#F97316] bg-orange-50 font-extrabold' : 'text-slate-500 hover:text-[#1B365D]'}"
              title="Bấm để lọc theo ${m.fullLabel}"
            >
              ${m.label}
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderTransactionItemsHTML(stats, limit = 5) {
  const activeCatId = state.dashboardFilter && state.dashboardFilter.activeCatId;
  const baseList = (stats && Array.isArray(stats.filteredTxs)) ? stats.filteredTxs : state.data.transactions;
  const filtered = baseList.filter(t => {
    if (activeCatId && t.categoryId !== activeCatId) return false;
    if (state.txFilter === 'EXPENSE' && t.type !== 'EXPENSE') return false;
    if (state.txFilter === 'INCOME' && t.type !== 'INCOME') return false;
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase();
      return t.title.toLowerCase().includes(q) || t.categoryName.toLowerCase().includes(q);
    }
    return true;
  });

  if (filtered.length === 0) {
    return `
      <div class="py-10 text-center">
        <p class="text-xs font-bold text-slate-500">Không có giao dịch nào trong kỳ lọc này</p>
        <p class="text-[11px] text-slate-400 mt-1">Thử chọn ngày/tháng/năm khác hoặc bấm "Đặt lại"</p>
      </div>
    `;
  }

  const pageSize = Math.max(1, Number(state.homeTxPageSize) || limit || 5);
  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const currentPage = Math.min(Math.max(1, Number(state.homeTxPage) || 1), totalPages);
  state.homeTxPage = currentPage;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const pageItems = filtered.slice(startIndex, endIndex);
  const pageNumbers = buildPaginationNumbers(currentPage, totalPages);

  return `
    <div class="divide-y divide-slate-100">
      ${pageItems.map(t => {
        const cat = getCategory(t.categoryId);
        const isInc = t.type === 'INCOME';
        return `
          <div
            onclick="openEditTxModal('${t.id}', event)"
            class="flex items-center justify-between py-2.5 px-2 -mx-2 rounded-xl hover:bg-slate-50/90 border-b border-slate-100 last:border-none group transition cursor-pointer"
            title="Bấm để xem chi tiết & chỉnh sửa giao dịch"
          >
            <div class="flex items-center gap-3 min-w-0">
              <div class="tx-row-icon w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-2xs" style="background:${cat.bg}; color:${cat.color}">
                ${SVG[cat.icon] || SVG.wallet}
              </div>
              <div class="min-w-0">
                <p class="text-xs sm:text-sm font-bold text-[#1B365D] group-hover:text-[#F97316] transition-colors truncate">${t.title}</p>
                <p class="text-[11px] text-slate-400 mt-0.5">${t.categoryName} • <strong class="text-slate-500 font-num">${t.date}</strong> ${t.wallet ? `• ${t.wallet}` : ''}</p>
              </div>
            </div>
            <div class="flex items-center gap-2 shrink-0 ml-2">
              <span class="font-num text-xs sm:text-sm font-extrabold ${isInc ? 'text-[#10B981]' : 'text-[#EF4444]'}">
                ${isInc ? '+ ' : '- '}${formatVND(t.amount)}
              </span>
              <button onclick="deleteTx('${t.id}', event)" class="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-rose-500 p-1.5 rounded-lg hover:bg-rose-50 transition" title="Xóa">
                ${SVG.trash}
              </button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
    ${totalPages > 1 ? `
      <div class="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap">
        <span class="text-[11px] font-semibold text-slate-400 font-num">
          Hiển thị <strong class="text-[#1B365D]">${startIndex + 1}–${endIndex}</strong> / <strong class="text-[#1B365D]">${totalItems}</strong> khoản
        </span>
        <div class="flex items-center gap-1">
          <button
            type="button"
            onclick="setHomeTxPage(${currentPage - 1})"
            ${currentPage <= 1 ? 'disabled' : ''}
            class="desun-page-btn !h-7 !min-w-[28px] !px-2 !text-[11px]"
            title="Trang trước"
          >
            ‹
          </button>
          ${pageNumbers.map(p => p === '...' ? `
            <span class="px-1 text-[11px] font-bold text-slate-400">…</span>
          ` : `
            <button
              type="button"
              onclick="setHomeTxPage(${p})"
              class="desun-page-btn !h-7 !min-w-[28px] !px-2 !text-[11px] font-num ${p === currentPage ? 'active' : ''}"
            >
              ${p}
            </button>
          `).join('')}
          <button
            type="button"
            onclick="setHomeTxPage(${currentPage + 1})"
            ${currentPage >= totalPages ? 'disabled' : ''}
            class="desun-page-btn !h-7 !min-w-[28px] !px-2 !text-[11px]"
            title="Trang sau"
          >
            ›
          </button>
        </div>
      </div>
    ` : ''}
  `;
}

// ============================================================================
// Page Views (Shared seamlessly between Desktop & Mobile Responsive)
// ============================================================================

// 1. TRANG CHỦ (HOME DASHBOARD — SMART DAY/MONTH/YEAR INTERACTIVE REPORT)
function renderHomePage(stats, isMobile) {
  const df = state.dashboardFilter || {};
  const isFiltered = Boolean(df.day || df.month || df.year || df.exactDate || (df.keyword && df.keyword.trim()) || df.activeCatId);
  const isIncomeDonut = df.donutType === 'INCOME';
  const activeBreakdown = isIncomeDonut ? (stats.incomeBreakdown || []) : (stats.breakdown || []);
  const activeDonutTotal = isIncomeDonut ? stats.totalIncome : stats.totalExpense;

  // Collect available years & days for dropdowns
  const yearsSet = new Set(['2025', '2026', '2027']);
  const txDaysSet = new Set();
  (state.data.transactions || []).forEach(t => {
    const dt = parseTxDateObj(t.date);
    yearsSet.add(dt.yyyy);
    if ((!df.month || dt.mm === df.month) && (!df.year || dt.yyyy === df.year)) {
      txDaysSet.add(dt.dd);
    }
  });
  const yearOptions = Array.from(yearsSet).sort();
  const dayOptions = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));
  const monthOptions = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));

  const totalFlow = stats.totalIncome + stats.totalExpense;
  const incRatioPct = totalFlow > 0 ? Math.round((stats.totalIncome / totalFlow) * 100) : 50;
  const expRatioPct = totalFlow > 0 ? 100 - incRatioPct : 50;

  return `
    <div class="animate-fade space-y-4">
      <!-- THANH BỘ LỌC BÁO CÁO 1 DÒNG THANH THOÁT (NGÀY - THÁNG - NĂM) -->
      <div class="dash-filter-bar px-3.5 py-2.5 flex flex-wrap lg:flex-nowrap items-center justify-between gap-2.5">
        <!-- Trái: Chế độ xem + Nhãn kỳ đang lọc nằm gọn trên 1 hàng -->
        <div class="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
          <div class="inline-flex items-center p-1 rounded-xl bg-slate-100/90 border border-slate-200/70">
            ${[
              { id: 'ALL', label: 'Tất cả' },
              { id: 'DAY', label: 'Theo Ngày' },
              { id: 'MONTH', label: 'Theo Tháng' },
              { id: 'YEAR', label: 'Theo Năm' }
            ].map(m => `
              <button
                onclick="setDashFilterMode('${m.id}')"
                class="dash-mode-pill ${df.mode === m.id ? 'active' : ''}"
              >
                ${m.label}
              </button>
            `).join('')}
          </div>

          <div class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50/80 border border-sky-200/60 text-[#1B365D] text-xs font-bold whitespace-nowrap">
            <span class="w-1.5 h-1.5 rounded-full bg-[#0284C7] animate-pulse"></span>
            <span>${stats.filterLabel}</span>
            <span class="text-[#F97316] font-extrabold font-num">(${stats.txCount} khoản)</span>
          </div>
        </div>

        <!-- Phải: Ô tìm kiếm thanh thoát + Cụm Select có Search bên trong (Ngày • Tháng • Năm) + Nút Đặt lại -->
        <div class="flex items-center gap-2 ml-auto flex-wrap sm:flex-nowrap">
          <!-- Ô Search nhanh thanh thoát ngay trên thanh lọc -->
          <div class="desun-search-box-sleek w-44 sm:w-52">
            <span class="text-slate-400 shrink-0">${SVG.search}</span>
            <input
              id="dash-inline-search"
              type="text"
              value="${df.keyword || state.searchQuery || ''}"
              oninput="handleSearch(this.value, 'dash-inline-search')"
              placeholder="Tìm nhanh khoản thu chi..."
              autocomplete="off"
              class="w-full bg-transparent text-xs font-bold text-[#1B365D] placeholder-slate-400 focus:outline-none"
            />
            ${(df.keyword || state.searchQuery) ? `
              <button
                type="button"
                onclick="clearGlobalSearch('dash-inline-search')"
                class="w-4 h-4 rounded-full bg-slate-200 hover:bg-rose-100 text-slate-500 hover:text-rose-600 text-[11px] font-extrabold flex items-center justify-center shrink-0 transition"
                title="Xóa từ khóa"
              >×</button>
            ` : ''}
          </div>

          <!-- Cụm Select có ô Search tìm nhanh bên trong (Ngày | Tháng | Năm) -->
          <div class="desun-select-capsule divide-x divide-slate-200/70">
            ${renderCustomSearchableSelect({
              key: 'DAY',
              prefixLabel: 'Ngày',
              valueLabel: df.day ? `Ngày ${df.day}` : 'Tất cả',
              hasValue: Boolean(df.day),
              searchPlaceholder: 'Gõ tìm ngày (01..31)...'
            })}
            ${renderCustomSearchableSelect({
              key: 'MONTH',
              prefixLabel: 'Tháng',
              valueLabel: df.month ? `Thg ${df.month}` : 'Tất cả',
              hasValue: Boolean(df.month),
              searchPlaceholder: 'Gõ tìm tháng (01..12)...'
            })}
            ${renderCustomSearchableSelect({
              key: 'YEAR',
              prefixLabel: 'Năm',
              valueLabel: df.year ? df.year : 'Tất cả',
              hasValue: Boolean(df.year),
              searchPlaceholder: 'Gõ tìm năm (2025..)...'
            })}
          </div>

          ${isFiltered ? `
            <button
              onclick="resetDashFilter()"
              class="h-[38px] px-3 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200/80 text-rose-600 text-xs font-bold transition flex items-center gap-1 shrink-0 whitespace-nowrap"
              title="Đặt lại bộ lọc về tất cả thời gian"
            >
              <span>↺ Đặt lại</span>
            </button>
          ` : ''}
        </div>
      </div>

      <!-- Top Summary Row -->
      <div class="grid grid-cols-1 ${isMobile ? '' : 'lg:grid-cols-12'} gap-4">
        <!-- Tổng số dư Ocean Card -->
        <div class="${isMobile ? '' : 'lg:col-span-5'} hero-ocean-card p-5 sm:p-6 flex items-center justify-between">
          <div class="relative z-10 flex-1 min-w-0">
            <div class="flex items-center gap-2">
              <span class="text-xs font-semibold text-sky-100 uppercase tracking-wider">Tổng số dư khả dụng</span>
              <span class="px-2 py-0.5 rounded-full bg-white/15 text-[10px] font-bold text-sky-200">${getActiveUserWallets().length} ví</span>
            </div>
            <div class="flex items-center gap-2.5 mt-1.5">
              <h3 class="font-num text-2xl sm:text-3xl font-extrabold tracking-tight">
                ${state.data.balanceHidden ? '•••••••• ₫' : formatVND(stats.currentBalance)}
              </h3>
              <button onclick="toggleBalanceVisibility()" class="text-sky-200 hover:text-white p-1 transition" title="Ẩn/Hiện số dư">
                ${SVG.eye}
              </button>
            </div>
            <div class="mt-3.5 flex flex-wrap items-center gap-2">
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-bold ${stats.periodNet >= 0 ? 'text-emerald-300' : 'text-amber-200'}">
                <span>${stats.periodNet >= 0 ? '▲ Thặng dư kỳ lọc:' : '▼ Bội chi kỳ lọc:'}</span>
                <span class="font-num">${stats.periodNet >= 0 ? '+' : ''}${formatVND(stats.periodNet)}</span>
              </div>
              <div class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-400/20 text-[11px] font-bold text-emerald-200">
                <span>Tiết kiệm: ${stats.savingsRate}%</span>
              </div>
            </div>
          </div>
          <div class="relative z-10 shrink-0 -mr-1 hidden sm:block">
            ${SVG.walletIllustration}
          </div>
        </div>

        <!-- Mobile Quick Action Buttons (Shown on Mobile / Narrow screens) -->
        <div class="${isMobile ? 'grid' : 'grid lg:hidden'} grid-cols-4 gap-2 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm text-center">
          <button onclick="openAddModal('INCOME')" class="flex flex-col items-center gap-1.5">
            <div class="w-11 h-11 rounded-full bg-[#DCFCE7] text-[#10B981] flex items-center justify-center">${SVG.wallet}</div>
            <span class="text-xs font-semibold text-slate-700">Thu nhập</span>
          </button>
          <button onclick="openAddModal('EXPENSE')" class="flex flex-col items-center gap-1.5">
            <div class="w-11 h-11 rounded-full bg-[#FFEDD5] text-[#F97316] flex items-center justify-center">${SVG.receipt}</div>
            <span class="text-xs font-semibold text-slate-700">Chi tiêu</span>
          </button>
          <button onclick="navigate('budgets')" class="flex flex-col items-center gap-1.5">
            <div class="w-11 h-11 rounded-full bg-[#EDE9FE] text-[#8B5CF6] flex items-center justify-center">${SVG.shieldCheck}</div>
            <span class="text-xs font-semibold text-slate-700">Ngân sách</span>
          </button>
          <button onclick="navigate('goals')" class="flex flex-col items-center gap-1.5">
            <div class="w-11 h-11 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center">${SVG.plane}</div>
            <span class="text-xs font-semibold text-slate-700">Mục tiêu</span>
          </button>
        </div>

        <!-- Thu nhập & Chi tiêu Cards -->
        <div class="${isMobile ? 'grid grid-cols-2 gap-3' : 'lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4'}">
          <div class="kpi-mint-card p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden">
            <div class="flex items-center justify-between gap-2">
              <div class="flex items-center gap-2.5">
                <div class="w-10 h-10 rounded-2xl bg-[#10B981] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  ${SVG.trendUp}
                </div>
                <div>
                  <span class="text-xs sm:text-sm font-bold text-slate-700 block">Tổng khoản thu</span>
                  <span class="text-[11px] font-semibold text-slate-400">${stats.filterLabel}</span>
                </div>
              </div>
              <span class="px-2.5 py-1 rounded-full bg-white/90 border border-emerald-200 text-[#10B981] font-num text-xs font-extrabold">
                ${stats.incomeCount} khoản
              </span>
            </div>
            <p class="font-num text-xl sm:text-2xl font-extrabold text-[#10B981] mt-3">+${formatVND(stats.totalIncome)}</p>
            <div class="mt-2.5">
              <div class="flex items-center justify-between text-[11px] font-bold text-slate-500 mb-1">
                <span>Tỷ trọng dòng tiền vào</span>
                <span class="text-[#10B981] font-num">${incRatioPct}%</span>
              </div>
              <div class="w-full h-1.5 rounded-full bg-emerald-200/60 overflow-hidden">
                <div class="h-full rounded-full bg-[#10B981] progress-smooth" style="width:${incRatioPct}%"></div>
              </div>
            </div>
          </div>

          <div class="kpi-peach-card p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden">
            <div class="flex items-center justify-between gap-2">
              <div class="flex items-center gap-2.5">
                <div class="w-10 h-10 rounded-2xl bg-[#F97316] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  ${SVG.trendDown}
                </div>
                <div>
                  <span class="text-xs sm:text-sm font-bold text-slate-700 block">Tổng khoản chi</span>
                  <span class="text-[11px] font-semibold text-slate-400">${stats.filterLabel}</span>
                </div>
              </div>
              <span class="px-2.5 py-1 rounded-full bg-white/90 border border-orange-200 text-[#F97316] font-num text-xs font-extrabold">
                ${stats.expenseCount} khoản
              </span>
            </div>
            <p class="font-num text-xl sm:text-2xl font-extrabold text-[#EF4444] mt-3">-${formatVND(stats.totalExpense)}</p>
            <div class="mt-2.5">
              <div class="flex items-center justify-between text-[11px] font-bold text-slate-500 mb-1">
                <span>Tỷ trọng dòng tiền ra</span>
                <span class="text-[#F97316] font-num">${expRatioPct}%</span>
              </div>
              <div class="w-full h-1.5 rounded-full bg-orange-200/60 overflow-hidden">
                <div class="h-full rounded-full bg-[#F97316] progress-smooth" style="width:${expRatioPct}%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Middle Row: Cơ cấu Danh mục (Donut tương tác) + Giao dịch trong kỳ lọc -->
      <div class="grid grid-cols-1 ${isMobile ? '' : 'lg:grid-cols-12'} gap-5">
        <div class="${isMobile ? '' : 'lg:col-span-6'} desun-card p-5 sm:p-6">
          <div class="flex items-center justify-between flex-wrap gap-2 mb-4">
            <div>
              <h3 class="font-extrabold text-base text-[#1B365D]">Cơ cấu theo danh mục</h3>
              <p class="text-[11px] text-slate-400 mt-0.5">Bấm vào từng danh mục để xem chi tiết • ${stats.filterLabel}</p>
            </div>
            <div class="inline-flex p-1 rounded-xl bg-slate-100 text-xs font-bold">
              <button
                onclick="setDashDonutType('EXPENSE')"
                class="px-3 py-1 rounded-lg transition ${!isIncomeDonut ? 'bg-[#F97316] text-white shadow-2xs' : 'text-slate-600 hover:text-[#1B365D]'}"
              >
                Chi tiêu (${stats.expenseCount})
              </button>
              <button
                onclick="setDashDonutType('INCOME')"
                class="px-3 py-1 rounded-lg transition ${isIncomeDonut ? 'bg-[#10B981] text-white shadow-2xs' : 'text-slate-600 hover:text-[#1B365D]'}"
              >
                Thu nhập (${stats.incomeCount})
              </button>
            </div>
          </div>

          ${activeBreakdown.length === 0 ? `
            <div class="py-12 text-center">
              <p class="text-xs font-bold text-slate-500">Chưa có phát sinh ${isIncomeDonut ? 'khoản thu' : 'khoản chi'} trong kỳ (${stats.filterLabel})</p>
              <p class="text-[11px] text-slate-400 mt-1">Hãy chọn kỳ Ngày/Tháng/Năm khác hoặc thêm giao dịch mới</p>
            </div>
          ` : `
            <div class="flex flex-col sm:flex-row items-center gap-6">
              ${renderDonutChartSVG(activeBreakdown, activeDonutTotal, isMobile ? 156 : 180, isIncomeDonut)}
              <div class="flex-1 w-full space-y-1.5">
                ${activeBreakdown.map(item => {
                  const isSelected = df.activeCatId === item.id;
                  return `
                    <div
                      onclick="toggleDashCatSpotlight('${item.id}')"
                      class="donut-legend-row ${isSelected ? 'active' : ''}"
                    >
                      <div class="flex items-center justify-between text-xs sm:text-sm mb-1">
                        <div class="flex items-center gap-2.5 min-w-0">
                          <span class="w-3 h-3 rounded-md shrink-0 shadow-2xs" style="background:${item.color}"></span>
                          <span class="font-bold text-[#1B365D] truncate">${item.name}</span>
                          <span class="text-[10px] font-bold px-1.5 py-0.2 rounded bg-slate-100 text-slate-500">${item.count} GD</span>
                        </div>
                        <div class="flex items-center gap-2.5 font-num shrink-0">
                          <span class="text-xs font-extrabold" style="color:${item.color}">${item.pct}%</span>
                          <span class="font-extrabold text-[#1B365D] text-right">${formatVND(item.amount)}</span>
                        </div>
                      </div>
                      <div class="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div class="h-full rounded-full progress-smooth" style="width:${item.pct}%; background:${item.color}"></div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `}
        </div>

        <div class="${isMobile ? '' : 'lg:col-span-6'} desun-card p-5 sm:p-6">
          <div class="flex items-center justify-between mb-3">
            <div>
              <h3 class="font-extrabold text-base text-[#1B365D]">Khoản thu chi trong kỳ</h3>
              <p class="text-[11px] text-slate-400 mt-0.5">
                Hiển thị theo bộ lọc: <strong class="text-slate-600">${stats.filterLabel}</strong>
                ${df.activeCatId ? ` • Đang lọc danh mục` : ''}
              </p>
            </div>
            <button onclick="navigate('transactions')" class="text-xs font-bold text-[#10B981] hover:underline">Xem toàn bộ →</button>
          </div>
          <div id="home-tx-list-target">
            ${renderTransactionItemsHTML(stats, 5)}
          </div>
        </div>
      </div>

      <!-- Bottom Row: Biểu đồ Biến động Thu - Chi (Ngày / Tháng / Năm) + Mục tiêu tài chính -->
      <div class="grid grid-cols-1 ${isMobile ? '' : 'lg:grid-cols-12'} gap-5">
        <div class="${isMobile ? '' : 'lg:col-span-6'} desun-card p-5 sm:p-6">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 class="font-extrabold text-base text-[#1B365D]">Biểu đồ biến động Thu - Chi</h3>
              <p class="text-[11px] text-slate-400 mt-0.5">Di chuột xem chi tiết • Bấm vào cột để lọc theo Ngày / Tháng / Năm</p>
            </div>
            <div class="flex items-center gap-2">
              <div class="inline-flex p-1 rounded-xl bg-slate-100 text-[11px] font-bold">
                ${[
                  { id: 'DAY', label: 'Theo Ngày' },
                  { id: 'MONTH', label: 'Theo Tháng' },
                  { id: 'YEAR', label: 'Theo Năm' }
                ].map(v => `
                  <button
                    onclick="setDashTrendView('${v.id}')"
                    class="px-2.5 py-1 rounded-lg transition ${(df.trendView || 'MONTH') === v.id ? 'bg-[#1B365D] text-white shadow-2xs' : 'text-slate-600 hover:text-[#1B365D]'}"
                  >
                    ${v.label}
                  </button>
                `).join('')}
              </div>
            </div>
          </div>
          <div class="flex items-center gap-4 text-xs font-bold mt-2.5">
            <span class="flex items-center gap-1.5 text-slate-600"><i class="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block"></i> Thu nhập</span>
            <span class="flex items-center gap-1.5 text-slate-600"><i class="w-2.5 h-2.5 rounded-full bg-[#F97316] inline-block"></i> Chi tiêu</span>
          </div>
          ${renderSixMonthBarChart()}
        </div>

        <div class="${isMobile ? '' : 'lg:col-span-6'} desun-card p-5 sm:p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-extrabold text-base text-[#1B365D]">Mục tiêu tài chính cá nhân</h3>
            <div class="flex items-center gap-3">
              <button onclick="openGoalModal('CREATE')" class="px-2.5 py-1 rounded-lg bg-[#FFF1E6] hover:bg-orange-100 text-[#F97316] text-xs font-bold transition">
                + Thêm mục tiêu
              </button>
              <button onclick="navigate('goals')" class="text-xs font-bold text-[#10B981] hover:underline">Xem tất cả</button>
            </div>
          </div>
          <div class="space-y-4">
            ${getActiveUserGoals().map(g => {
              const pct = Math.min(100, Math.round((g.current / g.target) * 100));
              return `
                <div class="flex items-center gap-3.5 p-2.5 -mx-2.5 rounded-2xl hover:bg-slate-50/80 transition">
                  <div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-2xs" style="background:${g.bg}; color:${g.color}">
                    ${SVG[g.icon] || SVG.shieldCheck}
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-xs sm:text-sm font-bold text-slate-800 truncate">${g.title}</span>
                      <div class="flex items-center gap-2 shrink-0">
                        <button onclick="openGoalModal('EDIT', '${g.id}')" class="text-[11px] font-semibold text-slate-400 hover:text-[#1B365D]">Sửa</button>
                        <button onclick="openGoalModal('DEPOSIT', '${g.id}')" class="text-[11px] font-bold text-[#F97316] hover:underline">+ Nạp tiền</button>
                      </div>
                    </div>
                    <div class="text-xs font-num text-slate-400 mb-1.5">
                      <strong class="text-[#10B981]">${formatVND(g.current)}</strong> / ${formatVND(g.target)}
                    </div>
                    <div class="flex items-center gap-2.5">
                      <div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div class="h-full rounded-full progress-smooth" style="width:${pct}%; background:${g.color}"></div>
                      </div>
                      <span class="text-xs font-num font-bold text-slate-500 w-9 text-right">${pct}%</span>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// 2. DANH SÁCH THU CHI (STRUCTURED FINANCIAL DATA TABLE PAGE)
function getFilteredTransactions() {
  return getActiveUserTransactions().filter(t => {
    if (state.txFilter === 'EXPENSE' && t.type !== 'EXPENSE') return false;
    if (state.txFilter === 'INCOME' && t.type !== 'INCOME') return false;
    if (state.txCategoryFilter && state.txCategoryFilter !== 'ALL' && t.categoryId !== state.txCategoryFilter) return false;
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase();
      return (
        t.title.toLowerCase().includes(q) ||
        t.categoryName.toLowerCase().includes(q) ||
        (t.wallet && t.wallet.toLowerCase().includes(q)) ||
        (t.date && t.date.toLowerCase().includes(q))
      );
    }
    return true;
  });
}

function renderTransactionTableHTML(stats, isMobile = false) {
  const filtered = getFilteredTransactions();

  if (filtered.length === 0) {
    return `
      <div class="desun-table-wrap py-12 px-4 text-center">
        <div class="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
          ${SVG.receipt}
        </div>
        <p class="text-sm font-bold text-[#1B365D]">Không tìm thấy khoản thu chi nào</p>
        <p class="text-xs text-slate-400 mt-1">Thử thay đổi bộ lọc danh mục hoặc từ khóa tìm kiếm</p>
      </div>
    `;
  }

  const filteredIncome = filtered.filter(t => t.type === 'INCOME').reduce((s, t) => s + t.amount, 0);
  const filteredExpense = filtered.filter(t => t.type === 'EXPENSE').reduce((s, t) => s + t.amount, 0);
  const filteredNet = filteredIncome - filteredExpense;

  // Pagination calculation
  const pageSizeOptions = [5, 8, 10, 20, 50];
  const pageSize = Math.max(1, Number(state.txPageSize) || 8);
  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const currentPage = Math.min(Math.max(1, Number(state.txPage) || 1), totalPages);
  state.txPage = currentPage;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const pageItems = filtered.slice(startIndex, endIndex);
  const pageNumbers = buildPaginationNumbers(currentPage, totalPages);

  // Compact 3-column table for Mobile Simulator so it fits 420px screen with zero horizontal scroll
  if (isMobile) {
    return `
      <div class="desun-table-wrap">
        <table class="desun-table">
          <thead>
            <tr>
              <th class="!px-3 !py-2.5">Khoản mục</th>
              <th class="!px-2 !py-2.5">Danh mục & Ví</th>
              <th class="!px-3 !py-2.5 text-right">Số tiền</th>
            </tr>
          </thead>
          <tbody>
            ${pageItems.map(t => {
              const cat = getCategory(t.categoryId);
              const isInc = t.type === 'INCOME';
              return `
                <tr onclick="openEditTxModal('${t.id}', event)" class="group cursor-pointer" title="Bấm để xem chi tiết & sửa">
                  <td class="!px-3 !py-2.5">
                    <div class="flex items-center gap-2 whitespace-nowrap">
                      <div class="tx-row-icon w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style="background:${cat.bg}; color:${cat.color}">
                        ${SVG[cat.icon] || SVG.wallet}
                      </div>
                      <span class="text-xs font-bold text-[#1B365D] group-hover:text-[#F97316] transition-colors truncate max-w-[110px]">${t.title}</span>
                    </div>
                  </td>
                  <td class="!px-2 !py-2.5">
                    <span class="desun-pill !px-2 !py-0.5 !text-[10px]" style="background:${cat.bg}; color:${cat.color}; border: 1px solid ${cat.color}26">
                      ${t.categoryName}
                    </span>
                  </td>
                  <td class="!px-3 !py-2.5 text-right">
                    <div class="flex items-center justify-end gap-1 whitespace-nowrap">
                      <span class="font-num text-xs font-extrabold ${isInc ? 'text-[#10B981]' : 'text-[#EF4444]'}">
                        ${isInc ? '+' : '-'}${formatNumberWithDots(t.amount)} ₫
                      </span>
                      <button onclick="deleteTx('${t.id}', event)" class="text-slate-300 hover:text-rose-500 p-1 rounded" title="Xóa">
                        ${SVG.trash}
                      </button>
                    </div>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="!px-3 !py-2.5 text-[11px] font-bold text-slate-500">
                Tổng cộng (${totalItems} khoản)
              </td>
              <td class="!px-3 !py-2.5 text-right font-num text-xs font-extrabold ${filteredNet >= 0 ? 'text-[#10B981]' : 'text-[#EF4444]'}">
                ${filteredNet >= 0 ? '+' : ''}${formatVND(filteredNet)}
              </td>
            </tr>
          </tfoot>
        </table>

        <!-- Mobile Pagination Bar -->
        <div class="desun-pagination-bar !px-3 !py-2.5">
          <span class="text-[11px] font-semibold text-slate-500 font-num">
            <strong class="text-[#1B365D]">${startIndex + 1}–${endIndex}</strong> / <strong class="text-[#1B365D]">${totalItems}</strong> khoản
          </span>
          <div class="flex items-center gap-1">
            <button
              type="button"
              onclick="setTxPage(${currentPage - 1})"
              ${currentPage <= 1 ? 'disabled' : ''}
              class="desun-page-btn !h-7 !min-w-[28px] !px-2 !text-[11px]"
            >
              ‹ Trước
            </button>
            ${pageNumbers.map(p => p === '...' ? `
              <span class="px-1 text-[11px] font-bold text-slate-400">…</span>
            ` : `
              <button
                type="button"
                onclick="setTxPage(${p})"
                class="desun-page-btn !h-7 !min-w-[28px] !px-2 !text-[11px] font-num ${p === currentPage ? 'active' : ''}"
              >
                ${p}
              </button>
            `).join('')}
            <button
              type="button"
              onclick="setTxPage(${currentPage + 1})"
              ${currentPage >= totalPages ? 'disabled' : ''}
              class="desun-page-btn !h-7 !min-w-[28px] !px-2 !text-[11px]"
            >
              Sau ›
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // Full Desktop & Responsive Web Table (Strictly 1-Line, Sleek & Airy with Smooth Hover Effects + Pagination)
  return `
    <div class="desun-table-wrap overflow-x-auto">
      <table class="desun-table">
        <thead>
          <tr>
            <th class="w-12 text-center">STT</th>
            <th>Khoản mục / Nội dung</th>
            <th>Danh mục</th>
            <th>Phân loại</th>
            <th>Nguồn tiền / Ví</th>
            <th>Thời gian</th>
            <th class="text-right">Số tiền (VNĐ)</th>
            <th class="w-14 text-center">Xóa</th>
          </tr>
        </thead>
        <tbody>
          ${pageItems.map((t, idx) => {
            const cat = getCategory(t.categoryId);
            const isInc = t.type === 'INCOME';
            const stt = String(startIndex + idx + 1).padStart(2, '0');
            return `
              <tr
                onclick="openEditTxModal('${t.id}', event)"
                class="group cursor-pointer"
                title="Bấm vào dòng để xem chi tiết & chỉnh sửa giao dịch"
              >
                <td class="text-center font-num text-xs font-bold text-slate-400 group-hover:text-[#F97316] transition-colors">
                  #${stt}
                </td>
                <td>
                  <div class="flex items-center gap-3 whitespace-nowrap">
                    <div
                      class="tx-row-icon w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                      style="background:${cat.bg}; color:${cat.color}"
                    >
                      ${SVG[cat.icon] || SVG.wallet}
                    </div>
                    <span class="text-xs sm:text-[13px] font-bold text-[#1B365D] group-hover:text-[#F97316] transition-colors">
                      ${t.title}
                    </span>
                    <span class="px-1.5 py-0.5 rounded bg-slate-100/80 text-[10px] font-semibold text-slate-400 font-num">
                      #${t.id.toUpperCase()}
                    </span>
                  </div>
                </td>
                <td>
                  <span
                    class="desun-pill"
                    style="background:${cat.bg}; color:${cat.color}; border: 1px solid ${cat.color}26"
                  >
                    <span class="w-1.5 h-1.5 rounded-full shrink-0" style="background:${cat.color}"></span>
                    <span>${t.categoryName}</span>
                  </span>
                </td>
                <td>
                  ${isInc ? `
                    <span class="desun-pill desun-pill-income">
                      <span class="text-[10px] leading-none">▲</span>
                      <span>Khoản thu</span>
                    </span>
                  ` : `
                    <span class="desun-pill desun-pill-expense">
                      <span class="text-[10px] leading-none">▼</span>
                      <span>Khoản chi</span>
                    </span>
                  `}
                </td>
                <td>
                  <span class="desun-pill desun-pill-wallet">
                    <span class="text-slate-400 shrink-0">${SVG.wallet}</span>
                    <span>${t.wallet || 'Techcombank Chính'}</span>
                  </span>
                </td>
                <td class="text-xs font-medium text-slate-500 whitespace-nowrap">
                  ${t.date}
                </td>
                <td class="text-right whitespace-nowrap">
                  <span class="font-num text-xs sm:text-sm font-extrabold ${isInc ? 'text-[#10B981]' : 'text-[#EF4444]'}">
                    ${isInc ? '+ ' : '- '}${formatVND(t.amount)}
                  </span>
                </td>
                <td class="text-center">
                  <button
                    onclick="deleteTx('${t.id}', event)"
                    class="text-slate-300 hover:text-rose-500 p-1.5 rounded-lg hover:bg-rose-50 transition inline-flex items-center justify-center opacity-70 group-hover:opacity-100"
                    title="Xóa khoản này"
                  >
                    ${SVG.trash}
                  </button>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-xs font-bold text-[#1B365D] whitespace-nowrap">
              Tổng kết danh sách lọc (${totalItems} khoản • Trang ${currentPage}/${totalPages})
            </td>
            <td colspan="2" class="text-xs font-semibold text-slate-500 whitespace-nowrap">
              Thu: <strong class="font-num text-[#10B981]">+${formatVND(filteredIncome)}</strong>
              <span class="mx-2 text-slate-300">|</span>
              Chi: <strong class="font-num text-[#EF4444]">-${formatVND(filteredExpense)}</strong>
            </td>
            <td class="text-right text-xs font-bold text-slate-500 whitespace-nowrap">Chênh lệch:</td>
            <td class="text-right font-num text-sm font-extrabold whitespace-nowrap ${filteredNet >= 0 ? 'text-[#10B981]' : 'text-[#EF4444]'}">
              ${filteredNet >= 0 ? '+ ' : ''}${formatVND(filteredNet)}
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>

      <!-- Thanh Phân Trang (Pagination Bar) Chuẩn Fintech SaaS -->
      <div class="desun-pagination-bar">
        <!-- Trái: Thông tin dòng đang hiển thị + Chọn số dòng mỗi trang -->
        <div class="flex items-center gap-3 flex-wrap">
          <span class="text-xs font-semibold text-slate-500 font-num">
            Hiển thị <strong class="font-extrabold text-[#1B365D]">${startIndex + 1}–${endIndex}</strong> trong tổng số <strong class="font-extrabold text-[#1B365D]">${totalItems}</strong> khoản thu chi
          </span>
          <div class="flex items-center gap-1.5">
            <span class="text-[11px] font-bold text-slate-400">Số dòng/trang:</span>
            <div class="desun-page-size-select">
              ${pageSizeOptions.map(sz => `
                <button
                  type="button"
                  onclick="setTxPageSize(${sz})"
                  class="desun-page-size-btn font-num ${pageSize === sz ? 'active' : ''}"
                  title="Hiển thị ${sz} dòng mỗi trang"
                >
                  ${sz}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Phải: Nút điều hướng Trang Đầu / Trước / Số trang / Sau / Cuối -->
        <div class="flex items-center gap-1.5">
          <button
            type="button"
            onclick="setTxPage(1)"
            ${currentPage <= 1 ? 'disabled' : ''}
            class="desun-page-btn"
            title="Trang đầu tiên"
          >
            «
          </button>
          <button
            type="button"
            onclick="setTxPage(${currentPage - 1})"
            ${currentPage <= 1 ? 'disabled' : ''}
            class="desun-page-btn gap-1"
            title="Trang trước"
          >
            <span>‹</span>
            <span class="hidden sm:inline">Trước</span>
          </button>

          ${pageNumbers.map(p => p === '...' ? `
            <span class="px-1.5 text-xs font-extrabold text-slate-400 select-none">…</span>
          ` : `
            <button
              type="button"
              onclick="setTxPage(${p})"
              class="desun-page-btn font-num ${p === currentPage ? 'active' : ''}"
              title="Trang ${p}"
            >
              ${p}
            </button>
          `).join('')}

          <button
            type="button"
            onclick="setTxPage(${currentPage + 1})"
            ${currentPage >= totalPages ? 'disabled' : ''}
            class="desun-page-btn gap-1"
            title="Trang tiếp theo"
          >
            <span class="hidden sm:inline">Sau</span>
            <span>›</span>
          </button>
          <button
            type="button"
            onclick="setTxPage(${totalPages})"
            ${currentPage >= totalPages ? 'disabled' : ''}
            class="desun-page-btn"
            title="Trang cuối cùng"
          >
            »
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderTransactionsPage(stats, isMobile = false) {
  const userTxs = getActiveUserTransactions();
  const allCount = userTxs.length;
  const expCount = userTxs.filter(t => t.type === 'EXPENSE').length;
  const incCount = userTxs.filter(t => t.type === 'INCOME').length;

  return `
    <div class="space-y-4 animate-fade">
      <!-- Top Summary Strip for Danh sách thu chi (Sleek Single-Line KPI Cards) -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div class="kpi-mint-card px-4 py-3.5 flex items-center justify-between whitespace-nowrap">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#10B981] text-white flex items-center justify-center shadow-xs shrink-0">
              ${SVG.trendUp}
            </div>
            <div>
              <p class="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Tổng khoản thu</p>
              <p class="font-num text-base sm:text-lg font-extrabold text-[#10B981] mt-0.5">+${formatVND(stats.totalIncome)}</p>
            </div>
          </div>
          <span class="px-2.5 py-1 rounded-full bg-white/90 border border-emerald-200/70 text-[#10B981] font-num font-extrabold text-xs">
            ${incCount} khoản
          </span>
        </div>

        <div class="kpi-peach-card px-4 py-3.5 flex items-center justify-between whitespace-nowrap">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#F97316] text-white flex items-center justify-center shadow-xs shrink-0">
              ${SVG.trendDown}
            </div>
            <div>
              <p class="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Tổng khoản chi</p>
              <p class="font-num text-base sm:text-lg font-extrabold text-[#EF4444] mt-0.5">-${formatVND(stats.totalExpense)}</p>
            </div>
          </div>
          <span class="px-2.5 py-1 rounded-full bg-white/90 border border-orange-200/70 text-[#F97316] font-num font-extrabold text-xs">
            ${expCount} khoản
          </span>
        </div>

        <div class="desun-card px-4 py-3.5 flex items-center justify-between whitespace-nowrap hover:-translate-y-0.5 transition">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#1B365D] text-white flex items-center justify-center shadow-xs shrink-0">
              ${SVG.wallet}
            </div>
            <div>
              <p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Số dư hiện tại</p>
              <p class="font-num text-base sm:text-lg font-extrabold text-[#1B365D] mt-0.5">${formatVND(stats.currentBalance)}</p>
            </div>
          </div>
          <span class="px-2.5 py-1 rounded-full bg-slate-100 text-[#1B365D] font-num font-extrabold text-xs">
            ${allCount} khoản
          </span>
        </div>
      </div>

      <!-- Main Table Card -->
      <div class="desun-card p-4 sm:p-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <h3 class="text-base sm:text-lg font-extrabold text-[#1B365D]">Danh sách thu chi chi tiết</h3>
              <span class="px-2.5 py-0.5 rounded-full bg-slate-100 text-[#1B365D] text-[11px] font-extrabold">
                ${allCount} bản ghi
              </span>
            </div>
            <p class="text-xs text-slate-400 mt-0.5">
              Theo dõi và quản lý trực quan toàn bộ lịch sử thu nhập, chi tiêu
            </p>
          </div>
          <div class="flex items-center gap-2 flex-wrap">
            <button onclick="openAddModal('INCOME')" class="px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#10B981] text-xs font-bold transition flex items-center gap-1.5">
              ${SVG.plus} <span>Thêm khoản thu</span>
            </button>
            <button onclick="openAddModal('EXPENSE')" class="px-4 py-2 btn-desun-orange text-xs flex items-center justify-center gap-1.5">
              ${SVG.plus} <span>Thêm khoản chi</span>
            </button>
          </div>
        </div>

        <!-- Search, Category Select & Type Filter Toolbar -->
        <div class="my-4 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 flex-1">
            <!-- Sleek Search Input -->
            <div class="desun-search-box-sleek flex-1 !h-10">
              <span class="text-slate-400 shrink-0">${SVG.search}</span>
              <input
                id="tx-page-search-input"
                type="text"
                value="${state.searchQuery}"
                oninput="handleSearch(this.value, 'tx-page-search-input')"
                placeholder="Tìm nội dung, danh mục, ví tiền, ngày..."
                autocomplete="off"
                class="w-full bg-transparent text-xs font-bold text-[#1B365D] placeholder-slate-400 focus:outline-none"
              />
              ${state.searchQuery ? `
                <button
                  type="button"
                  onclick="clearGlobalSearch('tx-page-search-input')"
                  class="w-5 h-5 rounded-full bg-slate-200 hover:bg-rose-100 text-slate-500 hover:text-rose-600 text-xs font-extrabold flex items-center justify-center shrink-0 transition"
                  title="Xóa tìm kiếm"
                >×</button>
              ` : ''}
            </div>

            <!-- Custom Searchable Category Select -->
            <div class="desun-select-capsule !h-10 shrink-0">
              ${renderCustomSearchableSelect({
                key: 'TX_CAT',
                prefixLabel: 'Danh mục:',
                valueLabel: state.txCategoryFilter === 'ALL'
                  ? `Tất cả (${allCount})`
                  : ((state.data.categories.find(c => c.id === state.txCategoryFilter) || {}).name || 'Tất cả'),
                hasValue: state.txCategoryFilter !== 'ALL',
                searchPlaceholder: 'Gõ tìm tên danh mục...',
                alignLeft: true
              })}
            </div>
          </div>

          <!-- Type Segmented Pills -->
          <div class="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start lg:self-auto">
            ${[
              { id: 'ALL', label: `Tất cả (${allCount})` },
              { id: 'EXPENSE', label: `Khoản chi (${expCount})` },
              { id: 'INCOME', label: `Khoản thu (${incCount})` }
            ].map(f => `
              <button
                onclick="setTxFilter('${f.id}')"
                class="px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition ${
                  state.txFilter === f.id ? 'bg-white text-[#1B365D] shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }"
              >
                ${f.label}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Structured Data Table Container -->
        <div id="tx-list-target">
          ${renderTransactionTableHTML(stats, isMobile)}
        </div>
      </div>
    </div>
  `;
}

// 3. NGÂN SÁCH, KHOẢN MỤC (MASTER DATA) & MỤC TIÊU (BUDGETS, CATEGORIES & GOALS PAGE)
function renderBudgetsPage(stats) {
  const allCats = state.data.categories || [];
  const expenseCats = allCats.filter(c => !c.isIncome);
  const incomeCats = allCats.filter(c => c.isIncome);
  const userGoals = getActiveUserGoals();
  const totalGoalTarget = userGoals.reduce((s, g) => s + g.target, 0);
  const totalGoalCurrent = userGoals.reduce((s, g) => s + g.current, 0);
  const userTxs = getActiveUserTransactions();

  const headerTitle =
    state.budgetSubTab === 'goals'
      ? 'Mục tiêu tiết kiệm cá nhân'
      : state.budgetSubTab === 'categories'
        ? 'Master Data • Danh mục Khoản Thu - Chi'
        : 'Ngân sách & Khoản mục chi tiêu';

  const headerDesc =
    state.budgetSubTab === 'goals'
      ? `Đã tích lũy: <strong class="text-[#10B981]">${formatVND(totalGoalCurrent)}</strong> / ${formatVND(totalGoalTarget)}`
      : state.budgetSubTab === 'categories'
        ? `Khai báo các khoản mục Thu (${incomeCats.length}) & Chi (${expenseCats.length}) — Tự động đồng bộ Sheet Ngan_Sach_Danh_Muc`
        : 'Kiểm soát hạn mức chi tiêu theo từng khoản mục tháng 10/2026';

  return `
    <div class="desun-card p-5 sm:p-6 animate-fade">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
        <div>
          <h3 class="text-lg font-extrabold text-[#1B365D]">
            ${headerTitle}
          </h3>
          <p class="text-xs text-slate-400 mt-0.5">
            ${headerDesc}
          </p>
        </div>

        <div class="flex items-center gap-2.5 flex-wrap">
          <div class="inline-flex p-1 rounded-full bg-slate-100 text-xs font-bold">
            <button onclick="setBudgetSubTab('budgets')" class="px-3.5 py-1.5 rounded-full transition ${state.budgetSubTab === 'budgets' ? 'bg-[#F97316] text-white shadow-sm' : 'text-slate-600'}">
              Ngân sách (${expenseCats.length})
            </button>
            <button onclick="setBudgetSubTab('categories')" class="px-3.5 py-1.5 rounded-full transition ${state.budgetSubTab === 'categories' ? 'bg-[#1B365D] text-white shadow-sm' : 'text-slate-600'}">
              Khoản mục (${allCats.length})
            </button>
            <button onclick="setBudgetSubTab('goals')" class="px-3.5 py-1.5 rounded-full transition ${state.budgetSubTab === 'goals' ? 'bg-[#F97316] text-white shadow-sm' : 'text-slate-600'}">
              Mục tiêu (${userGoals.length})
            </button>
          </div>

          ${state.budgetSubTab === 'goals' ? `
            <button
              onclick="openGoalModal('CREATE')"
              class="px-4 py-2 btn-desun-orange text-xs flex items-center gap-1.5 shrink-0"
            >
              ${SVG.plus} <span>Thêm mục tiêu</span>
            </button>
          ` : `
            <button
              onclick="openCategoryModal('CREATE', null, 'EXPENSE')"
              class="px-4 py-2 btn-desun-orange text-xs flex items-center gap-1.5 shrink-0"
            >
              ${SVG.plus} <span>Thêm khoản mục</span>
            </button>
          `}
        </div>
      </div>

      ${state.budgetSubTab === 'budgets' ? `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${expenseCats.map(c => {
            const limitVal = c.limit || 2000000;
            const spent = stats.byCat[c.id] || 0;
            const pct = Math.min(100, Math.round((spent / limitVal) * 100));
            return `
              <div class="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-slate-200 transition">
                <div class="flex items-center justify-between mb-2.5">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style="background:${c.bg}; color:${c.color}">
                      ${SVG[c.icon] || SVG.wallet}
                    </div>
                    <div>
                      <p class="text-sm font-bold text-[#1B365D]">${c.name}</p>
                      <p class="text-xs font-num text-slate-400">
                        <strong class="text-slate-700">${formatVND(spent)}</strong> / ${formatVND(limitVal)}
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-col items-end gap-1">
                    <span class="font-num text-sm font-extrabold text-[#1B365D]">${pct}%</span>
                    <div class="flex items-center gap-2">
                      <button
                        onclick="openCategoryModal('EDIT', '${c.id}')"
                        class="text-[11px] font-bold text-slate-400 hover:text-[#1B365D]"
                        title="Sửa tên, màu sắc & hạn mức khoản mục"
                      >
                        Sửa mục
                      </button>
                      <button
                        onclick="openGoalModal('BUDGET_LIMIT', '${c.id}')"
                        class="text-[11px] font-bold text-[#F97316] hover:underline"
                      >
                        Hạn mức
                      </button>
                    </div>
                  </div>
                </div>
                <div class="w-full h-2 bg-slate-200/80 rounded-full overflow-hidden">
                  <div class="h-full rounded-full progress-smooth" style="width:${pct}%; background:${c.color}"></div>
                </div>
              </div>
            `;
          }).join('')}

          <!-- Nút thêm nhanh khoản mục chi tiêu -->
          <button
            type="button"
            onclick="openCategoryModal('CREATE', null, 'EXPENSE')"
            class="p-4 rounded-2xl border-2 border-dashed border-slate-200 hover:border-[#F97316] hover:bg-orange-50/30 transition flex items-center justify-center gap-3 text-slate-500 hover:text-[#F97316] min-h-[92px] cursor-pointer"
          >
            <span class="w-9 h-9 rounded-full bg-orange-50 text-[#F97316] flex items-center justify-center">${SVG.plus}</span>
            <div class="text-left">
              <p class="text-xs font-extrabold text-[#1B365D]">+ Thêm khoản mục chi tiêu</p>
              <p class="text-[11px] text-slate-400">Đi lại, Ăn uống, Tiền nhà, Học tập...</p>
            </div>
          </button>
        </div>
      ` : state.budgetSubTab === 'categories' ? `
        <div class="space-y-6">
          <!-- Nhóm 1: Khoản mục Chi tiêu (EXPENSE) -->
          <div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#F97316]"></span>
                <h4 class="text-sm font-extrabold text-[#1B365D]">Khoản mục Chi tiêu (${expenseCats.length})</h4>
              </div>
              <button
                type="button"
                onclick="openCategoryModal('CREATE', null, 'EXPENSE')"
                class="px-3 py-1.5 rounded-xl bg-orange-50 hover:bg-orange-100 text-[#EA580C] text-xs font-extrabold transition flex items-center gap-1 cursor-pointer"
              >
                ${SVG.plus} <span>Thêm khoản chi</span>
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              ${expenseCats.map(c => {
                const txCount = userTxs.filter(t => t.categoryId === c.id).length;
                return `
                  <div class="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-slate-300 hover:bg-white transition flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3 min-w-0">
                      <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style="background:${c.bg}; color:${c.color}">
                        ${SVG[c.icon] || SVG.wallet}
                      </div>
                      <div class="min-w-0">
                        <div class="flex items-center gap-1.5">
                          <p class="text-sm font-extrabold text-[#1B365D] truncate">${c.name}</p>
                          <span class="px-1.5 py-0.5 rounded bg-slate-100 text-slate-400 font-num text-[9px] font-bold">#${c.id}</span>
                        </div>
                        <p class="text-[11px] text-slate-500 font-num mt-0.5">
                          Hạn mức: <strong class="text-slate-700">${formatVND(c.limit || 2000000)}</strong> • ${txCount} GD
                        </p>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onclick="openCategoryModal('EDIT', '${c.id}')"
                        class="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-[#1B365D] text-slate-600 hover:text-[#1B365D] text-[11px] font-bold transition cursor-pointer"
                      >
                        Sửa
                      </button>
                      <button
                        type="button"
                        onclick="deleteCategory('${c.id}', event)"
                        class="p-1.5 rounded-lg text-slate-300 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer"
                        title="Xóa khoản mục"
                      >
                        ${SVG.trash}
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Nhóm 2: Khoản mục Thu nhập (INCOME) -->
          <div class="pt-4 border-t border-slate-100">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
                <h4 class="text-sm font-extrabold text-[#1B365D]">Khoản mục Thu nhập (${incomeCats.length})</h4>
              </div>
              <button
                type="button"
                onclick="openCategoryModal('CREATE', null, 'INCOME')"
                class="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#15803D] text-xs font-extrabold transition flex items-center gap-1 cursor-pointer"
              >
                ${SVG.plus} <span>Thêm khoản thu</span>
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              ${incomeCats.map(c => {
                const txCount = userTxs.filter(t => t.categoryId === c.id).length;
                const totalInc = userTxs.filter(t => t.categoryId === c.id && t.type === 'INCOME').reduce((s, t) => s + t.amount, 0);
                return `
                  <div class="p-3.5 rounded-2xl bg-emerald-50/35 border border-emerald-200/70 hover:border-emerald-300 hover:bg-white transition flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3 min-w-0">
                      <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style="background:${c.bg}; color:${c.color}">
                        ${SVG[c.icon] || SVG.wallet}
                      </div>
                      <div class="min-w-0">
                        <div class="flex items-center gap-1.5">
                          <p class="text-sm font-extrabold text-[#1B365D] truncate">${c.name}</p>
                          <span class="px-1.5 py-0.5 rounded bg-white text-emerald-700 font-num text-[9px] font-bold">#${c.id}</span>
                        </div>
                        <p class="text-[11px] text-slate-500 font-num mt-0.5">
                          Đã thu: <strong class="text-[#10B981]">${formatVND(totalInc)}</strong> • ${txCount} GD
                        </p>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onclick="openCategoryModal('EDIT', '${c.id}')"
                        class="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-[#1B365D] text-slate-600 hover:text-[#1B365D] text-[11px] font-bold transition cursor-pointer"
                      >
                        Sửa
                      </button>
                      <button
                        type="button"
                        onclick="deleteCategory('${c.id}', event)"
                        class="p-1.5 rounded-lg text-slate-300 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer"
                        title="Xóa khoản mục"
                      >
                        ${SVG.trash}
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      ` : `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${userGoals.map(g => {
            const pct = Math.min(100, Math.round((g.current / g.target) * 100));
            const remaining = Math.max(0, g.target - g.current);
            return `
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-slate-200 transition flex items-start gap-4 group">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs" style="background:${g.bg}; color:${g.color}">
                  ${SVG[g.icon] || SVG.shieldCheck}
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between gap-2 mb-1">
                    <h4 class="font-extrabold text-sm sm:text-base text-[#1B365D] truncate">${g.title}</h4>
                    <div class="flex items-center gap-1.5 shrink-0">
                      <button
                        onclick="openGoalModal('DEPOSIT', '${g.id}')"
                        class="px-3 py-1 rounded-lg bg-[#FFF1E6] hover:bg-orange-100 text-[#F97316] text-xs font-bold transition"
                      >
                        + Nạp tiền
                      </button>
                      <button
                        onclick="openGoalModal('EDIT', '${g.id}')"
                        class="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-600 text-xs font-bold transition"
                      >
                        Sửa
                      </button>
                      <button
                        onclick="deleteGoal('${g.id}')"
                        class="p-1.5 rounded-lg text-slate-300 hover:text-rose-500 hover:bg-rose-50 transition"
                        title="Xóa mục tiêu"
                      >
                        ${SVG.trash}
                      </button>
                    </div>
                  </div>

                  <div class="flex items-center justify-between text-xs font-num text-slate-400 mb-2">
                    <span>Đã có: <strong class="text-[#10B981]">${formatVND(g.current)}</strong> / ${formatVND(g.target)}</span>
                    <span class="font-bold text-[#1B365D]">${pct}%</span>
                  </div>

                  <div class="w-full h-2.5 bg-slate-200/80 rounded-full overflow-hidden mb-2">
                    <div class="h-full rounded-full progress-smooth" style="width:${pct}%; background:${g.color}"></div>
                  </div>

                  <p class="text-[11px] text-slate-400 font-num">
                    ${remaining > 0
                      ? `Còn thiếu <strong class="text-slate-600">${formatVND(remaining)}</strong> để hoàn thành mục tiêu`
                      : `<strong class="text-[#10B981]">Đã hoàn thành 100% mục tiêu!</strong>`}
                  </p>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;
}

// 4. CÁ NHÂN & TÀI KHOẢN (PROFILE & INDIVIDUAL USERS PAGE)
function renderProfilePage(stats) {
  const activeWs = state.data.workspaces.find(w => w.id === state.data.activeWorkspace) || state.data.workspaces[0];
  const loggedInWs = getLoggedInWorkspaces();
  const isAdmin = isCurrentUserAdmin();

  return `
    <div class="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 animate-fade">
      <!-- Left Column: Hồ sơ & Chuyển đổi tài khoản -->
      <div class="lg:col-span-6 desun-card p-5 sm:p-6 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-3 mb-5">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-full bg-gradient-to-br from-[#1B365D] to-[#0284C7] text-white font-extrabold text-lg flex items-center justify-center shadow-md shrink-0">
                ${activeWs.avatar || 'TĐ'}
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <h3 class="text-lg font-extrabold text-[#1B365D]">${state.data.userName}</h3>
                  ${isAdmin ? `
                    <span class="px-2.5 py-0.5 rounded-full bg-amber-100 text-[#D97706] border border-amber-300 text-[10px] font-extrabold uppercase tracking-wider">
                      Quản trị viên (Admin)
                    </span>
                  ` : `
                    <span class="px-2.5 py-0.5 rounded-full bg-sky-50 text-[#0284C7] border border-sky-200 text-[10px] font-extrabold uppercase tracking-wider">
                      Thành viên (User)
                    </span>
                  `}
                </div>
                <p class="text-xs text-slate-400 mt-0.5">${state.data.userEmail} • Mã TK: <strong class="font-num text-slate-600">#${String(activeWs.id).toUpperCase()}</strong></p>
              </div>
            </div>
            ${isAdmin ? `
              <button
                type="button"
                onclick="navigate('admin_accounts')"
                class="px-3.5 py-2 rounded-xl bg-[#1B365D] hover:bg-[#132847] text-white text-xs font-extrabold transition flex items-center gap-1.5 shadow-sm shrink-0"
              >
                ${SVG.users}
                <span>Quản trị Tài khoản</span>
              </button>
            ` : ''}
          </div>

          <div class="p-4 rounded-2xl bg-[#ECFDF5] border border-[#D1FAE5] flex items-center justify-between mb-5">
            <div>
              <p class="text-xs text-slate-500 font-medium">Tài khoản cá nhân • Số dư hiện tại</p>
              <p class="font-num text-2xl font-extrabold text-[#1B365D] mt-0.5">${formatVND(stats.currentBalance)}</p>
            </div>
            <span class="text-[#10B981]">›</span>
          </div>

          <div class="flex items-center justify-between mb-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400">Chuyển đổi Cá nhân sử dụng (Đã đăng nhập)</h4>
            <span class="text-[11px] font-bold text-[#10B981] bg-emerald-50 px-2.5 py-0.5 rounded-full">
              ${loggedInWs.length} tài khoản trên thiết bị
            </span>
          </div>
          <div class="mb-5">
            <div class="field-airy h-11 px-3.5 flex items-center gap-2.5">
              <span class="w-7 h-7 rounded-full bg-[#1B365D] text-white text-[10px] font-extrabold flex items-center justify-center shrink-0">
                ${activeWs.avatar || 'TĐ'}
              </span>
              <select
                onchange="switchWorkspace(this.value)"
                class="w-full bg-transparent text-xs sm:text-sm font-bold text-[#1B365D] focus:outline-none cursor-pointer"
              >
                ${loggedInWs.map(w => `
                  <option value="${w.id}" ${state.data.activeWorkspace === w.id ? 'selected' : ''}>
                    ${w.fullName || w.name} (${w.email}) ${w.roleCode === 'ADMIN' || w.id === 'personal' ? '— [ADMIN]' : '— [USER]'}
                  </option>
                `).join('')}
                <option value="NEW_ACCOUNT">+ Chuyển sang màn hình Đăng nhập tài khoản khác...</option>
              </select>
            </div>
            <p class="text-[11px] text-slate-400 mt-1.5">
              Chỉ những tài khoản đã được <strong>Quản trị viên (Admin)</strong> cấp quyền mới có thể đăng nhập vào hệ thống.
            </p>
          </div>
        </div>

        <div class="divide-y divide-slate-100 text-xs sm:text-sm font-semibold text-slate-700 pt-2 border-t border-slate-100">
          ${isAdmin ? `
            <div onclick="navigate('admin_accounts')" class="py-3 flex items-center justify-between cursor-pointer text-[#0284C7] hover:text-[#F97316] font-extrabold">
              <span>Quản lý & Cấp phát tài khoản đăng nhập (Chỉ Admin)</span>
              <span>→</span>
            </div>
          ` : ''}
          <div onclick="showToast('Đã bật thông báo nhắc nhở ngân sách')" class="py-3 flex items-center justify-between cursor-pointer hover:text-[#F97316]">
            <span>Cài đặt thông báo cá nhân</span>
            <span class="text-slate-400">›</span>
          </div>
          <div onclick="resetPrototype()" class="py-3 flex items-center justify-between cursor-pointer text-slate-600 hover:text-[#F97316]">
            <span>Khôi phục dữ liệu mẫu ban đầu</span>
            <span>↺</span>
          </div>
          <div onclick="logoutApp()" class="py-3 flex items-center justify-between cursor-pointer text-rose-600 font-bold">
            <span>Đăng xuất khỏi tài khoản</span>
            <span>→</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Danh sách Ví & Nguồn tiền cá nhân + Cơ sở dữ liệu Excel -->
      <div class="lg:col-span-6 space-y-4">
        <div class="desun-card p-5 sm:p-6">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h4 class="text-base font-extrabold text-[#1B365D]">Danh sách Ví & Nguồn tiền cá nhân</h4>
              <p class="text-xs text-slate-400 mt-0.5">Quản lý các nguồn tiền thanh toán của ${state.data.userName}</p>
            </div>
            <span class="px-2.5 py-1 rounded-full bg-slate-100 text-xs font-extrabold text-[#1B365D]">${getActiveUserWallets().length} ví</span>
          </div>
          <div class="space-y-3">
            ${getActiveUserWallets().map(w => `
              <div class="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 transition flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-white border border-slate-200/80 text-[#1B365D] flex items-center justify-center shadow-2xs">
                    ${SVG.wallet}
                  </div>
                  <div>
                    <p class="text-xs sm:text-sm font-bold text-[#1B365D]">${w.name}</p>
                    <p class="text-[11px] text-slate-400">${w.type} • ${w.number}</p>
                  </div>
                </div>
                <span class="font-num text-sm sm:text-base font-extrabold text-[#1B365D]">${formatVND(w.balance)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// COMPONENT: Nút Chuyển Đổi Phân Hệ Module Thanh Thoát (Chỉ giữ Icon 3D Cube + Nhãn PFM / ADM + Popover)
// Hiện có 2 Module: PFM (Quản lý chi tiêu) & ADM (Quản lý tài khoản)
// ============================================================================
function renderSidebarModuleDockHTML() {
  const isAdmin = isCurrentUserAdmin();
  const activeWs = (state.data.workspaces || []).find(w => w.id === state.data.activeWorkspace) || state.data.workspaces[0];
  const userAllowedMods = Array.isArray(activeWs.allowedModules) ? activeWs.allowedModules : (isAdmin ? ['PFM', 'ADM'] : ['PFM']);
  const currentModCode = state.activePage === 'admin_accounts' ? 'ADM' : 'PFM';
  const currentModObj = SYSTEM_MODULES.find(m => m.code === currentModCode) || SYSTEM_MODULES[0];

  return `
    <div class="relative pt-1" onclick="event.stopPropagation()">
      <!-- POPOVER CHỌN MODULE (Mở nổi lên trên thanh thoát, không bao giờ bị tràn hay bị đè) -->
      ${state.moduleSwitcherOpen ? `
        <div
          onclick="event.stopPropagation()"
          class="absolute left-0 bottom-full mb-2.5 z-50 w-[248px] bg-white rounded-[20px] border border-slate-200/90 shadow-[0_14px_36px_rgba(15,23,42,0.16)] p-2 animate-modal-pop"
        >
          <div class="px-2.5 py-1.5 mb-1 border-b border-slate-100 flex items-center justify-between">
            <span class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Chuyển đổi Module</span>
            <span class="px-2 py-0.5 rounded-full bg-[#E8F8EE] text-[#15803D] text-[10px] font-extrabold">${SYSTEM_MODULES.length} phân hệ</span>
          </div>
          <div class="space-y-1">
            ${SYSTEM_MODULES.map(mod => {
              const isSelected = currentModCode === mod.code;
              const hasAccess = isAdmin || userAllowedMods.includes(mod.code);
              return `
                <button
                  type="button"
                  onclick="selectSystemModule('${mod.code}', event)"
                  class="w-full px-3 py-2.5 rounded-[13px] flex items-center justify-between gap-2 text-left transition cursor-pointer ${
                    isSelected
                      ? 'bg-[#F0F5FF] text-[#4F81EE] font-bold'
                      : hasAccess
                        ? 'bg-transparent hover:bg-slate-50 text-[#1E293B] font-semibold'
                        : 'bg-transparent hover:bg-rose-50/50 text-slate-400 opacity-65'
                  }"
                >
                  <div class="flex items-center gap-2.5 min-w-0">
                    <span class="${isSelected ? 'text-[#4F81EE]' : 'text-[#1E293B]'} shrink-0">
                      ${SVG.moduleCube}
                    </span>
                    <span class="text-[12.5px] leading-snug whitespace-nowrap">${mod.code} - ${mod.name}</span>
                  </div>
                  <div class="flex items-center shrink-0">
                    ${!hasAccess ? `<span class="text-[9.5px] font-bold text-rose-400">Khóa</span>` : ''}
                    ${isSelected ? `<span class="text-[#4F81EE]">${SVG.checkMod}</span>` : ''}
                  </div>
                </button>
              `;
            }).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Nút bấm Module Switcher gọn đẹp, thanh thoát (Đã bỏ nút Trái đất & nút Ghim) -->
      <button
        type="button"
        onclick="toggleSidebarModuleSwitcher(event)"
        class="w-full p-2.5 rounded-2xl bg-[#F8FAFC] hover:bg-[#F2FBF6] border ${
          state.moduleSwitcherOpen ? 'border-[#34D399] ring-2 ring-[#34D399]/15 bg-[#F2FBF6]' : 'border-slate-200/80 hover:border-[#34D399]/70'
        } flex items-center gap-3 text-left transition cursor-pointer group"
        title="Bấm để chuyển đổi phân hệ: PFM (Quản lý chi tiêu) / ADM (Quản lý tài khoản)"
      >
        <!-- Icon Khối 3D Cube + Nhãn PFM / ADM -->
        <div class="w-[42px] h-[42px] rounded-[13px] bg-[#E8F8EE] border border-[#34D399] text-[#047857] group-hover:bg-[#D1FAE5] flex items-center justify-center relative shrink-0 shadow-2xs transition">
          <span class="-mt-1">${SVG.moduleCube}</span>
          <span class="absolute -bottom-1.5 px-2 py-[1.5px] rounded-full bg-[#15803D] text-white font-extrabold text-[9px] leading-none tracking-wider shadow-2xs border border-white">
            ${currentModCode}
          </span>
        </div>

        <!-- Tên phân hệ rõ ràng, không bị cắt chữ -->
        <div class="min-w-0 flex-1">
          <div class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 group-hover:text-[#15803D] transition">
            Phân hệ đang mở
          </div>
          <div class="text-xs font-extrabold text-[#1B365D] truncate mt-0.5">
            ${currentModObj.code} - ${currentModObj.name}
          </div>
        </div>

        <!-- Mũi tên mở Popover -->
        <span class="text-slate-400 group-hover:text-[#15803D] text-xs font-extrabold pr-1 shrink-0 transition">
          ${state.moduleSwitcherOpen ? '▴' : '▾'}
        </span>
      </button>
    </div>
  `;
}

// ============================================================================
// 5. MODULE ADM - QUẢN LÝ TÀI KHOẢN (TRANG QUẢN LÝ PHÂN QUYỀN ACCOUNT)
// ============================================================================
function renderAdminAccountsPage() {
  const isAdmin = isCurrentUserAdmin();
  if (!isAdmin) {
    return `
      <div class="desun-card p-8 text-center max-w-xl mx-auto my-8 animate-fade">
        <div class="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center mx-auto mb-3">
          ${SVG.lock}
        </div>
        <h3 class="text-lg font-extrabold text-[#1B365D]">Module ADM — Chỉ dành cho Quản trị viên (Admin)</h3>
        <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">
          Tài khoản hiện tại (<strong>${state.data.userName}</strong> — <span class="font-bold text-[#0284C7]">${state.data.userEmail}</span>) chỉ được cấp quyền sử dụng module <strong>PFM - Quản lý chi tiêu</strong>.
          Chỉ tài khoản được phân quyền <strong>ADM - Quản lý tài khoản</strong> mới được truy cập trang này.
        </p>
        <div class="mt-5 flex items-center justify-center gap-2.5">
          <button onclick="selectSystemModule('PFM', event)" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition">
            ← Về Module PFM - Quản lý chi tiêu
          </button>
          <button onclick="logoutApp()" class="px-4 py-2 btn-desun-orange text-xs font-bold">
            Đăng nhập tài khoản Admin
          </button>
        </div>
      </div>
    `;
  }

  const allUsers = state.data.workspaces || [];
  const av = state.adminAccountView || {
    search: '',
    roleFilter: 'ALL',
    statusFilter: 'ALL',
    moduleFilter: 'ALL',
    selectedUserForModuleRbac: 'personal',
    activeModuleBadgeCode: 'ADM',
    openRowModuleMenuUserId: null
  };
  const q = String(av.search || '').trim().toLowerCase();

  const adminCount = allUsers.filter(u => u.roleCode === 'ADMIN' || u.id === 'personal').length;
  const memberCount = allUsers.length - adminCount;
  const activeCount = allUsers.filter(u => u.status !== 'N').length;
  const lockedCount = allUsers.filter(u => u.status === 'N').length;

  const filteredUsers = allUsers.filter(u => {
    const rCode = (u.roleCode === 'ADMIN' || u.id === 'personal') ? 'ADMIN' : 'USER';
    const stCode = u.status === 'N' ? 'N' : 'Y';
    const uMods = Array.isArray(u.allowedModules) ? u.allowedModules : (rCode === 'ADMIN' ? ['PFM', 'ADM'] : ['PFM']);
    if (av.roleFilter && av.roleFilter !== 'ALL' && rCode !== av.roleFilter) return false;
    if (av.statusFilter && av.statusFilter !== 'ALL' && stCode !== av.statusFilter) return false;
    if (av.moduleFilter && av.moduleFilter !== 'ALL' && !uMods.includes(av.moduleFilter)) return false;
    if (q) {
      const mName = String(u.fullName || '').toLowerCase().includes(q) || String(u.name || '').toLowerCase().includes(q);
      const mEmail = String(u.email || '').toLowerCase().includes(q);
      const mId = String(u.id || '').toLowerCase().includes(q);
      const mRole = String(u.role || '').toLowerCase().includes(q);
      const mMod = uMods.join(' ').toLowerCase().includes(q);
      if (!mName && !mEmail && !mId && !mRole && !mMod) return false;
    }
    return true;
  });

  return `
    <div class="space-y-3.5 animate-fade">
      <!-- Top Banner: Gọn gàng, ít chữ, thân thiện -->
      <div class="desun-card px-4 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div class="flex items-center gap-3 min-w-0">
          <div
            onclick="toggleSidebarModuleSwitcher(event)"
            class="w-10 h-10 rounded-xl bg-[#E8F8EE] border border-[#34D399] text-[#047857] hover:bg-[#D1FAE5] flex flex-col items-center justify-center relative shrink-0 cursor-pointer transition"
            title="Chuyển đổi phân hệ"
          >
            <span class="-mt-1">${SVG.moduleCube}</span>
            <span class="absolute -bottom-1 px-1.5 py-[1px] rounded-full bg-[#15803D] text-white font-extrabold text-[8.5px] leading-none border border-white">
              ADM
            </span>
          </div>
          <div class="min-w-0">
            <h2 class="text-base font-extrabold text-[#1B365D] leading-tight">
              Quản lý Tài khoản
            </h2>
            <p class="text-xs text-slate-400 mt-0.5 truncate">
              Cấp tài khoản và phân quyền sử dụng cho các thành viên
            </p>
          </div>
        </div>

        <div class="flex items-center gap-2 flex-wrap shrink-0">
          <button
            type="button"
            onclick="selectSystemModule('PFM', event)"
            class="h-9 px-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-[#1B365D] text-xs font-bold transition inline-flex items-center gap-1.5 cursor-pointer"
          >
            ${SVG.moduleCube}
            <span>Về Chi tiêu</span>
          </button>
          <button
            type="button"
            onclick="syncToExcelDatabaseNow()"
            class="h-9 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#059669] border border-emerald-200/80 text-xs font-bold transition inline-flex items-center gap-1.5 cursor-pointer"
          >
            ${SVG.excel}
            <span>Lưu Excel</span>
          </button>
          <button
            type="button"
            onclick="openAdminUserModal('CREATE')"
            class="h-9 px-3.5 btn-desun-orange text-xs font-extrabold inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
          >
            ${SVG.plus}
            <span>Thêm tài khoản</span>
          </button>
        </div>
      </div>

      <!-- 4 Thẻ Tóm tắt Gọn, Thân thiện, Ít chữ -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div class="desun-card px-4 py-3 flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-slate-100 text-[#1B365D] flex items-center justify-center shrink-0">
            ${SVG.users}
          </div>
          <div class="min-w-0">
            <div class="text-[11px] font-bold text-slate-400">Tổng tài khoản</div>
            <div class="flex items-baseline gap-2 mt-0.5">
              <span class="font-num text-xl font-extrabold text-[#1B365D]">${allUsers.length}</span>
              <span class="text-[11px] font-semibold text-emerald-600 truncate">● ${activeCount} hoạt động</span>
            </div>
          </div>
        </div>

        <div class="desun-card px-4 py-3 flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 text-[#F97316] flex items-center justify-center shrink-0">
            ${SVG.shieldCheck}
          </div>
          <div class="min-w-0">
            <div class="text-[11px] font-bold text-slate-400">Quản trị viên</div>
            <div class="flex items-baseline gap-2 mt-0.5">
              <span class="font-num text-xl font-extrabold text-[#F97316]">${adminCount}</span>
              <span class="text-[11px] font-medium text-slate-400 truncate">Toàn quyền</span>
            </div>
          </div>
        </div>

        <div class="desun-card px-4 py-3 flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200/60 text-[#0284C7] flex items-center justify-center shrink-0">
            ${SVG.user}
          </div>
          <div class="min-w-0">
            <div class="text-[11px] font-bold text-slate-400">Thành viên</div>
            <div class="flex items-baseline gap-2 mt-0.5">
              <span class="font-num text-xl font-extrabold text-[#0284C7]">${memberCount}</span>
              <span class="text-[11px] font-medium text-slate-400 truncate">Dùng sổ chi tiêu</span>
            </div>
          </div>
        </div>

        <div class="desun-card px-4 py-3 flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 text-[#10B981] flex items-center justify-center shrink-0">
            ${SVG.excel}
          </div>
          <div class="min-w-0">
            <div class="text-[11px] font-bold text-slate-400">Dữ liệu Excel</div>
            <div class="flex items-baseline gap-1.5 mt-0.5">
              <span class="text-sm font-extrabold text-[#10B981] truncate">Đã đồng bộ</span>
              <span class="font-num text-[11px] font-medium text-slate-400 truncate">${state.excel.lastSavedAt || ''}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- BẢNG BIỂU CHUẨN QUẢN LÝ TÀI KHOẢN & PHÂN QUYỀN MODULE (CĂN CHỈNH CHUẨN TỪNG CỘT) -->
      <div class="desun-card p-4 sm:p-5">
        <!-- Thanh tiêu đề + Bộ lọc + Tìm kiếm gọn gàng -->
        <div class="pb-3.5 mb-3.5 border-b border-slate-100 space-y-3">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-2.5">
            <div class="flex items-center gap-2">
              <h3 class="text-sm sm:text-[15px] font-extrabold text-[#1B365D]">
                Danh sách tài khoản (${filteredUsers.length})
              </h3>
            </div>

            <div class="flex items-center gap-2 flex-wrap">
              <!-- Lọc theo Module: Tất cả / PFM / ADM -->
              <div class="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                <button
                  type="button"
                  onclick="setAdminModuleFilter('ALL')"
                  class="px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                    (av.moduleFilter || 'ALL') === 'ALL' ? 'bg-white text-[#1B365D] shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                  }"
                >
                  Mọi Module
                </button>
                ${SYSTEM_MODULES.map(m => {
                  const isActMod = av.moduleFilter === m.code;
                  return `
                    <button
                      type="button"
                      onclick="setAdminModuleFilter('${m.code}')"
                      class="px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition inline-flex items-center gap-1 cursor-pointer ${
                        isActMod
                          ? 'bg-[#15803D] text-white shadow-2xs'
                          : 'text-[#047857] hover:bg-emerald-50'
                      }"
                      title="${m.fullLabel}"
                    >
                      <span>${m.code}</span>
                    </button>
                  `;
                }).join('')}
              </div>

              <!-- Lọc theo Role -->
              <div class="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                ${[
                  { id: 'ALL', label: `Tất cả (${allUsers.length})` },
                  { id: 'ADMIN', label: `Admin (${adminCount})` },
                  { id: 'USER', label: `User (${memberCount})` }
                ].map(rf => `
                  <button
                    type="button"
                    onclick="setAdminAccountRoleFilter('${rf.id}')"
                    class="px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                      (av.roleFilter || 'ALL') === rf.id ? 'bg-white text-[#1B365D] shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                    }"
                  >
                    ${rf.label}
                  </button>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Ô tìm kiếm nhanh + Lọc trạng thái -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div class="desun-search-box-sleek flex-1 !h-9">
              <span class="text-slate-400 shrink-0">${SVG.search}</span>
              <input
                id="admin-account-search-input"
                type="text"
                value="${av.search || ''}"
                oninput="setAdminAccountSearch(this.value)"
                placeholder="Tìm nhanh theo Họ tên, Email đăng nhập, Mã TK hoặc Module (PFM, ADM)..."
                autocomplete="off"
                class="w-full bg-transparent text-xs font-semibold text-[#1B365D] placeholder-slate-400 focus:outline-none"
              />
              ${av.search ? `
                <button
                  type="button"
                  onclick="setAdminAccountSearch('')"
                  class="w-5 h-5 rounded-full bg-slate-200 hover:bg-rose-100 text-slate-500 hover:text-rose-600 text-xs font-extrabold flex items-center justify-center shrink-0 transition"
                >×</button>
              ` : ''}
            </div>

            <div class="flex items-center gap-1 bg-slate-100 p-1 rounded-xl shrink-0">
              ${[
                { id: 'ALL', label: 'Mọi trạng thái' },
                { id: 'Y', label: `Hoạt động (${activeCount})` },
                { id: 'N', label: `Đã khóa (${lockedCount})` }
              ].map(sf => `
                <button
                  type="button"
                  onclick="setAdminAccountStatusFilter('${sf.id}')"
                  class="px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                    (av.statusFilter || 'ALL') === sf.id ? 'bg-white text-[#1B365D] shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                  }"
                >
                  ${sf.label}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- BẢNG DANH SÁCH TÀI KHOẢN CHUẨN GIAO DIỆN DESUN (GỌN, KHÔNG TRÀN, HIỆU ỨNG HOVER MƯỢT) -->
        <div class="desun-admin-table-wrap">
          <table class="desun-admin-table">
            <thead>
              <tr>
                <th class="w-12 text-center">STT</th>
                <th>Chủ tài khoản</th>
                <th>Tài khoản & Mật khẩu</th>
                <th class="text-center">Vai trò</th>
                <th>Module</th>
                <th class="text-right">Số dư Ví</th>
                <th class="text-center">Trạng thái</th>
                <th class="text-right pr-4">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              ${filteredUsers.length === 0 ? `
                <tr>
                  <td colspan="8" class="py-10 text-center text-xs font-bold text-slate-400">
                    Không tìm thấy tài khoản nào khớp bộ lọc hiện tại.
                  </td>
                </tr>
              ` : filteredUsers.map((u, idx) => {
                const isRoot = u.id === 'personal';
                const isAdm = u.roleCode === 'ADMIN' || isRoot;
                const isActive = u.status !== 'N';
                const uMods = Array.isArray(u.allowedModules) ? u.allowedModules : (isAdm ? ['PFM', 'ADM'] : ['PFM']);
                const uTxs = (state.data.transactions || []).filter(t => t.status !== 'D' && (t.userId || 'personal') === u.id);
                const uWallets = (state.data.wallets || []).filter(w => (w.userId || 'personal') === u.id);
                const uBalance = uWallets.reduce((s, w) => s + (Number(w.balance) || 0), 0);
                const passVal = u.password || DEFAULT_USER_PASSWORDS[u.id] || 'Desun@123';
                const isRowPopoverOpen = av.openRowModuleMenuUserId === u.id;
                const stt = String(idx + 1).padStart(2, '0');

                return `
                  <tr
                    onclick="openAdminUserModal('EDIT', '${u.id}')"
                    class="group cursor-pointer ${!isActive ? 'opacity-60 bg-rose-50/20' : ''}"
                    title="Bấm vào dòng để chỉnh sửa & phân quyền cho ${u.fullName || u.name}"
                  >
                    <!-- Cột 1: STT -->
                    <td class="text-center font-num text-xs font-bold text-slate-400 group-hover:text-[#F97316] transition-colors">
                      #${stt}
                    </td>

                    <!-- Cột 2: Chủ tài khoản -->
                    <td>
                      <div class="flex items-center gap-2.5">
                        <div class="tx-row-icon w-8 h-8 rounded-xl ${isAdm ? 'bg-gradient-to-br from-[#F97316] to-[#EA580C]' : 'bg-gradient-to-br from-[#1B365D] to-[#0284C7]'} text-white text-[11px] font-extrabold flex items-center justify-center shrink-0 shadow-2xs">
                          ${u.avatar || computeAvatarInitials(u.fullName)}
                        </div>
                        <div class="min-w-0">
                          <div class="flex items-center gap-1.5">
                            <span class="text-xs sm:text-[13px] font-bold text-[#1B365D] group-hover:text-[#F97316] transition-colors truncate">${u.fullName || u.name}</span>
                            ${isRoot ? `<span class="px-1.5 py-0.5 rounded bg-amber-100 text-[#D97706] text-[9px] font-extrabold uppercase">Root</span>` : ''}
                          </div>
                          <div class="text-[10.5px] text-slate-400">
                            Cấp: ${u.createdAt || '10/10/2026'}
                          </div>
                        </div>
                      </div>
                    </td>

                    <!-- Cột 3: Tài khoản & Mật khẩu -->
                    <td onclick="event.stopPropagation()">
                      <div class="text-xs font-bold text-[#0284C7]">${u.email}</div>
                      <div class="inline-flex items-center gap-1 mt-0.5">
                        <span class="px-1.5 py-0.5 rounded bg-orange-50 border border-orange-200/70 text-[#EA580C] font-num text-[10px] font-bold">
                          ${passVal}
                        </span>
                        <button
                          type="button"
                          onclick="event.stopPropagation(); copyAccountCredentials('${u.id}')"
                          class="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-[#1B365D] text-slate-500 hover:text-white text-[10px] font-bold transition cursor-pointer"
                          title="Sao chép Email & Mật khẩu"
                        >
                          Copy
                        </button>
                      </div>
                    </td>

                    <!-- Cột 4: Vai trò -->
                    <td class="text-center">
                      ${isAdm ? `
                        <span class="desun-pill !px-2.5 !py-0.5 !text-[10.5px] bg-amber-50 text-[#B45309] border border-amber-300/80">
                          <span class="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
                          <span>Admin</span>
                        </span>
                      ` : `
                        <span class="desun-pill !px-2.5 !py-0.5 !text-[10.5px] bg-sky-50 text-[#0284C7] border border-sky-200/90">
                          <span class="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>
                          <span>Thành viên</span>
                        </span>
                      `}
                    </td>

                    <!-- Cột 5: Phân quyền Module (Gọn nhẹ trên 1 hàng, không gây tràn ngang) -->
                    <td class="relative" onclick="event.stopPropagation()">
                      <div class="inline-flex items-center gap-1 flex-nowrap">
                        ${uMods.map(mc => {
                          const mInfo = SYSTEM_MODULES.find(x => x.code === mc);
                          return `
                            <span
                              class="desun-pill !px-2 !py-0.5 !text-[10.5px] ${
                                mc === 'ADM'
                                  ? 'bg-amber-50 border border-amber-300/80 text-[#B45309]'
                                  : 'bg-[#E8F8EE] border border-[#34D399]/80 text-[#15803D]'
                              }"
                              title="${mInfo ? mInfo.fullLabel : mc}"
                            >
                              <span>${mc}</span>
                            </span>
                          `;
                        }).join('')}
                        <button
                          type="button"
                          onclick="toggleRowModulePopover('${u.id}', event)"
                          class="desun-pill !px-2 !py-0.5 !text-[10.5px] bg-[#F0F5FF] hover:bg-[#DBEAFE] border border-[#93C5FD]/80 text-[#2563EB] cursor-pointer"
                          title="Bấm để cấp/thu hồi Module PFM & ADM"
                        >
                          <span>+ Quyền ▾</span>
                        </button>
                      </div>

                      <!-- Popover chọn Module dạng 3D Cube (PFM & ADM) ngay trên dòng -->
                      ${isRowPopoverOpen ? `
                        <div
                          onclick="event.stopPropagation()"
                          class="absolute left-0 top-full mt-1 z-50 w-[265px] bg-white rounded-[18px] border border-slate-200 shadow-[0_14px_38px_rgba(15,23,42,0.18)] py-2 px-2 animate-modal-pop"
                        >
                          <div class="px-2.5 py-1 border-b border-slate-100 flex items-center justify-between">
                            <span class="text-[11px] font-extrabold text-[#1B365D]">Phân quyền: ${u.name || u.fullName}</span>
                            <button
                              type="button"
                              onclick="toggleRowModulePopover(null, event)"
                              class="text-xs font-extrabold text-slate-400 hover:text-rose-500 px-1"
                            >✕</button>
                          </div>
                          <div class="space-y-1 mt-1">
                            ${SYSTEM_MODULES.map(mod => {
                              const hasMod = uMods.includes(mod.code);
                              return `
                                <button
                                  type="button"
                                  onclick="toggleUserModulePermission('${u.id}', '${mod.code}', event)"
                                  class="w-full px-2.5 py-2 rounded-xl flex items-center justify-between gap-2 text-left transition cursor-pointer ${
                                    hasMod
                                      ? 'bg-[#F0F5FF] text-[#5B8DEF] font-semibold'
                                      : 'hover:bg-slate-50 text-[#1E293B] font-medium'
                                  }"
                                >
                                  <div class="flex items-center gap-2 min-w-0">
                                    <span class="${hasMod ? 'text-[#5B8DEF]' : 'text-[#1E293B]'} shrink-0">${SVG.moduleCube}</span>
                                    <span class="text-xs truncate">${mod.code} - ${mod.name}</span>
                                  </div>
                                  ${hasMod ? `<span class="text-[#5B8DEF] shrink-0">${SVG.checkMod}</span>` : ''}
                                </button>
                              `;
                            }).join('')}
                          </div>
                        </div>
                      ` : ''}
                    </td>

                    <!-- Cột 6: Số dư Ví (PFM) -->
                    <td class="text-right">
                      <div class="font-num text-xs sm:text-[13px] font-extrabold ${uBalance >= 0 ? 'text-[#10B981]' : 'text-[#EF4444]'}">${formatVND(uBalance)}</div>
                      <div class="text-[10.5px] font-medium text-slate-400">${uTxs.length} giao dịch</div>
                    </td>

                    <!-- Cột 7: Trạng thái (Bấm để đổi nhanh trạng thái) -->
                    <td class="text-center" onclick="event.stopPropagation()">
                      <button
                        type="button"
                        onclick="${isRoot ? `showToast('Tài khoản Root Admin luôn hoạt động!')` : `toggleAdminUserStatus('${u.id}')`}"
                        class="desun-pill !px-2.5 !py-0.5 !text-[11px] ${isActive ? 'desun-pill-income' : 'desun-pill-expense'} cursor-pointer"
                        title="${isRoot ? 'Tài khoản Root Admin mặc định' : 'Bấm để Khóa / Mở khóa nhanh'}"
                      >
                        <span class="w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#10B981]' : 'bg-[#EF4444]'}"></span>
                        <span>${isActive ? 'Hoạt động' : 'Đã khóa'}</span>
                      </button>
                    </td>

                    <!-- Cột 8: Thao tác (Gọn đẹp, vừa khít 100% khung bảng) -->
                    <td class="text-right pr-3" onclick="event.stopPropagation()">
                      <div class="inline-flex items-center justify-end gap-1">
                        <button
                          type="button"
                          onclick="openAdminUserModal('EDIT', '${u.id}')"
                          class="admin-action-btn bg-slate-100 hover:bg-[#1B365D] text-[#1B365D] hover:text-white"
                          title="Chỉnh sửa thông tin & phân quyền"
                        >
                          ${SVG.edit}
                          <span>Sửa</span>
                        </button>
                        <button
                          type="button"
                          onclick="impersonateUserByAdmin('${u.id}')"
                          class="admin-action-btn bg-sky-50 hover:bg-[#0284C7] text-[#0284C7] hover:text-white border border-sky-200/70"
                          title="Xem sổ chi tiêu của ${u.fullName || u.name}"
                        >
                          <span>Xem sổ</span>
                        </button>
                        ${!isRoot ? `
                          <button
                            type="button"
                            onclick="deleteAdminUser('${u.id}')"
                            class="w-7 h-7 rounded-lg inline-flex items-center justify-center text-slate-300 hover:text-rose-500 hover:bg-rose-50 transition cursor-pointer"
                            title="Xóa tài khoản"
                          >
                            ${SVG.trash}
                          </button>
                        ` : `
                          <span class="w-7 h-7 rounded-lg inline-flex items-center justify-center text-amber-400" title="Root Admin">
                            ${SVG.shieldCheck}
                          </span>
                        `}
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4" class="text-xs font-bold text-[#1B365D]">
                  Tổng cộng: ${filteredUsers.length} tài khoản
                </td>
                <td colspan="2" class="text-xs font-semibold text-slate-500">
                  <strong class="text-[#EA580C]">${adminCount} Admin</strong> • <strong class="text-[#0284C7]">${memberCount} Thành viên</strong>
                </td>
                <td colspan="2" class="text-right pr-4 text-xs font-bold text-[#10B981]">
                  ● Đã đồng bộ Excel
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// Modal Admin: Cấp mới / Chỉnh sửa & Phân quyền Module (PFM / ADM)
// ============================================================================
function renderAdminUserModal() {
  if (!state.adminUserModalOpen || !isCurrentUserAdmin()) return '';
  const f = state.adminUserModalForm;
  const isEdit = f.mode === 'EDIT';
  const isRoot = f.editId === 'personal';
  const selectedMods = Array.isArray(f.allowedModules) ? f.allowedModules : ['PFM'];

  return `
    <div
      onmousedown="this._isBackdropDown = (event.target === this)"
      onclick="if(event.target === this && this._isBackdropDown) closeAdminUserModal()"
      class="fixed inset-0 z-50 desun-modal-backdrop flex items-center justify-center p-3 sm:p-4"
    >
      <div class="desun-modal-card w-full max-w-[540px] p-5 sm:p-6 animate-modal-pop max-h-[92vh] overflow-y-auto">
        <div class="flex items-center justify-between mb-3.5 pb-3 border-b border-slate-100">
          <div>
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded-full bg-amber-100 text-[#D97706] text-[10px] font-extrabold uppercase">
                Admin Phân Quyền Account
              </span>
              <h3 class="text-base font-extrabold text-[#1B365D]">
                ${isEdit ? 'Chỉnh sửa & Phân quyền Module' : 'Cấp Tài khoản & Phân quyền Module'}
              </h3>
            </div>
            <p class="text-[11px] text-slate-400 mt-0.5">
              Tài khoản và danh sách Module được cấp sẽ lưu trực tiếp vào Sheet <strong>Tai_Khoan</strong> trong Excel
            </p>
          </div>
          <button
            type="button"
            onclick="closeAdminUserModal()"
            class="w-7 h-7 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-400 hover:text-rose-500 flex items-center justify-center transition"
          >
            ${SVG.close}
          </button>
        </div>

        <form onsubmit="submitAdminUserModal(event)" class="space-y-3">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div class="sm:col-span-2">
              <label class="text-[11px] font-bold text-slate-600 block mb-1">Họ và tên đầy đủ *</label>
              <div class="field-airy h-10 px-3 flex items-center gap-2">
                <span class="text-slate-400 shrink-0">${SVG.user}</span>
                <input
                  id="admin-user-fullname"
                  type="text"
                  value="${f.fullName}"
                  oninput="handleAdminFullNameInput(this)"
                  placeholder="VD: Nguyễn Văn An"
                  class="w-full bg-transparent text-xs font-bold text-[#1B365D] placeholder-slate-400 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label class="text-[11px] font-bold text-slate-600 block mb-1">Tên hiển thị ngắn</label>
              <div class="field-airy h-10 px-3 flex items-center">
                <input
                  id="admin-user-shortname"
                  type="text"
                  value="${f.name}"
                  oninput="state.adminUserModalForm.name = this.value"
                  placeholder="VD: Văn An"
                  class="w-full bg-transparent text-xs font-semibold text-slate-700 placeholder-slate-400 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label class="text-[11px] font-bold text-slate-600 block mb-1">Email đăng nhập được cấp *</label>
              <div class="field-airy h-10 px-3 flex items-center gap-2">
                <span class="text-slate-400 shrink-0">${SVG.mail}</span>
                <input
                  id="admin-user-email"
                  type="email"
                  value="${f.email}"
                  oninput="state.adminUserModalForm.email = this.value"
                  placeholder="vanan@desun.vn"
                  class="w-full bg-transparent text-xs font-bold text-[#0284C7] placeholder-slate-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between mb-1">
                <label class="text-[11px] font-bold text-slate-600">Mật khẩu cấp phát *</label>
                <button
                  type="button"
                  onclick="generateRandomUserPassword()"
                  class="text-[10px] font-extrabold text-[#F97316] hover:underline"
                >
                  Tạo mật khẩu ngẫu nhiên
                </button>
              </div>
              <div class="field-airy h-10 px-3 flex items-center gap-2">
                <span class="text-slate-400 shrink-0">${SVG.lock}</span>
                <input
                  id="admin-user-password"
                  type="text"
                  value="${f.password}"
                  oninput="state.adminUserModalForm.password = this.value"
                  placeholder="Desun@123"
                  class="w-full bg-transparent font-num text-xs font-extrabold text-[#EA580C] placeholder-slate-400 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <!-- Chọn Phân quyền Hệ thống (RBAC Role) -->
          <div>
            <label class="text-[11px] font-bold text-slate-600 block mb-1.5">Phân quyền vai trò (Role) *</label>
            <div class="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onclick="setAdminModalRole('USER')"
                class="p-2.5 rounded-xl border text-left transition flex items-start gap-2.5 ${
                  f.roleCode !== 'ADMIN'
                    ? 'bg-sky-50/90 border-[#0284C7] ring-2 ring-[#0284C7]/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 opacity-75'
                }"
              >
                <span class="w-7 h-7 rounded-lg bg-sky-100 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">${SVG.user}</span>
                <div>
                  <div class="text-xs font-extrabold text-[#1B365D]">Thành viên (USER)</div>
                  <div class="text-[10px] text-slate-500 mt-0.5 leading-snug">Sử dụng các Module được Admin tích chọn bên dưới</div>
                </div>
              </button>

              <button
                type="button"
                onclick="setAdminModalRole('ADMIN')"
                class="p-2.5 rounded-xl border text-left transition flex items-start gap-2.5 ${
                  f.roleCode === 'ADMIN'
                    ? 'bg-amber-50/90 border-[#F97316] ring-2 ring-[#F97316]/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 opacity-75'
                }"
              >
                <span class="w-7 h-7 rounded-lg bg-amber-100 text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">${SVG.shieldCheck}</span>
                <div>
                  <div class="text-xs font-extrabold text-[#1B365D]">Quản trị viên (ADMIN)</div>
                  <div class="text-[10px] text-slate-500 mt-0.5 leading-snug">Toàn quyền cấp phát Account & phân quyền các Module</div>
                </div>
              </button>
            </div>
          </div>

          <!-- Chọn Phân quyền Module dạng 3D Cube có dấu tích ✓ (Giống hệt ảnh mẫu) -->
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label class="text-[11px] font-bold text-slate-600">
                Phân quyền truy cập Module (${selectedMods.length}/${SYSTEM_MODULES.length} đã chọn) *
              </label>
              <span class="text-[10px] font-bold text-[#3B82F6]">Bấm để tích chọn ✓</span>
            </div>
            <div class="bg-white rounded-2xl border border-slate-200/90 p-2 max-h-[195px] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-1">
              ${SYSTEM_MODULES.map(mod => {
                const isSel = selectedMods.includes(mod.code);
                return `
                  <button
                    type="button"
                    onclick="toggleAdminModalModule('${mod.code}')"
                    class="px-3 py-2 rounded-xl flex items-center justify-between gap-2 text-left transition cursor-pointer ${
                      isSel
                        ? 'bg-[#F0F5FF] text-[#6094F7] font-semibold'
                        : 'hover:bg-slate-50 text-[#1E293B] font-medium'
                    }"
                  >
                    <div class="flex items-center gap-2 min-w-0">
                      <span class="${isSel ? 'text-[#6094F7]' : 'text-[#1E293B]'} shrink-0">${SVG.moduleCube}</span>
                      <span class="text-xs truncate">${mod.code} - ${mod.name}</span>
                    </div>
                    ${isSel ? `<span class="text-[#6094F7] shrink-0">${SVG.checkMod}</span>` : ''}
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Số dư khởi tạo Ví & Trạng thái tài khoản -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label class="text-[11px] font-bold text-slate-600 block mb-1">Số dư đầu kỳ Ví Techcombank (VNĐ)</label>
              <div class="field-airy h-10 px-3 flex items-center justify-between">
                <input
                  id="admin-user-init-balance"
                  type="text"
                  inputmode="numeric"
                  value="${formatNumberWithDots(f.initialWalletBalance)}"
                  oninput="this.value = formatNumberWithDots(this.value); state.adminUserModalForm.initialWalletBalance = this.value"
                  placeholder="0"
                  class="w-full bg-transparent font-num text-xs font-extrabold text-[#10B981] focus:outline-none"
                />
                <span class="text-xs font-bold text-slate-400">₫</span>
              </div>
            </div>

            <div>
              <label class="text-[11px] font-bold text-slate-600 block mb-1">Trạng thái đăng nhập</label>
              <div class="grid grid-cols-2 p-1 rounded-xl bg-slate-100 h-10 text-xs font-bold">
                <button
                  type="button"
                  onclick="setAdminModalStatus('Y')"
                  class="rounded-lg transition ${f.status !== 'N' ? 'bg-[#10B981] text-white shadow-2xs' : 'text-slate-500'}"
                >
                  Hoạt động
                </button>
                <button
                  type="button"
                  onclick="setAdminModalStatus('N')"
                  ${isRoot ? 'disabled' : ''}
                  class="rounded-lg transition ${f.status === 'N' ? 'bg-rose-500 text-white shadow-2xs' : 'text-slate-500'} ${isRoot ? 'opacity-40 cursor-not-allowed' : ''}"
                >
                  Tạm khóa
                </button>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-2.5 pt-2">
            <button
              type="button"
              onclick="closeAdminUserModal()"
              class="col-span-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-xs font-bold text-slate-600 transition"
            >
              Hủy bỏ
            </button>
            <button
              type="submit"
              class="col-span-2 py-2.5 btn-desun-orange text-xs font-extrabold flex items-center justify-center gap-1.5"
            >
              ${SVG.check}
              <span>${isEdit ? 'Lưu cập nhật & Phân quyền' : 'Cấp tài khoản & Lưu Excel'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

// ============================================================================
// Trang Đăng Nhập Chuẩn Quốc Tế (Modern Fintech SaaS Split-Screen Login)
// ============================================================================
function renderLoginFormCardHTML(isCompactMobile = false) {
  const lf = state.loginForm;
  const allWorkspaces = state.data.workspaces || [];

  return `
    <div class="w-full max-w-[420px] mx-auto">
      <!-- Top Brand & Security Badge -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-2">
          ${SVG.brandLogo(isCompactMobile ? 34 : 38)}
        </div>
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#059669] text-[11px] font-bold">
          <span class="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
          <span>Bảo mật RBAC</span>
        </span>
      </div>

      <!-- Heading -->
      <div class="mb-6">
        <h2 class="text-2xl sm:text-[26px] font-extrabold text-[#0F172A] tracking-tight leading-tight">
          Chào mừng trở lại
        </h2>
        <p class="text-xs sm:text-[13px] text-slate-500 mt-1.5 leading-relaxed">
          Nhập thông tin tài khoản đã được Quản trị viên cấp quyền để truy cập hệ thống <strong>DeSun FinFlow</strong>.
        </p>
      </div>

      <!-- Error Alert -->
      ${lf.errorMsg ? `
        <div class="mb-4 p-3.5 rounded-2xl bg-rose-50/90 border border-rose-200 text-rose-600 text-xs font-semibold flex items-start gap-2.5 animate-fade">
          <span class="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 text-[11px] font-extrabold mt-0.5">!</span>
          <span class="leading-relaxed">${lf.errorMsg}</span>
        </div>
      ` : ''}

      <!-- Standard International Login Form -->
      <form onsubmit="handleLoginSubmit(event)" class="space-y-4">
        <!-- Email Field -->
        <div>
          <label for="login-email-input" class="text-xs font-bold text-slate-700 block mb-1.5">
            Email đăng nhập
          </label>
          <div class="h-12 px-4 rounded-2xl bg-[#F8FAFC] hover:bg-white focus-within:bg-white border border-slate-200/90 focus-within:border-[#F97316] focus-within:ring-4 focus-within:ring-[#F97316]/10 flex items-center gap-3 transition">
            <span class="text-slate-400 shrink-0">${SVG.mail}</span>
            <input
              id="login-email-input"
              type="email"
              value="${lf.email}"
              oninput="state.loginForm.email = this.value; state.loginForm.errorMsg = ''"
              placeholder="name@desun.vn"
              autocomplete="username"
              class="w-full bg-transparent text-sm font-semibold text-[#0F172A] placeholder-slate-400 focus:outline-none"
            />
          </div>
        </div>

        <!-- Password Field -->
        <div>
          <div class="flex items-center justify-between mb-1.5">
            <label for="login-password-input" class="text-xs font-bold text-slate-700">
              Mật khẩu
            </label>
            <span class="text-[11px] font-semibold text-slate-400">
              Cấp bởi Admin
            </span>
          </div>
          <div class="h-12 px-4 rounded-2xl bg-[#F8FAFC] hover:bg-white focus-within:bg-white border border-slate-200/90 focus-within:border-[#F97316] focus-within:ring-4 focus-within:ring-[#F97316]/10 flex items-center gap-3 transition">
            <span class="text-slate-400 shrink-0">${SVG.lock}</span>
            <input
              id="login-password-input"
              type="${lf.showPassword ? 'text' : 'password'}"
              value="${lf.password}"
              oninput="state.loginForm.password = this.value; state.loginForm.errorMsg = ''"
              placeholder="••••••••"
              autocomplete="current-password"
              class="w-full bg-transparent text-sm font-semibold text-[#0F172A] placeholder-slate-400 focus:outline-none"
            />
            <button
              type="button"
              onclick="toggleLoginPassword()"
              class="text-slate-400 hover:text-[#1B365D] p-1 rounded-lg transition shrink-0 cursor-pointer"
              title="Ẩn/Hiện mật khẩu"
            >
              ${lf.showPassword ? SVG.eyeOff : SVG.eye}
            </button>
          </div>
        </div>

        <!-- Remember & Live Sync Indicator -->
        <div class="flex items-center justify-between pt-0.5">
          <label class="inline-flex items-center gap-2 text-xs text-slate-600 font-semibold cursor-pointer select-none">
            <input type="checkbox" checked class="w-4 h-4 accent-[#F97316] rounded cursor-pointer" />
            <span>Ghi nhớ phiên đăng nhập</span>
          </label>
          <span class="text-[11px] font-bold text-[#10B981] flex items-center gap-1">
            <span>●</span>
            <span>Excel Online Sync</span>
          </span>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full h-12 rounded-2xl btn-desun-orange text-sm font-extrabold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 flex items-center justify-center gap-2 transition cursor-pointer"
        >
          <span>Đăng nhập vào hệ thống</span>
          ${SVG.arrowRight}
        </button>
      </form>

      <!-- Quick-Fill Account Switcher (Clean, unobtrusive pills for fast 1-click login) -->
      <div class="mt-7 pt-5 border-t border-slate-100">
        <div class="flex items-center justify-between mb-2.5">
          <span class="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
            Điền nhanh tài khoản đã cấp (${allWorkspaces.length})
          </span>
          <span class="text-[11px] font-semibold text-slate-400">Bấm để tự điền</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
          ${allWorkspaces.map(u => {
            const isSelected = lf.email && lf.email.toLowerCase() === u.email.toLowerCase();
            const isAdm = u.roleCode === 'ADMIN' || u.id === 'personal';
            const isActive = u.status !== 'N';
            return `
              <button
                type="button"
                onclick="quickFillCredentials('${u.id}')"
                class="p-2.5 rounded-2xl border text-left transition flex items-center gap-2.5 cursor-pointer ${
                  isSelected
                    ? 'bg-orange-50/70 border-[#F97316] ring-2 ring-[#F97316]/15'
                    : !isActive
                      ? 'opacity-50 bg-slate-50 border-slate-200'
                      : 'bg-[#F8FAFC] hover:bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-2xs'
                }"
                title="${u.email} • ${isAdm ? 'Quản trị viên (PFM, ADM)' : 'Thành viên (PFM)'}"
              >
                <span class="w-8 h-8 rounded-full ${isAdm ? 'bg-gradient-to-br from-[#F97316] to-[#EA580C]' : 'bg-gradient-to-br from-[#1B365D] to-[#0284C7]'} text-white text-[10px] font-extrabold flex items-center justify-center shrink-0 shadow-2xs">
                  ${u.avatar || computeAvatarInitials(u.fullName)}
                </span>
                <div class="min-w-0 flex-1">
                  <div class="text-xs font-extrabold text-[#0F172A] truncate">${u.name || u.fullName}</div>
                  <div class="text-[10px] font-bold ${isAdm ? 'text-[#EA580C]' : 'text-[#0284C7]'} truncate">
                    ${isAdm ? 'Quản trị viên' : 'Thành viên'}
                  </div>
                </div>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderLoginPage() {
  if (state.isMobileSimulator) {
    return `
      <div class="py-3 px-4 bg-[#0F172A] text-white flex items-center justify-between text-xs">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#F97316]"></span>
          <span class="font-semibold">Chế độ xem thử Trang Đăng Nhập trên Điện thoại</span>
        </div>
        <button onclick="toggleMobileSimulator()" class="px-3 py-1 rounded-lg bg-white text-[#0F172A] font-bold hover:bg-slate-100 transition flex items-center gap-1.5">
          ${SVG.monitor} <span>Quay lại Giao diện Web Toàn màn hình</span>
        </button>
      </div>

      <div class="mobile-simulator-shell justify-between bg-gradient-to-b from-[#0B2545] via-[#133B6E] to-[#F4F7FB]">
        <div class="p-6 pt-8 text-white">
          <span class="px-3 py-1 rounded-full bg-white/15 text-[11px] font-semibold text-sky-200">
            DeSun FinFlow Platform
          </span>
          <h1 class="text-xl font-extrabold mt-2.5 leading-snug">
            Quản lý tài chính thông minh & Phân quyền tập trung
          </h1>
          <p class="text-xs text-sky-100/80 mt-1">
            Đồng bộ dữ liệu Real-time hai chiều cùng Excel
          </p>
        </div>

        <div class="bg-white rounded-t-[32px] p-6 shadow-2xl flex-1 overflow-y-auto">
          ${renderLoginFormCardHTML(true)}
        </div>
      </div>
    `;
  }

  return `
    <div class="min-h-screen bg-[#F1F5F9] flex flex-col justify-center items-center p-4 sm:p-6 relative overflow-hidden">
      <!-- Subtle Ambient Background Glows -->
      <div class="pointer-events-none fixed -top-32 -left-32 w-96 h-96 rounded-full bg-sky-400/10 blur-3xl"></div>
      <div class="pointer-events-none fixed -bottom-32 -right-32 w-96 h-96 rounded-full bg-orange-400/10 blur-3xl"></div>

      <!-- Top-Right Simulator Toggle -->
      <div class="fixed top-5 right-5 z-20 hidden lg:block">
        <button
          onclick="toggleMobileSimulator()"
          class="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-white/90 backdrop-blur hover:bg-white text-[#0F172A] border border-slate-200/80 shadow-xs text-xs font-bold transition cursor-pointer"
        >
          ${SVG.phone} <span>Xem bản Mobile</span>
        </button>
      </div>

      <!-- International-Standard Split Login Card -->
      <div class="w-full max-w-[1000px] bg-white rounded-[32px] border border-slate-200/80 shadow-[0_24px_70px_rgba(15,23,42,0.09)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 animate-modal-pop relative z-10">
        <!-- Left Brand & Product Showcase Column (5/12) -->
        <div class="hidden lg:flex lg:col-span-5 hero-ocean-card rounded-none p-9 flex-col justify-between relative overflow-hidden">
          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-sky-100">
              <span class="w-2 h-2 rounded-full bg-[#34D399]"></span>
              <span>DeSun FinFlow Enterprise</span>
            </div>

            <h1 class="text-[28px] font-extrabold mt-6 leading-[1.25] tracking-tight text-white">
              Nền tảng quản lý tài chính & phân quyền thông minh
            </h1>
            <p class="text-[13px] text-sky-100/80 mt-3 leading-relaxed">
              Không gian tài chính độc lập cho từng cá nhân, kết hợp phân quyền Module tập trung và đồng bộ trực tiếp vào cơ sở dữ liệu Excel thời gian thực.
            </p>

            <!-- Floating Interactive Glass Preview Card -->
            <div class="mt-7 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[11px] font-bold uppercase tracking-wider text-sky-200">Phân hệ tích hợp</span>
                <span class="px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200 text-[10px] font-extrabold">● Live Sync</span>
              </div>
              <div class="grid grid-cols-2 gap-2.5">
                <div class="p-2.5 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-lg bg-[#E8F8EE] text-[#047857] flex items-center justify-center shrink-0">
                    ${SVG.moduleCube}
                  </span>
                  <div class="min-w-0">
                    <div class="text-xs font-extrabold text-white">Module PFM</div>
                    <div class="text-[10px] text-sky-200 truncate">Quản lý chi tiêu</div>
                  </div>
                </div>
                <div class="p-2.5 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-lg bg-amber-100 text-[#B45309] flex items-center justify-center shrink-0">
                    ${SVG.moduleCube}
                  </span>
                  <div class="min-w-0">
                    <div class="text-xs font-extrabold text-white">Module ADM</div>
                    <div class="text-[10px] text-sky-200 truncate">Quản lý tài khoản</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Footer inside Showcase -->
          <div class="relative z-10 pt-6 border-t border-white/15 flex items-center justify-between">
            <div>
              <p class="text-xs font-bold text-white">Đồng bộ 7 Sheet Excel chuẩn</p>
              <p class="text-[11px] text-sky-200/75 mt-0.5">DeSun_DuLieu_ThuChi.xlsx</p>
            </div>
            <div class="shrink-0 -mr-2 opacity-95">
              ${SVG.walletIllustration}
            </div>
          </div>
        </div>

        <!-- Right Authentication Form Column (7/12) -->
        <div class="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex items-center justify-center bg-white">
          ${renderLoginFormCardHTML(false)}
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// Modal: Thêm Giao Dịch (Compact 1-Screen, No Scrollbar, Live Dot Separator)
// ============================================================================
function renderAddModal() {
  if (!state.modalOpen) return '';
  const f = state.modalForm;
  const isEditMode = Boolean(f.editTxId);
  const isIncome = f.type === 'INCOME';
  const visibleCats = state.data.categories.filter(c => isIncome ? c.isIncome : !c.isIncome);
  const formattedAmt = formatNumberWithDots(f.amount);
  const rawNum = parseInt(formattedAmt.replace(/\D/g, ''), 10) || 0;
  const presets = isIncome
    ? [500000, 1000000, 2500000, 5000000]
    : [50000, 100000, 200000, 450000];
  const activeWs = state.data.workspaces.find(w => w.id === state.data.activeWorkspace) || state.data.workspaces[0];

  return `
    <div
      onmousedown="this._isBackdropDown = (event.target === this)"
      onclick="if(event.target === this && this._isBackdropDown) closeAddModal()"
      class="fixed inset-0 z-50 desun-modal-backdrop flex items-center justify-center p-3 sm:p-4"
    >
      <div class="desun-modal-card w-full max-w-[420px] p-5 animate-modal-pop">
        <!-- Compact Single-Line Header -->
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <h3 class="text-[16px] font-extrabold text-[#1B365D]">
              ${isEditMode ? 'Chi tiết & Sửa giao dịch' : 'Thêm giao dịch'}
            </h3>
            ${isEditMode ? `
              <span class="px-2 py-0.5 rounded-full bg-orange-50 text-[10px] font-extrabold text-[#F97316] font-num">
                #${String(f.editTxId).toUpperCase()}
              </span>
            ` : `
              <span class="px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500">
                ${activeWs.fullName || activeWs.name}
              </span>
            `}
          </div>
          <button
            type="button"
            onclick="closeAddModal()"
            class="w-7 h-7 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-400 hover:text-rose-500 flex items-center justify-center transition"
            title="Đóng"
          >
            ${SVG.close}
          </button>
        </div>

        <!-- Chi tiêu / Thu nhập Slim Switch -->
        <div class="grid grid-cols-2 p-1 rounded-xl bg-slate-100 text-xs font-bold mb-3">
          <button
            type="button"
            onclick="setModalType('EXPENSE')"
            class="py-2 rounded-lg transition flex items-center justify-center gap-1.5 ${!isIncome ? 'bg-[#F97316] text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'}"
          >
            ${SVG.trendDown}
            <span>Chi tiêu</span>
          </button>
          <button
            type="button"
            onclick="setModalType('INCOME')"
            class="py-2 rounded-lg transition flex items-center justify-center gap-1.5 ${isIncome ? 'bg-[#10B981] text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'}"
          >
            ${SVG.trendUp}
            <span>Thu nhập</span>
          </button>
        </div>

        <form onsubmit="submitAddModal(event)" class="space-y-3">
          <!-- Compact Amount Box with Live Dot Separator -->
          <div class="amount-input-box ${isIncome ? 'income-mode' : 'expense-mode'} px-3.5 py-2.5">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[11px] font-bold text-slate-400">Số tiền</span>
              <div class="flex items-center gap-1">
                ${presets.map(v => {
                  const isSelected = rawNum === v;
                  const activeClass = isIncome
                    ? 'bg-[#10B981] text-white shadow-xs'
                    : 'bg-[#F97316] text-white shadow-xs';
                  return `
                    <button
                      type="button"
                      data-preset-amt="${v}"
                      onclick="setPresetAmount(${v})"
                      class="px-2 py-0.5 rounded-lg text-[11px] font-bold transition font-num ${isSelected ? activeClass : 'bg-white border border-slate-200/80 hover:border-slate-300 text-slate-600'}"
                    >
                      ${formatNumberWithDots(v)}
                    </button>
                  `;
                }).join('')}
                <button
                  type="button"
                  onclick="appendZerosModal()"
                  class="px-1.5 py-0.5 rounded-lg bg-orange-50 hover:bg-orange-100 text-[#F97316] text-[10px] font-extrabold transition"
                  title="Thêm 3 số 0"
                >
                  +.000
                </button>
              </div>
            </div>

            <div class="relative flex items-center">
              <span class="font-num text-lg font-extrabold mr-1 ${isIncome ? 'text-[#10B981]' : 'text-[#F97316]'}">
                ${isIncome ? '+' : '-'}
              </span>
              <input
                id="modal-amount-input"
                type="text"
                inputmode="numeric"
                autocomplete="off"
                value="${formattedAmt}"
                oninput="handleModalAmountInput(this)"
                placeholder="450.000"
                class="w-full bg-transparent font-num text-2xl font-extrabold text-[#1B365D] placeholder-slate-300 focus:outline-none pr-10"
              />
              <span class="absolute right-0 text-xs font-extrabold text-slate-400">₫</span>
            </div>
          </div>

          <!-- Compact Category Grid (3 Full Rows Visible Without Clipping) -->
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label class="text-[11px] font-bold text-slate-500">Khoản mục (${isIncome ? 'Thu nhập' : 'Chi tiêu'})</label>
              <button
                type="button"
                onclick="openCategoryModal('CREATE', null, '${isIncome ? 'INCOME' : 'EXPENSE'}')"
                class="px-2 py-0.5 rounded-full ${isIncome ? 'bg-emerald-50 text-[#10B981] hover:bg-emerald-100' : 'bg-orange-50 text-[#F97316] hover:bg-orange-100'} text-[11px] font-extrabold transition flex items-center gap-0.5 cursor-pointer"
              >
                + Thêm khoản mục
              </button>
            </div>
            <div class="grid grid-cols-4 gap-1.5 text-center max-h-[222px] overflow-y-auto pr-0.5">
              ${visibleCats.map(c => {
                const isSelected = f.categoryId === c.id;
                const activeCls = isSelected ? (isIncome ? 'active-income' : 'active-expense') : '';
                return `
                  <div
                    onclick="setModalCategory('${c.id}')"
                    class="cat-item-btn py-1.5 px-1 flex flex-col items-center relative group cursor-pointer ${activeCls}"
                  >
                    <button
                      type="button"
                      onclick="event.stopPropagation(); openCategoryModal('EDIT', '${c.id}')"
                      class="opacity-0 group-hover:opacity-100 absolute top-1 right-1 w-4 h-4 rounded-full bg-white/90 border border-slate-200 text-slate-400 hover:text-[#F97316] flex items-center justify-center text-[9px] transition"
                      title="Sửa khoản mục ${c.name}"
                    >✎</button>
                    <div
                      class="w-7 h-7 rounded-full flex items-center justify-center mb-1"
                      style="background:${c.bg}; color:${c.color}"
                    >
                      ${SVG[c.icon] || SVG.wallet}
                    </div>
                    <span class="text-[11px] font-semibold leading-tight truncate w-full px-0.5 ${isSelected ? 'text-[#1B365D] font-bold' : 'text-slate-600'}">${c.name}</span>
                  </div>
                `;
              }).join('')}
              <button
                type="button"
                onclick="openCategoryModal('CREATE', null, '${isIncome ? 'INCOME' : 'EXPENSE'}')"
                class="py-1.5 px-1 rounded-2xl border border-dashed border-orange-300 bg-orange-50/25 hover:border-[#F97316] hover:bg-orange-50/70 flex flex-col items-center justify-center text-[#F97316] transition cursor-pointer"
                title="Thêm khoản mục mới (VD: Xăng, Cà phê, Tiền nhà...)"
              >
                <div class="w-7 h-7 rounded-full bg-orange-100/80 text-[#F97316] flex items-center justify-center mb-1">
                  ${SVG.plus}
                </div>
                <span class="text-[10px] font-extrabold leading-tight">+ Thêm mục</span>
              </button>
            </div>
          </div>

          <!-- Date & Wallet 2-Column Compact Row -->
          <div class="grid grid-cols-2 gap-2.5">
            <div>
              <label class="text-[11px] font-bold text-slate-500 block mb-1">Ngày</label>
              <div class="field-airy h-9 px-2.5 flex items-center gap-1.5">
                <span class="text-slate-400 shrink-0">${SVG.calendar}</span>
                <input
                  id="modal-date-input"
                  type="text"
                  value="${f.date}"
                  oninput="state.modalForm.date = this.value"
                  placeholder="20/10/2026"
                  class="w-full bg-transparent text-xs font-semibold text-slate-700 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label class="text-[11px] font-bold text-slate-500 block mb-1">Nguồn tiền</label>
              <div class="field-airy h-9 px-2.5 flex items-center gap-1.5">
                <span class="text-slate-400 shrink-0">${SVG.wallet}</span>
                <select
                  id="modal-wallet-select"
                  onchange="state.modalForm.walletName = this.value"
                  class="w-full bg-transparent text-xs font-semibold text-slate-700 focus:outline-none cursor-pointer"
                >
                  ${getActiveUserWallets().map(w => `
                    <option value="${w.name}" ${f.walletName === w.name ? 'selected' : ''}>${w.name}</option>
                  `).join('')}
                </select>
              </div>
            </div>
          </div>

          <!-- Compact Note Input -->
          <div>
            <label class="text-[11px] font-bold text-slate-500 block mb-1">Ghi chú <span class="text-slate-400 font-normal">(Tùy chọn)</span></label>
            <div class="field-airy h-9 px-3 flex items-center gap-2">
              <span class="text-slate-400 shrink-0">${SVG.note}</span>
              <input
                id="modal-note-input"
                type="text"
                value="${f.note || ''}"
                oninput="state.modalForm.note = this.value"
                placeholder="Ví dụ: Ăn trưa, Siêu thị WinMart..."
                class="w-full bg-transparent text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none"
              />
            </div>
          </div>

          <!-- Compact Action Buttons -->
          <div class="grid ${isEditMode ? 'grid-cols-4' : 'grid-cols-3'} gap-2 pt-1">
            ${isEditMode ? `
              <button
                type="button"
                onclick="deleteTx('${f.editTxId}', event)"
                class="col-span-1 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200/80 text-xs font-extrabold text-rose-600 transition flex items-center justify-center gap-1"
                title="Xóa giao dịch này"
              >
                ${SVG.trash}
                <span>Xóa</span>
              </button>
            ` : ''}
            <button
              type="button"
              onclick="closeAddModal()"
              class="col-span-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-xs font-bold text-slate-600 transition"
            >
              Đóng
            </button>
            <button
              type="submit"
              class="col-span-2 py-2.5 ${isIncome ? 'btn-desun-emerald' : 'btn-desun-orange'} text-xs font-bold flex items-center justify-center gap-1.5"
            >
              ${SVG.check}
              <span>${isEditMode ? 'Lưu cập nhật' : 'Lưu giao dịch'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

// ============================================================================
// Modal: Xác nhận Xóa Giao dịch (Delete Confirmation Popup)
// ============================================================================
function renderDeleteConfirmModal() {
  if (!state.deleteConfirm || !state.deleteConfirm.open) return '';
  const tx = (state.data.transactions || []).find(t => t.id === state.deleteConfirm.txId);
  if (!tx) return '';
  const cat = getCategory(tx.categoryId);
  const isInc = tx.type === 'INCOME';

  return `
    <div
      onmousedown="this._isBackdropDown = (event.target === this)"
      onclick="if(event.target === this && this._isBackdropDown) closeDeleteConfirmModal()"
      class="fixed inset-0 z-[65] desun-modal-backdrop flex items-center justify-center p-3 sm:p-4"
    >
      <div class="desun-modal-card w-full max-w-[380px] p-5 animate-modal-pop text-center">
        <div class="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200/70 text-rose-500 flex items-center justify-center mx-auto mb-3 shadow-2xs">
          ${SVG.trash}
        </div>
        <h3 class="text-base font-extrabold text-[#1B365D]">Xác nhận xóa giao dịch?</h3>
        <p class="text-xs text-slate-500 mt-1 leading-relaxed">
          Bạn có chắc chắn muốn xóa khoản thu chi này không? Hành động này không thể hoàn tác.
        </p>

        <!-- Transaction Summary Preview Box -->
        <div class="my-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3 text-left">
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style="background:${cat.bg}; color:${cat.color}">
              ${SVG[cat.icon] || SVG.wallet}
            </div>
            <div class="min-w-0">
              <p class="text-xs font-extrabold text-[#1B365D] truncate">${tx.title}</p>
              <p class="text-[11px] text-slate-400 truncate mt-0.5">${tx.categoryName} • ${tx.date}</p>
            </div>
          </div>
          <span class="font-num text-xs sm:text-sm font-extrabold shrink-0 ${isInc ? 'text-[#10B981]' : 'text-[#EF4444]'}">
            ${isInc ? '+' : '-'}${formatVND(tx.amount)}
          </span>
        </div>

        <div class="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onclick="closeDeleteConfirmModal()"
            class="py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-xs font-bold text-slate-600 transition"
          >
            Hủy bỏ
          </button>
          <button
            type="button"
            onclick="confirmDeleteTx()"
            class="py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white text-xs font-extrabold shadow-md transition flex items-center justify-center gap-1.5"
          >
            ${SVG.trash}
            <span>Chắc chắn xóa</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// Modal: Mục Tiêu Cá Nhân & Hạn Mức Ngân Sách (Thêm mới / Sửa / Nạp tiền)
// ============================================================================
function renderGoalModal() {
  if (!state.goalModalOpen) return '';
  const gf = state.goalModalForm;
  const activeWs = state.data.workspaces.find(w => w.id === state.data.activeWorkspace) || state.data.workspaces[0];

  const isDeposit = gf.mode === 'DEPOSIT';
  const isBudgetLimit = gf.mode === 'BUDGET_LIMIT';
  const isEdit = gf.mode === 'EDIT';

  const modalTitle = isBudgetLimit
    ? `Sửa hạn mức: ${gf.title}`
    : isDeposit
      ? `Nạp tích lũy mục tiêu`
      : isEdit
        ? `Chỉnh sửa mục tiêu`
        : `Thêm mục tiêu cá nhân`;

  return `
    <div
      onmousedown="this._isBackdropDown = (event.target === this)"
      onclick="if(event.target === this && this._isBackdropDown) closeGoalModal()"
      class="fixed inset-0 z-50 desun-modal-backdrop flex items-center justify-center p-3 sm:p-4"
    >
      <div class="desun-modal-card w-full max-w-[420px] p-5 animate-modal-pop">
        <!-- Header -->
        <div class="flex items-center justify-between mb-3.5">
          <div class="flex items-center gap-2">
            <h3 class="text-[16px] font-extrabold text-[#1B365D]">${modalTitle}</h3>
            <span class="px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500">
              ${activeWs.fullName || activeWs.name}
            </span>
          </div>
          <button
            type="button"
            onclick="closeGoalModal()"
            class="w-7 h-7 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-400 hover:text-rose-500 flex items-center justify-center transition"
            title="Đóng (ESC)"
          >
            ${SVG.close}
          </button>
        </div>

        <form onsubmit="submitGoalModal(event)" class="space-y-3.5">
          ${isDeposit ? `
            <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
              <p class="text-xs font-extrabold text-[#1B365D]">${gf.title}</p>
              <p class="text-[11px] text-slate-400 font-num mt-0.5">
                Hiện có: <strong class="text-[#10B981]">${gf.current} ₫</strong> / Mục tiêu: <strong>${gf.target} ₫</strong>
              </p>
            </div>

            <div class="amount-input-box income-mode px-3.5 py-2.5">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[11px] font-bold text-slate-400">Số tiền nạp thêm</span>
                <div class="flex items-center gap-1">
                  ${[500000, 1000000, 2000000, 5000000].map(v => `
                    <button
                      type="button"
                      onclick="setGoalPresetAmount(${v}, 'depositAmount', 'goal-deposit-input')"
                      class="px-2 py-0.5 rounded-lg text-[10px] font-bold font-num bg-white border border-slate-200/80 hover:border-emerald-400 text-slate-600 transition"
                    >
                      ${formatNumberWithDots(v)}
                    </button>
                  `).join('')}
                </div>
              </div>
              <div class="relative flex items-center">
                <span class="font-num text-lg font-extrabold mr-1 text-[#10B981]">+</span>
                <input
                  id="goal-deposit-input"
                  type="text"
                  inputmode="numeric"
                  autocomplete="off"
                  value="${formatNumberWithDots(gf.depositAmount)}"
                  oninput="handleGoalAmountInput(this, 'depositAmount')"
                  placeholder="1.000.000"
                  class="w-full bg-transparent font-num text-2xl font-extrabold text-[#1B365D] placeholder-slate-300 focus:outline-none pr-8"
                />
                <span class="absolute right-0 text-xs font-extrabold text-slate-400">₫</span>
              </div>
            </div>
          ` : isBudgetLimit ? `
            <div class="amount-input-box expense-mode px-3.5 py-2.5">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[11px] font-bold text-slate-400">Hạn mức chi tiêu tháng</span>
                <div class="flex items-center gap-1">
                  ${[1500000, 3000000, 5000000, 10000000].map(v => `
                    <button
                      type="button"
                      onclick="setGoalPresetAmount(${v}, 'target', 'goal-target-input')"
                      class="px-2 py-0.5 rounded-lg text-[10px] font-bold font-num bg-white border border-slate-200/80 hover:border-orange-400 text-slate-600 transition"
                    >
                      ${formatNumberWithDots(v)}
                    </button>
                  `).join('')}
                </div>
              </div>
              <div class="relative flex items-center">
                <input
                  id="goal-target-input"
                  type="text"
                  inputmode="numeric"
                  autocomplete="off"
                  value="${formatNumberWithDots(gf.target)}"
                  oninput="handleGoalAmountInput(this, 'target')"
                  placeholder="3.000.000"
                  class="w-full bg-transparent font-num text-2xl font-extrabold text-[#1B365D] placeholder-slate-300 focus:outline-none pr-8"
                />
                <span class="absolute right-0 text-xs font-extrabold text-slate-400">₫</span>
              </div>
            </div>
          ` : `
            <!-- Tên mục tiêu -->
            <div>
              <label class="text-[11px] font-bold text-slate-600 block mb-1">Tên mục tiêu cá nhân</label>
              <div class="field-airy h-10 px-3 flex items-center gap-2">
                <span class="text-slate-400 shrink-0">${SVG.shieldCheck}</span>
                <input
                  id="goal-title-input"
                  type="text"
                  value="${gf.title}"
                  oninput="state.goalModalForm.title = this.value"
                  placeholder="Ví dụ: Mua iPhone 17, Du lịch Nhật Bản, Quỹ mua xe..."
                  class="w-full bg-transparent text-xs font-bold text-[#1B365D] placeholder-slate-400 focus:outline-none"
                />
              </div>
            </div>

            <!-- Số tiền mục tiêu cần đạt -->
            <div class="amount-input-box income-mode px-3.5 py-2.5">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[11px] font-bold text-slate-400">Số tiền mục tiêu cần đạt</span>
                <div class="flex items-center gap-1">
                  ${[10000000, 20000000, 50000000].map(v => `
                    <button
                      type="button"
                      onclick="setGoalPresetAmount(${v}, 'target', 'goal-target-input')"
                      class="px-2 py-0.5 rounded-lg text-[10px] font-bold font-num bg-white border border-slate-200/80 hover:border-emerald-400 text-slate-600 transition"
                    >
                      ${formatNumberWithDots(v)}
                    </button>
                  `).join('')}
                </div>
              </div>
              <div class="relative flex items-center">
                <input
                  id="goal-target-input"
                  type="text"
                  inputmode="numeric"
                  autocomplete="off"
                  value="${formatNumberWithDots(gf.target)}"
                  oninput="handleGoalAmountInput(this, 'target')"
                  placeholder="20.000.000"
                  class="w-full bg-transparent font-num text-xl font-extrabold text-[#1B365D] placeholder-slate-300 focus:outline-none pr-8"
                />
                <span class="absolute right-0 text-xs font-extrabold text-slate-400">₫</span>
              </div>
            </div>

            <!-- Số tiền đã tích lũy ban đầu -->
            <div>
              <label class="text-[11px] font-bold text-slate-600 block mb-1">Số tiền đã tích lũy hiện tại</label>
              <div class="field-airy h-10 px-3.5 flex items-center justify-between">
                <input
                  id="goal-current-input"
                  type="text"
                  inputmode="numeric"
                  autocomplete="off"
                  value="${formatNumberWithDots(gf.current)}"
                  oninput="handleGoalAmountInput(this, 'current')"
                  placeholder="0"
                  class="w-full bg-transparent font-num text-sm font-extrabold text-[#10B981] placeholder-slate-400 focus:outline-none"
                />
                <span class="text-xs font-extrabold text-slate-400">₫</span>
              </div>
            </div>

            <!-- Chọn Biểu tượng & Màu sắc -->
            <div>
              <label class="text-[11px] font-bold text-slate-600 block mb-1.5">Biểu tượng & Nhóm mục tiêu</label>
              <div class="grid grid-cols-5 gap-1.5">
                ${GOAL_THEMES.map(th => {
                  const isSel = gf.themeId === th.id;
                  return `
                    <button
                      type="button"
                      onclick="setGoalModalTheme('${th.id}')"
                      class="cat-item-btn py-2 px-1 flex flex-col items-center ${isSel ? 'active-income' : ''}"
                    >
                      <div class="w-8 h-8 rounded-full flex items-center justify-center mb-1" style="background:${th.bg}; color:${th.color}">
                        ${SVG[th.icon] || SVG.shieldCheck}
                      </div>
                      <span class="text-[10px] font-bold text-slate-600 truncate w-full text-center">${th.label.split(' ')[0]}</span>
                    </button>
                  `;
                }).join('')}
              </div>
            </div>
          `}

          <!-- Action Buttons -->
          <div class="grid grid-cols-3 gap-2.5 pt-1">
            <button
              type="button"
              onclick="closeGoalModal()"
              class="col-span-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-xs font-bold text-slate-600 transition"
            >
              Hủy
            </button>
            <button
              type="submit"
              class="col-span-2 py-2.5 ${isBudgetLimit ? 'btn-desun-orange' : 'btn-desun-emerald'} text-xs font-bold flex items-center justify-center gap-1.5"
            >
              ${SVG.check}
              <span>${isDeposit ? 'Xác nhận nạp tiền' : 'Lưu thông tin'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

// ============================================================================
// Modal: Master Data Khoản Mục Thu - Chi (Thêm mới / Sửa Khoản Mục)
// ============================================================================
function renderCategoryModal() {
  if (!state.categoryModalOpen) return '';
  const cf = state.categoryModalForm;
  const isEdit = cf.mode === 'EDIT';
  const isIncome = Boolean(cf.isIncome);

  return `
    <div
      onmousedown="this._isBackdropDown = (event.target === this)"
      onclick="if(event.target === this && this._isBackdropDown) closeCategoryModal()"
      class="fixed inset-0 z-[60] desun-modal-backdrop flex items-center justify-center p-3 sm:p-4"
    >
      <div class="desun-modal-card w-full max-w-[430px] p-5 animate-modal-pop">
        <!-- Header -->
        <div class="flex items-center justify-between mb-3.5">
          <div class="flex items-center gap-2">
            <h3 class="text-[16px] font-extrabold text-[#1B365D]">
              ${isEdit ? 'Sửa khoản mục Master Data' : 'Thêm khoản mục mới'}
            </h3>
            <span class="px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500">
              ${isEdit ? `#${cf.editId}` : 'Ngan_Sach_Danh_Muc'}
            </span>
          </div>
          <button
            type="button"
            onclick="closeCategoryModal()"
            class="w-7 h-7 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-400 hover:text-rose-500 flex items-center justify-center transition"
            title="Đóng (ESC)"
          >
            ${SVG.close}
          </button>
        </div>

        <!-- Phân nhóm Khoản Chi / Khoản Thu -->
        <div class="grid grid-cols-2 p-1 rounded-xl bg-slate-100 text-xs font-bold mb-3.5">
          <button
            type="button"
            onclick="setCategoryModalType(false)"
            class="py-2 rounded-lg transition flex items-center justify-center gap-1.5 ${!isIncome ? 'bg-[#F97316] text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'}"
          >
            ${SVG.trendDown}
            <span>Khoản Chi (EXPENSE)</span>
          </button>
          <button
            type="button"
            onclick="setCategoryModalType(true)"
            class="py-2 rounded-lg transition flex items-center justify-center gap-1.5 ${isIncome ? 'bg-[#10B981] text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'}"
          >
            ${SVG.trendUp}
            <span>Khoản Thu (INCOME)</span>
          </button>
        </div>

        <form onsubmit="submitCategoryModal(event)" class="space-y-3">
          ${!isEdit ? `
            <!-- Gợi ý chọn nhanh 1 chạm (VD: Xăng, Cà phê, Tiền nhà...) -->
            <div>
              <label class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">Gợi ý chọn nhanh 1 chạm</label>
              <div class="flex items-center gap-1.5 flex-wrap">
                ${(isIncome ? QUICK_CATEGORY_PRESETS.INCOME : QUICK_CATEGORY_PRESETS.EXPENSE).map(p => {
                  const isActivePreset = cf.name === p.name;
                  return `
                    <button
                      type="button"
                      onclick="applyQuickCategoryPreset('${p.name}', '${p.themeId}', ${p.limit})"
                      class="px-2.5 py-1 rounded-full text-[11px] font-bold transition cursor-pointer ${
                        isActivePreset
                          ? (isIncome ? 'bg-[#10B981] text-white shadow-xs' : 'bg-[#F97316] text-white shadow-xs')
                          : 'bg-slate-100 hover:bg-orange-50 text-slate-600 hover:text-[#F97316]'
                      }"
                    >
                      + ${p.name}
                    </button>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Tên khoản mục -->
          <div>
            <label class="text-[11px] font-bold text-slate-600 block mb-1">Tên khoản mục</label>
            <div class="field-airy h-10 px-3 flex items-center gap-2">
              <span class="text-slate-400 shrink-0">${SVG.receipt}</span>
              <input
                id="cat-modal-name-input"
                type="text"
                value="${cf.name}"
                oninput="handleCategoryNameInput(this)"
                placeholder="${isIncome ? 'Ví dụ: Lương thưởng, Cổ tức, Cho thuê nhà...' : 'Ví dụ: Xăng, Cà phê, Tiền nhà, Điện nước...'}"
                class="w-full bg-transparent text-xs font-bold text-[#1B365D] placeholder-slate-400 focus:outline-none"
              />
            </div>
          </div>

          ${!isIncome ? `
            <!-- Hạn mức ngân sách tháng (chỉ áp dụng cho Khoản chi) -->
            <div class="amount-input-box expense-mode px-3.5 py-2">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[11px] font-bold text-slate-400">Hạn mức ngân sách / tháng</span>
                <div class="flex items-center gap-1">
                  ${[500000, 1000000, 2000000, 5000000].map(v => `
                    <button
                      type="button"
                      onclick="setCategoryPresetLimit(${v})"
                      class="px-2 py-0.5 rounded-lg text-[10px] font-bold font-num bg-white border border-slate-200/80 hover:border-orange-400 text-slate-600 transition"
                    >
                      ${formatNumberWithDots(v)}
                    </button>
                  `).join('')}
                </div>
              </div>
              <div class="relative flex items-center">
                <input
                  id="cat-modal-limit-input"
                  type="text"
                  inputmode="numeric"
                  autocomplete="off"
                  value="${formatNumberWithDots(cf.limit)}"
                  oninput="handleCategoryLimitInput(this)"
                  placeholder="1.000.000"
                  class="w-full bg-transparent font-num text-xl font-extrabold text-[#1B365D] placeholder-slate-300 focus:outline-none pr-8"
                />
                <span class="absolute right-0 text-xs font-extrabold text-slate-400">₫</span>
              </div>
            </div>
          ` : ''}

          <!-- Chọn Biểu tượng & Màu sắc -->
          <div>
            <label class="text-[11px] font-bold text-slate-600 block mb-1.5">Biểu tượng & Màu nhận diện</label>
            <div class="grid grid-cols-4 gap-1.5 max-h-[188px] overflow-y-auto pr-0.5">
              ${CATEGORY_THEMES.map(th => {
                const isSel = cf.themeId === th.id;
                return `
                  <button
                    type="button"
                    data-cat-theme-btn="${th.id}"
                    onclick="setCategoryModalTheme('${th.id}')"
                    class="cat-item-btn py-1.5 px-1 flex flex-col items-center ${isSel ? (isIncome ? 'active-income' : 'active-expense') : ''}"
                  >
                    <div class="w-7 h-7 rounded-full flex items-center justify-center mb-1" style="background:${th.bg}; color:${th.color}">
                      ${SVG[th.icon] || SVG.wallet}
                    </div>
                    <span class="text-[10px] font-bold text-slate-600 truncate w-full text-center">${th.label}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="grid ${isEdit ? 'grid-cols-4' : 'grid-cols-3'} gap-2 pt-1">
            ${isEdit ? `
              <button
                type="button"
                onclick="deleteCategory('${cf.editId}', event); closeCategoryModal();"
                class="col-span-1 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200/80 text-xs font-extrabold text-rose-600 transition flex items-center justify-center gap-1"
                title="Xóa khoản mục này"
              >
                ${SVG.trash}
                <span>Xóa</span>
              </button>
            ` : ''}
            <button
              type="button"
              onclick="closeCategoryModal()"
              class="col-span-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-xs font-bold text-slate-600 transition"
            >
              Hủy
            </button>
            <button
              type="submit"
              class="col-span-2 py-2.5 ${isIncome ? 'btn-desun-emerald' : 'btn-desun-orange'} text-xs font-bold flex items-center justify-center gap-1.5"
            >
              ${SVG.check}
              <span>${isEdit ? 'Lưu thay đổi' : 'Thêm vào danh sách'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

// ============================================================================
// Main Responsive Render (Desktop Web Layout <-> Mobile App Layout)
// ============================================================================
function renderActivePageContent(stats, isMobile) {
  if (state.activePage === 'transactions') return renderTransactionsPage(stats, isMobile);
  if (state.activePage === 'budgets') return renderBudgetsPage(stats);
  if (state.activePage === 'goals') {
    state.budgetSubTab = 'goals';
    return renderBudgetsPage(stats);
  }
  if (state.activePage === 'admin_accounts') return renderAdminAccountsPage();
  if (state.activePage === 'profile') return renderProfilePage(stats);
  return renderHomePage(stats, isMobile);
}

function renderApp() {
  const root = document.getElementById('app-root');
  if (!root) return;

  if (!state.isAuthenticated) {
    root.innerHTML = renderLoginPage();
    return;
  }

  const stats = computeStats();
  const isMobileSim = state.isMobileSimulator;
  const activeWs = state.data.workspaces.find(w => w.id === state.data.activeWorkspace) || state.data.workspaces[0];
  const isAdmin = isCurrentUserAdmin();

  // If user toggled Mobile Simulator on Desktop, render inside sleek Mobile Viewport Shell
  if (isMobileSim) {
    root.innerHTML = `
      <div class="py-3 px-4 bg-[#1B365D] text-white flex items-center justify-between text-xs">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#F97316]"></span>
          <span class="font-semibold">Chế độ xem thử Giao diện Điện thoại (Mobile Responsive)</span>
        </div>
        <button onclick="toggleMobileSimulator()" class="px-3 py-1 rounded-lg bg-white text-[#1B365D] font-bold hover:bg-slate-100 transition flex items-center gap-1.5">
          ${SVG.monitor} <span>Quay lại Giao diện Web Toàn màn hình</span>
        </button>
      </div>

      <div class="mobile-simulator-shell">
        <!-- Mobile Top Header -->
        <header class="bg-white px-4 pt-4 pb-3 border-b border-slate-100 flex items-center justify-between shrink-0">
          <div class="flex items-center gap-2.5">
            <div onclick="navigate('profile')" class="w-9 h-9 rounded-full bg-gradient-to-br from-[#1B365D] to-[#0284C7] text-white text-xs font-bold flex items-center justify-center cursor-pointer">
              ${activeWs.avatar || 'TĐ'}
            </div>
            <div>
              <p class="text-[11px] text-slate-400 leading-none">Xin chào, ${isAdmin ? '<strong class="text-[#F97316]">Admin</strong>' : 'Thành viên'}</p>
              <p class="text-sm font-extrabold text-[#1B365D] mt-0.5">${state.data.userName}</p>
            </div>
          </div>
          <div class="flex items-center gap-1.5">
            ${isAdmin ? `
              <button onclick="navigate('admin_accounts')" class="px-2.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#D97706] text-[10px] font-extrabold">
                Quản trị TK
              </button>
            ` : ''}
            <button onclick="openAddModal('EXPENSE')" class="px-2.5 py-1.5 rounded-full bg-[#FFF1E6] text-[#F97316] text-[11px] font-bold">
              + Ghi nhanh
            </button>
          </div>
        </header>

        <!-- Scrollable Mobile Content -->
        <main class="flex-1 overflow-y-auto p-4 pb-24">
          ${renderActivePageContent(stats, true)}
        </main>

        <!-- Mobile Bottom Navigation Bar -->
        <nav class="mobile-bottom-nav absolute bottom-0 inset-x-0 h-16 px-3 flex items-center justify-around z-20">
          <button onclick="navigate('home')" class="flex flex-col items-center gap-0.5 ${state.activePage === 'home' ? 'text-[#F97316] font-bold' : 'text-slate-400'}">
            ${SVG.home}
            <span class="text-[10px]">Trang chủ</span>
          </button>
          <button onclick="navigate('transactions')" class="flex flex-col items-center gap-0.5 ${state.activePage === 'transactions' ? 'text-[#F97316] font-bold' : 'text-slate-400'}">
            ${SVG.receipt}
            <span class="text-[10px]">Danh sách</span>
          </button>
          <button onclick="openAddModal('EXPENSE')" class="w-12 h-12 rounded-full btn-desun-orange flex items-center justify-center -mt-6 shadow-lg border-4 border-white">
            ${SVG.plus}
          </button>
          <button onclick="navigate('budgets')" class="flex flex-col items-center gap-0.5 ${state.activePage === 'budgets' || state.activePage === 'goals' ? 'text-[#F97316] font-bold' : 'text-slate-400'}">
            ${SVG.shieldCheck}
            <span class="text-[10px]">Mục tiêu</span>
          </button>
          <button onclick="navigate('${isAdmin ? 'admin_accounts' : 'profile'}')" class="flex flex-col items-center gap-0.5 ${state.activePage === 'profile' || state.activePage === 'admin_accounts' ? 'text-[#F97316] font-bold' : 'text-slate-400'}">
            ${isAdmin ? SVG.users : SVG.user}
            <span class="text-[10px]">${isAdmin ? 'Quản trị TK' : 'Cá nhân'}</span>
          </button>
        </nav>
      </div>
      ${renderAddModal()}
      ${renderGoalModal()}
      ${renderCategoryModal()}
      ${renderAdminUserModal()}
      ${renderDeleteConfirmModal()}
    `;
    return;
  }

  // Standard Full-Screen Responsive Web App (Desktop Sidebar + Automatic Mobile Bottom Nav on <1024px)
  root.innerHTML = `
    <div class="min-h-screen flex flex-col lg:flex-row bg-[#F4F7FB]">
      <!-- DESKTOP LEFT SIDEBAR (Hidden on Mobile <1024px) -->
      <aside class="hidden lg:flex lg:w-64 bg-white border-r border-slate-200/80 flex-col justify-between p-5 shrink-0 sticky top-0 h-screen z-30">
        <div>
          <!-- Official DeSun Logo -->
          <div onclick="navigate('home')" class="px-2 pb-5 mb-4 border-b border-slate-100 cursor-pointer">
            ${SVG.brandLogo(40)}
          </div>

          <!-- Individual User Switcher (Select Dropdown - Chỉ hiển thị user đã đăng nhập lần đầu) -->
          <div class="mb-4 px-1">
            <div class="flex items-center justify-between mb-1.5">
              <label class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Cá nhân sử dụng</label>
              <span class="text-[10px] font-bold text-[#10B981]">${getLoggedInWorkspaces().length} đã lưu</span>
            </div>
            <div class="field-airy h-10 px-2.5 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full ${isAdmin ? 'bg-[#F97316]' : 'bg-[#1B365D]'} text-white text-[10px] font-extrabold flex items-center justify-center shrink-0">
                ${activeWs.avatar || 'TĐ'}
              </span>
              <select
                onchange="switchWorkspace(this.value)"
                class="w-full bg-transparent text-xs font-bold text-[#1B365D] focus:outline-none cursor-pointer truncate"
                title="Chọn nhanh cá nhân đã đăng nhập"
              >
                ${getLoggedInWorkspaces().map(w => `
                  <option value="${w.id}" ${state.data.activeWorkspace === w.id ? 'selected' : ''}>
                    ${w.fullName || w.name} ${w.roleCode === 'ADMIN' || w.id === 'personal' ? '(Admin)' : ''}
                  </option>
                `).join('')}
                <option value="NEW_ACCOUNT">+ Đăng nhập tài khoản khác...</option>
              </select>
            </div>
          </div>

          <!-- Navigation Links theo Module đang chọn (PFM: Quản lý chi tiêu | ADM: Quản lý tài khoản) -->
          <nav class="space-y-1">
            ${state.activePage === 'admin_accounts' ? `
              <button onclick="navigate('admin_accounts')" class="sidebar-item active whitespace-nowrap">
                ${SVG.moduleCube}
                <span>Phân Quyền Account</span>
              </button>
              <button onclick="openAdminUserModal('CREATE')" class="sidebar-item whitespace-nowrap">
                ${SVG.plus} <span>Cấp tài khoản mới</span>
              </button>
              <button onclick="selectSystemModule('PFM', event)" class="sidebar-item whitespace-nowrap text-[#15803D] hover:bg-emerald-50">
                ${SVG.home} <span>Về Quản lý chi tiêu (PFM)</span>
              </button>
            ` : `
              <button onclick="navigate('home')" class="sidebar-item whitespace-nowrap ${state.activePage === 'home' ? 'active' : ''}">
                ${SVG.home} <span>Trang chủ</span>
              </button>
              <button onclick="navigate('transactions')" class="sidebar-item whitespace-nowrap ${state.activePage === 'transactions' ? 'active' : ''}">
                ${SVG.receipt} <span>Danh sách thu chi</span>
              </button>
              <button onclick="navigate('budgets')" class="sidebar-item whitespace-nowrap ${state.activePage === 'budgets' ? 'active' : ''}">
                ${SVG.wallet} <span>Ngân sách & Khoản mục</span>
              </button>
              <button onclick="navigate('goals')" class="sidebar-item whitespace-nowrap ${state.activePage === 'goals' ? 'active' : ''}">
                ${SVG.shieldCheck} <span>Mục tiêu tiết kiệm</span>
              </button>
              <button onclick="navigate('profile')" class="sidebar-item whitespace-nowrap ${state.activePage === 'profile' ? 'active' : ''}">
                ${SVG.user} <span>Cá nhân & Nguồn tiền</span>
              </button>
            `}
          </nav>
        </div>

        <div class="space-y-2.5">
          <!-- Nút Chuyển Đổi Module 3D Cube gọn đẹp, thanh thoát -->
          ${renderSidebarModuleDockHTML()}

          <div class="pt-2.5 border-t border-slate-100 space-y-1">
            <button onclick="navigate('profile')" class="sidebar-item py-2 text-xs">
              ${SVG.settings} <span>Cài đặt cá nhân</span>
            </button>
            <button onclick="logoutApp()" class="sidebar-item py-2 text-xs text-rose-500 hover:text-rose-600 hover:bg-rose-50">
              ${SVG.logout} <span>Đăng xuất tài khoản</span>
            </button>
          </div>
        </div>
      </aside>

      <!-- MAIN CONTENT AREA -->
      <div class="flex-1 flex flex-col min-w-0 pb-20 lg:pb-6">
        <!-- Top Header (Responsive for both Mobile & Desktop) -->
        <header class="bg-white/90 backdrop-blur-md border-b border-slate-200/70 sticky top-0 z-20 px-3 sm:px-5 py-3 flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <!-- Mobile Logo -->
            <div onclick="navigate('home')" class="lg:hidden cursor-pointer">
              ${SVG.brandLogo(32)}
            </div>
            <div class="hidden sm:block">
              <div class="flex items-center gap-2">
                <h1 class="text-base sm:text-lg font-extrabold text-[#1B365D]">Xin chào, ${state.data.userName}</h1>
                ${isAdmin ? `
                  <span onclick="navigate('admin_accounts')" class="px-2.5 py-0.5 rounded-full bg-amber-100 text-[#D97706] border border-amber-300 text-[10px] font-extrabold cursor-pointer hover:bg-amber-200 transition">
                    Admin Quản trị
                  </span>
                ` : `
                  <span class="px-2.5 py-0.5 rounded-full bg-sky-50 text-[#0284C7] border border-sky-200 text-[10px] font-bold">
                    Thành viên
                  </span>
                `}
              </div>
              <p class="text-xs text-slate-400">Chúc bạn một ngày tốt lành!</p>
            </div>
          </div>

          <!-- Search + Actions -->
          <div class="flex items-center gap-2 sm:gap-2.5">
            <div class="desun-search-box-sleek hidden md:inline-flex !rounded-full !h-10 !px-3.5 w-60 xl:w-72">
              <span class="text-slate-400 shrink-0">${SVG.search}</span>
              <input
                id="header-global-search"
                type="text"
                value="${state.searchQuery}"
                oninput="handleSearch(this.value, 'header-global-search')"
                placeholder="Tìm kiếm giao dịch, danh mục..."
                autocomplete="off"
                class="w-full bg-transparent text-xs font-bold text-[#1B365D] placeholder-slate-400 focus:outline-none"
              />
              ${state.searchQuery ? `
                <button
                  type="button"
                  onclick="clearGlobalSearch('header-global-search')"
                  class="w-5 h-5 rounded-full bg-slate-200 hover:bg-rose-100 text-slate-500 hover:text-rose-600 text-xs font-extrabold flex items-center justify-center shrink-0 transition"
                  title="Xóa tìm kiếm"
                >×</button>
              ` : ''}
            </div>

            <button
              type="button"
              onclick="syncToExcelDatabaseNow()"
              class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-extrabold transition shrink-0 cursor-pointer ${
                state.excel.isLinked && !state.excel.needsPermission
                  ? 'bg-emerald-50 hover:bg-emerald-100 text-[#10B981] border border-emerald-200/80'
                  : 'bg-amber-50 hover:bg-amber-100 text-[#EA580C] border border-amber-300 shadow-2xs'
              }"
              title="${
                state.excel.isLinked && !state.excel.needsPermission
                  ? `Đã kết nối ${state.excel.fileName || 'DeSun_DuLieu_ThuChi.xlsx'} (${state.excel.lastSavedAt ? 'Lưu lúc ' + state.excel.lastSavedAt : 'Tự động lưu'}) — Bấm để lưu ngay`
                  : 'Bấm để cấp quyền & lưu toàn bộ dữ liệu trên giao diện vào file DeSun_DuLieu_ThuChi.xlsx'
              }"
            >
              ${SVG.excel}
              <span id="excel-sync-timestamp" class="hidden sm:inline">
                ${
                  state.excel.isLinked && !state.excel.needsPermission
                    ? `Excel: ${state.excel.lastSavedAt || 'Đã đồng bộ'}`
                    : 'Lưu vào Excel'
                }
              </span>
            </button>

            <button
              onclick="toggleMobileSimulator()"
              class="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-bold transition"
              title="Xem thử giao diện trên Điện thoại"
            >
              ${SVG.phone} <span>Xem bản Mobile</span>
            </button>

            <button
              onclick="openAddModal('EXPENSE')"
              class="px-4 py-2.5 btn-desun-orange text-xs flex items-center gap-1.5 shrink-0"
            >
              ${SVG.plus} <span>Thêm giao dịch</span>
            </button>

            ${renderNotificationBellHTML(stats)}

            <div onclick="navigate('profile')" class="w-10 h-10 rounded-full bg-gradient-to-br from-[#1B365D] to-[#0284C7] text-white font-bold text-xs flex items-center justify-center shadow-sm cursor-pointer shrink-0">
              ${activeWs.avatar || 'TĐ'}
            </div>
          </div>
        </header>

        <!-- Page Container (Full-Width Expanded Layout with Slim Side Margins) -->
        <main class="flex-1 w-full px-3 sm:px-5 pt-4">
          ${renderActivePageContent(stats, false)}
        </main>
      </div>

      <!-- MOBILE RESPONSIVE BOTTOM NAVIGATION BAR (Automatically appears on screens <1024px) -->
      <nav class="lg:hidden mobile-bottom-nav fixed bottom-0 inset-x-0 h-16 px-3 flex items-center justify-around z-30">
        <button onclick="navigate('home')" class="flex flex-col items-center gap-0.5 ${state.activePage === 'home' ? 'text-[#F97316] font-bold' : 'text-slate-400'}">
          ${SVG.home}
          <span class="text-[10px]">Trang chủ</span>
        </button>
        <button onclick="navigate('transactions')" class="flex flex-col items-center gap-0.5 ${state.activePage === 'transactions' ? 'text-[#F97316] font-bold' : 'text-slate-400'}">
          ${SVG.receipt}
          <span class="text-[10px]">Danh sách</span>
        </button>
        <button onclick="openAddModal('EXPENSE')" class="w-12 h-12 rounded-full btn-desun-orange flex items-center justify-center -mt-6 shadow-lg border-4 border-white">
          ${SVG.plus}
        </button>
        <button onclick="navigate('budgets')" class="flex flex-col items-center gap-0.5 ${state.activePage === 'budgets' || state.activePage === 'goals' ? 'text-[#F97316] font-bold' : 'text-slate-400'}">
          ${SVG.shieldCheck}
          <span class="text-[10px]">Ngân sách</span>
        </button>
        <button onclick="navigate('${isAdmin ? 'admin_accounts' : 'profile'}')" class="flex flex-col items-center gap-0.5 ${state.activePage === 'profile' || state.activePage === 'admin_accounts' ? 'text-[#F97316] font-bold' : 'text-slate-400'}">
          ${isAdmin ? SVG.users : SVG.user}
          <span class="text-[10px]">${isAdmin ? 'Quản trị TK' : 'Cá nhân'}</span>
        </button>
      </nav>
    </div>

    ${renderAddModal()}
    ${renderGoalModal()}
    ${renderCategoryModal()}
    ${renderAdminUserModal()}
    ${renderDeleteConfirmModal()}
  `;
}

document.addEventListener('click', () => {
  // Tự động kích hoạt lại quyền đọc/ghi FileSystemFileHandle ngay ở cú click đầu tiên sau khi tắt máy mở lại
  if (state.excel && state.excel.fileHandle && state.excel.needsPermission && !state.excel.bridgeOnline && !window._autoUnlockAttempted) {
    window._autoUnlockAttempted = true;
    (async () => {
      try {
        const perm = await state.excel.fileHandle.requestPermission({ mode: 'readwrite' });
        if (perm === 'granted') {
          state.excel.isLinked = true;
          state.excel.needsPermission = false;
          if (state.data.hasUnsyncedCrud) {
            await window.saveToLinkedExcelFile(true, true);
          } else if (typeof XLSX !== 'undefined') {
            const file = await state.excel.fileHandle.getFile();
            if (file && file.size > 0) {
              const buf = await file.arrayBuffer();
              const wb = XLSX.read(buf, { type: 'array' });
              if (wb && wb.SheetNames && wb.SheetNames.length > 0) {
                parseWorkbookToState(wb);
                state.excel.lastFileModified = file.lastModified || Date.now();
                state.excel.lastSavedAt = getTimeStringNow();
                try {
                  if (window.localStorage) {
                    localStorage.setItem('DESUN_APP_INDIVIDUAL_V3', JSON.stringify(state.data));
                  }
                } catch (err) {}
              }
            }
          }
          renderApp();
        } else {
          window._autoUnlockAttempted = false;
        }
      } catch (e) {
        window._autoUnlockAttempted = false;
      }
    })();
  }

  let shouldRender = false;
  if (state.moduleSwitcherOpen) {
    state.moduleSwitcherOpen = false;
    shouldRender = true;
  }
  if (state.adminAccountView && state.adminAccountView.openRowModuleMenuUserId) {
    state.adminAccountView.openRowModuleMenuUserId = null;
    shouldRender = true;
  }
  if (state.dashboardFilter && state.dashboardFilter.openSelect) {
    state.dashboardFilter.openSelect = null;
    state.dashboardFilter.selectQuery = '';
    shouldRender = true;
  }
  if (state.notificationCenter && state.notificationCenter.open) {
    state.notificationCenter.open = false;
    shouldRender = true;
  }
  if (shouldRender) {
    renderApp();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (state.moduleSwitcherOpen) {
      e.preventDefault();
      state.moduleSwitcherOpen = false;
      renderApp();
    } else if (state.adminAccountView && state.adminAccountView.openRowModuleMenuUserId) {
      e.preventDefault();
      state.adminAccountView.openRowModuleMenuUserId = null;
      renderApp();
    } else if (state.deleteConfirm && state.deleteConfirm.open) {
      e.preventDefault();
      window.closeDeleteConfirmModal();
    } else if (state.categoryModalOpen) {
      e.preventDefault();
      window.closeCategoryModal();
    } else if (state.notificationCenter && state.notificationCenter.open) {
      e.preventDefault();
      state.notificationCenter.open = false;
      renderApp();
    } else if (state.dashboardFilter && state.dashboardFilter.openSelect) {
      e.preventDefault();
      state.dashboardFilter.openSelect = null;
      state.dashboardFilter.selectQuery = '';
      renderApp();
    } else if (state.adminUserModalOpen) {
      e.preventDefault();
      window.closeAdminUserModal();
    } else if (state.modalOpen) {
      e.preventDefault();
      window.closeAddModal();
    } else if (state.goalModalOpen) {
      e.preventDefault();
      window.closeGoalModal();
    }
  }
});

renderApp();
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  autoSyncWithLocalExcelBridge();
});
