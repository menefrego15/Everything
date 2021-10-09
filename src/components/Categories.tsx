import styled from "styled-components";
import { LinearProgress, withStyles } from "@material-ui/core";

const Card = styled.div`
  width: 220px;
  height: 170px;
  box-shadow: 0px 0px 13px 8px rgba(84, 84, 84, 0.09);
  background-color: ${(props) => props.color};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #ffffff;
  padding: 4px 12px 4px 12px;
  margin-right: 10px;
`;

const CardHeader = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.4px;
  line-height: 1.2;
`;

const CardSubHeader = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: #ffffff94;
  letter-spacing: -0.4px;
  line-height: 1.2;
`;

const TopCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const BottomCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const DotDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 18px;
  justify-content: space-between;
`;

const Dot = styled.div`
  background-color: #ffffff;
  width: 4px;
  height: 4px;
  border-radius: 50%;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const AvatarDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Avatar = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: -10px;
  border: 1px solid white;
`;

const TasksDiv = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: ${(props) => props.color};
    font-weight: 800;
  }
`;

type Props = {
  items: string[];
  name: string;
  color: string;
};

const Champs =
  "Aatrox,Ahri,Akali,Alistar,Amumu,Anivia,Annie,Aphelios,Ashe,Azir,Bard,Blitzcrank,Brand,Braum,Caitlyn,Camille,Cassiopeia,Chogath,Corki,Darius,Diana,Draven,Ekko,Elise,Evelynn,Ezreal,Fiddlesticks,Fiora,Fizz,Galio,Gangplank,Garen,Gnar,Gragas,Graves,Hecarim,Heimerdinger,Illaoi,Irelia,Ivern,Janna,Jax,Jayce,Jhin,Jinx,Kalista,Karma,Karthus,Kassadin,Katarina,Kayle,Kayn,Kennen,Kindred,Kled,Lee Sin,Leona,Lillia,Lissandra,Lucian,Lulu,Lux,Malphite,Malzahar,Maokai,Miss Fortune,Mordekaiser,Morgana,Nami,Nasus,Nautilus,Neeko,Nidalee,Nocturne,Olaf,Orianna,Ornn,Pantheon,Poppy,Pyke,Qiyana,Quinn,Rakan,Rammus,Rell,Renekton,Rengar,Riven,Rumble,Ryze,Samira,Sejuani,Senna,Seraphine,Sett,Shaco,Shen,Shyvana,Singed,Sion,Sivir,Skarner,Sona,Soraka,Swain,Sylas,Syndra,Taliyah,Talon,Taric,Teemo,Thresh,Tristana,Trundle,Tryndamere,Twitch,Udyr,Urgot,Varus,Vayne,Veigar,Vi,Viktor,Vladimir,Volibear,Warwick,Wukong,Xayah,Xerath,Xin Zhao,Yasuo,Yone,Yorick,Yuumi,Zac,Zed,Ziggs,Zilean,Zoe,Zyra";
const ChampsList = Champs.split(",");

const RandomAvatar = () => {
  const random = Math.floor(Math.random() * ChampsList.length);
  const avatarWithoutSpaces = ChampsList[random].replaceAll(" ", "");
  const Avatar = avatarWithoutSpaces.replaceAll("'", "");
  return Avatar;
};

const Categories = ({ items, name, color }: Props) => {
  const barColor = color === "#1f1f1f" ? "#2b2b2b" : "#1f1f1f";

  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 4,
    },
    colorPrimary: {
      backgroundColor: "white",
    },
    bar: {
      borderRadius: 2,
      backgroundColor: barColor,
    },
  }))(LinearProgress);

  const progress = 80;
  return (
    <Card color={color}>
      <TopCard>
        <TextDiv>
          <CardHeader>{name}</CardHeader>
          <CardSubHeader>{items.length} tasks left</CardSubHeader>
        </TextDiv>
        <DotDiv>
          <Dot />
          <Dot />
          <Dot />
        </DotDiv>
      </TopCard>
      <BottomCard>
        <AvatarDiv>
          <Avatar
            src={`http://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/${RandomAvatar()}.png`}
          />
          <Avatar
            src={`http://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/${RandomAvatar()}.png`}
          />
          <Avatar
            src={`http://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/${RandomAvatar()}.png`}
          />
        </AvatarDiv>
        <TasksDiv color={color}>
          <span>{items.length} Task</span>
        </TasksDiv>
      </BottomCard>
      <BorderLinearProgress variant="determinate" value={progress} />
    </Card>
  );
};

export default Categories;
