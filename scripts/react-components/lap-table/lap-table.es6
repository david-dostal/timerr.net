class LapTable extends React.Component {
    constructor() {
        super();
        this.state = {
            lastNumber: 0,
            rows: []
        };
    }

    addLap(lapTime, totalTime) {
        this.setState(previousState => ({
            lastNumber: previousState.lastNumber + 1,
            rows: previousState.rows.concat({number: previousState.lastNumber + 1, lapTime: lapTime, totalTime: totalTime})
        }));
    }

    clear() {
        this.setState({lastNumber: 0, rows: []});
    }

    handleDeleteClick(rowNumber) {
        this.setState(previousState => ({
            rows: previousState.rows.filter((row) => row.number !== rowNumber)
        }));
    }

    render() {
        return (
            <table className="lap-table panel-information">
                <thead hidden={this.state.rows.length === 0}>
                <tr>
                    <th>No.</th>
                    <th>Lap</th>
                    <th>Total</th>
                    <th></th>
                </tr>
                </thead>
                <tbody id="lap-table">
                {this.state.rows.map((row) =>
                    <LapRow key={row.number} number={row.number} lapTime={row.lapTime} totalTime={row.totalTime} deleteClick={(n) => this.handleDeleteClick(n)}/>
                )}
                </tbody>
            </table>);
    }
}