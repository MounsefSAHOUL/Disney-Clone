import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney"; 
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase"
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSLice";


const Home = () => {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trendings = [];
    
    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot) => {     
            snapshot.docs.map((doc) => {
                switch(doc.data().type) {
                    case 'recommend' : 
                        recommends = [...recommends, { id: doc.id, ...doc.data() } ]
                        break;

                    case 'original': 
                        originals = [...originals, { id: doc.id, ...doc.data() } ]
                        break;

                    case 'trending': 
                        trendings = [...trendings, { id: doc.id, ...doc.data() } ]
                        break;

                    case 'new': 
                    newDisneys = [...newDisneys, { id: doc.id, ...doc.data() } ]
                        break;
                }
            });

            dispatch(setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                original: originals,
                trending: trendings
            }))
        })

    }, [userName])

    return ( 
    <Container>
    
        <ImgSlider />
        <Viewers />
        <Recommends />
        <NewDisney />
        <Originals />
        <Trending />
        
    
    </Container>
    
    );
}

const Container = styled.main`
    position : relative;
    //background : url("/src/images/home-background.png");
    min-height: calc(100vh - 250px);
    overflow-x : hidden;
    display : block;
    top: 72px;
    padding : calc(3.5vw + 5px);
    &:after{
        background: url("/src/images/home-background.png") center no-repeat fixed;
        content: "";
        position: absolute;
        inset : 0px;
        opacity: 1;
        z-index : -1;

    }
    `
 
export default Home;