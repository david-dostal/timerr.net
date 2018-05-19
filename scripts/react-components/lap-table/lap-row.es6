class LapRow extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.number}</td>
                <td>{this.props.lapTime}</td>
                <td>{this.props.totalTime}</td>
                <td className="control-holder"><button onClick={() => this.props.deleteClick(this.props.number)} className="control control-secondary container">❌</button></td>
            </tr>
        );
    }
}