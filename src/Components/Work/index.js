import React, {Component} from 'react';
import axios from 'axios'
import {Worked,WorkTitle,Span,Part,Icon,PartTitle,Line,PartDesc} from './style.js'

class Work extends Component {

        state = {
            works : []
        }

        componentDidMount () {
            axios.get('js/data.json').then( res => {
                this.setState({works : res.data.works})
            })
        }

render() {

    const {works} = this.state;
    const WorkList = works.map(item => {
        return (
             <Part first = {item.id} key = {item.id}>
                    <Icon className = {item.icon_name}></Icon>
                    <PartTitle>{item.title}</PartTitle>
                    <Line />
                    <PartDesc>
                        {item.body}
                    </PartDesc>
                </Part>
        )
    })

    return (
        <Worked>
            <div className = "container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {WorkList}
            </div>
        </Worked>
    )
    }
}

export default Work