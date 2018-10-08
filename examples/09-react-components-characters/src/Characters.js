import React from "react";
import "./Characters.css";
import HanSoloImage from "./HanSolo.png";
import ReyImage from "./Rey.png";

const characters = {
  1: {
    name: "Han Solo",
    bio:
      "A smuggler who became a leader in the Alliance to Restore the Republic and an instrumental figure in the defeat of the Galactic Empire during the Galactic Civil War.",
    image: HanSoloImage
  },
  2: {
    name: "Rey",
    bio:
      "Rey is a Jakku scavenger, a survivor toughened by life on a harsh desert planet. When the fugitive droid BB-8 appeals to her for help, Rey finds herself drawn into a galaxy-spanning conflict.",
    image: ReyImage
  }
};

function ButtonLink(props) {
  return (
    <a href={props.href} className="button">
      {props.children}
    </a>
  );
}

function RoundedImage(props) {
  const className = props.className ? `${props.className} rounded` : "rounded";
  return <img {...props} className={className} />;
}

function CharacterProfile(props) {
  const isBioLong = props.bio.length > 100;
  const bio = isBioLong ? props.bio.substring(0, 200) + " ..." : props.bio;
  return (
    <div className="CharacterProfile">
      <div className="CharacterProfile-image">
        <RoundedImage src={props.image} alt={props.name} />
      </div>
      <div className="CharacterProfile-text">
        <h2>{props.name}</h2>
        <p>{bio}</p>
        {isBioLong && <ButtonLink href={""}>Read More</ButtonLink>}
      </div>
    </div>
  );
}

function Characters() {
  return (
    <main className="content">
      <h1>Characters</h1>
      <div className="Characters">
        {Object.values(characters).map((character, i) => {
          const key = `character${i}`;
          return (
            <div key={key}>
              <CharacterProfile
                name={character.name}
                image={character.image}
                bio={character.bio}
                width="200"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Characters;
