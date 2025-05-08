import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Navbar({isMobile}){
    const [sbState, setsbState] = useState(true);
    const navigate = useNavigate();
    if(isMobile){
        return (
            <>
            <svg width="0" height="0">
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2={sbState ? (window.innerWidth * 0.04) : (window.innerWidth * 0.08)} y2="0" gradientUnits="userSpaceOnUse">
                                
                                <stop offset="0" stopColor="#f78de7" />
                                
                                <stop offset="1" stopColor="#3dff91" />
                                
                        </linearGradient>
                    </defs>
                </svg>
            <div id="topbar">
                <div
                    style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignContent: "space-evenly",
                    gap: "17vw",
                    margin: 0,
                    padding: 0,
                    }}
                >
                    <p className='sbItem responsiveText sbTextMobile' onClick={() => navigate("/")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sbIcon icon"><circle cx="12" cy="12" r="3"/><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"/><path d="M12 7.5V9"/><path d="M7.5 12H9"/><path d="M16.5 12H15"/><path d="M12 16.5V15"/><path d="m8 8 1.88 1.88"/><path d="M14.12 9.88 16 8"/><path d="m8 16 1.88-1.88"/><path d="M14.12 14.12 16 16"/></svg>
                    About
                    </p>
                    <p className='sbItem responsiveText sbTextMobile' onClick={() => navigate("/links")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sbIcon icon"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                    Links
                    </p>
                    <p className='sbItem responsiveText sbTextMobile' onClick={() => navigate("/projects")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='sbIcon icon'><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="M14 12h8"/><path d="M2 12h2"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m11 13.73-4 6.93"/></svg>
                    Projects
                    </p>
                </div>
            </div>
            </>
        )
     } else {
        return (
            <>
            <svg width="0" height="0">
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2={sbState ? (window.innerWidth * 0.04) : (window.innerWidth * 0.08)} y2="0" gradientUnits="userSpaceOnUse">
                                
                                <stop offset="0" stopColor="#f78de7" />
                                
                                <stop offset="1" stopColor="#3dff91" />
                                
                        </linearGradient>
                    </defs>
                </svg>
            <aside id="sidebar" style={{width: sbState ? "min(4vw, 50px)" : "min(20vw, 250px)",}}>
                <div
                style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
                >
                <button className='sbButton'
                    onClick={() => setsbState(!sbState)}
                    title={sbState ? "Expand Sidebar" : "Collapse Sidebar"}
                    ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sbIcon icon"><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg></button>
                </div>
                <hr style={{width: sbState ? "min(4vw, 50px)" : "min(20vw, 250px)", transition:'width 0.5s'}}/>
                <ul
                    style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    margin: 0,
                    padding: 0,
                    }}
                >
                    <li className='sbItem responsiveText sbTextMed' onClick={() => navigate("/")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sbIcon icon"><circle cx="12" cy="12" r="3"/><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"/><path d="M12 7.5V9"/><path d="M7.5 12H9"/><path d="M16.5 12H15"/><path d="M12 16.5V15"/><path d="m8 8 1.88 1.88"/><path d="M14.12 9.88 16 8"/><path d="m8 16 1.88-1.88"/><path d="M14.12 14.12 16 16"/></svg>
                    About
                    </li>
                    <li className='sbItem responsiveText sbTextMed' onClick={() => navigate("/links")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sbIcon icon"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                    Links
                    </li>
                    <li className='sbItem responsiveText sbTextLarge' onClick={() => navigate("/projects")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='sbIcon icon'><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="M14 12h8"/><path d="M2 12h2"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m11 13.73-4 6.93"/></svg>
                    Projects
                    </li>
                </ul>
            </aside>
            </>
        )
     }
}

export default Navbar