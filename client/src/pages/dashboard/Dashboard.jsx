import { useEffect, useContext } from "react";
import TableMatches from "../../components/TableMatches";
import Navbar from "../../components/Navbar";
import { LoadingContext } from "../../contexts/loading-context";
import { useNavigate } from "react-router";
import jwt_decode from "jwt-decode"
import { getMatchesByUser, getAllMatches, getAllPlayers } from "../../services/index.js"
import Swal from "sweetalert2";
import { PlayersContext } from "../../contexts/players-context.jsx";
import { UserContext } from "../../contexts/user-context";
import { MatchesContext } from "../../contexts/matches-context";
import SyncLoader from "react-spinners/SyncLoader";

const Dashboard = () => {
    const token = sessionStorage.getItem('session')
    const navigate = useNavigate()
    const { loading, setLoading } = useContext(LoadingContext)
    const { userData, setUserData } = useContext(UserContext)
    const { matches, setMatches } = useContext(MatchesContext)
    const { setPlayers } = useContext(PlayersContext)


    useEffect(() => {
        const fetchData = async () => {
            if (!token) {
                navigate('/')
                return
            }
            const userData = jwt_decode(token)
            setUserData(userData)
            try {
                setLoading(true);
                const players = await getAllPlayers({ token })
                setPlayers(players)
                if (userData.role === 'PLAYER') {
                    const result = await getMatchesByUser({ email: userData.email, token })
                    setMatches(result.data.wins.concat(result.data.loss))
                    return
                }
                if (userData.role === 'ADMIN' || userData.role === 'CONSULTANT') {
                    const result = await getAllMatches({ token })
                    setMatches(result.data)
                    return
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: `${error.name}`,
                    text: `${error.message}`
                })
            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, 3000)
            }
        }
        fetchData()
    }, [token, setLoading])




    useEffect(() => {
        if (loading) { return }
    }, [matches])

    return (
        <>
            <div className="justify-content-center">
                {userData === null ? <></> : <Navbar userData={userData} />}
                <div className="vh-100 d-flex flex-column align-items-center " style={{ margin: '0', padding: '0', overflow: 'hidden' }}>
                    <div className='col-md-12' style={{ background: '#000' }}>
                        {loading ?
                            <div style={{ margin: "20rem" }} className="">
                                <SyncLoader
                                    color="#36d7b7"
                                    loading={loading}
                                    margin={15}
                                    padding={100}
                                    size={30}
                                    aria-label="Loading Sync"
                                    data-testid="sync"
                                />
                            </div>
                            : <TableMatches />
                        }
                    </div>
                </div >
            </div>
        </>
    );
};

export default Dashboard;