const winMatches = (matchs, idJugador) => {
    return matchs.reduce((totalWins, match) => {
        return totalWins + (match.id_win === idJugador ? 1 : 0)
    }, 0)
}

export default winMatches;