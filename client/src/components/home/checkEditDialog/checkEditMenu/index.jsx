import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { updateApartment } from '../../../../gqlQueries/updateUpartment'
import { useMutation } from '@apollo/react-hooks'
import './styles.css'

export const CheckEditMenu = ({aptData, setAptData, editMode, setViewData, setRealTimeData, realTimeData}) => {

    const [updateApt] = useMutation(updateApartment)

    const handleAptInput = ({target}) => {
        let number = target.value.match(/\d/gi)
        number = number && number.join('')

        let block =  target.value && target.value.match(/[a-zA-Z]/gi)
        block = block && block.join('').toUpperCase()

        setRealTimeData({
            ...realTimeData,
            number,
            block
        })
    }

    const removeAPerson = (e, id) => {
        const lessItemToBeDeleted = realTimeData.living && realTimeData.living.filter((person) => person._id !== id)
        setRealTimeData({
            ...realTimeData,
            living: [
                ...lessItemToBeDeleted
            ]
        })
        itemsToBeRemoved(e.target.parentNode)
    }

    useEffect(() => {
        itemsToBeRemoved(false)
    }, [editMode])

    const itemsToBeRemoved = (target) => {
        if (target) {
            target.style.color="#FC6262"
        } else {
            const toBeRestored = document.querySelectorAll('.btAction')
            for (let item of toBeRestored) item.style.color="#7E76FF"  
        }
    }

    // the object created must have a real id, from the databases.
    const addANewPerson = () => {
        const newPerson = {
            name: "New Person",
            birthdate: '2020-05-06',
            phone: "119999999999",
            cpf: "999.999.999-99",
            email: "email@email.com",
            class: 'living'
        }

        updateApt({
            variables: {
                input: {
                    ...realTimeData,
                    living: [
                        ...realTimeData.living,
                        newPerson
                    ]
                }
            }
        })
        .then(({data}) => {
            setRealTimeData(data.updateApt)
            setAptData(data.updateApt)
        })
        
        setViewData(newPerson)
    }


    return (
        <div id="checkEditMenu">
            <h3 className="menuLabel">Apartment 
                {editMode ? (
                    <input onChange={e => handleAptInput(e)} className="input editCardInput" size="5" type="text" placeholder="Digit number and block" defaultValue={aptData.number + aptData.block}/>
                ) : (
                    <span className="aptNumberBlock">{aptData.number + aptData.block}</span> 
                )}
            </h3>
            <h3 className="menuLabel">Condo-dweller</h3>
            <div  onClick={() => !editMode && setViewData(aptData.owner)} className="btAction">{aptData.owner.name}</div>
            <h3 className="menuLabel">People living with</h3>
            {aptData.living[0] && aptData.living.map((person, i) => (
                <div key={i} onClick={() => !editMode && setViewData({...person})} className="btAction flex">{person.name}
                     {editMode && <div className="removeBt"  onClick={(e) => removeAPerson(e, person._id)}><p className="removeIcon">x</p></div>}
                </div>
            ))}
            {editMode && <div onClick={() => addANewPerson()} className="btAction addPerson2">+ Add a person</div>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckEditMenu)
