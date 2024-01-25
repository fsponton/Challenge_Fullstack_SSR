export default (path) => {

    const originalKeys = {
        register: ["playerWin", "playerLoss", "start_date", "end_date", "countEnvidos", "countWinEnvidos", "countFlowers", "countWinFlowers"],
        bydateanduser: ["startDate", "endDate", "emailUser"],
        bydate: ["startDate", "endDate"]
    }

    return originalKeys[path.slice(1)];
}