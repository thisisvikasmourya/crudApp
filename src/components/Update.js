import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useState ,useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Update() {
    let history = useHistory();
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://6147223165467e0017384a6a.mockapi.io/fakeData/${id}`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            history.push('/read')
        })
    }
 
    return (
        <div className="Create">
            <Form>
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' value={checkbox} onChange={(e) => setCheckbox(!checkbox)} />
            </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
              
        </div>
    )
}
