import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

export const AddDweller = () => {
    return (
        <div id="dwellerCard" className="contentInCard">
            <h3 className="cardHeader">Adding a Condo-dweller</h3>
            <p className="btAction">{'< Back'}</p>
            <label>Name<br/><input required className="input" type="text" placeholder="Nome Sobrenome" /></label>
            <label>E-mail<br/><input required className="input" type="email"  placeholder="example@example.com"/></label>
            <label>Phone<br/><input required className="input" type="tel"  pattern="[0-9]{11}" placeholder="xxxxxxxxxxx"/></label>
            <label>CPF<br/><input required className="input" type="text" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
			title="Digite um CPF no formato: xxx.xxx.xxx-xx" placeholder="xxx.xxx.xxx-xx"/></label>
            <label>Birthdate<br/><input required className="input" type="date"/></label>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDweller)
