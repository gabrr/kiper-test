import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { updateApartment } from '../../../../gqlQueries/updateUpartment'
import { useMutation } from '@apollo/react-hooks'
import './styles.css'

export const CheckEditMenu = ({aptData, editMode, setViewData, setRealTimeData, realTimeData, setlivingToDelete, livingToDelete}) => {

    const [updateApt] = useMutation(updateApartment)
    const localData = editMode ? realTimeData : aptData

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
        setlivingToDelete([...livingToDelete, id])
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
            name: "New person :)",
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

            // the last person it was just inserted, so we must update the user viwer
            // that way as soon as the users adds he can edit the person inserted.
            setViewData(data.updateApt.living.slice(-1)[0])
        })
        
    }

    return (
        <div id="checkEditMenu">
            <h3 className="menuLabel">Apartment 
                {editMode ? (
                    <input onChange={e => handleAptInput(e)} className="input editCardInput" size="5" type="text" placeholder="Digit number and block" defaultValue={localData.number + localData.block}/>
                ) : (
                    <span className="aptNumberBlock">{localData.number + localData.block}</span> 
                )}
            </h3>
            <h3 className="menuLabel">Condo-dweller</h3>
            <div  onClick={() => setViewData(localData.owner)} className="btAction">{localData.owner.name}</div>
            <h3 className="menuLabel">People living with</h3>
            {localData.living[0] && localData.living.map((person, i) => (
                <div key={i} onClick={() => setViewData({...person})} className="btAction flex">{person.name}
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
