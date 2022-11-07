import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/menu"

function HomePage() {
    config.playlist

    return (

        <>
            <CSSReset />
            <div style={estilosDaHomePage} >
                <Menu></Menu>
                <Header></Header>
                <TimeLine> playlist = {config.playlist} </TimeLine>
            </div>
        </>
       
    )

}

export default HomePage

var styledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
    return (
        <styledHeader>
            {/*<img src= "banner" />*/}
            <section className="user-info">
                <img src={`https://github.com/${config.foto}.png`} />
                <div>

                    <h2>
                        {config.nome}
                    </h2>
                    <p>
                        {config.cargo}
                    </p>

                </div>

            </section>
        </styledHeader>
    )
}

function TimeLine(props) {
    var playlistName = Object.keys = (props.playlist);
    var videos =    props.playlist[playlistName];
    return (
        <StyledTimeline>
            {playlistName.map((playlistName) => {
                return (
                    <section>
                        <h2>
                            {playlistName}
                        </h2>
                        <div>
                            {videos.map((videos) => {
                                return (
                                    <a href={videos.url}>
                                        <img src={videos.thumb} />
                                        <span>
                                            {videos.titulo}
                                        </span>
                                    </a>
                                )
                            }
                            )}
                        </div>
                    </section>
                )
            }
            )}
        </StyledTimeline>
    )
}