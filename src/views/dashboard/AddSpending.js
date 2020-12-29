import React from 'react'
import { Button, Input, Dropdown, Grid, Header, Icon } from 'semantic-ui-react'

function AddSpending() {
    const inputStyles = {
        width: 200,
        marginBottom: 10
    }
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Add Your Spending
                </Header>
                <Dropdown
                    placeholder="Spending Type"
                    selection
                    style={inputStyles}
                    options={[
                        {
                            key: 'Food',
                            text: 'Food'
                        },
                        {
                            key: 'Travel',
                            text: 'Travel'
                        }
                    ]}
                />
                <br />
                <Input type='date' style={inputStyles} placeholder='Select a date'  />
                <Button type='button'style={{marginLeft: 10}} icon><Icon name='calendar' /></Button>
                <br />
                <Input style={inputStyles} placeholder="Enter the amount" />
                <br />
                <Button secondary>Add Spending</Button>
            </Grid.Column>
        </Grid>
    )
}

export default AddSpending