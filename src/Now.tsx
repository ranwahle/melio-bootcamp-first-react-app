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
    render() {
        return (<div>
           Now: 
            {this.props.now.getDate()}
            {this.state.count}
        </div>)

    }
}