import { useEffect, useState } from "react"
import api from '../../services/api'

function Home () {

    const [film, setFilm] = useState([])

    useEffect(() => {

        async function loadFilms () {
            const res = await api.get('movie/now_playing', {
                params: {
                    api_key: 'ce7ca7a441765f669c1388967eff6315',
                    language: 'pt-BR',
                    page: 1
                }
            })
            console.log(res)
        }

        loadFilms()
    }, [])

    return (
        <>
        </>
    )
}

export default Home