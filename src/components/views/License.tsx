import React from 'react';
import { Link } from 'react-router-dom';
import { CreditsFooter } from 'poyters-components';
import { VersionMark } from '../partials/VersionMark';
import routesConfig from '../../assets/configs/routes.config.json';


export const License: React.FC = () => {
  return (
    <div className="textView">
      <article className="textView__content">
        <nav className="g-sectionNav">
          <div className="g-sectionNav__elem">
            <Link 
              to={`/${routesConfig.mapCreator}`}
              className="t-paragraph2Normal textView__content--comeBack"
            >
              Come back to Creator
            </Link>
          </div>
        </nav>
        <h1 className="g-sectionTitle">License</h1>
        <div className="scrollWrapper">
          <section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac purus 
            augue. Proin ligula nisl, vehicula sed imperdiet in, dapibus vel massa. 
            Aenean nec vehicula purus. Sed ac posuere sem, eu sollicitudin lorem. 
            Phasellus in lectus egestas, varius massa vitae, luctus nisl. Praesent 
            sit amet est enim. Suspendisse hendrerit venenatis dictum. Sed suscipit 
            massa in purus condimentum, in tempor orci commodo. Cras maximus urna eu
            urna aliquet vestibulum. Fusce erat ipsum, iaculis ac tincidunt at, 
            cursus at est. Nullam vel turpis sit amet diam laoreet auctor quis id 
            leo. Curabitur eget lectus at dui tristique suscipit. Fusce neque 
            metus, tempus in venenatis id, interdum quis eros.
          </section>
          <section>
            Fusce volutpat orci magna, eu scelerisque quam semper in. Ut fringilla, 
            purus quis rhoncus euismod, tellus odio convallis mi, et porttitor ante 
            ipsum et ante. Nam ornare sit amet dolor eu pharetra. Phasellus auctor 
            mollis lorem ut feugiat. Nulla finibus tellus ipsum, ut commodo ante 
            sagittis quis. Aenean dapibus ex a lectus eleifend volutpat. Sed bibendum
            nibh at nunc hendrerit, a gravida magna convallis. Nulla nec sodales
            nisi. Vivamus euismod, ex in dapibus pellentesque, nisl urna dignissim 
            enim, sed molestie urna tortor vel dolor. Fusce mattis ex a nisl porta, 
            pharetra iaculis elit vestibulum.
          </section>
          <section>
            Mauris vitae vehicula lorem. Praesent quis euismod libero. Proin semper
            lobortis augue at pellentesque. Maecenas hendrerit porttitor neque eget
            tincidunt. Donec a nisi sed ex lobortis maximus. Pellentesque cursus eu
            lorem in eleifend. Aliquam vel neque consectetur, tincidunt justo ut,
            molestie augue. Nulla et nibh sed dui rhoncus auctor sit amet quis elit. 
            Integer congue sapien erat, vitae facilisis quam rhoncus non. Suspendisse 
            laoreet orci at vestibulum pretium. Cras quis risus at velit volutpat 
            placerat quis eu enim.
          </section>
          <section>
            Vestibulum ac auctor nulla. Donec id libero eget metus pulvinar pretium. 
            Integer vitae hendrerit erat, quis congue ante. Fusce vestibulum ex sit 
            amet imperdiet iaculis. Nullam tempus nec turpis nec tempus. Proin nec ante 
            diam. Nunc egestas porta fringilla. Ut a enim massa. Sed at lorem congue,
            posuere sem euismod, ultricies lorem. Morbi in ullamcorper neque, non 
            pharetra odio.
          </section>
          <section>
            Vestibulum ac auctor nulla. Donec id libero eget metus pulvinar pretium. 
            Integer vitae hendrerit erat, quis congue ante. Fusce vestibulum ex sit 
            amet imperdiet iaculis. Nullam tempus nec turpis nec tempus. Proin nec ante 
            diam. Nunc egestas porta fringilla. Ut a enim massa. Sed at lorem congue,
            posuere sem euismod, ultricies lorem. Morbi in ullamcorper neque, non 
            pharetra odio.
          </section>
          <section>
            Vestibulum ac auctor nulla. Donec id libero eget metus pulvinar pretium. 
            Integer vitae hendrerit erat, quis congue ante. Fusce vestibulum ex sit 
            amet imperdiet iaculis. Nullam tempus nec turpis nec tempus. Proin nec ante 
            diam. Nunc egestas porta fringilla. Ut a enim massa. Sed at lorem congue,
            posuere sem euismod, ultricies lorem. Morbi in ullamcorper neque, non 
            pharetra odio.
          </section>
          <section>
            Vestibulum ac auctor nulla. Donec id libero eget metus pulvinar pretium. 
            Integer vitae hendrerit erat, quis congue ante. Fusce vestibulum ex sit 
            amet imperdiet iaculis. Nullam tempus nec turpis nec tempus. Proin nec ante 
            diam. Nunc egestas porta fringilla. Ut a enim massa. Sed at lorem congue,
            posuere sem euismod, ultricies lorem. Morbi in ullamcorper neque, non 
            pharetra odio.
          </section>
        </div>
      </article>
      <CreditsFooter startedYear={2018} author="Poyters" absolute={true} url="https://poyters.pl" />
      <VersionMark />
    </div>
  );
};