import React from 'react';

//Import components
import CreditsFooter from '../partials/CreditsFooter';
import VersionMark from '../partials/VersionMark';


const Help: React.FC = () => {
  return (
    <article className="help">
      <section className="help__content">
        <h1>Help</h1>
        <p>
          Okey! If you are here it means that you chose your map size. You needed to type size in “field” unit. Each field contains a four square units. It’s really good show by the net option. Fields are marked by solid gray line, squares are marked by cropped gray line. You can manipulate the nets view by Net Option img here> (more info about it at the Creator Panel features).
        </p>

        <p>
        Another important thing to know about creating maps is a Select Option. You can choose different select type, by field, by square, or by mouse movement. You want to make field/square impossible to move by any chars? Just block it. Use Block Option /image here>. You can unblock by select fields/squares, press ctrl button and then click on Block Option.
        </p>

        <p>
          Background you define by add bg image by image here> button. To delete it, use /image here>. 
        </p>

        <p>
          You need to know that important things to build maps are images. You can find them in Files Panel (FS). FS has bookmarks which contains needed images. Remember that bookmarks are a groups of images. Each group is above or below other.
        </p>

        <p>
          You can import your own image by Import Option image here>. Your imported images will be only exists on your Poyters account. If you export complete map to Angotia game and it will be accepted then your images appear for all Map Creators as a base images.
        </p>

        <p>
          If you want to create different level of difficulty for subsoils. For instance, you want to define sand subsoil and a lane. That cause different character behaviors. More weight of vertex means more difficulties.
        </p>

        <p>
          If you know all that stuff you can create maps, yet! Yeah, that’s so easy. Now you can select needed fields/squares and do some actions on them, like - block squares, set images etc. So, enjoy, the new AMC User!
        </p>
        <p>
          If you know all that stuff you can create maps, yet! Yeah, that’s so easy. Now you can select needed fields/squares and do some actions on them, like - block squares, set images etc. 
        </p>
        <p>
          If you know all that stuff you can create maps, yet! Yeah, that’s so easy. Now you can select needed fields/squares and do some actions on them, like - block squares, set images etc. 
        </p>
        <p>
          If you know all that stuff you can create maps, yet! Yeah, that’s so easy. Now you can select needed fields/squares and do some actions on them, like - block squares, set images etc. 
        </p>
        <p>
          If you know all that stuff you can create maps, yet! Yeah, that’s so easy. Now you can select needed fields/squares and do some actions on them, like - block squares, set images etc. 
        </p>
        <p>
          If you know all that stuff you can create maps, yet! Yeah, that’s so easy. Now you can select needed fields/squares and do some actions on them, like - block squares, set images etc. 
        </p>
        <p>
          If you know all that stuff you can create maps, yet! Yeah, that’s so easy. Now you can select needed fields/squares and do some actions on them, like - block squares, set images etc. 
        </p>
      </section>
      <CreditsFooter />
      <VersionMark />
    </article>
  );
};

export default Help;