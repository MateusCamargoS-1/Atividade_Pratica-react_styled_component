import BannerComponent from "../components/BannerComponent";
import FooterComponent from "../components/FooterComponent";
import SectionsImg from "../components/SectionsImg";
import SectionInfo from "../components/SectionsInfo";
import sectionsItem from "../config/itemSections";

const Home = () => {
  return (
    <>
      <BannerComponent>
        <h1>Minha primeira página com React.</h1>
      </BannerComponent>
      <SectionInfo />
      <div>
        {sectionsItem.map((section, index) => (
          <SectionsImg
            key={index}
            title={section.title}
            description={section.description}
            image={section.image}
            reverse={section.reverse}
          />
        ))}
      </div>
      <BannerComponent>
        <h2>Contato</h2>
      </BannerComponent>
      <FooterComponent />
    </>
  );
};

export default Home;
