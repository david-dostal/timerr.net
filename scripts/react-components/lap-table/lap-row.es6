class LapRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.number}</td>
                <td>{this.props.lapTime}</td>
                <td>{this.props.totalTime}</td>
            </tr>
        );
    }
}