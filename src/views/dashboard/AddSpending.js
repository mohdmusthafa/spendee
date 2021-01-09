import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Input, Dropdown, Grid, Header, Icon } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react'
import { addSpendingData, setSpendingData } from '../../redux/spendings/'

function AddSpending() {
    const state = useSelector(state => state.spendings)
    const {
        Add_spending_type,
        Add_spending_date,
        Add_spending_amount
    } = state
    const dispatch = useDispatch()

    const inputStyles = {
        width: 200,
        marginBottom: 10
    }

    const handleAmountChange = e => {
        dispatch(setSpendingData("Add_spending_amount", e.target.value))
    }

    const handleDateChange = (e, { name, value }) => {
        dispatch(setSpendingData("Add_spending_date", value ))
    }

    const handleDropdownChange = (e, { value }) => {
        dispatch(setSpendingData("Add_spending_type", value))
    }
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    {/* Add Your Spending */}
                    { process.env.NODE_ENV }
                </Header>
                <Dropdown
                    placeholder="Spending Type"
                    selection
                    value={Add_spending_type}
                    style={inputStyles}
                    options={[
                        {
                            key: 'Food',
                            text: 'Food',
                            value: 'Food'
                        },
                        {
                            key: 'Travel',
                            text: 'Travel',
                            value: 'Travel'
                        }
                    ]}
                    onChange={handleDropdownChange}
                />
                <br />
                <DateInput
                    name="date"
                    placeholder="Spending Date"
                    style={inputStyles}
                    value={Add_spending_date}
                    iconPosition="left"
                    onChange={handleDateChange}
                    closable
                />
                <Input
                    style={inputStyles}
                    placeholder="Enter the amount"
                    value={Add_spending_amount}
                    onChange={handleAmountChange}
                />
                <br />

                <Button secondary onClick={() => dispatch(addSpendingData())}>Add Spending</Button>

            </Grid.Column>
        </Grid>
    )
}

export default AddSpending