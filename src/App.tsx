import * as React from "react";
import { Card, Image, Icon, Grid, Button } from 'semantic-ui-react'
import { useState } from 'react'
import "./App.css";
import logo from './logo.png'
import 'semantic-ui-css/semantic.min.css'
import { Searchbox } from './Searchbox'
import { companies } from './companies'

interface Props {
    selectedText: string
}

const App = (props: Props) => {
    const { selectedText } = props
    const [selectedOption, setSelectedOption] = useState('')
    const checkPolicy = () => {
        const randomness = companies.indexOf(selectedOption) % 2
        return randomness === 0 ? true : false
    }
    const havePolicy = checkPolicy()
    const searchParameters = {
        selectedText,
        selectedOption,
        setSelectedOption
    }
    return (
        <div style={{ width: "350px" }}>
            <Card fluid>
                <Card.Content>
                    <Image src={logo} size="small"></Image>
                </Card.Content>
                <Card.Content>
                    <Searchbox {...searchParameters} />
                    {
                        selectedOption === ''
                            ? <div>Bạn hãy chọn một kết quả phù hợp trong cửa sổ tìm kiếm.</div>
                            : <Grid columns='2'>
                                <Grid.Column width='13' verticalAlign='middle'>
                                    {`${havePolicy ? "Có" : "Không có"} chính sách hỗ trợ người khuyết tật`}
                                </Grid.Column>
                                <Grid.Column width='3' textAlig='left'>
                                    {
                                        havePolicy 
                                            ? <Icon name="check circle outline" size="large" color="green" />
                                            : <Icon name="times circle outline" size="large" color="red" />
                                    }
                                </Grid.Column>
                            </Grid>
                    }
                </Card.Content>
                {
                    selectedOption !== "" &&
                    <Card.Content>
                        <Card.Description>
                            <div>
                                <a>
                                    <Icon name='user' />
                                    22 người đã đề xuất chổ làm việc này
                                    </a>
                                <div style={{ paddingBottom: "10px" }}>
                                    Bạn có đề xuất công ty này không?
                                </div>
                                <div className='ui two buttons'>
                                    <Button color='blue' onClick={() => {window.close()}}> Có </Button>
                                    <Button color='red' onClick={() => {window.close()}}> Không </Button>
                                </div>
                            </div>
                        </Card.Description>
                    </Card.Content>
                }
            </Card >
        </div >
    )
};

export default App;
