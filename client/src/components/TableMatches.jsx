import { useContext } from "react";
import { PlayersContext } from "../contexts/players-context";
import { MatchesContext } from "../contexts/matches-context";

const TableMatches = () => {
    const { players } = useContext(PlayersContext)
    const { matches } = useContext(MatchesContext)

    return (
        <div className="overflow-auto" style={{ maxHeight: "830px" }}>
            <table className="table table-hover">
                <thead className="table-dark position-sticky top-0">
                    <tr>
                        <th scope="col"> ID Match</th>
                        <th scope="col">ID Player Win</th>
                        <th scope="col">Email Player Win</th>
                        <th scope="col">ID PLayer Loss</th>
                        <th scope="col">Email Player Loss</th>
                        <th scope="col">Start Date yyyy-mm-dd</th>
                        <th scope="col">End Date yyyy-mm-dd</th>
                        <th scope="col">Count Envidos</th>
                        <th scope="col">Count Flowers</th>
                        <th scope="col">Count Win Envidos</th>
                        <th scope="col">Count Win Flowers</th>
                    </tr>
                </thead>
                <tbody id="tbody" >
                    {matches && matches.map((match) => {
                        const playerWin = players.find(player => player.id === match.id_win);
                        const playerLoss = players.find(player => player.id === match.id_loss);
                        return (
                            <tr key={match.id}>
                                <td># {match.id}</td>
                                <td style={{ background: '#77dd77' }}>{match.id_win}</td>
                                <td style={{ background: '#77dd77' }}>{playerWin.email}</td>
                                <td style={{ background: '#ff6961' }}>{match.id_loss}</td>
                                <td style={{ background: '#ff6961' }}>{playerLoss.email}</td>
                                <td>{match.start_date}</td>
                                <td>{match.end_date}</td>
                                <td>{match.countEnvidos}</td>
                                <td>{match.countFlowers}</td>
                                <td>{match.countWinEnvidos}</td>
                                <td>{match.countWinFlowers}</td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TableMatches;