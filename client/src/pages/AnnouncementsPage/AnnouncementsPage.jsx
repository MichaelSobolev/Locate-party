import React from 'react'
import styles from './AnnouncementsPage'

export const AnnouncementsPage = () => {
  const userName = null
  return (
   <main>
    <h2> AnnouncementsPage</h2>
    <div className="Pseudo-Header">
      <p>Hello {userName ? userName : "UserName"}</p>
    </div>
    </main>
  )
}
