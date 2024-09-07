import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import { Link } from "react-router-dom";

function Single() {
  return (
    <>
      <Navbar />
      <div className="single">
        <div className="content">
          <img src="" alt="" />
          <div className="user">
            <img src="" alt="" />
            <div className="info">
              <span>John</span>
              <p>2 Days ago</p>
            </div>
            <div className="edit">
              <Link to={`/upload?edit=`}>
                <img src={Edit} alt="" />
              </Link>
              <Link>
                <img src={Delete} alt="" />
              </Link>
            </div>
          </div>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            eius enim earum odio. Voluptas, repudiandae.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            ad. Ex asperiores quis fugiat libero quaerat atque obcaecati
            molestias dolorum quas eveniet. Officia ipsum impedit commodi!
            Asperiores ea dolores qui sequi. Earum esse neque cumque, eos ipsa
            blanditiis tempore deserunt est, aut animi recusandae accusamus qui
            ut distinctio eveniet maxime. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Possimus minima asperiores sit culpa. Quas
            perferendis at explicabo laborum tempore doloremque nobis, quia,
            aperiam, a quos dolores vitae necessitatibus ipsa facilis suscipit
            delectus odit molestiae dolore. Repudiandae minima reprehenderit
            fugiat ex repellat dolores tempora aliquam, fuga voluptatum, facere
            placeat non officiis iure aspernatur magni nobis corrupti quisquam
            rem. Hic quibusdam quaerat quasi quis iusto laudantium sunt, ex in
            corrupti officia animi dignissimos autem fugit tempora dicta unde
            quo ullam perspiciatis! Consequatur, soluta ad. Provident officia,
            quaerat alias rem reiciendis maxime cumque quibusdam ullam iste
            nobis, excepturi corrupti dolore fugit. Quaerat magni totam adipisci
            doloremque repellat, nobis consequuntur placeat beatae, odit laborum
            similique eaque est et, voluptatem eum ad eligendi. Labore
            voluptatem reiciendis deserunt neque facilis dolor, tempora illo nam
            corporis laboriosam consequuntur molestiae rem commodi optio ab in
            possimus. Quas officiis architecto sint quae quisquam quidem veniam
            officia eligendi, aut ex, voluptatibus accusantium tenetur?
            Doloribus molestias consequuntur maxime natus unde asperiores iste
            quo, illum, ab culpa voluptatibus, voluptates laboriosam obcaecati
            vero saepe commodi aut ipsum! At repellat reiciendis animi,
            possimus, nulla ipsa necessitatibus ab quo repellendus aut, sed ea
            aliquam ex non rem consectetur. A non dolor autem iusto expedita
            laborum aliquam sunt veritatis praesentium animi modi, numquam
            placeat soluta ut facere sed. Sapiente nobis perferendis quasi
            temporibus accusamus? Quae at fuga fugiat laudantium facilis sequi
            ea. Porro consequatur maiores autem, natus quae nobis ex. Impedit
            eius architecto, reprehenderit esse voluptate consequuntur
            praesentium veritatis quidem ab iusto beatae voluptatem, dicta
            suscipit corporis perspiciatis consectetur mollitia ut qui, fugiat
            necessitatibus vero soluta unde numquam. Beatae distinctio ratione
            nisi accusamus dolore. Quibusdam cumque iste voluptatibus quasi in
            excepturi earum pariatur, ea officia iusto velit praesentium dolore
            qui debitis veniam nesciunt iure soluta recusandae ipsa explicabo.
            Nisi placeat labore eius eveniet neque distinctio natus, nostrum ab
            veritatis iste. Ipsa, sapiente? Voluptas dolor, minus atque dicta
            culpa sunt! Asperiores ratione eius, non magnam dicta cumque beatae
            vel hic expedita iusto, reiciendis quidem deserunt illo voluptatem
            cupiditate, facere eaque optio minima? Quod assumenda in, debitis
            cumque quibusdam quia provident perspiciatis reiciendis pariatur
            ipsum tempora ipsa maxime, quasi sit voluptas est rem. Cum itaque
            quasi repudiandae, asperiores blanditiis doloremque exercitationem
            distinctio natus amet doloribus similique atque temporibus suscipit
            ipsa totam error? Eos voluptatem, numquam nam magnam modi eveniet,
            autem nostrum fugiat, non earum impedit sapiente. Rem veritatis ea
            laboriosam aperiam odit corporis accusantium at asperiores ut vel
            sequi, fugiat sed praesentium consectetur aliquid officia porro sunt
            repudiandae. Aliquid ut a consectetur totam, odio quae voluptates
            assumenda veniam eaque. Numquam fugiat odio, sequi est fugit
            doloribus perferendis incidunt esse ullam sunt quasi amet provident
            ad consequatur accusamus ex cum! Praesentium necessitatibus
            consequuntur sed similique maxime error itaque repellat nostrum eum
            nisi libero, nihil, veritatis magni deleniti ipsa fugit. In soluta
            voluptatibus eius deserunt nihil voluptas repellendus dolor fuga
            facere perspiciatis iste aut saepe deleniti illo distinctio eaque,
            voluptate ea dolore porro. Laborum ex enim odit, rerum dolores
            cumque provident reiciendis architecto accusantium nobis numquam
            voluptates dolor commodi eius.
          </p>
        </div>
        <div className="menu">m</div>
      </div>
      <Footer />
    </>
  );
}

export default Single;
