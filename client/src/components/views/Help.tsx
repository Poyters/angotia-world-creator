import React from 'react';

//Import components
import CreditsFooter from '../partials/CreditsFooter';
import VersionMark from '../partials/VersionMark';
import ComeBack from '../partials/ComeBack';


const Help: React.FC = () => {
  return (
    <article className="help">
      <section className="help__content">
        <ComeBack
          class='t-paragraph2Normal help__content--comeBack'
          url='/creator'
          description='Come back to Creator'
        />
        <h1 className="help__content--title">Help</h1>
        <p>
          Okey! If you are here it means that you chose your map size. You needed to type size in “field” unit. Each field contains a four square units. It’s really good show by the net option. Fields are marked by solid gray line, squares are marked by cropped gray line. You can manipulate the nets view by Net Option <span className="iconWrapper">
            <div 
              className="option option--net"
              data-title="click to change nets mode"
            >
              <span className="option__viewType">3</span>
              <div className="netGraphic option--on">
                <div className="netGraphic__square"></div>
                <div className="netGraphic__square"></div>
                <div className="netGraphic__square"></div>
                <div className="netGraphic__square"></div>
              </div>
            </div> 
          </span> (more info about it at the Creator Panel features). 
        </p>

        <p>
          Another important thing to know about creating maps is a Select Option. You can choose different select type, by field, by square, or by mouse movement. You want to make field/square impossible to move by any chars? Just block it. Use Block Option 
          <span className="iconWrapper iconWrapper--down">
            <div 
              role="button" 
              className="option option--block" 
              data-title="add/delete block squares"
            >
              <div className="g-exitBtn"></div>
            </div>
          </span>. You can unblock by select fields/squares, press ctrl button and then click on Block Option.
        </p>

        <p>
          To set background image, you need to click on <span className="iconWrapper iconWrapper--down"> 
            <input 
              className="option option--addFile" 
            />
            <label className="option--on" data-title="set background image"></label>
          </span> button and choose file from your disc. To delete it, use <span className="iconWrapper iconWrapper--down">
            <div className="option option--deleteBg">
              <div className="g-exitBtn" data-tile="delete background image"></div>
            </div> 
          </span>. 
        </p>

        <p>
          You need to know that important things to build maps are images. You can find them in Files Panel (FS). FS has bookmarks which contains needed images. Remember that bookmarks are a groups of images. Each group is above or below other.
        </p>

        <p>
          You can import your own image by Import Option image here>. Your imported images will be only exists on your Poyters account. If you export complete map to Angotia game and it will be accepted then your images appear for all Map Creators as a base images.
        </p>

        <p>
          Do you want to create different level of difficulty for subsoils? For instance, you want to define sand subsoil and a lane. That cause different character behaviors. More weight of vertex means more difficulties. So proper behavior is set lane's weight at 1, sand at 3, chills at 5 etc.
        </p>

        <p>
          If you know all that stuff you can create maps, yet! Yeah, that’s so easy. Now you can select needed fields/squares and do some actions on them, like - block squares, set images etc. So, enjoy, the new AMC User!
        </p>
      </section>
      <CreditsFooter />
      <VersionMark />
    </article>
  );
};

export default Help;