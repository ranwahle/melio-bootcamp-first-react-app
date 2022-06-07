import React from "react";

export interface NowProps {
    now: Date;
}

interface State {
    count: number;
}

export default class Now extends React.Component<NowProps, State> {
    state: State = {
        count: 0
    };

    addCount() {
        this.setState({...this.state,count: this.state.count+1});
       
    }

    render() {
        const {now} = this.props;
        return (<div>
           Now: 
            {now.getDate()}/{now.getMonth()}/{now.getFullYear()} {now.getHours()}:{now.getMinutes()}
            :{now.getSeconds()}
            
            <button onClick={() => this.addCount()}>+1</button>
            Count: {this.state.count}
        </div>)

    }
}