import React, { useEffect, Fragment } from 'react'
import store from '../../../redux'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import NoData from './noData'
import CheckEditDialog from '../checkEditDialog'
import './styles.css'

export const MainCard = props => {
    let key = 1
    const keygenn = () => (key += 1)
    
    const { apts, addADweller } = props

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

    const showCheckEdit = id => {
        document.getElementById('blur').style.filter = 'blur(10px)'
        ReactDOM.render(
            <Provider store={store}>
                <CheckEditDialog {...{id}}/>
            </Provider>, document.getElementById('noblur'))
    }

    useEffect(() => {
        highlightRow()
    })
    
    console.log(apts)
    return (
        <div className="card mainCard">
            {apts[0] && apts[0].owner && apts[0].number && apts[0].block ? (
                <Fragment>
                    <div className="highlighter"></div>
                        <div id="headRow">
                        <p className="tableHead">Condo-dweller</p>
                        <p className="tableHead">Apartment</p>
                        <p className="tableHead">Date inserted</p>
                        <p className="tableHead">Phone</p>
                        <p className="tableHead">E-mail</p>
                    </div>
                    {apts.map(ap => (
                        <div key={keygenn()} className="tableBody" onClick={() => showCheckEdit(ap.id)}>
                            <p className="tableItem">{ap.owner.name}</p>
                            <p className="tableItem">{ap.number + ap.block}</p>
                            <p className="tableItem">{ap.owner.birthdate}</p>
                            <p className="tableItem">{ap.owner.phone}</p>
                            <p className="tableItem">{ap.owner.email}</p>
                        </div>
                    ))}
                </Fragment>
            ) : <NoData {...{addADweller}}/>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    apts: state.apartments
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MainCard)
