const lossMatches = (matchs, idJugador) => {
    return matchs.reduce((totalWins, match) => {
        return totalWins + (match.id_loss === idJugador ? 1 : 0)
    }, 0)
}

export default lossMatches;