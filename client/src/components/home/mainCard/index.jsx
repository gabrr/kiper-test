import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './styles.css'

export const MainCard = () => {

    const highlightRow = () => {
        const rows = document.querySelectorAll('.tableBody')
        const highlighter = document.querySelector('.highlighter')

        for (let row of rows) {
            row.addEventListener('mouseover', x => {
                let pixels = `${x.target.offsetTop + 8}px`
                highlighter.style.top = pixels
            })
        }
    }

    useEffect(() => {
        highlightRow()
    })

    return (
        <div className="card mainCard">
            <div className="highlighter"></div>
            <div id="headRow">
                <p className="tableHead">Condo-dweller</p>
                <p className="tableHead">Apartment</p>
                <p className="tableHead">Date inserted</p>
                <p className="tableHead">Phone</p>
                <p className="tableHead">E-mail</p>
            </div>
            <div className="tableBody">
                <p className="tableItem">Gabriel</p>
                <p className="tableItem">312E</p>
                <p className="tableItem">20/12/1997</p>
                <p className="tableItem">11 123456789</p>
                <p className="tableItem">example@example.com</p>
            </div>
            <div className="tableBody">
                <p className="tableItem">Gabriel</p>
                <p className="tableItem">312E</p>
                <p className="tableItem">20/12/1997</p>
                <p className="tableItem">11 123456789</p>
                <p className="tableItem">example@example.com</p>
            </div>
            <div className="tableBody">
                <p className="tableItem">Gabriel</p>
                <p className="tableItem">312E</p>
                <p className="tableItem">20/12/1997</p>
                <p className="tableItem">11 123456789</p>
                <p className="tableItem">example@example.com</p>
            </div>
            <div className="tableBody">
                <p className="tableItem">Gabriel</p>
                <p className="tableItem">312E</p>
                <p className="tableItem">20/12/1997</p>
                <p className="tableItem">11 123456789</p>
                <p className="tableItem">example@example.com</p>
            </div>
            <div className="tableBody">
                <p className="tableItem">Gabriel</p>
                <p className="tableItem">312E</p>
                <p className="tableItem">20/12/1997</p>
                <p className="tableItem">11 123456789</p>
                <p className="tableItem">example@example.com</p>
            </div>
            <div className="tableBody">
                <p className="tableItem">Gabriel</p>
                <p className="tableItem">312E</p>
                <p className="tableItem">20/12/1997</p>
                <p className="tableItem">11 123456789</p>
                <p className="tableItem">example@example.com</p>
            </div>
            <div className="tableBody">
                <p className="tableItem">Gabriel</p>
                <p className="tableItem">312E</p>
                <p className="tableItem">20/12/1997</p>
                <p className="tableItem">11 123456789</p>
                <p className="tableItem">example@example.com</p>
            </div>
            <div className="tableBody">
                <p className="tableItem">Gabriel</p>
                <p className="tableItem">312E</p>
                <p className="tableItem">20/12/1997</p>
                <p className="tableItem">11 123456789</p>
                <p className="tableItem">example@example.com</p>
            </div>
            <div className="tableBody">
                <p className="tableItem">Gabriel</p>
                <p className="tableItem">312E</p>
                <p className="tableItem">20/12/1997</p>
                <p className="tableItem">11 123456789</p>
                <p className="tableItem">example@example.com</p>
            </div>
            <div className="tableBody">
                <p className="tableItem">Gabriel</p>
                <p className="tableItem">312E</p>
                <p className="tableItem">20/12/1997</p>
                <p className="tableItem">11 123456789</p>
                <p className="tableItem">example@example.com</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MainCard)
