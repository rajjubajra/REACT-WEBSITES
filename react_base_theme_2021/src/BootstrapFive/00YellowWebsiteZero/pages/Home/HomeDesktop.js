import React from 'react';
import './HomeDesktop.scss';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';
import IntroBrief from './IntroBrief';




export default function HomeDesktop(props) {


  /** colour variant */
  //const variant = useSelector(state => state.reducerSelectColourMode.variant);

  const { fetched, title, logoHorz,
    logoHorzAlt, logoSquare, logoSquareAlt,
    body, links } = props;


  return (
    <div className="container-fluid home-desktop">
      <div className="row">
        <div className="col-lg-5">
          <div style={{
            display: "flex",
            height: "85vh",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <div>

              <IntroBrief
                title={title}
                logoHorz={logoHorz}
                logoHorzAlt={logoHorzAlt}
                body={body} />

            </div>
          </div>

        </div>

        <div className="col-lg-7">
          <div className='right-block'>
            <div></div>
            <div>
              {
                fetched &&
                <Link to={{
                  pathname: `${pagelink.redirect}`,
                  state: {
                    link: `${links[0].uri}`,
                    type: 'external'
                  }
                }}>
                  {links[0].title}
                </Link>
              }
            </div>
            <div>
              <img className="img-fluid" src={logoSquare} alt={logoSquareAlt} />
            </div>
            <div></div>
            <div></div>
            <div>
              {
                fetched &&
                <Link to={{
                  pathname: `${pagelink.redirect}`,
                  state: {
                    link: `${links[1].uri}`,
                    type: 'external'
                  }
                }}>
                  {links[1].title}
                </Link>
              }
            </div>
            <div>
              {
                fetched &&
                <Link to={{ pathname: `${links[2].uri}` }}>
                  {links[2].title}
                </Link>
              }
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>
              {
                fetched &&
                <Link to={{ pathname: `${links[3].uri}` }}>
                  {links[3].title}
                </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}