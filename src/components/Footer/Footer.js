import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Footer.module.css'
import FabButton from '../Fab/Fab'

const Footer = () => {
    const location = useLocation()
    const [user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')))

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    return (
        <footer>
            <div className={styles.footerText}>
        {/* ©Parshuram Nikam  | Made with ☕ in 💻 <span><a href="https://github.com/ParshuramNikam/ARC-Invoice" target="_blank" rel="noopener noreferrer">[Download source code]</a></span> */}   
            @2024 All rights reserved!
            </div>
            {user && (
            <FabButton />
            )}
        </footer>
    )
}

export default Footer
