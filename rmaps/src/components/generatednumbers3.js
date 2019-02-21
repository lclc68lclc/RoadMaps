import React, {Component} from 'react';
import prettyBytes from 'pretty-bytes';
import AnimatedNumber from 'react-animated-number';

class Demo3 extends Component {

    static displayName = 'Demo'

    constructor() {
        super();

        this.state = {
            smallValue: 0,
            bigValue: 0,
            updates: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.update(), 5000);
        this.interval = setInterval(() => this.mountUnmount(), 11000);
    }

    update() {
        const {updates} = this.state;

        this.setState({
            bigValue: 24,
            updates: updates + 1
        });
    }

    mountUnmount() {
        const {updates} = this.state;

        this.setState({
            updates: updates + 1
        });
    }

    
    
    render() {
        const {smallValue, bigValue} = this.state;

        return (
                <div>
                    <svg width={280} height={150}>
                        <g transform="translate(50,100)">
                            <AnimatedNumber
                                style={{
                                    transition: '2s ease-out',
                                    fontSize: 48,
                                    transitionProperty:
                                        'background-color, color, opacity'
                                }}
                                frameStyle={perc => (
                                    perc === 100 ? {} : {opacity: 0.25}
                                )}
                                duration={1000}
                                value={bigValue}
                                component="text"
                                formatValue={n => n +" careers"}
                                />
                        </g>
                    </svg>
                </div>
        );
    }
}

export default Demo3;