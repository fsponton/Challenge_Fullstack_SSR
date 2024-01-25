const TableMatches = ({ data }) => {
    return (
        <div className="overflow-auto" style={{ maxHeight: "500px" }}>
            <table className="table table-hover">
                <thead className="table-dark position-sticky top-0">
                    <tr>
                        <th scope="col"># ID Match</th>
                        <th scope="col">ID Player Win</th>
                        <th scope="col">ID PLayer Loss</th>
                        <th scope="col">Start Date yyyy-mm-dd</th>
                        <th scope="col">End Date yyyy-mm-dd</th>
                        <th scope="col">Count Envidos</th>
                        <th scope="col">Count Flowers</th>
                        <th scope="col">Count Win Envidos</th>
                        <th scope="col">Count Win Flowers</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    {data && data.map((match, index) =>
                        <tr key={index}>
                            <td>{match.id}</td>
                            <td>{match.id_win}</td>
                            <td>{match.id_loss}</td>
                            <td>{match.start_date}</td>
                            <td>{match.end_date}</td>
                            <td>{match.countEnvidos}</td>
                            <td>{match.countFlowers}</td>
                            <td>{match.countWinEnvidos}</td>
                            <td>{match.countWinFlowers}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TableMatches;