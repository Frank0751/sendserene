import * as React from "react"

const MOBILE_BREAKPOINT = 768
const QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`

/**
 * Subscribe to the viewport width via matchMedia.
 *
 * Uses useSyncExternalStore rather than useState + useEffect: matchMedia is an
 * external store, so this is the primitive designed for it. It avoids the
 * cascading render that calling setState inside an effect body causes, and it
 * gives us a correct server snapshot for SSR (never mobile on the server, so
 * markup matches the desktop-first default).
 */
function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY)
  mql.addEventListener("change", callback)
  return () => mql.removeEventListener("change", callback)
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches
}

function getServerSnapshot() {
  return false
}

export function useIsMobile() {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
