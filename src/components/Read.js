import axios from 'axios';
import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react'
import { Button  } from 'semantic-ui-react';




export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://6147223165467e0017384a6a.mockapi.io/fakeData`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    const getData = () => {
        axios.get(`https://6147223165467e0017384a6a.mockapi.io/fakeData`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://6147223165467e0017384a6a.mockapi.io/fakeData/${id}`)
        .then(() => {
            getData();
        })
    }   
 return (
        <div>
  <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Registration Date</Table.HeaderCell>
        <Table.HeaderCell>E-mail address</Table.HeaderCell>
        <Table.HeaderCell>update</Table.HeaderCell>
        <Table.HeaderCell>delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {APIData.map((data)=>{
            return(
                <Table.Row>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                <Link to='/update'>
                <Table.Cell> <Button type='submit' onClick={() => setData(data)} >Update</Button></Table.Cell>
                </Link>
                <Table.Cell> <Button type='submit'onClick={()=> onDelete(data.id) } >Delete</Button></Table.Cell>
                </Table.Row>
            )
        })}
      
     
    </Table.Body>
  </Table>




        </div>
    )
}
