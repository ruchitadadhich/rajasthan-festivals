import { useState, useEffect } from "react"

export function useFavorites() {
  // ── Festival favorites ──
  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const stored = localStorage.getItem("festival-favorites")
      return stored ? JSON.parse(stored) : []
    } catch { return [] }
  })
  useEffect(() => {
    localStorage.setItem("festival-favorites", JSON.stringify(favorites))
  }, [favorites])
  const toggleFavorite = (id: number) =>
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id])
  const isFavorite = (id: number) => favorites.includes(id)

  // ── Place favorites ──
  const [placeFavorites, setPlaceFavorites] = useState<number[]>(() => {
    try {
      const stored = localStorage.getItem("place-favorites")
      return stored ? JSON.parse(stored) : []
    } catch { return [] }
  })
  useEffect(() => {
    localStorage.setItem("place-favorites", JSON.stringify(placeFavorites))
  }, [placeFavorites])
  const togglePlaceFavorite = (id: number) =>
    setPlaceFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id])
  const isPlaceFavorite = (id: number) => placeFavorites.includes(id)

  return { favorites, toggleFavorite, isFavorite, placeFavorites, togglePlaceFavorite, isPlaceFavorite }
}