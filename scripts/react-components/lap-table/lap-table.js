class LapTable extends React.Component {
    constructor() {
        super();
        this.state = {
            rows: []
        };
    }

    addLap(lapTime, totalTime) {
        this.setState(previousState => ({
            rows: previousState.rows.concat({number: previousState.rows.length + 1, lapTime: lapTime, totalTime: totalTime})
        }));
    }

    clear() {
        this.setState({rows: []});
    }

    render() {
        return (
            <table className="lap-table panel-information">
                <thead hidden={this.state.rows.length === 0}>
                <tr>
                    <th>No.</th>
                    <th>Lap</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody id="lap-table">
                {this.state.rows.map((row) =>
                    <LapRow key={row.number} number={row.number} lapTime={row.lapTime} totalTime={row.totalTime}/>
                )}
                </tbody>
            </table>);
    }
}